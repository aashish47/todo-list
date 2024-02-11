import AddTodoForm from "@/app/components/addTodoForm";
import Heading from "@/app/components/heading";
import Todo from "@/app/components/todo";
import { fetchTodos } from "@/app/lib/actions";

const Home = async () => {
    const todos = await fetchTodos();

    return (
        <>
            <Heading title="todo list" />
            <AddTodoForm />
            <div className="h-4" />
            {todos && (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <Todo {...todo} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Home;
