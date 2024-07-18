"use client";
import Confirm from "@/components/Confirm";
import Form from "@/components/Form";
import Modal from "@/components/Modal";
import { deleteTodo, updateTodo } from "@/lib/actions";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const style = "w-6 h-6 hover:scale-125 hover:transition";

export const EditButton = ({ id, todo }: { id: number; todo: string }) => {
    const [open, setOpen] = useState(false);
    const updateTodoWithId = updateTodo.bind(null, id);
    return (
        <>
            <button
                onClick={() => {
                    setOpen(true);
                }}
            >
                <PencilIcon className={style} />
            </button>
            {open && (
                <Modal>
                    <h2 className="text-center text-slate-100 capitalize">update</h2>
                    <div className="h-4" />
                    <Form
                        action={updateTodoWithId}
                        buttonType="update"
                        inputDefault={todo}
                    />
                    <button
                        className="btn-white w-full mt-3"
                        onClick={() => setOpen(false)}
                    >
                        cancel
                    </button>
                </Modal>
            )}
        </>
    );
};

export const DeleteButton = ({ id }: { id: number }) => {
    const [open, setOpen] = useState(false);
    const deleteTodoWithId = deleteTodo.bind(null, id);
    return (
        <>
            <button
                className="align-top"
                onClick={() => {
                    setOpen(true);
                }}
            >
                <TrashIcon className={style} />
            </button>
            {open && (
                <Modal>
                    <Confirm
                        type={"delete"}
                        description={"Are you sure you want to delete word? This action cannot be undone."}
                        action={deleteTodoWithId}
                        setOpen={setOpen}
                    />
                </Modal>
            )}
        </>
    );
};
