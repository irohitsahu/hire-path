import { useState } from "react";

import { Box, Typography, Card, Icon, Menu, MenuItem } from "@mui/material";

// Material Dashboard 2 React examples
import DataTable from "../tables/tableData";

function JobList() {
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <Box>
          <Typography variant="h6" gutterBottom>
            Job List
          </Typography>
          <Box display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <Typography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>30 done</strong> this month
            </Typography>
          </Box>
        </Box>
        <Box color="text" px={2}>
          <Icon
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            fontSize="small"
            onClick={openMenu}
          >
            more_vert
          </Icon>
        </Box>
        {renderMenu}
      </Box>
      <Box>
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
              { Header: "Type Of Job", accessor: "typeOfJob", align: "center" },
              { Header: "Mode Of Job", accessor: "modeOfJob", align: "center" },
              {
                Header: "Responsibility",
                accessor: "responsibility",
                align: "center",
              },
              { Header: "Requirment", accessor: "requirment", align: "center" },
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
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </Box>
    </Card>
  );
}

export default JobList;
