import Heading from "@/components/heading";
import UpdateTodoForm from "@/components/updateTodoForm";
import { fetchTodo } from "@/lib/actions";
import prisma from "@/lib/prisma";

export async function generateStaticParams() {
    const todos = await prisma.todo.findMany();
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
                <UpdateTodoForm {...todo} />
            </>
        )
    );
};

export default Home;
