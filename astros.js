// loadJSON("http://api.open-notify.org/astros.json", gotData);

// function gotData(data) {
//   println(data);
//   alert(data);
// }va


names = {
  name:"jew",
  Colz:"yellow"
}

$.getJSON("http://api.open-notify.org/astros.json", gotData, "jsonp");

function gotData(data) {
  console.log(data);
  document.getElementsByTagName("P")[0].innerHTML=data.number;
}
