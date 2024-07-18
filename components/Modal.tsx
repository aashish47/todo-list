import React from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-800 bg-opacity-75">
            <div className="bg-slate-900 ring-2 ring-slate-700 p-4 rounded w-96">{children}</div>
        </div>
    );
};

export default Modal;
