'use client'

import AnimatedText from './animatedtext'
export default function H2({ h2Text}) {
    return (
        <h2 className='font-bold text-3xl font-mitrsSemi  bg-clip-text text-transparent  uppercase bg-gradient-to-b from-green-300 via-cyan-300 to-blue-400'>
            <AnimatedText _text={h2Text} _type='h2' />

        </h2>
    )
}
