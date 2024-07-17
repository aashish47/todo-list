import { FormButton } from "@/components/buttons/FormButton";
import Input from "@/components/Input";
import React from "react";

interface FormProps {
    action: any;
    inputDefault: string;
    buttonType: string;
}

const Form: React.FC<FormProps> = ({ action, inputDefault, buttonType }) => {
    return (
        <form
            action={action}
            className="flex flex-col gap-2"
        >
            <Input defaultValue={inputDefault} />
            <FormButton type={buttonType} />
        </form>
    );
};

export default Form;
