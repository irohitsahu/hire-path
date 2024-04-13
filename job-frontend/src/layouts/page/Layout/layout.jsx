import Navbar from "src/layouts/component/Navbar/navbar";
import LandingPageInfo from "../Home/homePage";
import Footer from "src/layouts/component/Footer/footer";
import { LayoutContianer } from "./layout-styles";

export default function Layout() {
  return (
    <>
      <LayoutContianer>
        <Navbar />
        <LandingPageInfo />
        <Footer />
      </LayoutContianer>
    </>
  );
}
