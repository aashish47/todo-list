"use client";
import Confirm from "@/components/Confirm";
import Modal from "@/components/Modal";
import { logout } from "@/lib/actions";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export const HomeButton = () => {
    return (
        <Link
            href="/home"
            className="btn-gray"
        >
            <HomeIcon className="w-6 h-6" />
        </Link>
    );
};

export const LogoutButton = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                className="btn-gray"
                onClick={() => setOpen(true)}
            >
                logout
            </button>
            {open && (
                <Modal>
                    <Confirm
                        type="logout"
                        description="You can always log back in at any time."
                        action={logout}
                        setOpen={setOpen}
                    />
                </Modal>
            )}
        </>
    );
};
