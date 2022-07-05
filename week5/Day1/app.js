const SearchBtn = document.getElementById("SearchButton");
const inputbar = document.getElementById("TextBox");
const API_KEY = "ff1cadec65d9f10c3aafc2a01b14612c";
const Screentext = document.getElementById("Screen");

const SearchingTemp = async () => {
  const Input = inputbar.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Input},us&appid=${API_KEY}&units=imperial`;
  const WeatherData = await fetch(url);
  const Json = await WeatherData.json();
  console.log(Json);
  const TempStat = document.createElement("h2");
  TempStat.innerHTML = Math.round(Json.main.feels_like);
  Screentext.append(TempStat);
  const CityName = document.createElement("h1");
  CityName.innerHTML = Json.name;
  console.log(CityName);
  Screentext.append(CityName);
  //   const WeatherId = document.createElement("img")
  //   WeatherData =Json.main.temp;
  //   if (WeatherId === 1) {WeatherId.src =
  //   }
};

SearchBtn.onclick = () => SearchingTemp();
