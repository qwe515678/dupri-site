
import "./globals.css";
import { ThemeProvider } from "./providers";
import Header from './components/header'
import { Toaster } from 'sonner'
import Footer from './components/footer'
export const metadata = {
  title: "Dupri | Home",
  description: "Homepage of Dupri Group",
  openGraph: {
    title: 'Dupri',
    description: 'Dupri is one of the most importaint players on AI market',
    url: 'https://test.dupri.ru',
    siteName: 'Dupri.ru',
    images: [
      {
        url: 'https://test.dupri.ru/og.jpg',
        width: 1000,
        height: 1000,
      },

    ],
    locale: 'en_US',
    type: 'website',
  },
};

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

      className="dark text-foreground bg-background"
    >

      <body className=" w-[97vw] mx-auto text-white">
        <ThemeProvider themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main className="dark w-full h-full ">
            <Toaster theme="dark" richColors />
            <Header />
            <div className="dark xs:mx-0 w-[97vw] max-w-6xl mx-auto">
              {children}
            </div>

            <Footer />
          </main>
        </ThemeProvider>

      </body>
    </html>
  );
}
