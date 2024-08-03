
import { useEffect } from "react";
import { setLayout, useMaterialUIController } from "context";
import { Outlet, useLocation } from "react-router-dom";

function DashboardLayout() {
  const [, dispatch] = useMaterialUIController();
  const pathname = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return <Outlet />;
}

export default DashboardLayout;

