import { logout } from "@/lib/actions";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const style = "p-2 text-slate-100 bg-slate-500 ring ring-slate-600 rounded hover:bg-slate-400 hover:transition  active:bg-slate-600 capitalize";
export const HomeButton = () => {
    return (
        <Link
            href="/home"
            className={style}
        >
            <HomeIcon className="w-6 h-6" />
        </Link>
    );
};

export const LogoutButton = () => {
    return (
        <form
            action={logout}
            className="flex justify-end"
        >
            <button className={style}>logout</button>
        </form>
    );
};
