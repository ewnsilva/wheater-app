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
      <FormControl>
        <TextField
          fullWidth
          onKeyDown={handleKeyDown}
          label="Cidade"
          onChange={handleChange}
          sx={{ background: "#ffffff" }}
        />
      </FormControl>
      <Button variant="contained" onClick={handleClick}>
        Procurar
      </Button>
    </Box>
  );
};
