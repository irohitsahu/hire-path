import PropTypes from "prop-types";

import { useEffect } from "react";
import { setLayout, useMaterialUIController } from "context";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";

function PageLayout({ children }) {
  const [, dispatch] = useMaterialUIController();
  const pathname = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <Container maxWidth={pathname.pathname === "/home" ? "lg" : "xs"}>
      {children}
    </Container>
  );
}

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
