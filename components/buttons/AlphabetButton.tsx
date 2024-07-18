"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export const AlphabetButton = ({ alpha }: { alpha: string }) => {
    const params = useParams();
    const color = alpha === params.alpha ? "btn-fuchsia" : "btn-purple";
    return (
        <Link href={`/${alpha}`}>
            <div className={`flex justify-center items-center p-2 h-8 w-8 ${color} rounded font-medium ring hover:transition capitalize`}>{alpha}</div>
        </Link>
    );
};
