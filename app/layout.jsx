import "./globals.css";
import Link from "next/link";

import Sidebar from './components/sidebar'
import Image from "next/image";
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
  return (
    <html
      lang="en"
      data-theme="dupri"
      className="bg-[#141414] flex items-center justify-evenly overflow-x-clip   gap-10"
    >

      <body className=" w-[97vw] mx-auto">

        <div className=" min-h-16 fixed border-b border-[#333333] right-0 left-0 top-0 backdrop-blur-md backdrop-saturate-50 z-40 backdrop-brightness-50 w-full max-w-6-xl flex justify-evenly items-center mx-auto md:justify-between px-10">

          <Link className=" text-4xl font-mitrsSemi tracking-widest	 shadow-orange-50 drop-shadow-lg" href={`/`}>Dupri</Link>

          <Sidebar />
          <ul className="flex px-5 py-1 rounded-full gap-5 lg:hidden bg-[#464646]">
            {links.map((link) => <Link key={link.id} href={`/${link.name.toLocaleLowerCase()}`} className={`hover:bg-[#727272] px-1 rounded-md  text-stone-100 transition-colors duration-300 cursor-pointer hover:text-purple-200`}>{link.name}</Link>)}

       
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
                <button className="border border-gray-500 btn bg-gradient-to-r from-[#4693d4] to-[#d18eed] text-[#222222] absolute xs:static xs:w-full xs:rounded-t-none top-0 right-0  rouded-md rounded-l-none ">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </body>
    </html>
  );
}
