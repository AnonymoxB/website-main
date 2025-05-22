'use client'
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";

function Layout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        Aos.init();
    }, []);



    return (
        <main className='w-screen min-h-scree'>
            <div className='container mx-auto'>{children}</div>
        </main>
    )
}

export default Layout