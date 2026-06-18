import { loadHome } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import "./style.css";

const content = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const navBar = document.querySelector(".nav-bar");
const btns = document.querySelectorAll(".btn");



homeBtn.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(loadHome());
});

content.appendChild(loadHome());

menuBtn.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(menu());
});

aboutBtn.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(about());
});

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});