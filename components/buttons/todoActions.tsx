import { deleteTodo } from "@/lib/actions";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const style = "w-6 h-6 hover:scale-125 hover:transition";

export const EditButton = ({ id }: { id: number }) => {
    return (
        <Link href={`/edit/${id}`}>
            <PencilIcon className={style} />
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
                <TrashIcon className={style} />
            </button>
        </form>
    );
};
