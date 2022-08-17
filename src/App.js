import axios from "axios";
import { ReactComponent as Icon } from "./clouds-svgrepo-com.svg";

const KEY = "7JUvjrAPtgR0wBJXafH6ayybhewytjg3";

const options = {
  method: "GET",
  url: "https://api.tomorrow.io/v4/timelines",
  params: {
    location: "28.654200%2C%2077.237300",
    fields: "temperature&fields=windGust&fields=windSpeed",
    units: "imperial",
    timesteps: "1h",
    startTime: "now",
    endTime: "nowPlus1h",
    apikey: "7JUvjrAPtgR0wBJXafH6ayybhewytjg3",
  },
  headers: { Accept: "application/json", "Accept-Encoding": "gzip" },
};

// axios
//   .request(options)
//  .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });

const App = () => {
  const getData = async (options) => {
    const data = await axios.get(
      "https://api.tomorrow.io/v4/timelines?location=28.654200%2C%2077.237300&fields=temperature&fields=windGust&fields=windSpeed&units=imperial&timesteps=1h&startTime=now&endTime=nowPlus1h&apikey=7JUvjrAPtgR0wBJXafH6ayybhewytjg3"
    );
    console.log(data.data.data.timelines[0]);
  };

  getData(options);

  return (
    <div className="wrapper">
      <h1>Delhi</h1>
      {/* <svg src={cloud} fill="#fff" width="20px" height="20px" /> */}
      {/* <img src={cloud} alt="cloud" /> */}
      <Icon className="cloud" />
      <div className="details">
        <div className="temp">
          <h4>Temperature: </h4>
          <h1>
            32<span>° C</span>
          </h1>
        </div>
        <div className="wind-speed">
          <h4>Wind speed:</h4>
          <h1>
            16<span>km/h</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
