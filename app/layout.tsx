import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Todo List",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex justify-center">
                    <div className="w-full sm:w-3/4 md:w-2/4 h-full p-2 flex flex-col gap-2 ">{children}</div>
                </div>
            </body>
        </html>
    );
}
