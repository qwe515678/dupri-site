'use client'

import { motion } from "framer-motion"



export default function AnimatedLink({ children }) {
    return <motion.div initial={{ background: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0))", color: 'white' }}
        whileHover={{
            background:
                "linear-gradient(18deg, rgba(0,0,0,0) 0%, rgba(38,38,38,0.2) 100%)",

        }}
        transition={{ duration: 0.4, }}
        className=" rounded-xl px-2 py-1 group flex "
    >
        {children}
        <svg className="w-6 h-3 scale-0 group-hover:scale-100 duration-400 transition-all flex items-center justify-center my-auto" width="4785" height="3710" viewBox="0 0 4785 3710" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="1563" width="4486" height="662" rx="331" fill="#D9D9D9" />
            <rect x="2462" y="3241.74" width="2623" height="662" rx="331" transform="rotate(-45 2462 3241.74)" fill="#D9D9D9" />
            <rect x="2930.11" width="2623" height="662" rx="331" transform="rotate(45 2930.11 0)" fill="#D9D9D9" />
        </svg>

    </motion.div>
}
