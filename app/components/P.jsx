'use client'

import AnimText from './animtext'
export default function P({ children }) {
    return (
        <AnimText notLift>
            <p className='text-xl font-mitrReg text-stone-300' full={false}>{children}</p>
        </AnimText>
    )
}
