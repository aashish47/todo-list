import Alphabets from "@/components/Alphabets";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import { createTodo } from "@/lib/actions";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center min-h-screen bg-slate-800">
            <div className="w-full sm:w-3/4 md:w-2/4 h-full p-2 flex flex-col gap-6">
                <Navbar />
                <h1 className="text-center capitalize text-slate-100">vocabulary</h1>
                <Form
                    action={createTodo}
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
