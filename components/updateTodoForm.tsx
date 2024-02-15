import { updateTodo } from "@/lib/actions";
import { Todo } from "@prisma/client";

const UpdateTodoForm = ({ id, todo }: Todo) => {
    const updateTodoWithId = updateTodo.bind(null, id);
    return (
        <form
            action={updateTodoWithId}
            className="flex flex-col gap-2"
        >
            <input
                required
                defaultValue={todo}
                type="text"
                name="todo"
                className="focus:outline focus:outline-2 focus:outline-pink-500 h-12 w-full rounded p-2"
            />
            <button className="w-full p-2 bg-pink-500 rounded font-medium text-white hover:bg-pink-400 hover:transition  active:bg-pink-600">
                Update Todo
            </button>
        </form>
    );
};

export default UpdateTodoForm;
