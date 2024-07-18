import AuthUi from "@/components/AuthUi";
import Heading from "@/components/Heading";

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-900">
            <div className="w-full sm:w-3/4 md:w-2/4 h-full p-2 flex flex-col gap-2 ">
                <Heading title="sign in" />
                <AuthUi />;
            </div>
        </div>
    );
};

export default Home;
