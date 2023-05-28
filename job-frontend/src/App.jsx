import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Dashboard 2 React example components
import Sidenav from "./layouts/dashboard-components/sidenav/sidenav";

// Material Dashboard 2 React themes
import theme from "./assets/theme";

// Material Dashboard 2 React routes
import routes from "./routes/routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController } from "./context";


import SignIn from "./layouts/authentication/signIn";
import SignUp from "./layouts/authentication/signUp";
import CompanyAbout from "./layouts/companyDetails/CompanyAbout";
import CandidateBasic from "./layouts/candidateDetails/CandidateBasic";
import CandidateEdu from "./layouts/candidateDetails/CandidateEdu";
import CandidateSkills from "./layouts/candidateDetails/CandidateSkills";
import CompanyAddress from "./layouts/companyDetails/CompanyAddress";
import CompanyHr from "./layouts/companyDetails/CompanyHr";
import CompanyJobPost from "./layouts/companyDetails/CompanyJobPost";


export default function App() {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav brandName="Material Dashboard 2" routes={routes} />
        </>
      )}

      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/candidate-basic" element={<CandidateBasic />} />
        <Route path="/candidate-edu" element={<CandidateEdu />} />
        <Route path="/candidate-skills" element={<CandidateSkills />} />
        <Route path="/company-about" element={<CompanyAbout />} />
        <Route path="/company-address" element={<CompanyAddress />} />
        <Route path="/company-hr" element={<CompanyHr />} />
        <Route path="/company-job-post" element={<CompanyJobPost />} />
        <Route path="/authentication/sign-up" element={<SignUp />} />
        <Route path="/authentication/sign-in" element={<SignIn />} />

      </Routes>
    </ThemeProvider>
  );
}
