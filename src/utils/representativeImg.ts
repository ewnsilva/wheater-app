import {
  ClearSky,
  ColdRain,
  Fog,
  FreezingRain,
  MainlyClear,
  Rain,
  Snowfall,
  Thunderstorm,
} from "assets";

export const representativeImg = (wheatherStatus?: number) => {
  switch (wheatherStatus) {
    case 0:
      return ClearSky;
    case 1:
      return MainlyClear;
    case 2:
      return MainlyClear;
    case 3:
      return MainlyClear;
    case 45:
      return Fog;
    case 48:
      return Fog;
    case 51:
      return Rain;
    case 53:
      return Rain;
    case 55:
      return Rain;
    case 56:
      return ColdRain;
    case 57:
      return ColdRain;
    case 61:
      return Rain;
    case 63:
      return Rain;
    case 65:
      return Rain;
    case 66:
      return FreezingRain;
    case 67:
      return FreezingRain;
    case 71:
      return Snowfall;
    case 73:
      return Snowfall;
    case 75:
      return Snowfall;
    case 77:
      return Snowfall;
    case 80:
      return Thunderstorm;
    case 81:
      return Thunderstorm;
    case 82:
      return Thunderstorm;
    case 85:
      return FreezingRain;
    case 86:
      return FreezingRain;
    case 95:
      return Thunderstorm;
    case 96:
      return FreezingRain;
    case 99:
      return FreezingRain;
    default:
      return "";
  }
};
