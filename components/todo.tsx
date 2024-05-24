import { DeleteButton, EditButton } from "@/components/buttons";
import type { Todo } from "@prisma/client";

const Todo = ({ id, todo }: Todo) => {
    return (
        <div className="bg-emerald-500 rounded p-2 text-white flex justify-between my-2">
            {todo}
            <div className="flex gap-2 ">
                <EditButton id={id} />
                <DeleteButton id={id} />
            </div>
        </div>
    );
};

export default Todo;
