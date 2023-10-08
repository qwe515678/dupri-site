
'use client'
import { motion } from 'framer-motion'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'


export default function Page() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>

    </motion.div>
  )
}
