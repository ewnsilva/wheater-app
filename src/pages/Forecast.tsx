import { useState } from "react";

import { Box, Typography } from "@mui/material";

import { Options, Search } from "components";

const Forecast = () => {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: 20,
        height: "720px",
        width: "380px",
        backgroundColor: `blue`,
        textAlign: "center",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          alignItems={"center"}
          sx={{ marginTop: "20px" }}
        >
          Wheather App
        </Typography>
      </Box>
      <Options />

      <Search />
    </Box>
  );
};
export default Forecast;
