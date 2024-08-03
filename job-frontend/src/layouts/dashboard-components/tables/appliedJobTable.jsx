// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


// Material Dashboard 2 React example components
import DashboardNavbar from "../dashboard/dashboardNavbar";
import DataTable from "./tableData";
import { Box, Typography } from "@mui/material";

function Tables() {
  return (
    <>
      <DashboardNavbar />
      <Box pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Box
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Typography variant="h6" color="white">
                  Applied Job List
                </Typography>
              </Box>
              <Box pt={3}>
                <DataTable
                  table={{
                    columns: [
                      {
                        Header: "Company Name",
                        accessor: "companyName",
                        width: "45%",
                        align: "left",
                      },
                      {
                        Header: "Job Description",
                        accessor: "jobDescription",
                        width: "10%",
                        align: "left",
                      },
                      {
                        Header: "Type Of Job",
                        accessor: "typeOfJob",
                        align: "center",
                      },
                      {
                        Header: "Mode Of Job",
                        accessor: "modeOfJob",
                        align: "center",
                      },
                      {
                        Header: "Responsibility",
                        accessor: "responsibility",
                        align: "center",
                      },
                      {
                        Header: "Requirment",
                        accessor: "requirment",
                        align: "center",
                      },
                    ],

                    rows: [
                      {
                        companyName: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            DEF COMPANY
                          </Typography>
                        ),
                        jobDescription: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            CDE SSKIL
                          </Typography>
                        ),
                        typeOfJob: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            23/04/18
                          </Typography>
                        ),
                        modeOfJob: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            Edit
                          </Typography>
                        ),
                        responsibility: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            23/04/18
                          </Typography>
                        ),
                        requirment: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            23/04/18
                          </Typography>
                        ),
                      },
                      {
                        companyName: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            ABC COMPANY
                          </Typography>
                        ),
                        jobName: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            CDE SSKIL
                          </Typography>
                        ),
                        status: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            23/04/18
                          </Typography>
                        ),
                        appliedDate: (
                          <Typography
                            component="a"
                            href="#"
                            variant="caption"
                            color="text"
                            fontWeight="medium"
                          >
                            Edit
                          </Typography>
                        ),
                      },
                    ],
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Tables;
