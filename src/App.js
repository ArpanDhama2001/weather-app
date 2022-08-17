import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as Icon } from "./clouds-svgrepo-com.svg";

// const location = 101264773;

// const lat = 28.723151;
// const lon = 77.302066;

const App = () => {
  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState(0);

  const options = {
    method: "GET",
    url: "https://foreca-weather.p.rapidapi.com/current/101264773",
    params: {
      alt: "0",
      tempunit: "C",
      windunit: "MS",
      tz: "Europe/London",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "bbedd09bb2mshe86e77d95268f4ap1402a6jsnff42fc14bb14",
      "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
    },
  };

  useEffect(() => {
    return () => {
      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data.current);
          setTemp(response.data.current.temperature);
          setWind(response.data.current.windGust);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  }, []);

  return (
    <div className="wrapper">
      <h1>Behta City</h1>
      {/* <svg src={cloud} fill="#fff" width="20px" height="20px" /> */}
      {/* <img src={cloud} alt="cloud" /> */}
      <Icon className="cloud" />
      <div className="details">
        <div className="temp">
          <h4>Temperature: </h4>
          <h1>
            {temp}
            <span>° C</span>
          </h1>
        </div>
        <div className="wind-speed">
          <h4>Wind speed:</h4>
          <h1>
            {Math.trunc(wind)}
            <span>km/h</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
