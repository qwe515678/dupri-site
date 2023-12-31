'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image'

function Logo({ type }) {

    if (type === 'dragable') {


        return (

            // <Image as={NextImage} height={200} width={200} alt='logo' src='/logo.svg' className=" w-64 h-64 -z-0 duration-500 transition-all" />
            <svg className='w-40 h-40 ' width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 466.4C0 82.3196 82.3196 0 466.4 0H533.6C917.68 0 1000 82.3196 1000 466.4V533.6C1000 917.68 917.68 1000 533.6 1000H466.4C82.3196 1000 0 917.68 0 533.6V466.4Z"
                    fill="none" className='fill-[rgba(0,0,0,0.7)]' />
                <path
                    d="M371.303 143.651C357.813 146.206 347.592 151.555 338.441 160.706C330.537 168.55 325.426 177.464 322.455 188.517C321.148 193.509 320.97 195.41 320.97 203.433C320.97 211.455 321.148 213.357 322.455 218.348C328.338 240.217 344.383 256.262 366.252 262.145C371.243 263.452 373.145 263.63 381.167 263.63C389.19 263.63 391.091 263.452 396.083 262.145C417.951 256.262 433.996 240.217 439.879 218.348C441.187 213.357 441.365 211.455 441.365 203.433C441.365 195.41 441.187 193.509 439.879 188.517C433.996 166.649 417.714 150.366 396.083 144.78C389.011 142.938 377.661 142.463 371.303 143.651Z"
                    fill="url(#paint0_linear_19_17)" />
                <path
                    d="M609.003 143.651C595.513 146.206 585.292 151.555 576.141 160.706C568.237 168.55 563.127 177.464 560.155 188.517C558.848 193.509 558.67 195.41 558.67 203.433C558.67 211.455 558.848 213.357 560.155 218.348C566.038 240.217 582.083 256.262 603.952 262.145C608.943 263.452 610.845 263.63 618.867 263.63C626.89 263.63 628.791 263.452 633.783 262.145C655.651 256.262 671.696 240.217 677.579 218.348C678.887 213.357 679.065 211.455 679.065 203.433C679.065 195.41 678.887 193.509 677.579 188.517C671.696 166.649 655.414 150.366 633.783 144.78C626.711 142.938 615.361 142.463 609.003 143.651Z"
                    fill="url(#paint1_linear_19_17)" />
                <path
                    d="M252.452 381.351C238.962 383.906 228.741 389.255 219.59 398.406C211.746 406.191 206.695 415.045 203.604 426.217L202 431.922V559.983V688.044L203.604 693.749C206.695 704.921 211.746 713.775 219.59 721.56C231.059 733.088 243.657 738.318 262.316 739.447C274.558 740.219 280.441 741.646 289.236 746.043C299.279 751.094 307.895 759.592 313.363 769.873C318.176 778.846 319.781 785.026 320.553 797.684C321.623 816.284 326.912 828.941 338.44 840.41C346.225 848.254 355.079 853.305 366.251 856.396L371.956 858H500.017H628.078L633.783 856.396C644.955 853.305 653.809 848.254 661.594 840.41C673.122 828.941 678.351 816.343 679.481 797.684C680.253 785.204 681.976 778.549 686.612 769.932C692.673 758.701 701.587 750.381 713.591 744.736C720.603 741.467 726.902 740.101 737.717 739.447C756.317 738.377 768.975 733.088 780.444 721.56C788.288 713.775 793.339 704.921 796.429 693.749L798.034 688.044V559.983V431.922L796.429 426.217C790.368 404.17 774.442 388.304 752.633 382.421C747.641 381.113 745.74 380.935 737.717 380.935C729.695 380.935 727.793 381.113 722.801 382.421C700.992 388.304 685.066 404.17 679.005 426.217L677.401 431.922L677.104 559.983C676.806 677.051 676.688 688.341 675.796 691.61C672.171 704.564 667.061 713.419 658.563 721.322C651.788 727.74 642.934 732.613 633.426 735.347L628.672 736.713L502.691 736.892C366.489 737.129 371.956 737.189 362.626 734.039C343.372 727.443 329.883 712.587 324.297 691.907C323.346 688.282 323.227 679.606 322.93 559.983L322.633 431.922L321.028 426.217C314.967 404.17 298.863 388.066 277.232 382.48C270.161 380.638 258.81 380.163 252.452 381.351Z"
                    fill="url(#paint2_linear_19_17)" />
                <defs>
                    <linearGradient id="paint0_linear_19_17" x1="327.829" y1="217.562" x2="429.511" y2="202.565"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#24FF00" />
                        <stop offset="1" stop-color="#00B3FF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_19_17" x1="565.529" y1="217.562" x2="667.211" y2="202.565"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#24FF00" />
                        <stop offset="1" stop-color="#00B3FF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_19_17" x1="235.96" y1="675.719" x2="733.36" y2="583.93"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#24FF00" />
                        <stop offset="1" stop-color="#00B3FF" />
                    </linearGradient>
                </defs>
            </svg>
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
