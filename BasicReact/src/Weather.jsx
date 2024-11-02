import React from "react";
const ColdWeather = () => <h1>it's cold outside</h1>;
const NiceWeather = () => <h1>it's nice outside</h1>;
const HotWeather = () => <h1>it's hot outside</h1>;
const Weather = ({ temperature }) => {
  if (temperature < 15) return <ColdWeather></ColdWeather>;
  else if (temperature > 15 && temperature < 25)
    return <NiceWeather></NiceWeather>;
  else return <HotWeather></HotWeather>;
};

export default Weather;
