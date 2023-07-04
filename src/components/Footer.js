import React from "react";
import { Box, Typography } from "@mui/material";
// import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#E3E2DF">
    {/* <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack> */}
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pt="24px"
      pb="40px"
      color="#9A1750"
    >
      Made with ❤️ by Siddharth Koundal
    </Typography>
  </Box>
);

export default Footer;
