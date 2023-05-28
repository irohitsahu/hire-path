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


// Company Address

function CompanyAddress() {





  const [establishedYear, setEstablishedYear] = useState();
  const [aboutCompany, setAboutCompany] = useState();
  const [addressLine1, setAddressLine1] = useState();


  const cookieUserid = Cookies.get("Userid");
  alert(cookieUserid);


  const save = () => {

    if (cookieUserid) {
      Axios.put(
        `http://localhost:7000/api/company/${cookieUserid}/updateaddressbyid/`,
        {
          establishedYear,
          aboutCompany,
          addressLine1,
        }
      )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    else {
      alert("Some Error Occured")
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
            Fill Details
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                name="establishedYear"
                value={establishedYear}
                label="establishedYear"
                fullWidth
                onChange={(event) => setEstablishedYear(event.target.value)}
              // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="number"
                name="aboutCompany"
                value={aboutCompany}
                label="Pin Code"
                fullWidth
                onChange={(event) => setAboutCompany(event.target.value)}
              // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="text"
                name="addressLine1"
                value={addressLine1}
                label="Address Line 1"
                fullWidth
                multiline
                onChange={(event) => setAddressLine1(event.target.value)}
              //onChange={handleChange}
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
                href="/company-hr"
              >
                Company HR
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default CompanyAddress;
