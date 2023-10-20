'use client'

import AnimText from './animtext'
export default function H2({ h2Text }) {
    return (
            <AnimText full={false}>
                <h2 className='font-bold text-3xl font-mitrsSemi text-stone-300'>{h2Text}</h2>
            </AnimText>
    )
}
