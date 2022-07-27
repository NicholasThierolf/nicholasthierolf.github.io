const content = [
  ["Wie man 8 Stunden schläft", "Einschlafen", "8 Stunden später aufwachen"],
  ["Wie man 9 Stunden schläft", "Einschlafen", "9 Stunden späer aufwachen"],
];
document.addEventListener("DOMContentLoaded", next);

function next() {
  let item = content[Math.floor(Math.random() * content.length)];
  document.getElementById("title").innerHTML = item[0];
  document.getElementById("step-1").innerHTML = item[1];
  document.getElementById("step-2").innerHTML = item[2];
}
