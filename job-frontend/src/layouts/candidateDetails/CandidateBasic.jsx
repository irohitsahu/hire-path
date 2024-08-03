import { useState } from "react";

// @mui material components
import { Card, Box, Typography, Button, Input } from "@mui/material";

import DashboardLayout from "layouts/page/LayoutType/dashboardLayout";

//Basic Details
function CandidateBasic() {
  const [candidate, setCandidate] = useState({
    // Basic Details

    dateOfBirth: "",
    address: "",
    gender: "",
    mobileNo: "",
    bio: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCandidate({
      ...candidate,
      [name]: value,
    });
  };

  const save = () => {
    const {
      dateOfBirth,
      programmingdateOfBirth,
      gender,
      passingYear,
      aggregate,
    } = candidate;
  };

  return (
    <DashboardLayout>
      <Card>
        <Box
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
          <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
            Fill Candidate Basic Details
          </Typography>
        </Box>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <Input
                type="text"
                name="dateOfBirth"
                value={candidate.dateOfBirth}
                label="DOB (YYYY-MM-DD)"
                fullWidth
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="address"
                value={candidate.address}
                label="Address"
                fullWidth
                multiline
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="gender"
                value={candidate.gender}
                label="Gender (Male/Female/Others)"
                fullWidth
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="number"
                name="mobileNo"
                value={candidate.mobileNo}
                label="Mobile no."
                fullWidth
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="bio"
                value={candidate.bio}
                label="Bio"
                fullWidth
                onChange={handleChange}
              />
            </Box>

            <Box mt={4} mb={1}>
              <Button variant="gradient" color="info" fullWidth onClick={save}>
                Save
              </Button>
            </Box>

            <Box mt={4} mb={1}>
              <Button
                variant="gradient"
                color="success"
                fullWidth
                href="/candidate-edu"
              >
                Candidate Education
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </DashboardLayout>
  );
}

export default CandidateBasic;
