// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "../dashboard/dashboardLayout";
import DashboardNavbar from "../dashboard/dashboardNavbar";
import Footer from "../dashboard/dashboardFooter";
import ProfileInfoCard from "./profileInfoCard";

// Overview page components
import ProfileHeader from "./profileHeader";
import Axios from "axios";
import { useEffect, useState } from "react";


function Overview() {


  const [user, setUser] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await Axios.get('http://localhost:7000/api/candidates/64101066afa5edd4e1c19b84')
      .then(res => {
        console.log(res.data.data)
        setUser(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  };



  return (
    <DashboardLayout>
      {user && <div>
        <DashboardNavbar />
        <MDBox mb={2} />
        <ProfileHeader>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                {user.name}
              </MDTypography>
              <MDTypography variant="h5" fontWeight="light">
                {user.basicDetail.bio}
              </MDTypography>
            </MDBox>
          </Grid>
          <MDBox mt={5} mb={3}>
            <Grid container spacing={1}>

              <Grid item xs={12} md={6} xl={12} sx={{ display: "flex" }}>
                <ProfileInfoCard
                  title="basic Details"
                  info={{
                    fullName: user.name,
                    email: user.email,
                    mobile: user.basicDetail.mobileNo,
                    gender: user.basicDetail.gender,
                    address: user.basicDetail.address,
                    dateOfBirth: user.basicDetail.dateOfBirth
                  }}
                  action={{ route: "", tooltip: "Edit Profile" }}
                  shadow={false}
                />
              </Grid>

              <Grid item xs={12} md={6} xl={12} sx={{ display: "flex" }}>
                <ProfileInfoCard
                  title="education Details"
                  info={{
                    nameOfInstitute: user.education[0].nameOfInstitute,
                    nameOfUniversity: user.education[0].nameOfUniversity,
                    stream: user.education[0].stream,
                    admissionYear: user.education[0].admissionYear,
                    passingYear: user.education[0].passingYear,
                    aggregate: user.education[0].aggregate
                  }}
                  action={{ route: "", tooltip: "Edit Profile" }}
                  shadow={false}
                /><Divider orientation="horizontal" sx={{ mx: 0 }} />
              </Grid>

              <Grid item xs={12} md={6} xl={12} sx={{ display: "flex" }}>
                <ProfileInfoCard
                  title="skills"
                  info={{
                    languages: user.skills.languages,
                    programmingLanguages: user.skills.programmingLanguages,
                    tools: user.skills.tools
                  }}
                  action={{ route: "", tooltip: "Edit Profile" }}
                  shadow={false}
                />
              </Grid>

              <Grid item xs={12} md={6} xl={12} sx={{ display: "flex" }}>
                <ProfileInfoCard
                  title="job Preference"
                  info={{
                    location: user.jobPreference.location,
                    modeOfJob: user.jobPreference.modeOfJob
                  }}
                  action={{ route: "", tooltip: "Edit Profile" }}
                  shadow={false}
                />
              </Grid>
            </Grid>
          </MDBox>
        </ProfileHeader>
        <Footer />
      </div>
      }
    </DashboardLayout>
  );
}

export default Overview;
