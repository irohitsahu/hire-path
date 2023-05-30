import { useEffect } from "react";

import Box from '@mui/material/Box';

// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "../../context/index";

function PageLayout({ children }) {
  const [, dispatch] = useMaterialUIController();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, []);

  return (
    <Box
      width="100vw"
      height="100%"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
}


export default PageLayout;
