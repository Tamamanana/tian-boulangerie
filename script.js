// 菜单的特效
const menuButton = document.getElementById("menu-button");
const Menu = document.getElementById("menu");
const aTag = document.getElementsByClassName("linktext");

let isMenuOpen = false;

menuButton.addEventListener("click", () => {
  if (isMenuOpen) {
    Menu.style.right = "-250px";
    menuButton.classList.remove("menu-open");
  } else {
    Menu.style.right = "0";
    menuButton.classList.add("menu-open");
  }

  menuButton.classList.toggle("cross");
  isMenuOpen = !isMenuOpen;
});
for (let i = 0; i < 4; i++) {
  aTag[i].addEventListener("click", function () {
    menuButton.classList.toggle("cross");
    isMenuOpen = !isMenuOpen;
  });
}
function scrollToSection() {
  Menu.style.right = "-250px";
  menuButton.classList.remove("menu-open");
}

document.addEventListener("DOMContentLoaded", function () {
  var fadeInText = document.getElementById("fadeInText");
  var textContent = fadeInText.textContent;

  fadeInText.innerHTML = "";

  for (var i = 0; i < textContent.length; i++) {
    var span = document.createElement("span");
    span.textContent = textContent[i];
    span.style.transitionDelay = i * 0.1 + "s";
    fadeInText.appendChild(span);

    setTimeout(
      function (element) {
        element.style.opacity = 1;
      },
      400 + i * 100,
      span
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var dynamicText = document.getElementById("dynamicText");
  var texts = ["Boulangerie HAL", "ブーランジュリー ナオ"];
  var currentIndex = 0;

  function switchText() {
    dynamicText.style.opacity = 0;

    setTimeout(function () {
      dynamicText.textContent = texts[currentIndex];

      setTimeout(function () {
        dynamicText.style.opacity = 1;
      }, 50);

      currentIndex = (currentIndex + 1) % texts.length;
    }, 1000);
  }

  switchText();

  setInterval(switchText, 4000);
});

const imageBox = document.getElementById("imageBox");
const monthText = document.getElementById("monthText");
const imageSources = [
  "images/tenpo04.JPG",
  "images/tenpo06.JPG",
  "images/tenpo03.JPG",
];
const dateArray = ["12/01", "01/02", "03/03"];
let currentIndex = 0;

imageBox.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageSources.length;

  imageBox.querySelector("img").style.opacity = 0;

  setTimeout(() => {
    const imageElement = imageBox.querySelector("img");
    imageElement.src = imageSources[currentIndex];
    monthText.textContent = dateArray[currentIndex];

    imageElement.style.opacity = 1;
  }, 500);
});

const galleryScroller = document.getElementById("galleryScroller");
const galleryImages = document.getElementById("galleryImages");

galleryScroller.addEventListener("mouseover", pauseGalleryScroll);
galleryScroller.addEventListener("mouseout", resumeGalleryScroll);

function pauseGalleryScroll() {
  galleryImages.style.animationPlayState = "paused";
}

function resumeGalleryScroll() {
  galleryImages.style.animationPlayState = "running";
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("show");
      }
    });
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
