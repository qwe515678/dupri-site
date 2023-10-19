
'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import { motion } from 'framer-motion'



export default function Page() {
  return (
    <motion.div  className=" my-16">
      {/* <div className="grid grid-cols-5 grid-rows-5 gap-4 border p-2 rounded-md">
      <div className="col-span-3 row-span-5 border rounded-md">1</div>
      <div className="col-span-2 row-span-5 col-start-4 border rounded-md">2</div>
    </div> */}
      <p>Here will be situated contact page</p>
    </motion.div>
  )
}
