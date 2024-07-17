import { DeleteButton, EditButton } from "@/components/buttons/todoActions";
import type { Todo } from "@prisma/client";

const Todo = ({ id, todo }: Todo) => {
    return (
        <div className="bg-cyan-500 ring ring-cyan-600 rounded p-2 text-cyan-100 flex justify-between mb-3">
            {todo}
            <div className="flex gap-2 ">
                <EditButton id={id} />
                <DeleteButton id={id} />
            </div>
        </div>
    );
};

export default Todo;
