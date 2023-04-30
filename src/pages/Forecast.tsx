import { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { height } from "@mui/system";

const Forecast = () => {
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");

  const changeUf = (event: SelectChangeEvent) => {
    setUf(event.target.value);
  };

  const changeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

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
        <Button variant="contained">Procurar</Button>
      </Box>

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
        <Typography color="white">Teste</Typography>
      </Box>
    </Box>
  );
};
export default Forecast;
