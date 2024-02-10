import Todo from "@/components/todo";
import { data } from "@/data/data";

const TodoList = () => {
    return data.map((todo) => (
        <Todo
            key={todo.id}
            {...todo}
        />
    ));
};

export default TodoList;
