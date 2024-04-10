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
import BasicLayout from "../page/layout";

import Axios from "axios";

import Cookies from "js-cookie";

// Skills
function CandidateSkills() {
  const [languages, setLanguages] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [tools, setTools] = useState([]);

  const save = () => {
    const cookieUserid = Cookies.get("Userid");
    alert(cookieUserid);
    if (cookieUserid) {
      Axios.put(
        `http://localhost:7000/api/candidates/${cookieUserid}/updateskillbycandidateid/`,
        {
          languages,
          programmingLanguages,
          tools,
        }
        // candidate
      )
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
            Enter Your Skills
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                name="languages"
                value={languages}
                label="Languages"
                fullWidth
                onChange={(event) => setLanguages(event.target.value)}
                //onChange={handleChange}
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
                name="tools"
                value={tools}
                label="Tools"
                fullWidth
                onChange={(event) => setTools(event.target.value)}
                // onChange={handleChange}
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

export default CandidateSkills;
