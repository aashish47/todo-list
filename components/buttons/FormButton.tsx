"use client";

import LoadingButton from "@/components/buttons/LoadingButton";
import { useFormStatus } from "react-dom";

export const FormButton = ({ type, color }: { type: string; color: string }) => {
    const { pending } = useFormStatus();

    return pending ? <LoadingButton type={type} /> : <button className={`w-full ${color}`}>{type}</button>;
};
