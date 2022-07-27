const content = [
  ["Einschlafen", "8 Stunden später aufwachen"],
  ["Einschlafen", "9 Stunden späer aufwachen"],
];
document.addEventListener("DOMContentLoaded", next);

function next() {
  let item = content[Math.floor(Math.random() * content.length)];
  document.getElementById("step-1").innerHTML = item[0];
  document.getElementById("step-2").innerHTML = item[1];
}
