import { Dispatch, SetStateAction } from "react";

interface ConfirmProps {
    type: string;
    description: string;
    action: any;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const Confirm: React.FC<ConfirmProps> = ({ type, description, action, setOpen }) => {
    return (
        <div className="text-slate-100 text-center">
            <p className="text-lg font-medium capitalize ">{type}?</p>
            <p className="font-extralight">{description}</p>
            <div className="flex flex-col items-stretch gap-3 mt-4">
                <form action={action}>
                    <button className="btn-rose w-full">{type}</button>
                </form>
                <button
                    className="btn-white"
                    onClick={() => setOpen(false)}
                >
                    cancel
                </button>
            </div>
        </div>
    );
};

export default Confirm;
