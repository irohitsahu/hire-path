import { Box, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      position="absolute"
      width="100%"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bottom={0}
      py={4}
    >
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        A Website That Connects Job Seekers & Job Providers.
      </Typography>

      <Box
        sx={() => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        })}
      >
        <Link href="#">Project Smashers</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Blog</Link>
        <Link href="#">License</Link>
      </Box>
    </Box>
  );
}
export default Footer;
