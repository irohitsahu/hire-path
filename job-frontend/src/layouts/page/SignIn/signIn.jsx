import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import InputField from "src/components/InputFeild/inputField";
import MDButton from "components/MDButton";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { TopInfoCard } from "./signIn-styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PageLayout from "layouts/page/LayoutType/pageLayout";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <PageLayout>
      <Card>
        <TopInfoCard mx={2} mt={-3} p={2} mb={1} textAlign="center">
          <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </Typography>
          <Grid2
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 1, mb: 2 }}
          >
            <Grid2 item xs={2}>
              <Typography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <FacebookIcon color="inherit" />
              </Typography>
            </Grid2>
            <Grid2 item xs={2}>
              <Typography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <GitHubIcon color="inherit" />
              </Typography>
            </Grid2>
            <Grid2 item xs={2}>
              <Typography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <GoogleIcon color="inherit" />
              </Typography>
            </Grid2>
          </Grid2>
        </TopInfoCard>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form" id="login-form">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={2}
            >
              <InputField type="email" name="email" label="Email" fullWidth />
              <InputField
                type="password"
                name="password"
                label="Password"
                fullWidth
              />
            </Box>

            <Box display="flex" alignItems="center" justifyContent={"start"}>
              <RadioGroup name="type" row>
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
            </Box>

            <Box display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <Typography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </Typography>
            </Box>

            <Box mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                Login
              </MDButton>
            </Box>
          </Box>

          <Box mt={3} mb={1} textAlign="center">
            <Typography variant="button" color="text">
              Don&apos;t have an account?{" "}
              <Typography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
              >
                Sign up
              </Typography>
            </Typography>
          </Box>

          <Box mt={3} mb={1} textAlign="center">
            <Typography
              component={Link}
              to="/authentication/reset-password"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Reset Password
            </Typography>
          </Box>
        </Box>
      </Card>
    </PageLayout>
  );
}

export default SignIn;
