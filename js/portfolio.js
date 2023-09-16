let progressSection = document.querySelector(".skills");
let theProgress = document.querySelectorAll(".the-progress span");
let up = document.querySelector(".up");
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
const rootcolors = document.querySelector(":root");
let home = document.querySelector(".home-container");
let homeBtn = document.querySelector(".homeBtn");
let about = document.querySelector(".about-container");
let aboutBtn = document.querySelector(".aboutBtn");
let portfolio = document.querySelector(".portfolio-container");
let portfolioBtn = document.querySelector(".portfolioBtn");
let moreAboutBtn = document.querySelector(".moreAboutBtn");
let contact = document.querySelector(".contact-container");
let contactBtn = document.querySelector(".contactBtn");
let sliderBtn = document.querySelectorAll(".zoom");
let arrows = document.querySelector(".arrows");
let leftArrow = document.querySelector(".leftarrow");
let rightArrow = document.querySelector(".rightarrow");
let closeIcon = document.querySelector(".closemark");
let overlay = document.createElement("div");
let gearicon = document.querySelector(".gear-icon ");
let gearcontainer = document.querySelector(".icon");
overlay.classList.add("overlay");
let sliderImage = [
  "/imgs/github.png",
  "/imgs/hangman.png",
  "/imgs/slider.png",
  "/imgs/speedgame.png",
  "/imgs/memorygame.png",
  "/imgs/my project.png",
  "/imgs/todolist.png",
  "/imgs/quiz.png",
];
let slidesCount = 8;
let currentSlide = 1;
window.onscroll = function () {
  if (window.scrollY >= progressSection.offsetTop - 500) {
    theProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (this.scrollY >= 200) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};

up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
console.log(sun);
sun.addEventListener("click", () => {
  sun.classList.add("d-none");
  moon.classList.add("d-block");
  moon.classList.remove("d-none");
  rootcolors.style.setProperty("--main-color", "white");
  rootcolors.style.setProperty("--writingcolor", "#161516");
  rootcolors.style.setProperty("--secondary-color", "#eee");
});
moon.addEventListener("click", () => {
  moon.classList.add("d-none");
  sun.classList.add("d-block");
  sun.classList.remove("d-none");
  rootcolors.style.setProperty("--writingcolor", "white");
  rootcolors.style.setProperty("--main-color", "#161516");
  rootcolors.style.setProperty("--secondary-color", "#232123");
});

moon.addEventListener("click", () => {
  sun.style.display = "block";
  moon.style.display = "none";
});
homeBtn.onclick = function () {
  home.classList.add("slide");
  home.style.display = "block";
  about.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "none";
};
moreAboutBtn.onclick = function () {
  about.classList.add("slide");
  home.style.display = "none";
  about.style.display = "block";
  portfolio.style.display = "none";
  contact.style.display = "none";
};
aboutBtn.onclick = function () {
  about.classList.add("slide");
  home.style.display = "none";
  about.style.display = "block";
  portfolio.style.display = "none";
  contact.style.display = "none";
};
portfolioBtn.onclick = function () {
  portfolio.classList.add("slide");
  home.style.display = "none";
  about.style.display = "none";
  portfolio.style.display = "block";
  contact.style.display = "none";
};
contactBtn.onclick = function () {
  contact.classList.add("slide");
  home.style.display = "none";
  about.style.display = "none";
  portfolio.style.display = "none";
  contact.style.display = "block";
};
sliderBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("btn current", currentSlide);
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
    closeIcon.style.display = "block";
    let picdiv = document.createElement("img");
    picdiv.classList.add("picdiv");
    document.body.appendChild(overlay);
    if (btn.id == "one") {
      currentSlide = 1;
      console.log("in one", currentSlide);
      picdiv.src = sliderImage[0];
    } else if (btn.id == "two") {
      currentSlide = 2;
      picdiv.src = sliderImage[1];
    } else if (btn.id == "three") {
      currentSlide = 3;
      picdiv.src = sliderImage[2];
    } else if (btn.id == "four") {
      currentSlide = 4;
      picdiv.src = sliderImage[3];
    } else if (btn.id == "five") {
      currentSlide = 5;
      picdiv.src = sliderImage[4];
    } else if (btn.id == "six") {
      currentSlide = 6;
      picdiv.src = sliderImage[5];
    } else if (btn.id == "seven") {
      currentSlide = 7;
      picdiv.src = sliderImage[6];
    } else if (btn.id == "eight") {
      currentSlide = 8;
      picdiv.src = sliderImage[7];
    }
    if (currentSlide == 1) {
      leftArrow.classList.add("disabled");
    } else {
      leftArrow.classList.remove("disabled");
    }
    if (currentSlide == slidesCount) {
      rightArrow.classList.add("disabled");
    } else {
      rightArrow.classList.remove("disabled");
    }
    rightArrow.addEventListener("click", rightArrowClick);
    leftArrow.addEventListener("click", leftArrowClick);
    closeIcon.addEventListener("click", closeIconClick);
    document.body.appendChild(picdiv);
    function rightArrowClick() {
      currentSlide++;
      console.log(currentSlide);
      picdiv.src = sliderImage[currentSlide - 1];
      if (currentSlide === 8) {
        rightArrow.style.display = "none";
        leftArrow.style.display = "block";
      } else if (currentSlide === 7) {
        rightArrow.style.display = "block";
      }
    }
    function leftArrowClick() {
      currentSlide--;
      picdiv.src = sliderImage[currentSlide - 1];
      if (currentSlide === 1) {
        leftArrow.style.display = "none";
        rightArrow.style.display = "block";
      } else if (currentSlide === 2) {
        leftArrow.style.display = "block";
      }
    }
    function closeIconClick() {
      currentSlide = 0;
      picdiv.remove();
      leftArrow.style.display = "none";
      rightArrow.style.display = "none";
      overlay.remove();
      closeIcon.style.display = "none";
      console.log("close current", currentSlide);

      rightArrow.removeEventListener("click", rightArrowClick);
      leftArrow.removeEventListener("click", leftArrowClick);
      closeIcon.removeEventListener("click", closeIconClick);
    }
  });
});
gearcontainer.addEventListener("click", () => {
  gearcontainer.classList.toggle("color-change");
  if (gearcontainer.classList.contains("color-change")) {
    gearcontainer.style.setProperty("color", "var(--background-color)");
  } else {
    gearcontainer.style.setProperty("color", "var(--writingcolor)");
  }
  gearicon.classList.toggle("open");
  colorChange();
});
function colorChange() {
  if (gearicon.classList.contains("open")) {
    let colorsDiv = document.createElement("div");
    colorsDiv.classList.add("colorsfield");
    colorsDiv.classList.add("animation-out");
    colorsDiv.id = "ahmed";
    let paragraphDiv = document.createElement("div");
    let colorsDivp = document.createElement("p");
    let colorDivpText = document.createTextNode("Theme Colors");
    colorsDivp.appendChild(colorDivpText);
    paragraphDiv.appendChild(colorsDivp);
    colorsDiv.appendChild(paragraphDiv);
    gearicon.appendChild(colorsDiv);
    let spansDiv = document.createElement("div");
    spansDiv.classList.add("colorballs");
    for (let i = 0; i < 5; i++) {
      let colorSpans = document.createElement("span");
      colorSpans.className = `colorspan${i}`;
      colorSpans.addEventListener("click", () => {
        const color = getColorByIndex(i);
        document.documentElement.style.setProperty("--background-color", color);
        localStorage.setItem("selectedColor", color);
      });
      spansDiv.appendChild(colorSpans);
      colorsDiv.appendChild(spansDiv);
    }
  } else {
    const colorDiv = document.getElementById("ahmed");
    colorDiv.classList.remove("animation-out");
    colorDiv.classList.add("animation-in");
    setTimeout(() => {
      colorDiv.remove();
    }, 500);
  }
}

function getColorByIndex(index) {
  const colors = [
    "#ff3c2f",
    "rgb(198, 90, 7)",
    "rgb(16, 162, 145)",
    "rgb(0, 51, 255)",
    "rgb(221, 14, 176)",
  ];
  return colors[index];
}

const selectedColor = localStorage.getItem("selectedColor");
if (selectedColor) {
  document.documentElement.style.setProperty(
    "--background-color",
    selectedColor
  );
}
let x = 0;
let y = 0;
let txt1 = " Tourism and Hotels Gradutae , ";
let txt2 = " a front end developer";
let speed = 50;

function typeWriter() {
  if (x < txt1.length) {
    document.querySelector(".job1 h2").innerHTML += txt1.charAt(x);
    x++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriter2() {
  if (y < txt2.length) {
    document.querySelector(".job2 h2").innerHTML += txt2.charAt(y);
    y++;
    setTimeout(typeWriter2, speed);
  }
}
typeWriter();
setInterval((h) => {
  typeWriter2();
}, 2000);
