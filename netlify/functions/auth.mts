import type { Config } from "@netlify/functions";
import { eq } from "drizzle-orm";
import { db } from "../../db/index.js";
import { users } from "../../db/schema.js";
import {
  clearSessionCookie,
  createSession,
  destroySession,
  getUserFromRequest,
  hashPassword,
  json,
  parseBody,
  sessionCookie,
  verifyPassword,
} from "./_lib/auth.mjs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async (req: Request) => {
  const url = new URL(req.url);
  const action = url.searchParams.get("action") ?? "";

  if (req.method === "GET" && action === "me") {
    const user = await getUserFromRequest(req);
    if (!user) return json({ user: null }, 401);
    return json({ user });
  }

  if (req.method === "POST" && action === "register") {
    const body = parseBody<{ email?: string; password?: string; fullName?: string }>(await req.json().catch(() => null));
    const email = body?.email?.trim().toLowerCase() ?? "";
    const password = body?.password ?? "";
    const fullName = body?.fullName?.trim() ?? "";

    if (!EMAIL_RE.test(email)) return json({ error: "Email inválido" }, 400);
    if (password.length < 8) return json({ error: "Senha deve ter pelo menos 8 caracteres" }, 400);
    if (fullName.length < 2) return json({ error: "Nome deve ter pelo menos 2 caracteres" }, 400);

    const existing = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (existing.length > 0) return json({ error: "Este email já está cadastrado" }, 400);

    const [user] = await db
      .insert(users)
      .values({ email, passwordHash: hashPassword(password), fullName })
      .returning();
    const { token, expires } = await createSession(user.id);
    return json(
      { user: { id: user.id, email: user.email, fullName: user.fullName } },
      201,
      { "Set-Cookie": sessionCookie(token, expires) },
    );
  }

  if (req.method === "POST" && action === "login") {
    const body = parseBody<{ email?: string; password?: string }>(await req.json().catch(() => null));
    const email = body?.email?.trim().toLowerCase() ?? "";
    const password = body?.password ?? "";

    if (!EMAIL_RE.test(email) || !password) return json({ error: "Email ou senha inválidos" }, 400);

    const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!user || !verifyPassword(password, user.passwordHash)) {
      return json({ error: "Email ou senha inválidos" }, 401);
    }
    const { token, expires } = await createSession(user.id);
    return json(
      { user: { id: user.id, email: user.email, fullName: user.fullName } },
      200,
      { "Set-Cookie": sessionCookie(token, expires) },
    );
  }

  if (req.method === "POST" && action === "logout") {
    await destroySession(req);
    return json({ ok: true }, 200, { "Set-Cookie": clearSessionCookie() });
  }

  return json({ error: "Rota não encontrada" }, 404);
};

export const config: Config = {
  path: "/api/auth",
};
