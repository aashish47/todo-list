import { logout } from "@/lib/actions";

export default function AuthorizedLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <form action={logout}>
                <button className="p-2 text-white bg-violet-500 rounded ">Logout</button>
            </form>

            {children}
        </div>
    );
}
