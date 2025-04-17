import React from "react";
import Navbar from "../components/Navbar";
import CursorGlow from "../components/CursorGlow";
import AnimatedBackground from "../components/AnimatedBackground";
import ChatWidget from "../components/ChatWidget";

const MainLayout = ({ children }) => {
    return (
        <div className=" text-white font-sans relative overflow-x-hidden">
            {/* Animated stars + purple blobs + wave */}
            <AnimatedBackground />
            <ChatWidget />

            {/* Cursor effects */}
            <CursorGlow />

            {/* Main layout container */}
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row px-6 md:px-12 lg:px-20 py-16 gap-16 relative z-10">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/3 xl:w-1/4">
                    <Navbar />
                </aside>

                {/* Main content */}
                {/* <main className="w-full lg:w-2/3 xl:w-3/4 space-y-12 pt-4"> */}
                <main
                    id="main-scroll"
                    className="w-full lg:w-2/3 xl:w-3/4 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth pt-0"
                >
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
