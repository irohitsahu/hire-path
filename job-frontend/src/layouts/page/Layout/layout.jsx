import { useMaterialUIController } from "src/context";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "src/routes/routes";

// Components
import Navbar from "src/layouts/component/Navbar/navbar";
import Footer from "src/layouts/component/Footer/footer";
import Sidenav from "src/layouts/dashboard-components/sidenav/sidenav";
// Styles
import { LayoutContianer } from "./layout-styles";
export default function Layout() {
  const [controller, dispatch] = useMaterialUIController();
  const { layout } = controller;
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });
  return (
    <>
      <LayoutContianer>
        {layout === "dashboard" && (
          <>
            <Sidenav brandName="Hire Path" routes={routes} />
          </>
        )}

        <Navbar />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </LayoutContianer>
    </>
  );
}
