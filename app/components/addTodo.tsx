const AddTodo = () => {
    return (
        <form className="flex flex-col gap-2">
            <input
                type="text"
                className="focus:outline focus:outline-2 focus:outline-pink-500 h-12 w-full rounded p-2"
            />
            <button className="w-full p-2 bg-pink-500 rounded font-medium text-slate-200 hover:text-white  active:bg-pink-600">Add Todo</button>
        </form>
    );
};

export default AddTodo;
