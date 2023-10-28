'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FallingDottedLine = () => {

    const lineDuration = Math.random() * 15 + 10
    const isServer = typeof window === 'undefined'

    const [width, setWidth] = React.useState(!isServer ? window.innerWidth : 0)

    const [xPos, setXPos] = useState(!isServer ? Math.random() * width : 0);

    // setWidth(window.innerWidth)
    // setXPos(Math.random() * width)
    // }else{
    //     var [width, setWidth] = React.useState(0)

    //     var [xPos, setXPos] = useState(0);
    // }
    useEffect(() => {
        const interval = setInterval(() => {
            setXPos(Math.random() * width);
        }, lineDuration * 1000);
        return () => clearInterval(interval);
    }, [lineDuration, setXPos, width]);
    const lineLength = Math.random() * 100 + 50;
    const lineColor = Math.floor(Math.random() * 3)
    return (
        <motion.div
            className="absolute top-0 left-0 w-full z-0"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: '110vh', opacity: [0, 0.8, 0] }}
            transition={{
                repeat: Infinity,
                duration: lineDuration,
                type: 'keyframes',
                ease: 'easeInOut',
            }}
        >
            <motion.div
                className={`w-0.5 h-full ${lineColor === 2 ? `bg-secondary shadow-secondary` : 'bg-primary shadow-prima'}  absolute shadow-2xl z-20`}
                style={{ left: xPos, height: lineLength }}
            />
        </motion.div>
    );
}
export default FallingDottedLine