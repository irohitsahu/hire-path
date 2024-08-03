import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React example components
import DashboardNavbar from "../dashboard/dashboardNavbar";
import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <Typography variant="body2" color="white">
      A simple {name} alert with{" "}
      <Typography
        component="a"
        href="#"
        variant="body2"
        fontWeight="medium"
        color="white"
      >
        an example link
      </Typography>
      . Give it a click if you like.
    </Typography>
  );

  const renderSuccessSB = (
    <Snackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <Snackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <Snackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <Snackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <>
      <DashboardNavbar />
      <Box mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <Box p={2}>
                <Typography variant="h5">Alerts</Typography>
              </Box>
              <Box pt={2} px={2}>
                <Alert color="primary" dismissible>
                  {alertContent("primary")}
                </Alert>
                <Alert color="secondary" dismissible>
                  {alertContent("secondary")}
                </Alert>
                <Alert color="success" dismissible>
                  {alertContent("success")}
                </Alert>
                <Alert color="error" dismissible>
                  {alertContent("error")}
                </Alert>
                <Alert color="warning" dismissible>
                  {alertContent("warning")}
                </Alert>
                <Alert color="info" dismissible>
                  {alertContent("info")}
                </Alert>
                <Alert color="light" dismissible>
                  {alertContent("light")}
                </Alert>
                <Alert color="dark" dismissible>
                  {alertContent("dark")}
                </Alert>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <Box p={2} lineHeight={0}>
                <Typography variant="h5">Notifications</Typography>
                <Typography
                  variant="button"
                  color="text"
                  fontWeight="regular"
                >
                  Notifications on this page use Toasts from Bootstrap. Read
                  more details here.
                </Typography>
              </Box>
              <Box p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Button
                      variant="gradient"
                      color="success"
                      onClick={openSuccessSB}
                      fullWidth
                    >
                      success notification
                    </Button>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Button
                      variant="gradient"
                      color="info"
                      onClick={openInfoSB}
                      fullWidth
                    >
                      info notification
                    </Button>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Button
                      variant="gradient"
                      color="warning"
                      onClick={openWarningSB}
                      fullWidth
                    >
                      warning notification
                    </Button>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Button
                      variant="gradient"
                      color="error"
                      onClick={openErrorSB}
                      fullWidth
                    >
                      error notification
                    </Button>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Notifications;
