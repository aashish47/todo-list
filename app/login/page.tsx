import AuthUi from "@/components/authUi";
import Heading from "@/components/heading";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.getUser();
    if (data?.user) {
        redirect("/home");
    }
    return (
        <>
            <Heading title="sign in" />
            <AuthUi />;
        </>
    );
};

export default Login;
