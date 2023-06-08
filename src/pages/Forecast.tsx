import { useCallback, useEffect, useState } from "react";

import { Box, Typography, useMediaQuery } from "@mui/material";

import { Options, Search } from "components";
import { useAxios } from "hooks";
import { Background, BackgroundMobile } from "assets";

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

  const [loading, setLoading] = useState(false);

  const matchesXs = useMediaQuery("(max-width: 465px)");
  const matchesSm = useMediaQuery("(max-width: 650px)");

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
          setLoading(false);
        });
    },
    [api]
  );

  const onSubmit = () => {
    setLoading(true);
    localizationSearch(city);
    setSelectedCity(city);
  };

  useEffect(() => {
    wheatherSearch(Number(localization?.lat), Number(localization?.lon), true);
  }, [localization, wheatherSearch]);

  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        backgroundImage: matchesXs
          ? `url(${BackgroundMobile})`
          : `url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        style={{
          display: matchesXs ? " " : "flex",
          flexDirection: "column",
          justifyContent: matchesXs ? "center" : "",
          alignItems: "center",
          height: matchesXs ? "750px" : "900px",
          width: matchesXs ? "360px" : "100%",
          textAlign: "center",
        }}
      >
        <Box display="flex" justifyContent="center">
          <Typography
            margin={matchesXs ? 2 : 5}
            variant="h1"
            alignItems="center"
            fontFamily="Iceland"
            fontSize={80}
          >
            Weather App
          </Typography>
        </Box>

        <Box display={matchesSm ? "" : "flex"}>
          <Box
            display="flex"
            margin={matchesXs ? 3 : 0}
            marginRight={matchesSm ? 0 : 3}
            marginBottom={matchesXs ? 3 : 3}
          >
            <Options handleChange={changeCity} handleClick={onSubmit} />
          </Box>

          <Box display="flex" justifyContent="center">
            <Search
              city={selectedCity}
              temperature={wheather?.temperature}
              wheatherStatus={wheather?.weathercode}
              loading={loading}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
