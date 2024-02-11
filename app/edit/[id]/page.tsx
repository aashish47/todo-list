import Heading from "@/app/components/heading";
import UpdateTodoForm from "@/app/components/updateTodoForm";
import { fetchTodo, fetchTodos } from "@/app/lib/actions";

export async function generateStaticParams() {
    const todos = await fetchTodos();
    return todos.map((todo) => ({
        id: todo.id.toString(),
    }));
}

const Home = async ({ params }: { params: { id: string } }) => {
    const todo = await fetchTodo(Number(params.id));
    return (
        todo && (
            <>
                <Heading title="update todo" />
                <UpdateTodoForm
                    id={todo.id}
                    todo={todo.todo}
                />
            </>
        )
    );
};

export default Home;
