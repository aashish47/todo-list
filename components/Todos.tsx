import TodoComp from "@/components/Todo";
import { Todo } from "@prisma/client";

const Todos = ({ todos }: { todos: Todo[] }) => {
    return (
        todos && (
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoComp {...todo} />
                    </li>
                ))}
            </ul>
        )
    );
};

export default Todos;
