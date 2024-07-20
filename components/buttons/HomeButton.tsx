import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const HomeButton = () => {
    return (
        <Link
            href="/home"
            prefetch={false}
            className="btn-gray"
        >
            <HomeIcon className="w-6 h-6" />
        </Link>
    );
};

export default HomeButton;
