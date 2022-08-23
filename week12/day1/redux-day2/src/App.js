import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const user = useSelector((state) => state.user);
  const location = useSelector((state) => state.location);

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},&units=imperial&appid=0477a5f6f5d230031b725a7e2a4ed9f1
`;
    const fetchurl = await fetch(url);
    const JsonA = await fetchurl.json();
    dispatch({ type: "SET_WEATHER", payload: JsonA });
    console.log(JsonA);
    return;
  };
  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        className="input"
        type="text"
        onChange={(e) =>
          dispatch({ type: "SET_LOCATION", payload: e.target.value })
        }
      ></input>
      <button className="button" onClick={() => getWeather()}>
        set weather
      </button>
      <div className="WeatherCard">
        <h2>{weather?.name}</h2>
        <h1>{Math.round(weather?.main?.temp)}</h1>
        <h2>{weather?.weather?.[0]?.main}</h2>
      </div>
      {/* <button onClick={(e) => dispatch({ type: "CHANGE_ME", payload: "🚀" })}>
        changeme
      </button> */}
    </div>
  );
}

export default App;
