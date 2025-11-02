import type { Metadata } from "next";
import { plusJakarta } from "./fonts/PlusJakarta";
import { zodiac } from "./fonts/Zodiac";
import ScrollProvider from "@/lib/scroll/ScrollProvider";
import Cursor from "@/components/shared/Cursor";
import "./globals.css";

export const metadata: Metadata = {
    title: "Nail Abdullin",
    description: "Portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${zodiac.variable} ${plusJakarta.variable} antialiased`}
            >
                <ScrollProvider>
                    <Cursor />
                    {children}
                </ScrollProvider>
            </body>
        </html>
    );
}
