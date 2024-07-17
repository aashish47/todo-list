import NoWord from "@/components/NoWord";
import Todos from "@/components/Todos";
import { fetchTodosByAlpha } from "@/lib/actions";
import alphabets from "@/utils/alphabets";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

export async function generateStaticParams() {
    return alphabets.map((alpha) => ({
        alpha,
    }));
}

const Home = async ({ params }: { params: { alpha: string } }) => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/");
    }
    const alpha = params.alpha;
    const regex = /^[a-zA-Z]$/;
    if (!regex.test(alpha)) {
        notFound();
    }
    const todos = await fetchTodosByAlpha(alpha);

    return todos.length > 0 ? <Todos todos={todos} /> : <NoWord />;
};

export default Home;
