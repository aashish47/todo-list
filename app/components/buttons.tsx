import { deleteTodo } from "@/app/lib/actions";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const EditButton = ({ id }: { id: number }) => {
    return (
        <Link href={`/edit/${id}`}>
            <PencilIcon className="w-6 h-6 hover:scale-125 hover:transition" />
        </Link>
    );
};

export const DeleteButton = ({ id }: { id: number }) => {
    return (
        <form action={deleteTodo}>
            <input
                type="hidden"
                name="id"
                value={id}
            />
            <button className="align-top ">
                <TrashIcon className="w-6 h-6 hover:scale-125 hover:transition" />
            </button>
        </form>
    );
};
