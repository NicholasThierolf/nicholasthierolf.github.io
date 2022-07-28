const content = shuffle([
  ["Wie man 8 Stunden schläft", "Einschlafen", "8 Stunden später aufwachen"],
  ["Wie man 9 Stunden schläft", "Einschlafen", "9 Stunden später aufwachen"],
  [
    "Wie man keine Panik hat",
    "Realisieren, dass fast alles im Leben im Großen und Ganzen meaningless ist, und dadurch die Insignifikanz der aktuellen Situation begreifen",
    "Keine Panik mehr",
  ],
  [
    "Wie man gute Guides schreibt",
    "Den ersten Schritt scheiben",
    "Den zweiten Schritt schreiben",
  ],
  [
    "Wie man hübsche Ornamentbilder bekommt",
    "Joanne darum bitten welche zu zeichnen",
    "Danke sagen :)",
  ],
]);
document.addEventListener("DOMContentLoaded", next);

function next() {
  if (content.length > 0) {
    let item = content.pop();
    document.getElementById("title").innerHTML = item[0];
    document.getElementById("step-1").innerHTML = item[1];
    document.getElementById("step-2").innerHTML = item[2];
  } else {
    document.getElementById("title").innerHTML = "Das waren alle Guides";
    document.getElementById("title").toggleAttribute("out-of-guides", true);
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "none";
    document.querySelector("button").style.display = "none";
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
