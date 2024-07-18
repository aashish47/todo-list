import AuthUi from "@/components/AuthUi";

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-900">
            <div className="w-full sm:w-3/4 md:w-2/4 h-full p-2 flex flex-col gap-2 ">
                <h1 className="text-center text-neutral-200 capitalize">sign in</h1>
                <AuthUi />;
            </div>
        </div>
    );
};

export default Home;
