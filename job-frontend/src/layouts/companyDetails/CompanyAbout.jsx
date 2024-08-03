import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";


// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "../page/Layout/layout";

import Axios from "axios";

import Cookies from "js-cookie";
import { Box, Button, Input, Typography } from "@mui/material";

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
            Fill Head Count, Established Year, About Company Details
          </Typography>
        </Box>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <Input
                type="number"
                name="hrEmail"
                value={hrEmail}
                label="Head Count"
                fullWidth
                onChange={(event) => sethrEmail(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="number"
                name="establishedYear"
                value={establishedYear}
                label="Established Year"
                fullWidth
                onChange={(event) => setEstablishedYear(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="aboutCompany"
                value={aboutCompany}
                label="About Company"
                fullWidth
                multiline
                onChange={(event) => setAboutCompany(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mt={4} mb={1}>
              <Button
                variant="gradient"
                color="info"
                fullWidth
                onClick={save}
              >
                Save
              </Button>
            </Box>
            <Box mt={4} mb={1}>
              <Button
                variant="gradient"
                color="success"
                fullWidth
                href="/company-address"
              >
                Company Address
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </BasicLayout>
  );
}

export default CompanyAbout;
