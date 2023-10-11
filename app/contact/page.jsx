
'use client'
import { motion } from 'framer-motion'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'


export default function Page() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className='mt-16'>

    </motion.div>
  )
}
