"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'



export default function Template({ children }) {
    return (
        <AnimatePresence>
            <ReactLenis root>
                <motion.main
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}


                >
                    {children}
                </motion.main>
            </ReactLenis>

        </AnimatePresence>

    )
}