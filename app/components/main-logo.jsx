'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Logo({ type }) {

    if (type === 'dragable') {


        return (
            <motion.div
                initial="normal"
                animate={["compressed", "normal"]}
                whileHover="active"
                whileDrag='active'
                whileTap="compressed"
                dragConstraints={{
                    top: -150,
                    left: -150,
                    right: 150,
                    bottom: 150,
                  }}
                variants={{
                    "compressed": { "scale": .8 },
                    'normal': { "scale": 1 },
                    'active': { "scale": 1.2 }
                }}
                drag
                className=' brightness-200 cursor-pointer z-20'
            >
                <svg width="1060" height="1060" viewBox="0 0 1060 1060" fill="none" xmlns="http://www.w3.org/2000/svg" className=" w-32 h-32 -z-0 duration-500 transition-all">
                    <path d="M30 362C30 88.598 88.598 30 362 30H698C971.402 30 1030 88.598 1030 362V698C1030 971.402 971.402 1030 698 1030H362C88.598 1030 30 971.402 30 698V362Z" fill="white" stroke="black" stroke-width="60" />
                    <circle cx="449" cy="681" r="268" fill="black" />
                    <path d="M578.5 681C578.5 812.5 550.83 869 447 869C343.17 869 259 784.83 259 681C259 577.17 343.17 493 447 493C550.83 493 578.5 549.5 578.5 681Z" fill="white" />
                    <rect x="633" y="102" width="168" height="847" rx="41" fill="black" />
                </svg>
            </motion.div>
        );
    }
    else {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;


        const randomX = Math.floor(Math.random() * screenWidth) - screenWidth / 2;
        const randomY = Math.floor(Math.random() * screenHeight) - screenHeight / 2;

        const variant = Math.floor(Math.random() * 4);
        return (
            <motion.div animate={{

                scale: [1],
                rotate: [0, 360],
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} initial={{ scale: 0.5, x: randomX, y: randomY }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className=' hover:hue-rotate-60 duration-500 transition-all'>

                {variant === 0 ? (
                    <svg width="1060" height="1060" viewBox="0 0 1060 1060" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 z-10 brightness-75">
                        <path d="M30 362C30 88.598 88.598 30 362 30H698C971.402 30 1030 88.598 1030 362V698C1030 971.402 971.402 1030 698 1030H362C88.598 1030 30 971.402 30 698V362Z" fill="white" stroke="black" stroke-width="60" />
                        <circle cx="449" cy="681" r="268" fill="black" />
                        <path d="M578.5 681C578.5 812.5 550.83 869 447 869C343.17 869 259 784.83 259 681C259 577.17 343.17 493 447 493C550.83 493 578.5 549.5 578.5 681Z" fill="white" />
                        <rect x="633" y="102" width="168" height="847" rx="41" fill="black" />
                    </svg>
                ) : variant === 1 ? (
                    <svg width="686" height="899" viewBox="0 0 686 899" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 z-10 brightness-75">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M268 847C416.012 847 536 727.012 536 579C536 430.988 416.012 311 268 311C119.988 311 0 430.988 0 579C0 727.012 119.988 847 268 847ZM266 767C369.83 767 397.5 710.5 397.5 579C397.5 447.5 369.83 391 266 391C162.17 391 78 475.17 78 579C78 682.83 162.17 767 266 767Z" fill="#FF0000" />
                        <rect x="452" width="168" height="847" rx="41" fill="#FF0000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M299 876C447.012 876 567 756.012 567 608C567 459.988 447.012 340 299 340C150.988 340 31 459.988 31 608C31 756.012 150.988 876 299 876ZM297 796C400.83 796 428.5 739.5 428.5 608C428.5 476.5 400.83 420 297 420C193.17 420 109 504.17 109 608C109 711.83 193.17 796 297 796Z" fill="#FF7A00" />
                        <rect x="483" y="29" width="168" height="847" rx="41" fill="#FF7A00" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M334 899C482.012 899 602 779.012 602 631C602 482.988 482.012 363 334 363C185.988 363 66 482.988 66 631C66 779.012 185.988 899 334 899ZM332 819C435.83 819 463.5 762.5 463.5 631C463.5 499.5 435.83 443 332 443C228.17 443 144 527.17 144 631C144 734.83 228.17 819 332 819Z" fill="#FFC700" />
                        <rect x="518" y="52" width="168" height="847" rx="41" fill="#FFC700" />
                    </svg>

                ) : variant === 2 ? (
                    <svg width="639" height="870" viewBox="0 0 639 870" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 z-10 brightness-75">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M268 870C416.012 870 536 750.012 536 602C536 453.988 416.012 334 268 334C119.988 334 0 453.988 0 602C0 750.012 119.988 870 268 870ZM266 790C369.83 790 397.5 733.5 397.5 602C397.5 470.5 369.83 414 266 414C162.17 414 78 498.17 78 602C78 705.83 162.17 790 266 790Z" fill="#FF0000" />
                        <rect x="452" y="23" width="168" height="847" rx="41" fill="#FF0000" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M287 847C435.012 847 555 727.012 555 579C555 430.988 435.012 311 287 311C138.988 311 19 430.988 19 579C19 727.012 138.988 847 287 847ZM285 767C388.83 767 416.5 710.5 416.5 579C416.5 447.5 388.83 391 285 391C181.17 391 97 475.17 97 579C97 682.83 181.17 767 285 767Z" fill="#00B3FF" />
                        <rect x="471" width="168" height="847" rx="41" fill="#00B3FF" />
                    </svg>

                ) : (
                    <svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 z-10 brightness-75">
                        <path d="M0 332C0 58.598 58.598 0 332 0H668C941.402 0 1000 58.598 1000 332V668C1000 941.402 941.402 1000 668 1000H332C58.598 1000 0 941.402 0 668V332Z" fill="white" />
                        <circle cx="419" cy="651" r="268" fill="black" />
                        <path d="M548.5 651C548.5 782.5 520.83 839 417 839C313.17 839 229 754.83 229 651C229 547.17 313.17 463 417 463C520.83 463 548.5 519.5 548.5 651Z" fill="white" />
                        <rect x="603" y="72" width="168" height="847" rx="41" fill="black" />
                    </svg>

                )}
            </motion.div>
        )
    }
}

export default Logo;
