import type { Metadata } from "next";
import "../globals.css";
import Header from "./(fragments)/(header)/Header";
import Footer from "./(fragments)/(footer)/Footer";


export const metadata: Metadata = {
  title: "Games",
  description: "Because I felt like making them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
