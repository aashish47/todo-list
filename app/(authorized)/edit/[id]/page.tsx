import Form from "@/components/Form";
import { fetchTodo, updateTodo } from "@/lib/actions";
import prisma from "@/lib/prisma";

export async function generateStaticParams() {
    const todos = await prisma.todo.findMany();
    return todos.map((todo) => ({
        id: todo.id.toString(),
    }));
}

const Home = async ({ params }: { params: { id: string } }) => {
    const id = Number(params.id);
    const todo = await fetchTodo(id);
    const updateTodoWithId = updateTodo.bind(null, id);
    return (
        todo && (
            <Form
                action={updateTodoWithId}
                buttonType="update"
                inputDefault={todo.todo}
            />
        )
    );
};

export default Home;
