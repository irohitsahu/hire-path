import { Box, Typography, Grid, Divider } from "@mui/material";

// Material Dashboard 2 React example components
import DashboardLayout from "layouts/page/LayoutType/dashboardLayout";
import DashboardNavbar from "../dashboard/dashboardNavbar";
import ProfileInfoCard from "./profileInfoCard";

// Overview page components
import ProfileHeader from "./profileHeader";
import { useEffect, useState } from "react";

function Overview() {
  const [user, setUser] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setUser(true);
  };

  return (
    <DashboardLayout>
      {user && (
        <div>
          <DashboardNavbar />
          <Box mb={2} />
          <ProfileHeader>
            <Grid item>
              <Box height="100%" mt={0.5} lineHeight={1}>
                <Typography variant="h5" fontWeight="medium">
                  {/* {user.name} */}
                </Typography>
                <Typography variant="h5" fontWeight="light">
                  {/* {user.basicDetail.bio} */}
                </Typography>
              </Box>
            </Grid>
            <Box mt={5} mb={3}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} xl={12} sx={{ display: "flex" }}>
                  <ProfileInfoCard
                    title="basic Details"
                    info={
                      {
                        // fullName: user.name,
                        // email: user.email,
                        // mobile: user.basicDetail.mobileNo,
                        // gender: user.basicDetail.gender,
                        // address: user.basicDetail.address,
                        // dateOfBirth: user.basicDetail.dateOfBirth,
                      }
                    }
                    action={{ route: "", tooltip: "Edit Profile" }}
                    shadow={false}
                  />
                </Grid>

                <Grid item xs={12} md={6} xl={12} sx={{ display: "flex" }}>
                  <ProfileInfoCard
                    title="education Details"
                    info={
                      {
                        // nameOfInstitute: user.education[0].nameOfInstitute,
                        // nameOfUniversity: user.education[0].nameOfUniversity,
                        // stream: user.education[0].stream,
                        // admissionYear: user.education[0].admissionYear,
                        // passingYear: user.education[0].passingYear,
                        // aggregate: user.education[0].aggregate,
                      }
                    }
                    action={{ route: "", tooltip: "Edit Profile" }}
                    shadow={false}
                  />
                  <Divider orientation="horizontal" sx={{ mx: 0 }} />
                </Grid>

                <Grid item xs={12} md={6} xl={12} sx={{ display: "flex" }}>
                  <ProfileInfoCard
                    title="skills"
                    info={
                      {
                        // languages: user.skills.languages,
                        // programmingLanguages: user.skills.programmingLanguages,
                        // tools: user.skills.tools,
                      }
                    }
                    action={{ route: "", tooltip: "Edit Profile" }}
                    shadow={false}
                  />
                </Grid>

                <Grid item xs={12} md={6} xl={12} sx={{ display: "flex" }}>
                  <ProfileInfoCard
                    title="job Preference"
                    info={
                      {
                        // location: user.jobPreference.location,
                        // modeOfJob: user.jobPreference.modeOfJob,
                      }
                    }
                    action={{ route: "", tooltip: "Edit Profile" }}
                    shadow={false}
                  />
                </Grid>
              </Grid>
            </Box>
          </ProfileHeader>
        </div>
      )}
    </DashboardLayout>
  );
}

export default Overview;
