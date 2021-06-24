document.getElementById("button").addEventListener("click", makeRequest);

let name = document.getElementById("name");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let img = document.getElementById("img");

let httpRequest;
const url = "https://pokeapi.co/api/v2/pokemon/";
function makeRequest() {
  httpRequest = new XMLHttpRequest();
  if (!httpRequest) {
    alert("it did not work");
    return false;
  }

  let id = Math.floor(Math.random() * 100 + 1);
  let fullurl = url + id;
  document.getElementById("dis").innerHTML = "Loading ...";
  httpRequest.onreadystatechange = fillInfo;
  httpRequest.open("GET", fullurl);
  httpRequest.send();
}

function fillInfo() {
  let responseContent;
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      responseContent = httpRequest.responseText;
      console.log(responseContent);

      var parsed = JSON.parse(responseContent);
      console.log(parsed);

      img.src = parsed.sprites.front_default;
      name.innerHTML = parsed.name.toUpperCase();
      height.innerHTML = "height: " + parsed.height + " inches";
      weight.innerHTML = "weight: " + parsed.weight + " lbs";
      document.getElementById("dis").innerHTML = "Random your Pokemon";
    }
  }
}
