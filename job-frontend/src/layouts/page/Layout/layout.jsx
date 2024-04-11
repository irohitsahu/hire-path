import Navbar from "src/layouts/component/Navbar/navbar";
import LandingPageInfo from "../Home/homePage";
import Footer from "src/layouts/component/Footer/footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <LandingPageInfo />
      <Footer />
    </>
  );
}
