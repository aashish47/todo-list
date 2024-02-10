import AddTodo from "@/components/addTodo";
import Heading from "@/components/heading";
import TodoList from "@/components/todoList";

const Home = () => {
    return (
        <div className="min-h-screen flex justify-center">
            <div className="w-full sm:w-3/4 md:w-2/4 h-full p-2 flex flex-col gap-2">
                <Heading title="todo list" />
                <AddTodo />
                <div className="h-4" />
                <TodoList />
            </div>
        </div>
    );
};

export default Home;
