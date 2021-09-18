import React from "react";
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import "./input.css";

const Inputer = ({ input, setInput, findWeather }) => {
  const handlechange = (event) => {
    setInput(event.target.value);
  };


  const handleClick = (event) => {
    event.preventDefault();
    findWeather();
  };

  
  return (
    <div className="inputBox">
      <div className="inputBox__field">
        <h1>Google Weather App</h1>
        <p>Powered by</p>
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
        <form>
          <Input
            placeholder="Enter the city name "
            onChange={handlechange}
            value={input}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleClick}
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Inputer;
