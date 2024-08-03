// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import { Card, Box, Typography } from "@mui/material";

function ProfileInfoCard({ title, description, info, shadow }) {
  const labels = [];
  const values = [];

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(
        uppercaseLetter,
        ` ${uppercaseLetter.toLowerCase()}`
      );

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <Box key={label} display="flex" py={1} pr={2}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </Typography>
      <Typography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </Typography>
    </Box>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <Box p={2}>
        <Box mb={0} lineHeight={1}>
          <Typography variant="button" color="text" fontWeight="light">
            {description}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" pt={2} px={2}>
          <Typography
            variant="h4"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {title}
          </Typography>
        </Box>
        <Box opacity={0.3}>{/* <Divider /> */}</Box>
        <Box alignItems="center" pt={2} px={2}>
          {renderItems}
        </Box>
      </Box>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default ProfileInfoCard;
