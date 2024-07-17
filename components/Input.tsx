const Input = ({ defaultValue }: { defaultValue: string }) => {
    return (
        <input
            required
            defaultValue={defaultValue}
            placeholder="Word..."
            type="text"
            name="todo"
            className="focus:outline focus:outline-2 focus:outline-teal-600 h-12 w-full rounded p-2 caret-teal-400"
        />
    );
};

export default Input;
