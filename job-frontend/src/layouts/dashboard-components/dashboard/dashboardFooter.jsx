// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "../../../assets/theme/base/typography";

function Footer({ company, links }) {
  // const { href, name } = company;
  const { size } = typography;

  // const renderLinks = () =>
  //   links.map((link) => (
  //     <MDBox key={link.name} component="li" px={2} lineHeight={1}>
  //       <Link href={link.href} target="_blank">
  //         <MDTypography variant="button" fontWeight="regular" color="text">
  //           {link.name}
  //         </MDTypography>
  //       </Link>
  //     </MDBox>
  //   ));

  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        verticalAlign="top"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        {/* <Link href={href} target="_blank"> */}
        <MDTypography variant="button" fontWeight="medium" >
          &nbsp;JOB PORTAL&nbsp;
        </MDTypography>
        {/* </Link> */}
        A Website That Connects Job Seekers & Job Providers.
      </MDBox>
      <MDBox
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        <MDBox component="li" pr={2} lineHeight={1} justifyContent="center" alignItems="center">
          <MDTypography
            variant="button"
            fontWeight="regular"
            color="text"
            fontSize={size.sm}
          >
            Project Smashers
          </MDTypography>
        </MDBox>
        <MDBox component="li" px={2} lineHeight={1}>
          <Link href="" target="_blank">
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              fontSize={size.sm}
            >
              About Us
            </MDTypography>
          </Link>
        </MDBox>
        <MDBox component="li" px={2} lineHeight={1}>
          <Link href="">
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              fontSize={size.sm}
            >
              Blog
            </MDTypography>
          </Link>
        </MDBox>
        <MDBox component="li" pl={2} lineHeight={1}>
          <Link href="" >
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              fontSize={size.sm}
            >
              License
            </MDTypography>
          </Link>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

export default Footer;
