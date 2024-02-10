import { DeleteButton, EditButton } from "@/components/buttons";
import { Todos } from "@/data/data";

const Todo = ({ id, todo }: Todos) => {
    return (
        <div className="bg-emerald-500 rounded p-2 text-white flex justify-between">
            {todo}
            <div>
                <EditButton />
                <DeleteButton />
            </div>
        </div>
    );
};

export default Todo;
