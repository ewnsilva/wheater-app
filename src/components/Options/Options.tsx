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
    <Box sx={{ display: "grid", margin: 2, rowGap: 2 }}>
      <FormControl sx={{ color: "white" }}>
        <TextField
          fullWidth
          onKeyDown={handleKeyDown}
          label="Cidade"
          onChange={handleChange}
          variant="filled"
          color="secondary"
          sx={{
            background: "transparent",
            fontWeight: "bold",
            border: "2px solid white",
            borderRadius: "8px",
            color: "white",
          }}
        />
      </FormControl>
      <Button variant="contained" onClick={handleClick}>
        Procurar
      </Button>
    </Box>
  );
};
