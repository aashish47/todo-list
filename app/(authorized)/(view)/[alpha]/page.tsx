import NoWord from "@/components/NoWord";
import Todos from "@/components/Todos";
import { fetchTodosByAlpha } from "@/lib/actions";
import alphabets from "@/utils/alphabets";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return alphabets.map((alpha) => ({
        alpha,
    }));
}

const Home = async ({ params }: { params: { alpha: string } }) => {
    const alpha = params.alpha;
    const regex = /^[a-zA-Z]$/;
    if (!regex.test(alpha)) {
        notFound();
    }
    const todos = await fetchTodosByAlpha(alpha);

    return todos.length > 0 ? <Todos todos={todos} /> : <NoWord />;
};

export default Home;
