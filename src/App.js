import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as Icon } from "./clouds-svgrepo-com.svg";

// const lat = 28.723151;
// const lon = 77.302066;

const App = () => {
  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState(0);
  const [gust, setGust] = useState(0);
  const URL = "https://foreca-weather.p.rapidapi.com/current/101264773";

  const options = {
    params: {
      alt: "0",
      tempunit: "C",
      windunit: "KMH",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
      "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const {
        data: { current },
      } = await axios.get(URL, options);
      setTemp(current.temperature);
      setWind(current.windSpeed);
      setGust(current.windGust);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <h1>Behta City</h1>
      <Icon className="cloud" />
      <div className="details">
        <div className="temp">
          <h4>Temperature: </h4>
          <h1>
            {temp}
            <span>° C</span>
          </h1>
        </div>
        <div className="wind">
          <div className="wind-speed">
            <h4>Wind speed:</h4>
            <h1>
              {Math.trunc(wind)}
              <span>km/h</span>
            </h1>
          </div>
          <div className="wind-gust">
            <h4>Wind Gust:</h4>
            <h1>
              {Math.trunc(gust)}
              <span>km/h</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
