import { Box, Typography } from "@mui/material";

const Search = () => {
  const test = "Teste";

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
      <Typography color="white">{test}</Typography>
    </Box>
  );
};

export default Search;
