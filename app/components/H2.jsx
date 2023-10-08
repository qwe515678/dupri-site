'use client'

import { RadialGradient } from 'react-text-gradients'

export default function H2({ text }) {
    return <h2 className='font-bold text-3xl font-mitrsSemi  bg-clip-text text-transparent  uppercase bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>{text}</h2>
}
