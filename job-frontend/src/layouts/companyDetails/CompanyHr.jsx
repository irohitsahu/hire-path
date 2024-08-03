import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";


// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "../page/Layout/layout";

import Axios from "axios";

import Cookies from "js-cookie";
import { Box, Button, Input, Typography } from "@mui/material";

// HR Details
function CompanyHr() {
  const [email, setEmail] = useState("");
  const [mobileNo, setMobile] = useState("");
  //   const [aboutCompany, setAboutCompany] = useState();

  const cookieUserid = Cookies.get("Userid");
  alert(cookieUserid);

  const save = () => {
    if (cookieUserid) {
      Axios.put(
        `http://localhost:7000/api/company/${cookieUserid}/updatehrdetails/`,

        {
          email,
          mobileNo,
        }
      )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert("Some error occured");
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
            Fill HR Details Details
          </Typography>
        </Box>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <Input
                type="email"
                name="email"
                value={email}
                label="HR Email"
                fullWidth
                onChange={(event) => setEmail(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mb={2}>
              <Input
                type="number"
                name="mobileNo"
                value={mobileNo}
                label="Mobile No"
                fullWidth
                onChange={(event) => setMobile(event.target.value)}
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
                href="/company-job-post"
              >
                post
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </BasicLayout>
  );
}

export default CompanyHr;
