'use client'

import { RadialGradient } from 'react-text-gradients'

export default function H2({ text }) {
    return <h2 className='font-bold '><RadialGradient gradient={['#4693d4, #d18eed']} fallbackColor="white">{text}</RadialGradient></h2>
}
