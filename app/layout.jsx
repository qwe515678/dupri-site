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
      className="bg-[#141414] flex items-center justify-evenly overflow-x-clip w-screen mx-auto gap-10"
    >

      <body className="w-full mx-auto">

        <div className=" min-h-16 fixed border-b border-[#333333] right-0 left-0 top-0 backdrop-blur-md backdrop-saturate-50 z-40 backdrop-brightness-50 w-full max-w-6-xl mx-2 flex justify-evenly items-center">

          <Link className=" text-4xl font-mitrsSemi tracking-widest	 shadow-orange-50 drop-shadow-lg" href={`/`}>Dupri</Link>

          <Sidebar />
          <ul className="flex px-5 py-1 rounded-full gap-5 lg:hidden bg-[#464646]">
            {links.map((link) => <Link key={link.id} href={`/${link.name.toLocaleLowerCase()}`} className={`hover:bg-[#727272] px-1 rounded-md  text-stone-100 transition-colors duration-300 cursor-pointer`}>{link.name}</Link>)}

            {/* <li>
                <details>
                  <summary>
                    Parent
                  </summary>
                  <ul className="p-2">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li> */}
          </ul>

        </div>
        <div className="xs:mx-0 m-3 w-full max-w-6xl mx-auto ">
          {children}
        </div>
        <footer className="footer p-10  text-base-content border-t border-gray-600">
          <aside>
            {/* <svg width="50" height="50" viewBox="0 0 1065 1163" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0096321 1061.65V101.347C-0.215267 86.058 3.5011 70.9383 10.8534 57.2284C16.7508 46.614 24.6937 37.0746 34.2955 29.0749C53.3283 13.0039 77.5485 3.106 103.261 0.891173C109.123 0.293154 115.016 -0.00434699 120.913 4.79869e-05H521.517C628.585 4.79869e-05 723.323 18.8295 805.73 56.4883C888.136 94.1471 951.896 147.036 997.009 215.154C1042.12 283.272 1064.68 361.082 1064.68 448.583V711.088C1065.09 760.601 1056.92 809.857 1040.5 857.005C1029.5 887.949 1014.6 917.598 996.106 945.348C950.638 1013.35 885.393 1068.27 807.764 1103.88C806.487 1104.48 805.207 1105.08 803.925 1105.67C745.339 1132.49 682.247 1149.98 617.321 1157.41C585.553 1161.19 553.55 1163.06 521.517 1162.99H120.913C105 1163.14 89.185 1160.68 74.2085 1155.73C59.8127 1150.82 46.5712 1143.41 35.1982 1133.92C23.127 1124.22 13.6412 1112.09 7.47408 1098.47C2.40446 1086.76 -0.131384 1074.25 0.0096321 1061.65ZM241.816 971.93H503.472C573.181 971.93 631.68 962.229 678.97 942.825C701.753 933.638 722.893 921.324 741.669 906.304C775.992 878.189 800.293 841.185 811.389 800.14C818.082 777.222 821.85 752.054 822.692 724.636C822.813 720.674 822.873 716.712 822.872 712.749V445.26C823.098 419.928 820.165 394.654 814.129 369.938C802.186 322.915 778.033 284.888 741.669 255.859C699.093 221.895 640.9 201.284 567.09 194.024C545.956 192 524.72 191.012 503.472 191.063H241.816V971.93Z" fill="black"/>

</svg>
*/}
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
                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                <button className="border border-gray-500 btn bg-gradient-to-r from-[#4693d4] to-[#d18eed] text-[#222222] absolute top-0 right-0 rounded-l-none">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </body>
    </html>
  );
}
