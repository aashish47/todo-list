import Heading from "@/components/heading";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const Home = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.getUser();
    if (data?.user) {
        redirect("/home");
    }

    return (
        <>
            <Link href={"/login"}>
                <button className="text-white p-2 bg-violet-500 rounded ">Login</button>
            </Link>
            <Heading title="join today" />
        </>
    );
};

export default Home;
