import { HomeButton, LogoutButton } from "@/components/buttons/navbarButtons";

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <HomeButton />
            <LogoutButton />
        </div>
    );
};

export default Navbar;
