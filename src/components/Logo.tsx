import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

const logoImg = require("../logo.png");

function Logo({
  disabledLink = false,
  sx,
}: {
  disabledLink?: boolean;
  sx?: Record<string, any>;
}) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src={logoImg} alt="logo" width="100%" />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;
