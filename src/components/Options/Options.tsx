import { Box, Button, FormControl, TextField } from "@mui/material";

type OptionParams = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

export const Options = ({ handleChange, handleClick }: OptionParams) => {
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Box display="flex" flexDirection="column" width="314px" rowGap={2}>
      <FormControl>
        <TextField
          fullWidth
          onKeyDown={handleKeyDown}
          label={<b>Insira sua cidade</b>}
          onChange={handleChange}
          variant="filled"
          color="secondary"
          sx={{
            backgroundColor: "#FFFFFF",
            fontWeight: "bold",
            borderRadius: "8px",
            color: "black",
          }}
        />
      </FormControl>
      <Button variant="contained" onClick={handleClick}>
        Procurar
      </Button>
    </Box>
  );
};
