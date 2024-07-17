"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export const AlphabetButton = ({ alpha }: { alpha: string }) => {
    const params = useParams();
    const color =
        alpha === params.alpha
            ? "ring-pink-600 bg-pink-500 text-pink-100 hover:bg-pink-400 active:bg-pink-600"
            : "ring-fuchsia-600 bg-fuchsia-500 text-fuchsia-100 hover:bg-fuchsia-400 active:bg-fuchsia-600";
    return (
        <Link href={`/${alpha}`}>
            <div className={`flex justify-center items-center p-2 h-8 w-8 ${color} rounded font-medium ring hover:transition capitalize`}>{alpha}</div>
        </Link>
    );
};
