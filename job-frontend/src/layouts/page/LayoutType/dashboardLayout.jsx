import PropTypes from "prop-types";

import { useEffect } from "react";
import { setLayout, useMaterialUIController } from "context";
import { useLocation } from "react-router-dom";

function DashboardLayout({ children }) {
  const [, dispatch] = useMaterialUIController();
  const pathname = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return children;
}

export default DashboardLayout;

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
