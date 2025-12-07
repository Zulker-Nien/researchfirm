"use client"
import { Loader2 } from "lucide-react";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={` antialiased`}
        >
            <Suspense
                fallback={
                    <div className="min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center">
                        <Loader2 className="animate-spin" />
                    </div>
                }
            >
                <SessionProvider>
                    {children}
                </SessionProvider>
            </Suspense>
        </div>
    );
}
