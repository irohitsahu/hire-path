// react-router-dom components
import { Link } from "react-router-dom";

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";

// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "../../layouts/authentication/basicLayout";

import Axios from "axios";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';


import Cookies from "js-cookie";


//Educational Details

function CandidateEdu() {
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


    const cookieUserid = Cookies.get('Userid')
    alert(cookieUserid);
    if (cookieUserid) {
      Axios.put(
        `http://localhost:7000/api/candidates/${cookieUserid}/updateeducationbycandidateid/`,
        candidate
      )
        .then((res) => {
          console.log(res)
          alert("Education Saved")
        })
        .catch((err) => console.log(err));
    }
    else {
      alert("Some error occured")
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
            Enter Education Details
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"

                name="nameOfInstitute"
                value={candidate.nameOfInstitute}

                label="Name of Institute"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"

                name="nameOfUniversity"
                value={candidate.nameOfUniversity}

                label="Name of University"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"

                name="stream"
                value={candidate.stream}
                label="Stream"

                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="number"
                name="admissionYear"
                value={candidate.admissionYear}
                label="Admission Year"
                fullWidth
                multiline
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="number"
                name="passingYear"
                value={candidate.passingYear}
                label="Passing Year"
                fullWidth
                multiline
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="aggregate"
                value={candidate.aggregate}
                label="Aggregate"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={save}
              >
                Save
              </MDButton>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="success"
                fullWidth
                href="/candidate-skills"
              >
                Candidate Skills
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default CandidateEdu;
