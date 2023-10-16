
'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import Test from '../components/test'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className=" my-16">
      Here will be information about Dupri Projects
    </motion.div>
  )
}
