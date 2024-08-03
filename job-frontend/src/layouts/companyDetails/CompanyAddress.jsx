import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";


// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "../page/Layout/layout";

import Axios from "axios";
import Cookies from "js-cookie";
import { Box, Button, Input, Typography } from "@mui/material";

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
            Fill Details
          </Typography>
        </Box>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <Input
                type="text"
                name="establishedYear"
                value={establishedYear}
                label="establishedYear"
                fullWidth
                onChange={(event) => setEstablishedYear(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="number"
                name="aboutCompany"
                value={aboutCompany}
                label="Pin Code"
                fullWidth
                onChange={(event) => setAboutCompany(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="text"
                name="addressLine1"
                value={addressLine1}
                label="Address Line 1"
                fullWidth
                multiline
                onChange={(event) => setAddressLine1(event.target.value)}
                //onChange={handleChange}
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
                href="/company-hr"
              >
                Company HR
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </BasicLayout>
  );
}

export default CompanyAddress;
