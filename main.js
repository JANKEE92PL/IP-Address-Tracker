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
