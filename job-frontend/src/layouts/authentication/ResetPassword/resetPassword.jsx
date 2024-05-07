// @mui material components
import { Card, Box, Typography, Button } from "@mui/material";

import InputField from "components/InputFeild/inputField";
import PageLayout from "../../page/LayoutType/pageLayout";
import { TopInfoCard } from "./resetPassword-styles";

function ResetPassword() {
  return (
    <PageLayout>
      <Card>
        <TopInfoCard mx={2} mt={-3} p={3} mb={1} textAlign="center">
          <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </Typography>
          <Typography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </Typography>
        </TopInfoCard>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form" id="resetpswrd-form">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={2}
            >
              <InputField
                type="email"
                label="Email"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box mt={4} mb={1}>
              <Button variant="gradient" color="info" fullWidth>
                reset
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </PageLayout>
  );
}

export default ResetPassword;
