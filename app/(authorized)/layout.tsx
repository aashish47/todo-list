import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center min-h-screen bg-slate-800">
            <div className="w-full sm:w-3/4 md:w-2/4 h-full p-2 flex flex-col gap-2 ">
                <Navbar />
                <div className="h-6" />
                {children}
            </div>
        </div>
    );
}
