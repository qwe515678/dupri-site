'use client'


import Image from "next/image";

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className="z-40 bg-background relative">

            <footer class="border-stone-700 xs:mx-0 w-[97vw] max-w-6xl mx-auto my-2 text-center border-t  pt-10 ">
                <div class="md:flex md:justify-between">
                    <div class="grid grid-cols-4 gap-8 sm:grid-cols-1 ">
                        <div class="mb-6 md:mb-0">
                            <a href="#" class="flex items-start flex-col gap-4">
                                <Image src={`/logo.svg`} alt="logo" width={100} height={100} className="w-25 " />
                                <span class=" text-2xl font-semibold whitespace-nowrap dark:text-white">Dupri Group</span>
                            </a>
                        </div>
                        <div className="text-left">
                            <p class="mb-3 text-md font-semibold text-gray-900 uppercase dark:text-zinc-300">Navigation</p>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm">
                                <li class="mb-2">
                                    <a href="/" class="hover:underline">About Us</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="hover:underline">Products</a>
                                </li>
                                <li class="mb-2">
                                    <a href="/" class="hover:underline">Pricing</a>
                                </li>

                            </ul>
                        </div>
                        <div className="text-left">
                            <p class="mb-3 text-md font-semibold text-gray-900 uppercase dark:text-zinc-300">Follow us</p>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm">
                                <li class="mb-2">
                                    <a href="" class="hover:underline ">Telegram</a>
                                </li>
                                <li className="mb-2">
                                    <a href="" class="hover:underline">Vk</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Dupri Messenger</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-left">
                            <p class="mb-3 text-md font-semibold text-gray-900 uppercase dark:text-zinc-300">Legal</p>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm">
                                <li class="mb-2">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between border-t border-slate-800 py-4 my-2">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://dupri.ru/" class="hover:underline">Dupri Group™</a>. All Rights Reserved.
                    </span>
                    <div class="flex mt-2 space-x-5 sm:justify-center sm:mt-0 gap-4 mx-4">
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
                            <BsTelegram />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
                            <AiFillTwitterCircle />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
                            <AiFillInstagram />
                        </a>

                    </div>
                </div>
            </footer>
        </div>
    )
}