const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", followMouse);

function followMouse(e) {
  let x = e.pageX;
  let y = e.pageY;
  let newMousePosition = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
  cursor.style.transform = newMousePosition;
  //   console.log(newMousePosition, " style: ", cursor.style.transform);
}

//Part 2

const scrollDownArrow = document.querySelector(".header__scroll-arrow");
const feelTheRoadSection = document.querySelector(".main__feel-the-road");
const feeelTheRoadText = document.querySelector(".main__text");
const feelTheRoadImageContainer = document.querySelector(
  ".main__image-container"
);

const browseTheModelsCar1 = document.querySelector(
  ".main__models-car:nth-child(1)"
);
const browseTheModelsCar2 = document.querySelector(
  ".main__models-car:nth-child(2)"
);
const browseTheModelsCar3 = document.querySelector(
  ".main__models-car:nth-child(3)"
);

const browseTheModelsCarArray = [
  browseTheModelsCar1,
  browseTheModelsCar2,
  browseTheModelsCar3,
];

const browseTheModelsSection = document.querySelector(
  ".main__browse-the-models"
);

scrollDownArrow.addEventListener("click", animateSection);

function animateSection(e) {
  feelTheRoadSection.style.animationPlayState = "running";
  feeelTheRoadText.style.animationPlayState = "running";
  feelTheRoadImageContainer.style.animationPlayState = "running";
  console.log("click!");
}

window.addEventListener("scroll", handleScrollSectionAnimations);

function handleScrollSectionAnimations() {
  const { scrollTop, clientHeight } = document.documentElement;

  //is the distance between the element itself and
  const topViewportToSections = feelTheRoadSection.getBoundingClientRect().top;
  if (scrollTop > (scrollTop + topViewportToSections).toFixed()) {
    feelTheRoadSection.style.animationPlayState = "running";
    feeelTheRoadText.style.animationPlayState = "running";
    feelTheRoadImageContainer.style.animationPlayState = "running";
  }

  const topViewportToCar1 = browseTheModelsCar1.getBoundingClientRect().top;
  const topViewportToCar2 = browseTheModelsCar2.getBoundingClientRect().top;
  const topViewportToCar3 = browseTheModelsCar3.getBoundingClientRect().top;

  const arrayOfModelCars = [
    {
      topViewportToCar: topViewportToCar1,
      browseTheModelsCar: browseTheModelsCar1,
    },
    {
      topViewportToCar: topViewportToCar2,
      browseTheModelsCar: browseTheModelsCar2,
    },
    {
      topViewportToCar: topViewportToCar3,
      browseTheModelsCar: browseTheModelsCar3,
    },
  ];

  console.log(arrayOfModelCars);

  for (modelCarElement of arrayOfModelCars) {
    console.log(modelCarElement, " ", clientHeight);
    const { topViewportToCar, browseTheModelsCar } = modelCarElement;

    if (
      scrollTop <
      scrollTop - topViewportToCar.toFixed() + clientHeight * 0.75
    ) {
      browseTheModelsCar.style.animationPlayState = "running";
    } else {
      browseTheModelsCar.style.animationPlayState = "paused";
    }
  }
}
