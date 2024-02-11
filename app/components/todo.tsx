import { DeleteButton, EditButton } from "@/app/components/buttons";
import { Todo } from "@prisma/client";

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
