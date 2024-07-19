import { DeleteButton, EditButton } from "@/components/buttons/todoActions";
import type { Todo } from "@prisma/client";

const Todo = ({ id, todo }: Todo) => {
    return (
        <div className="bar-cyan flex justify-between mb-3">
            {todo}
            <div className="flex gap-2 ">
                <EditButton
                    id={id}
                    todo={todo}
                />
                <DeleteButton
                    id={id}
                    todo={todo}
                />
            </div>
        </div>
    );
};

export default Todo;
