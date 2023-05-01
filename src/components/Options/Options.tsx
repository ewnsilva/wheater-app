import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

const Options = () => {
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");

  const changeUf = (event: SelectChangeEvent) => {
    setUf(event.target.value);
  };

  const changeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  const search = (): void => {
    console.log("Teste");
  };

  return (
    <Box sx={{ display: "grid", margin: 2, rowGap: 2 }}>
      <FormControl>
        <InputLabel>Estado</InputLabel>
        <Select
          fullWidth
          value={uf}
          label="Estado"
          onChange={changeUf}
          sx={{ background: "#ffffff" }}
        >
          <MenuItem value="">
            <em>Selecione o Estado</em>
          </MenuItem>
          <MenuItem value="SP">SP</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Cidade</InputLabel>
        <Select
          fullWidth
          value={city}
          label="Cidade"
          onChange={changeCity}
          sx={{ background: "#ffffff" }}
        >
          <MenuItem value="">
            <em>Selecione a Cidade</em>
          </MenuItem>
          <MenuItem value="São José dos Campos">São José dos Campos</MenuItem>
          <MenuItem value="São Paulo">São Paulo</MenuItem>
          <MenuItem value="Santos">Santos</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={search}>
        Procurar
      </Button>
    </Box>
  );
};

export default Options;
