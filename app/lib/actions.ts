"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
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
    } catch (err: any) {
        throw new Error("Error deleting todo", err);
    }
};

export const fetchTodos = async () => {
    try {
        return await prisma.todo.findMany();
    } catch (err: any) {
        throw new Error("Error fetching todos", err);
    }
};

export const fetchTodo = async (id: number) => {
    try {
        return await prisma.todo.findUnique({ where: { id } });
    } catch (err: any) {
        console.log(err);
        throw new Error("Error fetching todo", err);
    }
};

export const updateTodo = async (id: number, formData: FormData) => {
    const todo = formData.get("todo") as string;
    try {
        await prisma.todo.update({ where: { id }, data: { todo } });
        revalidatePath("/");
    } catch (err: any) {
        throw new Error("Error updating todo", err);
    }
    redirect("/");
};
