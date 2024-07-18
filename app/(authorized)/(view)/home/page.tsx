import NoWord from "@/components/NoWord";
import Todos from "@/components/Todos";
import { fetchTodos } from "@/lib/actions";

const Home = async () => {
    const todos = await fetchTodos();
    return todos.length > 0 ? <Todos todos={todos} /> : <NoWord />;
};

export default Home;
