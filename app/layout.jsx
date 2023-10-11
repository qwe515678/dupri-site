'use client'
import "./globals.css";
import Link from "next/link";

import Sidebar from './components/sidebar'
import Image from "next/image";
import { motion } from "framer-motion";
export const metadata = {
  title: "Dupri | Home",
  description: "Homepage of Dupri Group",
};
const links = [
  { name: "Home", id: 1 },
  { name: "About", id: 2 },
  { name: "Products", id: 3 },
  { name: "Prices", id: 4 },
  { name: "Contact", id: 5 },
];
export default function RootLayout({ children }) {
  const logoVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(0, 255,0, 1)"
    }
  }
  return (
    <html
      lang="en"
      data-theme="dupri"
      className="bg-[#141414] flex items-center justify-evenly overflow-x-clip   gap-10"
    >

      <body className=" w-[97vw] mx-auto">

        <div className=" min-h-16 fixed border-b border-[#333333] right-0 left-0 top-0 backdrop-blur-md backdrop-saturate-50 z-40 backdrop-brightness-50 w-full max-w-6-xl flex justify-evenly items-center mx-auto md:justify-between px-10">

          <Link className=" text-4xl font-mitrsSemi tracking-widest	 shadow-orange-50 drop-shadow-lg" href={`/`}>
            {/* <motion.svg width="489" height="163.8" viewBox="0 0 489 163.8" xmlns="http://www.w3.org/2000/svg" className="w-15 h-10">
              <motion.g id="svgGroup" className=" stroke-slate-100">
                <motion.path initial='hidden' animate='show' variants={logoVariants} transition={{
                  default: { duration: 2, ease: "easeInOut" }, fill: { duration: 2, ease: 'easeInOut' }

                }} d="M 56.6 128.6 L 0 128.6 L 0 0 L 56.6 0 L 56.6 18.2 L 74.6 18.2 L 74.6 36.2 L 93 36.2 L 93 92.4 L 74.6 92.4 L 74.6 110.6 L 56.6 110.6 L 56.6 128.6 Z M 20.2 20.2 L 20.2 108.6 L 54.6 108.6 L 54.6 90.4 L 72.6 90.4 L 72.6 38.2 L 54.6 38.2 L 54.6 20.2 L 20.2 20.2 Z"  />
                <motion.path initial='hidden' animate='show' variants={logoVariants} transition={{
                  default: { duration: 2, ease: "easeInOut" }, fill: { duration: 2, ease: 'easeInOut' }

                }} d="M 191.8 128.6 L 135.4 128.6 L 135.4 110.6 L 117.2 110.6 L 117.2 36.2 L 137.4 36.2 L 137.4 108.6 L 189.8 108.6 L 189.8 36.2 L 210.2 36.2 L 210.2 110.6 L 191.8 110.6 L 191.8 128.6 Z M 153.6 21.4 L 133.2 21.4 L 133.2 1.2 L 153.6 1.2 L 153.6 21.4 Z M 196 21.4 L 175.8 21.4 L 175.8 1.2 L 196 1.2 L 196 21.4 Z"  />
                <motion.path initial='hidden' animate='show' variants={logoVariants} transition={{
                  default: { duration: 2, ease: "easeInOut" }, fill: { duration: 2, ease: 'easeInOut' }

                }} d="M 254.6 163.8 L 234.4 163.8 L 234.4 54.4 L 252.6 54.4 L 252.6 36.2 L 309 36.2 L 309 54.4 L 327.4 54.4 L 327.4 110.6 L 309 110.6 L 309 128.6 L 254.6 128.6 L 254.6 163.8 Z M 254.6 56.2 L 254.6 108.6 L 307 108.6 L 307 56.2 L 254.6 56.2 Z"  />
                <motion.path initial='hidden' animate='show' variants={logoVariants} transition={{
                  default: { duration: 2, ease: "easeInOut" }, fill: { duration: 2, ease: 'easeInOut' }

                }} d="M 371.8 128.6 L 351.6 128.6 L 351.6 54.4 L 369.8 54.4 L 369.8 36.2 L 426.2 36.2 L 426.2 54.4 L 444.6 54.4 L 444.6 74.2 L 424.2 74.2 L 424.2 56.2 L 371.8 56.2 L 371.8 128.6 Z"  />
                <motion.path initial='hidden' animate='show' variants={logoVariants} transition={{
                  default: { duration: 2, ease: "easeInOut" }, fill: { duration: 2, ease: 'easeInOut' }

                }} d="M 489 128.6 L 468.8 128.6 L 468.8 36.2 L 489 36.2 L 489 128.6 Z M 489 20.2 L 468.8 20.2 L 468.8 0 L 489 0 L 489 20.2 Z"  />
              </motion.g>
            </motion.svg> */}
            <div className="  text-4xl">D<span className=" font-grid m-0 p-0 w-fit text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">ü</span>pri</div>
          </Link>

          <Sidebar />
          <ul className="flex px-5 py-1 rounded-full gap-5 lg:hidden bg-[#464646]">
            {links.map((link) => <Link key={link.id} href={link.name != 'Home' ? `/${link.name.toLocaleLowerCase()}` : '/'} className={`hover:bg-[#727272] px-1 rounded-md  text-stone-100 transition-colors duration-300 cursor-pointer`}>{link.name}</Link>)}


          </ul>

        </div>
        <div className="xs:mx-0 w-[97vw] max-w-6xl mx-auto ">
          {children}
        </div>
        <footer className="footer p-10  text-base-content border-t border-gray-600">
          <aside>

            <Image height={75} width={75} src={`/logo.svg`} alt="logo" />
            <p>Dupri Group<br />Providing reliable tech since 1992</p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          {/* <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> */}
          <form>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative ">
                <input type="text" placeholder="username@site.com" className="input input-bordered w-full rounded-md xs:rounded-b-none mr-2" />
                <button className="border border-gray-500 btn bg-gradient-to-r from-[#4693d4] to-[#d18eed] text-[#222222] absolute xs:static xs:w-full xs:rounded-t-none top-0 right-0 sm:rounded-b-sm  rouded-md rounded-l-none ">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </body>
    </html>
  );
}
