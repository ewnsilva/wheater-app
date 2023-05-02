import { Box, Typography } from "@mui/material";

import { descriptionCode } from "utils";

type SearchParams = {
  city: string;
  temperature?: number;
  wheatherStatus?: number;
};

const Search = ({ temperature, wheatherStatus }: SearchParams) => {
  return (
    <Box
      sx={{
        border: "2px solid white",
        width: 310,
        height: 260,
        textAlign: "center",
        justifyContent: "center",
        justifySelf: "center",
        marginBottom: 25,
      }}
    >
      <Box padding={2}>
        <Typography color="white" marginBottom={5}>
          Temperatura: {temperature?.toFixed()} ºC
        </Typography>
        <Typography color="white" marginBottom={5}>
          Clima: {descriptionCode(wheatherStatus)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Search;
