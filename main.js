const getElement = (elm) => {
  return document.querySelector(elm);
};

const getInput = () => {
  let search = getElement("#search");
  return search.value;
};

const ApiCall = (ip = "8.8.8.8") => {
  fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_Babs3OqgxR4kGQ90CV4zDL2l000zs&ipAddress=${ip}`
  )
    .then((response) => response.json())
    .then((data) => showInput(data));
  //   .then((data) => console.log(data));
};

const searchBTN = getElement("#searchBTN");
searchBTN.addEventListener("click", (e) => {
  let input = getInput();
  ApiCall(input);
  geocodingAPI(input);
});

const ipAddress = getElement("#ip");
const city = getElement("#city");
const timezone = getElement("#timezone");
const isp = getElement("#isp");

const showInput = (data) => {
  ipAddress.innerText = data.ip;
  city.innerText = data.location.region;
  timezone.innerText = data.location.timezone;
  isp.innerText = data.isp;
};

//* Geocoding
const geocodingAPI = (place) => {
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYWRvbGYxOTQ1IiwiYSI6ImNreTAxOTM1NjAxZWwyeHM3ZmxqeHRpanYifQ.4TMiWW2WNO75JWYlnLQcHA`
  )
    .then((response) => response.json())
    .then((data) => createMAP(data));
  // .then((data) => console.log("GEOCODING API", data));
};
const createMAP = (data) => {
  https: mapboxgl.accessToken =
    "pk.eyJ1IjoiYWRvbGYxOTQ1IiwiYSI6ImNreTAxOTM1NjAxZWwyeHM3ZmxqeHRpanYifQ.4TMiWW2WNO75JWYlnLQcHA";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [data.features[0].center[0], data.features[0].center[1]], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
};
