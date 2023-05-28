// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "./dashboardLayout";
import DashboardNavbar from "./dashboardNavbar";
import Footer from "./dashboardFooter";
import ComplexStatisticsCard from "./complexStatisticsCard";

// Dashboard components
import JobList from "./jobList";
import { useEffect, useState } from "react";

import Axios from "axios";



function Dashboard() {

  const [totalJobs, setTotalJobs] = useState('');

  useEffect(() => {
    Axios.get(
      "http://localhost:7000/api/candidates/jobs/getalljobsno",
      { withCredentials: true }
    )
      .then((res) => {
        console.log(res.data.data);
        setTotalJobs(res.data.data);
      })
  })

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Total Jobs"
                count={totalJobs}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>

        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>

            <Grid item xs={12} md={6} lg={12}>
              <MDBox mb={3}>
                <JobList />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
