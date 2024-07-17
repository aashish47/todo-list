import Alphabets from "@/components/Alphabets";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import { createTodo } from "@/lib/actions";

export default function AuthorizedLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-6">
            <Heading title="vocabulary" />
            <Form
                action={createTodo}
                buttonType="add"
                inputDefault=""
            />
            <Alphabets />
            {children}
        </div>
    );
}
