const baseURL = window.location.href.split("#")[0];
const content = [
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
  [
    "Wie man eine*n crush (nicht) klarmacht",
    "Hab eine*n crush",
    "Sag ihm/ihr, dass ihr für immer befreundet bleiben wollt",
  ],
  [
    "Wie man einen Käfer aus dem Zimmer bekommt",
    "Fenster auf, Tür zu",
    "Warten bis der Käfer das Zimmer selbständig verlassen hat",
  ],
  [
    "Wie man an Halloween keine Süßigkeiten bekommt",
    "Sich nicht verkleiden",
    "Zuhause bleiben",
  ],
  [
    "Wie man pünktlich aus dem Bett kommt",
    "Im Bett liegen",
    "Rechtzeitig aufstehen",
  ],
  ["Wie man reich wird", "Viel Geld verdienen", "Weniger Geld ausgeben"],
  [
    "Wie man einen Marathon läuft",
    "Laufen",
    "Nach 42.195 Metern aufhören zu laufen",
  ],
];

let currentElement = null;
let globalAudio;

const shuffledContent = formatOptions(content);
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    for (let i = 0; i < shuffledContent.length; i++) {
      if (`#${shuffledContent[i][3]}` == window.location.hash) {
        renderItem(shuffledContent[i]);
        shuffledContent.splice(i, 1);
      }
    }
  } else next();
});

function playAudio(file, volume = 1) {
  let tryToPlay = setInterval(() => {
    globalAudio = new Audio(file);
    globalAudio.volume = volume;
    globalAudio.play().then(() => {
      clearInterval(tryToPlay);
    });
  }, 500);
}

function renderItem(item) {
  if (currentElement) exitEffect(currentElement[3]);
  currentElement = item;
  document.getElementById("title").innerHTML = item[0];
  document.getElementById("step-1").innerHTML = item[1];
  document.getElementById("step-2").innerHTML = item[2];
  window.location.href = `${baseURL}#${item[3]}`;
  entryEffect(item[3]);
}

function entryEffect(id) {
  if (id == 5) {
    document.documentElement.style.transition = "filter 5s";
    document.documentElement.style.filter = "grayscale(1)";
    playAudio("mad-world.mp3", 0.1);
    document.getElementById("rain").style.transition = "opacity 5s";
    document.getElementById("rain").style.opacity = "0.1";
  }
}

function exitEffect(id) {
  if (id == 5) {
    document.documentElement.style.transition = "";
    document.documentElement.style.filter = "";
    document.getElementById("rain").style.transition = "";
    document.getElementById("rain").style.opacity = "0";
    globalAudio.pause();
    globalAudio = null;
  }
}

function next() {
  if (content.length > 0) {
    let item = shuffledContent.pop();
    if (item[3] == 5) {
      next();
      return;
    }
    renderItem(item);
  } else {
    document.getElementById("title").innerHTML =
      "Das waren alle Guides, du solltest jetzt bestens auf alle Hindernisse, die das Leben dir in den Weg stellt, vorbereitet sein.";
    document.getElementById("title").toggleAttribute("out-of-guides", true);
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "none";
    document.querySelector("button").style.display = "none";
  }
}

function formatOptions(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    item.push(i);
  }
  return shuffle(array);
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
