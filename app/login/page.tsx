import AuthUi from "@/components/AuthUi";

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-neutral-900">
            <div className="w-full max-w-screen-md p-2 flex flex-col gap-2 ">
                <h1 className="text-center text-neutral-200 capitalize">sign in</h1>
                <AuthUi />;
            </div>
        </div>
    );
};

export default Home;
