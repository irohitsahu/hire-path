// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from '@mui/material/Box';

function Footer() {

  return (
    <Box position="absolute" width="100%" bottom={0} py={4}>
      <Container>
        <Box
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            A Website That Connects Job Seekers & Job Providers.
          </Box>

          <Box
            component="ul"
            sx={() => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
            })}
          >
            <Box component="li" pr={2} lineHeight={1}>
              <Link href="#">
                Project Smashers
              </Link>
            </Box>
            <Box component="li" px={2} lineHeight={1}>
              <Link href="#">
                About Us
              </Link>
            </Box>
            <Box component="li" px={2} lineHeight={1}>
              <Link href="#">
                Blog
              </Link>
            </Box>
            <Box component="li" pl={2} lineHeight={1}>
              <Link href="#">
                License
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Footer;
