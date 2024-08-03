import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "../page/Layout/layout";

import Axios from "axios";
import Cookies from "js-cookie";
import { Box, Button, Input, Typography } from "@mui/material";

// JOB POSTING
function CompanyJobPost() {
  const [positionName, setPositionName] = useState("");
  // const [companyId, setCompanyId] = useState();
  const [jobDescription, setJobDescription] = useState("");
  const [experienceNeeded, setExperienceNeeded] = useState("");
  const [typeOfJob, setTypeOfJob] = useState("");
  const [modeOfJob, setModeOfJob] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [programmingLanguages, setProgrammingLanguages] = useState("");
  const [tool, setTool] = useState("");
  const [qualification, setQualification] = useState("");

  const cookieUserid = Cookies.get("Userid");
  alert(cookieUserid);

  const save = () => {
    if (cookieUserid) {
      Axios.put(`http://localhost:7000/api/company/${cookieUserid}/newjob/`, {
        positionName,
        jobDescription,
        experienceNeeded,
        typeOfJob,
        modeOfJob,
        responsibilities,
        programmingLanguages,
        tool,
        qualification,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert("Some Error Occured");
    }
  };

  return (
    <BasicLayout image={bgImage}>
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
            Post Job
          </Typography>
        </Box>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <Input
                type="text"
                name="positionName"
                value={positionName}
                label="Position"
                fullWidth
                onChange={(event) => setPositionName(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="jobDescription"
                value={jobDescription}
                label="Job Description"
                fullWidth
                onChange={(event) => setJobDescription(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="number"
                name="experienceNeeded"
                value={experienceNeeded}
                label="Experience Needed"
                fullWidth
                onChange={(event) => setExperienceNeeded(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="typeOfJob"
                value={typeOfJob}
                label="Type (Full time / Part time)"
                fullWidth
                onChange={(event) => setTypeOfJob(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="modeOfJob"
                value={modeOfJob}
                label="Mode of job"
                fullWidth
                onChange={(event) => setModeOfJob(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="responsibilities"
                value={responsibilities}
                label="Responsibilities"
                fullWidth
                onChange={(event) => setResponsibilities(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="programmingLanguages"
                value={programmingLanguages}
                label="Programming Languages"
                fullWidth
                onChange={(event) =>
                  setProgrammingLanguages(event.target.value)
                }
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="programmingLanguages"
                value={tool}
                label="Programming Languages"
                fullWidth
                onChange={(event) => setTool(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="qualification"
                value={qualification}
                label="Qualification"
                fullWidth
                onChange={(event) => setQualification(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Button
                variant="gradient"
                color="info"
                fullWidth
                onClick={save}
              >
                Save and Post Job
              </Button>
            </Box>

            <Box mb={2}>
              <Button
                variant="gradient"
                color="success"
                fullWidth
                href="/dashboard"
              >
                Dashboard
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </BasicLayout>
  );
}

export default CompanyJobPost;
