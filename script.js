"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const header = document.querySelector(".header");
const allButtons = document.getElementsByTagName("button");

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button> ";

header.append(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove(); // new
    // message.parentElement.removeChild(message);
  });

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "yellow");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Scrolling to Section
const btnScrollTo = document.querySelector(".btn--scroll-to");

btnScrollTo.addEventListener("click", function () {
  const section = document.querySelector("#section--1");
  section.scrollIntoView({ behavior: "smooth" });
});

// Types of Events and Event Handlers
const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading :D");
};

// h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  const section = document.querySelector(id);
  section.scrollIntoView({ behavior: "smooth" });
});

// DOM Traversing

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes); // NodeList
console.log(h1.children); // HTMLCollection

h1.firstElementChild.style.color = "white";
console.log(h1.firstChild);
h1.lastElementChild.style.color = "orangered";

// Going upwards: parent
console.log(h1.parentElement);
console.log(h1.parentNode);

h1.closest(".header").style.background = "var(--gradient-secondary)";

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// if we want to get all sibling then select parent and then all childrens
console.log(h1.parentElement.children);
