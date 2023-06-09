import { Box, Typography, CardMedia, CircularProgress } from "@mui/material";

import { descriptionCode, representativeImg } from "utils";

type SearchParams = {
  city: string;
  temperature?: number;
  wheatherStatus?: number;
  loading: boolean;
};

const Search = ({
  temperature,
  wheatherStatus,
  city,
  loading,
}: SearchParams) => {
  return (
    <Box
      textAlign="center"
      justifyContent="center"
      justifySelf="center"
      sx={{
        border: "2px solid white",
        borderRadius: "8px",
        width: 310,
        height: 300,
      }}
    >
      <Box display="flex" flexDirection="column" padding={2}>
        <Box display={!loading ? "" : "none"}>
          <Typography color="white" fontSize={20} fontWeight="bold">
            {city}
          </Typography>
        </Box>

        <Box>
          <CircularProgress
            size={120}
            sx={{
              display: loading ? "" : "none",
              marginTop: "25%",
              alignItems: "center",
            }}
          />
        </Box>

        {temperature && (
          <Box
            display={!loading ? "flex" : "none"}
            textAlign="center"
            marginTop={1}
            alignItems="flex-start"
          >
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
      </Box>
      <Box
        display={!loading ? "" : "none"}
        marginTop={2}
        justifyContent="center"
      >
        <Typography color="white">{descriptionCode(wheatherStatus)}</Typography>
      </Box>
    </Box>
  );
};

export default Search;
