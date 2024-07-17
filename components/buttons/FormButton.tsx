export const FormButton = ({ type }: { type: string }) => {
    return (
        <button className="w-full p-2 rounded font-medium ring ring-teal-600 bg-teal-500 text-teal-100 hover:bg-teal-400 hover:transition active:bg-teal-600 capitalize">
            {type}
        </button>
    );
};
