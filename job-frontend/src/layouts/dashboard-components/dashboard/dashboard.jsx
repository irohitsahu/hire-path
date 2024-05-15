// @mui material components
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

// Material Dashboard 2 React example components";
import DashboardNavbar from "./dashboardNavbar";
import ComplexStatisticsCard from "../../../components/CardBox/complexStatisticsCard";

// Dashboard components
import JobList from "./jobList";
import DashboardLayout from "layouts/page/LayoutType/dashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Box mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Total Jobs"
                count={26}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box mb={1.5}>
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
            </Box>
          </Grid>
        </Grid>
        <Box mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <Box mb={3}>
                <JobList />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
