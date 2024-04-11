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
import CandidateEdu from "./CandidateEdu";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Cookies from "js-cookie";

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

    const cookieUserid = Cookies.get("Userid");
    alert(cookieUserid);
    if (cookieUserid) {
      Axios.put(
        `http://localhost:7000/api/candidates/${cookieUserid}/basicdetail/`,
        candidate
      )
        .then((res) => {
          console.log(res);
          alert("Basic Details Saved");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Some Error Occured.");
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
            Fill Candidate Basic Details
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                name="dateOfBirth"
                value={candidate.dateOfBirth}
                label="DOB (YYYY-MM-DD)"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="address"
                value={candidate.address}
                label="Address"
                fullWidth
                multiline
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="gender"
                value={candidate.gender}
                label="Gender (Male/Female/Others)"
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="number"
                name="mobileNo"
                value={candidate.mobileNo}
                label="Mobile no."
                fullWidth
                onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="bio"
                value={candidate.bio}
                label="Bio"
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
                href="/candidate-edu"
              >
                Candidate Education
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default CandidateBasic;
