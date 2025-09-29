function updateTime() {
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  //Edinburgh
  let edinburghElement = document.querySelector("#edinburgh");
  let edinburghDateElement = edinburghElement.querySelector(".date");
  let edinburghTimeElement = edinburghElement.querySelector(".time");
  let edinburghTime = moment().tz("Etc/GMT+1");

  edinburghDateElement.innerHTML = edinburghTime.format("MMMM Do, YYYY");
  edinburghTimeElement.innerHTML = edinburghTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let citiesTimeZone = event.target.value;
  if (citiesTimeZone === "current") {
    citiesTimeZone = moment.tz.guess();
  }
  let citiesName = citiesTimeZone.replace("_", " ").split("/")[1];
  citiesTime = moment().tz(citiesTimeZone);
  //console.log(citiesTime.format("MMMM Do, YYYY"));
  let cityContainerElement = document.querySelector("#cityContainer");
  cityContainerElement.innerHTML = `
 <div class="city">
          <div>
            <h2>${citiesName}</h2>
          <div class="date">${citiesTime.format("MMMM Do, YYYY")}</div>
        </div>
          <div class="time">${citiesTime.format(
            "h:mm:ss"
          )}<small>${citiesTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
