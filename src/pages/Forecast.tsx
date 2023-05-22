import { useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Options, Search } from "components";
import { useAxios } from "hooks";

import { DisplayPc } from "assets";

type WheatherProps = {
  temperature: number;
  weathercode: number;
};

type LocalizationProps = {
  lat: string;
  lon: string;
};

export const Forecast = () => {
  const { api } = useAxios();
  const [localization, setLocalization] = useState<LocalizationProps>();
  const [wheather, setWheather] = useState<WheatherProps>();
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const changeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const localizationSearch = useCallback(
    (city: string) => {
      const url = "https://nominatim.openstreetmap.org/search?";
      const params = { city, format: "json" };

      api
        .get(url, {
          params: { ...params },
        })
        .then(({ data }) => {
          setLocalization(data[0]);
        });
    },
    [api]
  );

  const wheatherSearch = useCallback(
    (latitude: number, longitude: number, current_weather: boolean) => {
      const url = "https://api.open-meteo.com/v1/forecast";
      const params = { latitude, longitude, current_weather };

      api
        .get(url, {
          params: { ...params },
        })
        .then(({ data }) => {
          setWheather(data.current_weather);
        });
    },
    [api]
  );

  const onSubmit = () => {
    localizationSearch(city);
    setSelectedCity(city);
  };

  useEffect(() => {
    wheatherSearch(Number(localization?.lat), Number(localization?.lon), true);
  }, [localization]);

  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: 20,
        height: "700px",
        width: "342px",
        backgroundImage: `url(${DisplayPc})`,
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
      <Options handleChange={changeCity} handleClick={onSubmit} />

      <Search
        city={selectedCity}
        temperature={wheather?.temperature}
        wheatherStatus={wheather?.weathercode}
      />
    </Box>
  );
};
