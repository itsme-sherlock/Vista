'use client';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
    const navRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const rect = navRef.current.getBoundingClientRect();
                // Check if the navbar has reached the top
                if (rect.top <= 0) {
                    console.log("NavBar reached the top of the viewport!");
                    setIsAtTop(true);
                } else {
                    console.log("NavBar is not at the top of the viewport.");
                    setIsAtTop(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className="sticky top-0 left-0 right-0 z-50 bg-[#0a0a0a] bg-opacity-95"
        >
            <div className="flex justify-between items-center px-20 py-5">
                {/* Animated "Vista Properties" text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}  // Start hidden and below
                    animate={isAtTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Fade in and move up when navbar is at the top
                    transition={{ duration: 0.5 }}
                    className="font-bruno text-2xl"
                >
                    Vista Properties
                </motion.div>

                {/* Animated "Menu" button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}  // Start hidden and below
                    animate={isAtTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Fade in and move up when navbar is at the top
                    transition={{ duration: 0.5 }}
                    className="font-bruno text-2xl"
                >
                    Menu
                </motion.button>
            </div>
        </nav>
    );
};

export default NavBar;
