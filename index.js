async function funcName(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.name.official);

  var name = "";
  var currencyName = "";
  var capital = "";
  var listBorders = "";
  var carSigns = "";
  var timeZone = "";
  var latlng = "";
  var flag = "";

  data.forEach((obj) => {
    name = name + "<br />" + "Offical Name: " + obj.name.official;
    currencyName =
      currencyName + "<br />" + "Currency Name: " + Object.keys(obj.currencies);
    capital = capital + "<br />" + "Capital: " + obj.capital;
    listBorders = listBorders + "<br />" + "Borders: " + obj.borders[0];
    carSigns = carSigns + "<br />" + "Car Sign: " + obj.car.signs;
    timeZone = timeZone + "<br />" + "Time Zone: " + obj.timezones;
    latlng = latlng + "<br />" + "Latitude and Longitude: " + obj.latlng;
    flag = flag + "<br />" + "Flag: " + obj.flag;
    var element = document.querySelector("h1");
    element.innerHTML =
      name +
      currencyName +
      capital +
      listBorders +
      carSigns +
      timeZone +
      flag +
      latlng;
  });
}

funcName("https://restcountries.com/v3.1/all");
