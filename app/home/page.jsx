
'use client'
import {redirect} from 'next/navigation'
import { useEffect } from 'react'
export const metadata = {
  title: '',
  description: ''
}

export default function Page() {
    useEffect(() => redirect('/'))
  return <div></div>
}
