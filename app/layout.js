import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Anukul Trading Corporation",
  description:
    "Get all your Hardware and Plumbing solutions at cheapest market rate!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
