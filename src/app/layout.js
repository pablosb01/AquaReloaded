import Footer from "@/components/Footer/Footer.js";
import { inter, roboto, bebas_neue } from "./fonts.js";
import NavBar from "@/components/NavBar/NavBar";
import BackButton from "@/components/BackButton/BackButton.js";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata = {
  title: "Aquasella Fest",
  description: "AquasellaFest Reloaded by Toni and Pablo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas_neue.className} bg-stone-900 h-fit`}>
        <div className="w-[0px] h-[0px]" id="bck"></div>
        <NavBar />
        {children}
        <BackButton />
        <Footer />
      </body>
    </html>
  );
}
