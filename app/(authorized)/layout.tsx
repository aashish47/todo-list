import Alphabets from "@/components/Alphabets";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import { addWord } from "@/lib/actions";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center min-h-screen bg-slate-800">
            <div className="max-w-screen-md p-2 flex flex-col gap-6">
                <Navbar />
                <h1 className="text-center capitalize text-slate-100">vocabulary</h1>
                <Form
                    action={addWord}
                    buttonType="add"
                    inputDefault=""
                    color="btn-teal"
                />
                <Alphabets />
                {children}
            </div>
        </div>
    );
}
