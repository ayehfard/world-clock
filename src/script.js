// Los Angeles
setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

// Sydeny
setInterval(function () {
  let sydenyElement = document.querySelector("#sydney");
  let sydenyDateElement = sydenyElement.querySelector(".date");
  let sydenyTimeElement = sydenyElement.querySelector(".time");
  let sydenyTime = moment().tz("Australia/Sydney");

  sydenyDateElement.innerHTML = sydenyTime.format("MMM Do YYYY");
  sydenyTimeElement.innerHTML = sydenyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

// Tokyo
setInterval(function () {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

// Paris
setInterval(function () {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);
