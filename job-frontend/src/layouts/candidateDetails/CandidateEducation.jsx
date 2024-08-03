// react-router-dom components
import { Link } from "react-router-dom";

import { useState } from "react";

// @mui material components
import { Card, Box, Typography, Input, Button } from "@mui/material";

import DashboardLayout from "layouts/page/LayoutType/dashboardLayout";

//Educational Details

function CandidateEducation() {
  const [candidate, setCandidate] = useState({
    // Educational Details

    nameOfInstitute: "",
    nameOfUniversity: "",
    stream: "",

    admissionYear: "",
    passingYear: "",
    aggregate: "",
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
      nameOfInstitute,
      nameOfUniversity,
      stream,

      admissionYear,
      passingYear,
      aggregate,
    } = candidate;

    const cookieUserid = Cookies.get("Userid");
    alert(cookieUserid);
    if (cookieUserid) {
      Axios.put(
        `http://localhost:7000/api/candidates/${cookieUserid}/updateeducationbycandidateid/`,
        candidate
      )
        .then((res) => {
          console.log(res);
          alert("Education Saved");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Some error occured");
    }
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
            Enter Education Details
          </Typography>
        </Box>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <Input
                type="text"
                name="nameOfInstitute"
                value={candidate.nameOfInstitute}
                label="Name of Institute"
                fullWidth
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="nameOfUniversity"
                value={candidate.nameOfUniversity}
                label="Name of University"
                fullWidth
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="stream"
                value={candidate.stream}
                label="Stream"
                fullWidth
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="number"
                name="admissionYear"
                value={candidate.admissionYear}
                label="Admission Year"
                fullWidth
                multiline
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="number"
                name="passingYear"
                value={candidate.passingYear}
                label="Passing Year"
                fullWidth
                multiline
                onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="aggregate"
                value={candidate.aggregate}
                label="Aggregate"
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
                href="/candidate-skills"
              >
                Candidate Skills
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </DashboardLayout>
  );
}

export default CandidateEducation;
