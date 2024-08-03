import { useEffect } from "react";
import { setLayout, useMaterialUIController } from "context";
import { Outlet, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";

function PageLayout() {
  const [, dispatch] = useMaterialUIController();
  const pathname = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [dispatch]);

  return (
    <Container maxWidth={pathname.pathname === "/home" ? "lg" : "xs"}>
      <Outlet/>
    </Container>
  );
}

export default PageLayout;

