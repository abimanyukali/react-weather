import React, { useState } from "react";
import "./App.css";
import Inputer from "./component/input";
import axios from "axios";
import Result from "./component/Result";

function App() {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const findWeather = async () => {
    const apiKey = "9181e93bea1baf5a421d06e1dcc750af";
    const unit = "metric";
    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=` +
      input +
      "&appid=" +
      apiKey +
      "&units=" +
      unit;

    const response = await axios.get(url);
    console.log(response);
    const temp = await response.data.main.temp;
    const weatherDescription = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

    setTemp(temp);
    setDescription(weatherDescription);
    setIcon(imageUrl);
    setInput ("");  
    // console.log(temp,weatherDescription,imageUrl);

    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
  };

  return (
    <div className="app">
      {temp === "" ? (
        <Inputer input={input} setInput={setInput} findWeather={findWeather} />
      ) : (
        <Result temp={temp} desc={description} icon={icon} setTemp={setTemp} />
      )}
    </div>
  );
}

export default App;
