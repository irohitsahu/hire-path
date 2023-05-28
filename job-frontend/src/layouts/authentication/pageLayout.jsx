import { useEffect } from "react";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";

// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "../../context/index";

function PageLayout({ background, children }) {
  const [, dispatch] = useMaterialUIController();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, []);

  return (
    <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </MDBox>
  );
}


export default PageLayout;
