import AddTodoForm from "@/components/addTodoForm";
import Heading from "@/components/heading";
import Todo from "@/components/todo";
import { fetchTodos } from "@/lib/actions";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Home = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/");
    }
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
