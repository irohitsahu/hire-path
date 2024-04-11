// react-router-dom components
import { Link } from "react-router-dom";

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";

// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "../page/Layout/layout";

import Axios from "axios";
import Cookies from "js-cookie";

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
            Post Job
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                name="positionName"
                value={positionName}
                label="Position"
                fullWidth
                onChange={(event) => setPositionName(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="jobDescription"
                value={jobDescription}
                label="Job Description"
                fullWidth
                onChange={(event) => setJobDescription(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="number"
                name="experienceNeeded"
                value={experienceNeeded}
                label="Experience Needed"
                fullWidth
                onChange={(event) => setExperienceNeeded(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="typeOfJob"
                value={typeOfJob}
                label="Type (Full time / Part time)"
                fullWidth
                onChange={(event) => setTypeOfJob(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="modeOfJob"
                value={modeOfJob}
                label="Mode of job"
                fullWidth
                onChange={(event) => setModeOfJob(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="responsibilities"
                value={responsibilities}
                label="Responsibilities"
                fullWidth
                onChange={(event) => setResponsibilities(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
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
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="programmingLanguages"
                value={tool}
                label="Programming Languages"
                fullWidth
                onChange={(event) => setTool(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="qualification"
                value={qualification}
                label="Qualification"
                fullWidth
                onChange={(event) => setQualification(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={save}
              >
                Save and Post Job
              </MDButton>
            </MDBox>

            <MDBox mb={2}>
              <MDButton
                variant="gradient"
                color="success"
                fullWidth
                href="/dashboard"
              >
                Dashboard
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default CompanyJobPost;
