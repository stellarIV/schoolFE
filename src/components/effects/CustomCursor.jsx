import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const cursorSize = 150; // Define the cursor size
    const mouseX = useMotionValue(-cursorSize); // Initial off-screen position
    const mouseY = useMotionValue(-cursorSize);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX - cursorSize / 2);
            mouseY.set(e.clientY - cursorSize / 2);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                x: mouseX,
                y: mouseY,
            }}
            className="fixed hidden sm:flex cursor-pointer top-0 left-0 w-[150px] h-[150px] rounded-full dark:bg-[#8e00fa] bg-[#7700ff]  pointer-events-none  z-[9999] mix-blend-difference"
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
            }}
        />
    );
};

export default CustomCursor;
