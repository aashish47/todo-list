"use server";

import prisma from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createTodo = async (formData: FormData) => {
    const todo = formData.get("todo") as string;
    try {
        await prisma.todo.create({ data: { todo } });
        revalidatePath("/");
    } catch (err: any) {
        throw new Error("Error creating todo", err);
    }
};

export const deleteTodo = async (formData: FormData) => {
    const id = Number(formData.get("id"));
    try {
        if (!id) {
            throw new Error("id invalid");
        }
        await prisma.todo.delete({ where: { id: id } });
        revalidatePath("/");
    } catch (err) {
        throw new Error(`Error deleting todo ${err}`);
    }
};

export const fetchTodos = async () => {
    try {
        return await prisma.todo.findMany();
    } catch (err) {
        throw new Error(`Error fetching todos ${err}`);
    }
};

export const fetchTodo = async (id: number) => {
    try {
        return await prisma.todo.findUnique({ where: { id } });
    } catch (err) {
        console.log(err);
        throw new Error(`Error fetching todo ${err}`);
    }
};

export const updateTodo = async (id: number, formData: FormData) => {
    const todo = formData.get("todo") as string;
    try {
        await prisma.todo.update({ where: { id }, data: { todo } });
        revalidatePath("/");
    } catch (err) {
        throw new Error(`Error updating todo ${err}`);
    }
    redirect("/");
};

export const logout = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { error } = await supabase.auth.signOut();
    if (error) {
        throw new Error(`Error logging out ${error}`);
    } else {
        redirect("/");
    }
};
