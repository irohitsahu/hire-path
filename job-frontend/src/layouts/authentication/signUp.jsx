// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";

// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "../page/layout";
import Axios from "axios";
import { useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
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

  const register = () => {
    const { name, email, password, type } = user;
    if (name && email && password && type === "candidate") {
      Axios.post("http://localhost:7000/api/candidates/signup", {
        name,
        email,
        password,
      })
        .then((res) => {
          console.log(res);
          alert("Register successful");
        })
        .catch((err) => console.log(err));
    } else if (name && email && password && type === "company") {
      const companyName = name;
      Axios.post("http://localhost:7000/api/company/signup", {
        companyName,
        email,
        password,
      })
        .then((res) => {
          console.log(res);
          alert("Register successful");
        })
        .catch((err) => console.log(err));
    } else alert("Please Fill Form Correclty");
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                name="name"
                value={user.name}
                label="Name"
                onChange={handleChange}
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                name="email"
                value={user.email}
                label="Email"
                onChange={handleChange}
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                name="password"
                value={user.password}
                label="Password"
                onChange={handleChange}
                variant="standard"
                fullWidth
              />
            </MDBox>

            <MDBox display="flex" alignItems="right" ml={0.6}>
              <RadioGroup
                sx={{ flexDirection: "row" }}
                name="type"
                value={user.type}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="candidate"
                  control={<Radio />}
                  label="Candidate"
                />
                <FormControlLabel
                  value="company"
                  control={<Radio />}
                  label="Company"
                />
              </RadioGroup>
            </MDBox>

            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />

              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>

              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={register}
              >
                register
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
