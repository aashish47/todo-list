"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTodo = async (formData: FormData) => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    if (!userId) {
        throw new Error("No UserId");
    }
    try {
        const todo = (formData.get("todo") as string).trim().toLowerCase();
        await prisma.todo.create({ data: { todo, userId } });
        revalidatePath("/");
    } catch (err: any) {
        throw new Error(`Error creating todo ${err}`);
    }
};

export const deleteTodo = async (formData: FormData) => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    if (!userId) {
        throw new Error("No UserId");
    }
    try {
        const id = Number(formData.get("id"));
        if (!id) {
            throw new Error("id invalid");
        }
        await prisma.todo.delete({ where: { id, userId } });
        revalidatePath("/");
    } catch (err) {
        throw new Error(`Error deleting todo ${err}`);
    }
};

export const fetchTodos = async () => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    if (!userId) {
        throw new Error("No UserId");
    }
    try {
        return await prisma.todo.findMany({ orderBy: { todo: "asc" } });
    } catch (err) {
        throw new Error(`Error fetching todos ${err}`);
    }
};

export const fetchTodosByAlpha = async (alpha: string) => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    if (!userId) {
        throw new Error("No UserId");
    }
    try {
        return await prisma.todo.findMany({ orderBy: { todo: "asc" }, where: { todo: { startsWith: alpha.toLowerCase() } } });
    } catch (err) {
        throw new Error(`Error fetching todos ${err}`);
    }
};

export const fetchTodo = async (id: number) => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    if (!userId) {
        throw new Error("No UserId");
    }
    try {
        return await prisma.todo.findUnique({ where: { id, userId } });
    } catch (err) {
        console.log(err);
        throw new Error(`Error fetching todo ${err}`);
    }
};

export const updateTodo = async (id: number, formData: FormData) => {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    if (!userId) {
        throw new Error("No UserId");
    }
    try {
        const todo = formData.get("todo") as string;
        await prisma.todo.update({ where: { id, userId }, data: { todo } });
        revalidatePath("/");
    } catch (err) {
        throw new Error(`Error updating todo ${err}`);
    }
    redirect("/");
};

export const logout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw new Error(`Error logging out ${error}`);
    } else {
        redirect("/");
    }
};
