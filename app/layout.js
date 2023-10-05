import "./globals.css";

export const metadata = {
  title: "Dupri | Home",
  description: "Homepage of Dupri Group",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="bg-[#141414] flex items-center justify-center overflow-x-clip w-full mx-auto"
    >
      <body className="xs:mx-0 box-border w-full max-w-6xl">{children}</body>
    </html>
  );
}
