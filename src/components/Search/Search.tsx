import { Box, Typography, CardMedia, Card } from "@mui/material";
import { ClearSky } from "assets";

import { descriptionCode, representativeImg } from "utils";

type SearchParams = {
  city: string;
  temperature?: number;
  wheatherStatus?: number;
};

const Search = ({ temperature, wheatherStatus, city }: SearchParams) => {
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
        <Box>
          <Typography color="white" fontSize={20} fontWeight="bold">
            {city}
          </Typography>
        </Box>
        {temperature && (
          <Box display="flex" textAlign="center" alignItems="flex-start">
            <Typography color="white" marginTop={2} fontSize={35}>
              {temperature?.toFixed()} ºC
            </Typography>
            <CardMedia
              component="img"
              image={representativeImg(wheatherStatus)}
              sx={{ maxWidth: 180 }}
            />
          </Box>
        )}
        <Typography color="white">{descriptionCode(wheatherStatus)}</Typography>
      </Box>
    </Box>
  );
};

export default Search;
