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
import BasicLayout from "../../layouts/authentication/basicLayout";

import Axios from "axios";

import Cookies from "js-cookie";

// Head Count, Established Year, About Company

function CompanyAbout() {
  const [hrEmail, sethrEmail] = useState();
  const [establishedYear, setEstablishedYear] = useState();
  const [aboutCompany, setAboutCompany] = useState();


  const cookieUserid = Cookies.get("Userid");
  alert(cookieUserid);

  const save = () => {
    if (cookieUserid) {
      Axios.put(
        `http://localhost:7000/api/company/${cookieUserid}/companydetails/`,
        {
          hrEmail,
          establishedYear,
          aboutCompany,
        }
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
            Fill Head Count, Established Year, About Company Details
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="number"
                name="hrEmail"
                value={hrEmail}
                label="Head Count"
                fullWidth
                onChange={(event) => sethrEmail(event.target.value)}
              // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="number"
                name="establishedYear"
                value={establishedYear}
                label="Established Year"
                fullWidth
                onChange={(event) => setEstablishedYear(event.target.value)}
              // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="aboutCompany"
                value={aboutCompany}
                label="About Company"
                fullWidth
                multiline
                onChange={(event) => setAboutCompany(event.target.value)}
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
                href="/company-address"
              >
                Company Address
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default CompanyAbout;
