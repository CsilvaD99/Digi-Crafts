const SearchBtn = document.getElementById("SearchButton");
const inputbar = document.getElementById("TextBox");
const API_KEY = "ff1cadec65d9f10c3aafc2a01b14612c";
const Screentext = document.getElementById("Screen");
const WeatherImage = document.getElementById("Weather");

const Clear = () => {
  Screentext.replaceChild();
  const WeatherIcon = document.getElementById("WeatherId");
  WeatherIcon.remove();
};

const SearchingTemp = async () => {
  const Input = inputbar.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Input},us&appid=${API_KEY}&units=imperial`;
  const WeatherData = await fetch(url);
  const Json = await WeatherData.json();
  console.log(Json);
  const TempStat = document.createElement("h2");
  (TempStat.innerHTML = Math.round(Json.main.feels_like)) + "°F";
  Screentext.append(TempStat);
  const CityName = document.createElement("h1");
  CityName.innerHTML = Json.name;
  console.log(CityName);
  Screentext.append(CityName);
  const WeatherId = document.createElement("img");
  const WeatherId2 = Json.weather[0].id;
  WeatherId.className = "WeatherId";
  console.log(WeatherId2);
  if (WeatherId2 >= 200 && WeatherId2 < 300) {
    WeatherId.src = `lighting.png`;
  } else if (WeatherId2 >= 300 && WeatherId2 < 400) {
    WeatherId.src = `rainy-day.png`;
  } else if (WeatherId2 >= 500 && WeatherId2 < 600) {
    WeatherId.src = `downpour.png`;
  } else if (WeatherId2 >= 600 && WeatherId2 < 700) {
    WeatherId.src = "snowfall.png";
  } else if (WeatherId2 >= 700 && WeatherId2 > 800) {
    WeatherId.src = "windy.png";
  } else if (WeatherId2 == 800) {
    WeatherId.src = `sunny.png`;
  } else if (WeatherId2 >= 801 && WeatherId2 >= 804) {
    WeatherId.src = `clear-sky.png`;
  }
  WeatherImage.append(WeatherId);
};

SearchBtn.onclick = () => SearchingTemp();
