
import "./globals.css";
import Link from "next/link";

import Sidebar from './components/sidebar'
import Image from "next/image";
import AnimatedLink from './components/clientnavlink'
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
            <div className="h-10  text-4xl flex gap-1">
              <span>D</span>
              <span className="flex items-center justify-center -ml-1">

                <svg className="h-7 m-0 p-0 w-fit" width="1004" height="1005" viewBox="0 0 1004 1005" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M281.467 1.79966C259.734 6.59966 245.334 14.733 229.334 30.8663C215.734 44.5997 208.134 57.2663 203.067 74.9997C198.801 90.1997 198.801 114.466 203.067 129.666C208.267 147.8 215.601 159.933 230.001 174.333C251.467 195.8 271.867 204.333 302.001 204.333C332.134 204.333 352.534 195.8 374.001 174.333C395.467 152.866 404.001 132.466 404.001 102.333C404.001 72.1997 395.467 51.7997 374.001 30.333C359.734 16.0663 347.467 8.59966 330.001 3.66633C316.667 -0.200336 294.001 -1.00034 281.467 1.79966Z" fill="url(#paint0_linear_23_598)" />
                  <path d="M681.467 1.79966C659.734 6.59966 645.334 14.733 629.334 30.8663C615.734 44.5997 608.134 57.2663 603.067 74.9997C598.801 90.1997 598.801 114.466 603.067 129.666C608.267 147.8 615.601 159.933 630.001 174.333C651.467 195.8 671.867 204.333 702.001 204.333C732.134 204.333 752.534 195.8 774.001 174.333C795.467 152.866 804.001 132.466 804.001 102.333C804.001 72.1997 795.467 51.7997 774.001 30.333C759.734 16.0663 747.467 8.59966 730.001 3.66633C716.667 -0.200336 694.001 -1.00034 681.467 1.79966Z" fill="url(#paint1_linear_23_598)" />
                  <path d="M81.4667 401.8C59.7333 406.6 45.3333 414.733 29.3333 430.866C15.7333 444.6 8.26667 457.266 3.06667 475L0 485.666V702.333V919L3.06667 929.666C8.4 947.8 15.6 959.933 30 974.333C44.4 988.733 56.5333 995.933 74.6667 1001.27L85.3333 1004.33H502H918.667L929.333 1001.27C947.467 995.933 959.6 988.733 974 974.333C988.4 959.933 995.6 947.8 1000.93 929.666L1004 919V702.333V485.666L1000.93 475C995.6 456.866 988.4 444.733 974 430.333C952.533 408.866 932.133 400.333 902 400.333C871.867 400.333 851.467 408.866 830 430.333C815.867 444.466 808.533 456.466 803.2 474.333C800.133 484.333 800.133 484.333 799.333 602.333C798.533 710.2 798.267 721 796.133 728.333C786.8 759.8 762.8 785 732 795.4L721.333 799H503.333H285.333L274.667 795.933C243.333 786.866 218.8 762.333 207.867 729C205.6 722.2 205.333 712.866 204.667 603C203.867 484.333 203.867 484.333 200.8 474.333C195.467 456.466 188.133 444.466 174 430.333C159.733 416.066 147.467 408.6 130 403.666C116.667 399.8 94 399 81.4667 401.8Z" fill="url(#paint2_linear_23_598)" />
                  <defs>
                    <linearGradient id="paint0_linear_23_598" x1="339.04" y1="38.6403" x2="208.386" y2="205.368" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00FF47" />
                      <stop offset="1" stop-color="#00D1FF" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_23_598" x1="739.04" y1="38.6403" x2="608.386" y2="205.368" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00FF47" />
                      <stop offset="1" stop-color="#00D1FF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_23_598" x1="684.5" y1="514.07" x2="377.372" y2="1165.55" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00FF47" />
                      <stop offset="1" stop-color="#00D1FF" />
                    </linearGradient>
                  </defs>
                </svg>

              </span>
              <span>pri</span>
            </div>
          </Link>

          <Sidebar />
          <ul className="flex px-1 py-1 rounded-xl lg:hidden bg-[rgba(100,100,100,0.3)]">
            {links.map((link) => <Link key={link.id} href={link.name != 'Home' ? `/${link.name.toLocaleLowerCase()}` : '/'} className={``}>
              <AnimatedLink>
              {link.name}
              </AnimatedLink>
              </Link>
              )}


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
