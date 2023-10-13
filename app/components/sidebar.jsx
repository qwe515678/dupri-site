"use client";

import React from "react";
import { AnimatePresence, delay, motion, useCycle } from "framer-motion";
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
const links = [
    { name: "Home", id: 1 },
    { name: "About", id: 2 },
    { name: "Products", id: 3 },
    { name: "Prices", id: 4 },
    { name: "Contact", id: 5 },
];

const itemVariants = {
    closed: {
        opacity: 0,
    },
    open: { opacity: 1 },
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
        },
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1,
        },
    },
};

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

export default function Sidebar() {
    const [open, cycleOpen] = useCycle(false, true);

    return (
        <main className="">
            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{
                            width: 300,
                            transition: {
                                delay: 0.1,
                                type:'spring'
                            }
                        }}
                        exit={{
                            width: 0,
                            transition: { delay: 0.2, duration: 0.3, ease: 'easeInOut' },
                        }}
                        className=" bg-[#171717] h-screen absolute right-0 top-0 bottom-0 border border-[#303030] z-20"
                    >
                        <button onClick={cycleOpen} className=" btn btn-square m-3 bg-transparent border-2"><ImCross /></button>
                        <motion.div
                            className="mx-[1.4rem] my-[4.5rem]"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            {links.map(({ name, id }) => (
                                <motion.a
                                    key={id}
                                    href={name != 'Home' ? `/${name.toLocaleLowerCase()}` : '/'}
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}

                                    className=" text-white no-underline text-[1.75rem] font-semibold block m-5 hover:text-purple-500 transition-colors duration-300"
                                >
                                    {name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
            <div className=" hidden lg:flex ">
                <button onClick={cycleOpen} className="z-10 btn btn-square bg-transparent border-2"><GiHamburgerMenu className="text-2xl text-center" /></button>
            </div>
        </main>
    );
}
