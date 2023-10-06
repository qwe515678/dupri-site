import "./globals.css";
import Link from "next/link";
export const metadata = {
  title: "Dupri | Home",
  description: "Homepage of Dupri Group",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="bg-[#141414] flex items-center justify-evenly overflow-x-clip w-screen mx-auto gap-10"
    >

      <body className="w-full mx-auto">
        <div className=" navbar fixed border-b border-[#333333] w-full right-0 left-0 top-0 backdrop-blur-md backdrop-saturate-50 z-40 backdrop-brightness-50">
          <div className="w-full max-w-6-xl mx-2 flex justify-center">

            <a className="btn btn-ghost normal-case text-2xl font-poppins">Dupri</a>


            <ul className="menu menu-horizontal px-1 gap-3">
              <Link href={``}>Projects</Link>
              <Link href={``}>About us</Link>
              <Link href={``}>Pricing</Link>

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

        </div>

        <div className="xs:mx-0 m-3 w-full max-w-6xl mx-auto">
          {children}
        </div>

      </body>
    </html>
  );
}
