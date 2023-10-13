
'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import Test from '../components/test'
import { motion } from 'framer-motion'



export default function Page() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className=" my-16">
      {/* <div className="grid grid-cols-5 grid-rows-5 gap-4 border p-2 rounded-md">
      <div className="col-span-3 row-span-5 border rounded-md">1</div>
      <div className="col-span-2 row-span-5 col-start-4 border rounded-md">2</div>
    </div> */}
      <p>Here will be situated product page</p>
    </motion.div>
  )
}
