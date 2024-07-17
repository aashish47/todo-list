import NoWord from "@/components/NoWord";
import Todos from "@/components/Todos";
import { fetchTodos } from "@/lib/actions";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { todo } from "node:test";

const Home = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/");
    }
    const todos = await fetchTodos();

    return todo.length > 0 ? <Todos todos={todos} /> : <NoWord />;
};

export default Home;
