/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard-components/dashboard/dashboard";
import Profile from "layouts/dashboard-components/profile/profile";
import Tables from "layouts/dashboard-components/tables/appliedJobTable";
import ResetPassword from "layouts/authentication/ResetPassword/resetPassword";
import LandingPageInfo from "layouts/page/Home/landingInfo";
import Logout from "layouts/authentication/logout";
import CandidateBasic from "layouts/candidateDetails/CandidateBasic";
import CandidateEdu from "layouts/candidateDetails/CandidateEdu";
import CandidateSkills from "layouts/candidateDetails/CandidateSkills";
import CompanyAbout from "layouts/companyDetails/CompanyAbout";
import CompanyAddress from "layouts/companyDetails/CompanyAddress";
import CompanyHr from "layouts/companyDetails/CompanyHr";
import CompanyJobPost from "layouts/companyDetails/CompanyJobPost";
import SignIn from "layouts/authentication/SignIn/signIn";
import SignUp from "layouts/authentication/SignUp/signUp";
// @mui icons
import LogoutIcon from "@mui/icons-material/Logout";
import WorkIcon from "@mui/icons-material/Work";
import ResetIcon from "@mui/icons-material/RestartAlt";
import AccountIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <HomeIcon color="white" />,
    route: "/home",
    component: <LandingPageInfo />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon color="white" />,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <AccountIcon color="white" />,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Available Job's",
    key: "availableJob",
    icon: <WorkIcon color="white" />,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Reset Password",
    key: "reset-password",
    icon: <ResetIcon color="white" />,
    route: "/authentication/reset-password/*",
    component: <ResetPassword />,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "logout",
    icon: <LogoutIcon color="white" />,
    route: "/home",
    component: <Logout />,
  },
  {
    type: "collapse",
    name: "Candidate Basic",
    key: "candidate-basic",
    icon: <LogoutIcon color="white" />,
    route: "/candidate-basic",
    component: <CandidateBasic />,
  },
  {
    type: "collapse",
    name: "Education",
    key: "education",
    icon: <LogoutIcon color="white" />,
    route: "/candidate-education",
    component: <CandidateEdu />,
  },
  {
    type: "collapse",
    name: "Skills",
    key: "skills",
    icon: <LogoutIcon color="white" />,
    route: "/candidate-skills",
    component: <CandidateSkills />,
  },
  {
    type: "collapse",
    name: "About",
    key: "About",
    icon: <LogoutIcon color="white" />,
    route: "/company-about",
    component: <CompanyAbout />,
  },
  {
    type: "collapse",
    name: "Address",
    key: "address",
    icon: <LogoutIcon color="white" />,
    route: "/company-address",
    component: <CompanyAddress />,
  },
  {
    type: "collapse",
    name: "Human Resource",
    key: "human-resource",
    icon: <LogoutIcon color="white" />,
    route: "/company-hr",
    component: <CompanyHr />,
  },
  {
    type: "collapse",
    name: "Job Post",
    key: "job-post",
    icon: <LogoutIcon color="white" />,
    route: "/company-job-post",
    component: <CompanyJobPost />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <LogoutIcon color="white" />,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <LogoutIcon color="white" />,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
