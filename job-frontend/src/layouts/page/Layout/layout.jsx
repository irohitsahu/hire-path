import { useMaterialUIController } from "context";

// Components
import Navbar from "layouts/component/Navbar/navbar";
import Footer from "layouts/component/Footer/footer";
import Sidenav from "layouts/dashboard-components/sidenav/sidenav";
// Styles
import { LayoutContianer } from "./layout-styles";
import { Outlet } from "react-router-dom";
export default function Layout() {
  const [controller] = useMaterialUIController();
  const { layout } = controller;
  return (
    <>
      <LayoutContianer>
        {layout === "dashboard" && <Sidenav brandName="Hire Path" />}
        {layout === "page" && (
          <>
            <Navbar />
            <Footer />
          </>
        )}
        <Outlet/>
      </LayoutContianer>
    </>
  );
}
