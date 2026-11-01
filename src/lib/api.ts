export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
}

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed";
  priority: "low" | "medium" | "high";
  due_date: string | null;
  created_at: string;
  updated_at: string;
}

interface RawTask {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  status: Task["status"];
  priority: Task["priority"];
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
}

function normalizeTask(raw: RawTask): Task {
  return {
    id: raw.id,
    userId: raw.userId,
    title: raw.title,
    description: raw.description ?? "",
    status: raw.status,
    priority: raw.priority,
    due_date: raw.dueDate,
    created_at: raw.createdAt,
    updated_at: raw.updatedAt,
  };
}

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as { error?: string }).error || "Erro inesperado");
  }
  return data as T;
}

export const api = {
  async me(): Promise<AuthUser | null> {
    try {
      const { user } = await request<{ user: AuthUser }>("/api/auth?action=me");
      return user;
    } catch {
      return null;
    }
  },

  async login(email: string, password: string): Promise<AuthUser> {
    const { user } = await request<{ user: AuthUser }>("/api/auth?action=login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    return user;
  },

  async register(email: string, password: string, fullName: string): Promise<AuthUser> {
    const { user } = await request<{ user: AuthUser }>("/api/auth?action=register", {
      method: "POST",
      body: JSON.stringify({ email, password, fullName }),
    });
    return user;
  },

  async logout(): Promise<void> {
    await request("/api/auth?action=logout", { method: "POST" });
  },

  async listTasks(): Promise<Task[]> {
    const { tasks } = await request<{ tasks: RawTask[] }>("/api/tasks");
    return tasks.map(normalizeTask);
  },

  async createTask(input: {
    title: string;
    description?: string;
    status: string;
    priority: string;
    due_date?: string;
  }): Promise<Task> {
    const { task } = await request<{ task: RawTask }>("/api/tasks", {
      method: "POST",
      body: JSON.stringify(input),
    });
    return normalizeTask(task);
  },

  async updateTask(id: string, input: Partial<{ title: string; description: string; status: string; priority: string; due_date: string }>): Promise<Task> {
    const { task } = await request<{ task: RawTask }>(`/api/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(input),
    });
    return normalizeTask(task);
  },

  async deleteTask(id: string): Promise<void> {
    await request(`/api/tasks/${id}`, { method: "DELETE" });
  },
};
