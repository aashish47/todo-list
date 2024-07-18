import Heading from "@/components/Heading";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-6">
            <Heading title="update word" />
            {children}
        </div>
    );
};

export default Layout;
