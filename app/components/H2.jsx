'use client'

import AnimatedText from './animatedtext'
export default function H2({ h2Text}) {
    return (
        <h2 className='font-bold text-3xl font-mitrsSemi  bg-clip-text text-transparent  uppercase bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
            <AnimatedText _text={h2Text} _type='h2' />

        </h2>
    )
}
