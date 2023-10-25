'use client'

import { motion } from "framer-motion"


export default function AnimText({ children, full = true, notLift = false, notOverflow = false }) {
    return (
        <motion.div className={`relative h-fit  ${notOverflow === true ? `` : 'overflow-y-clip h-full'}  ${full === true ? `w-full` : 'w-fit'}`}>
            <motion.div className=" " initial={{ y: `${notLift ? `0` : `100%`}` }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, type: 'keyframes', ease: 'easeInOut' }}>
                {children}
            </motion.div>

            <motion.div initial={{ left: '0', background: "#00cbff" }} whileInView={{ left: '100%', background: "#1dff00" }} viewport={{ once: true }} transition={{ duration: .8, type: 'keyframes', ease: 'easeInOut' }} className="absolute top-0 bottom-0 left-0 right-0"></motion.div>
        </motion.div>
    )
}
