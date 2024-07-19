"use client";

import { useFormStatus } from "react-dom";

export const FormButton = ({ type, color }: { type: string; color: string }) => {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            className={`w-full ${pending ? "btn-disabled" : color}`}
        >
            {type}
        </button>
    );
};
