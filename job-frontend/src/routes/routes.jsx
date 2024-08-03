import Layout from "layouts/page/Layout/layout";
import DashboardLayout from "layouts/page/LayoutType/dashboardLayout";
import PageLayout from "layouts/page/LayoutType/pageLayout";
import Dashboard from "layouts/dashboard-components/dashboard/dashboard";
import Profile from "layouts/dashboard-components/profile/profile";
import Tables from "layouts/dashboard-components/tables/appliedJobTable";
import CandidateBasic from "layouts/candidateDetails/CandidateBasic";
import CandidateEducation from "layouts/candidateDetails/CandidateEducation";
import CandidateSkills from "layouts/candidateDetails/CandidateSkills";
import CompanyAbout from "layouts/companyDetails/CompanyAbout";
import CompanyAddress from "layouts/companyDetails/CompanyAddress";
import CompanyHr from "layouts/companyDetails/CompanyHr";
import CompanyJobPost from "layouts/companyDetails/CompanyJobPost";
import LandingPageInfo from "layouts/page/Home/landingInfo";
import SignIn from "layouts/authentication/SignIn/signIn";
import SignUp from "layouts/authentication/SignUp/signUp";
import ResetPassword from "layouts/authentication/ResetPassword/resetPassword";
import Logout from "layouts/authentication/logout";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Navigate to="/home" />}
        // errorElement={<ErrorPage />}
      />

      <Route element={<Layout />}>
        <Route path="candidate" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="table" element={<Tables />} />
          <Route path="candidateBasic" element={<CandidateBasic />} />
          <Route path="candidateEducation" element={<CandidateEducation />} />
          <Route path="candidateSkill" element={<CandidateSkills />} />
        </Route>
        <Route path="company" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="table" element={<Tables />} />
          <Route path="companyAbout" element={<CompanyAbout />} />
          <Route path="companyAddress" element={<CompanyAddress />} />
          <Route path="companyHr" element={<CompanyHr />} />
          <Route path="companyJobPost" element={<CompanyJobPost />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="home" element={<LandingPageInfo />} />
          <Route path="authentication">
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Route>
      </Route>
    </>
  )
);

export default routes;
