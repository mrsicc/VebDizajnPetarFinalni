let slike = [
  "slike/stadion.jpg",
  "slike/tim.jpg",
  "slike/navijaci.jpg"
];

let index = 0;

function promeniSliku() {
  let img = document.getElementById("slika");

  if (img) {
    index++;

    if (index >= slike.length) {
      index = 0;
    }

    img.src = slike[index];
  }
}

setInterval(promeniSliku, 3000);

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("kontaktForm");
  const status = document.getElementById("status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const ime = document.getElementById("ime").value.trim();
      const email = document.getElementById("email").value.trim();
      const poruka = document.getElementById("poruka").value.trim();

      if (ime === "" || email === "" || poruka === "") {
        status.innerText = "Molimo popunite sva polja!";
        status.style.color = "red";
        return;
      }

      if (!email.includes("@")) {
        status.innerText = "Email mora da sadrži znak @";
        status.style.color = "red";
        return;
      }

      status.innerText = "Poruka je uspešno poslata!";
      status.style.color = "green";

      form.reset();
    });
  }

});

function promeniTemu() {
  document.body.classList.toggle("tamno");

  let icon = document.getElementById("themeIcon");

  if (document.body.classList.contains("tamno")) {
    icon.textContent = "☀️";
    localStorage.setItem("tema", "tamno");
  } else {
    icon.textContent = "🌙";
    localStorage.setItem("tema", "light");
  }
}

window.addEventListener("load", function () {
  let icon = document.getElementById("themeIcon");

  if (localStorage.getItem("tema") === "tamno") {
    document.body.classList.add("tamno");
    icon.textContent = "☀️";
  } else {
    icon.textContent = "🌙";
  }
});

const fontovi = ["font-default", "font-serif", "font-mono"];
const nazivFonta = {
  "font-default": "Aa",
  "font-serif": "Aa Serif",
  "font-mono": "Aa Mono"
};

function primeniFont(klasa) {
  fontovi.forEach(f => document.body.classList.remove(f));

  if (klasa !== "font-default") {
    document.body.classList.add(klasa);
  }

  const dugme = document.getElementById("fontLabel");
  if (dugme) {
    dugme.textContent = nazivFonta[klasa];
  }
}

function promeniFont() {
  let trenutni = fontovi.find(f => document.body.classList.contains(f)) || "font-default";
  let sledeciIndex = (fontovi.indexOf(trenutni) + 1) % fontovi.length;
  let sledeci = fontovi[sledeciIndex];

  primeniFont(sledeci);
  localStorage.setItem("font", sledeci);
}

window.addEventListener("load", function () {
  let sacuvaniFont = localStorage.getItem("font") || "font-default";
  primeniFont(sacuvaniFont);
});

function promeniMeni() {
  const navMenu = document.getElementById("navMenu");
  const hamburgerDugme = document.querySelector(".meni-dugme");
  navMenu.classList.toggle("aktivan");
  hamburgerDugme.classList.toggle("aktivan");
}