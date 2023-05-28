import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";

// Authentication layout components
import BasicLayout from "./basicLayout";

// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";

import Axios from "axios";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [user, setUser] = useState({
    email: "",
    password: "",
    type: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const login = () => {
    const { email, password, type } = user;

    if (email && password && type === "candidate") {
      Axios.post(
        "http://localhost:7000/api/candidates/login",
        { email, password },
        { withCredentials: true }
      )
        .then((res) => {
          console.log(res);
          SetCookie("userIn", JSON.stringify(response.data))
          navigate("/dashboard");
        })
        .catch((err) => console.log(err));
    } else if (email && password && type === "company") {
      try {
        Axios.post(
          "http://localhost:7000/api/company/login",
          { email, password },
          { withCredentials: true }
        )
          .then((response) => {
            consloe.log(response);
            SetCookie("userIn", JSON.stringify(response.data))
            navigate("/dashboard");
          });
      } catch (error) {
        console.log(error);
      }
    } else alert("Please Fill Form Correclty");
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" id="login-form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                name="email"
                value={user.email}
                label="Email"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="password"
                name="password"
                value={user.password}
                label="Password"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>



            <MDBox display="flex" alignItems="right" ml={0.6}>

              <RadioGroup sx={{ flexDirection: 'row' }} name="type" value={user.type} onChange={handleChange}>
                <FormControlLabel value="candidate" control={<Radio />} label="Candidate" />
                <FormControlLabel value="company" control={<Radio />} label="Company" />
              </RadioGroup>
            </MDBox>



            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={login} >Login</MDButton>
            </MDBox>
          </MDBox>

          <MDBox mt={3} mb={1} textAlign="center">
            <MDTypography variant="button" color="text">
              Don&apos;t have an account?{" "}
              <MDTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </MDTypography>
            </MDTypography>
          </MDBox>

          <MDBox mt={3} mb={1} textAlign="center">
            <MDTypography
              component={Link}
              to="/authentication/reset-password"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Reset Password
            </MDTypography>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default SignIn;