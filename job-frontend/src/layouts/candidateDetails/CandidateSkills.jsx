import { useState } from "react";

// @mui material components
import { Card, Box, Typography, Input, Button } from "@mui/material";

// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import DashboardLayout from "layouts/page/LayoutType/dashboardLayout";

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
    <DashboardLayout>
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
            Enter Your Skills
          </Typography>
        </Box>

        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={2}>
              <Input
                type="text"
                name="languages"
                value={languages}
                label="Languages"
                fullWidth
                onChange={(event) => setLanguages(event.target.value)}
                //onChange={handleChange}
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
                name="tools"
                value={tools}
                label="Tools"
                fullWidth
                onChange={(event) => setTools(event.target.value)}
                // onChange={handleChange}
              />
            </Box>

            <Box mt={4} mb={1}>
              <Button variant="gradient" color="info" fullWidth onClick={save}>
                Save
              </Button>
            </Box>
            <Box mt={4} mb={1}>
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
    </DashboardLayout>
  );
}

export default CandidateSkills;
