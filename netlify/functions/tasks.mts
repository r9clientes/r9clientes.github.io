import type { Config, Context } from "@netlify/functions";
import { and, desc, eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { tasks } from "../../db/schema.js";
import { getUserFromRequest, json, parseBody } from "./_lib/auth.mjs";

const STATUSES = ["pending", "in_progress", "completed"];
const PRIORITIES = ["low", "medium", "high"];

interface TaskInput {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  due_date?: string;
}

function validate(input: TaskInput, partial: boolean): string | null {
  if (!partial || input.title !== undefined) {
    const len = input.title?.trim().length ?? 0;
    if (len === 0) return "Título é obrigatório";
    if (len > 100) return "Título muito longo";
  }
  if (input.description !== undefined && (input.description?.length ?? 0) > 500) {
    return "Descrição muito longa";
  }
  if (input.status !== undefined && !STATUSES.includes(input.status)) return "Status inválido";
  if (input.priority !== undefined && !PRIORITIES.includes(input.priority)) return "Prioridade inválida";
  return null;
}

function toRow(input: TaskInput) {
  const row: Record<string, unknown> = {};
  if (input.title !== undefined) row.title = input.title.trim();
  if (input.description !== undefined) row.description = input.description ?? "";
  if (input.status !== undefined) row.status = input.status;
  if (input.priority !== undefined) row.priority = input.priority;
  if (input.due_date !== undefined) row.dueDate = input.due_date === "" ? null : input.due_date;
  row.updatedAt = new Date();
  return row;
}

export default async (req: Request, context: Context) => {
  const user = await getUserFromRequest(req);
  if (!user) return json({ error: "Não autenticado" }, 401);

  const id = context.params?.id as string | undefined;

  if (req.method === "GET" && !id) {
    const rows = await db
      .select()
      .from(tasks)
      .where(eq(tasks.userId, user.id))
      .orderBy(desc(tasks.createdAt));
    return json({ tasks: rows });
  }

  if (req.method === "POST" && !id) {
    const body = parseBody<TaskInput>(await req.json().catch(() => null));
    if (!body) return json({ error: "Dados inválidos" }, 400);
    const error = validate(body, false);
    if (error) return json({ error }, 400);
    const [task] = await db
      .insert(tasks)
      .values({
        userId: user.id,
        title: body.title!.trim(),
        description: body.description ?? "",
        status: body.status ?? "pending",
        priority: body.priority ?? "medium",
        dueDate: body.due_date === "" || body.due_date === undefined ? null : body.due_date,
      })
      .returning();
    return json({ task }, 201);
  }

  if ((req.method === "PATCH" || req.method === "PUT") && id) {
    const body = parseBody<TaskInput>(await req.json().catch(() => null));
    if (!body) return json({ error: "Dados inválidos" }, 400);
    const error = validate(body, true);
    if (error) return json({ error }, 400);
    const [task] = await db
      .update(tasks)
      .set(toRow(body))
      .where(and(eq(tasks.id, id), eq(tasks.userId, user.id)))
      .returning();
    if (!task) return json({ error: "Tarefa não encontrada" }, 404);
    return json({ task });
  }

  if (req.method === "DELETE" && id) {
    const deleted = await db
      .delete(tasks)
      .where(and(eq(tasks.id, id), eq(tasks.userId, user.id)))
      .returning({ id: tasks.id });
    if (deleted.length === 0) return json({ error: "Tarefa não encontrada" }, 404);
    return json({ ok: true });
  }

  return json({ error: "Rota não encontrada" }, 404);
};

export const config: Config = {
  path: ["/api/tasks", "/api/tasks/:id"],
};
