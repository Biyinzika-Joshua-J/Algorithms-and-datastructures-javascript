const generateListBtn = document.getElementById("generate-list");
const sortBtn = document.getElementById("sort");
const bars = document.querySelector(".bars");
const slider = document.getElementById("myRange");

let sortingAlgorithmSelected = "bubble-sort";

// algorithm selector
const algorithmSelector = document.getElementById("algorithms");

algorithmSelector.addEventListener("change", (event) => {
  sortingAlgorithmSelected = event.target.value;
});

slider.oninput = function () {
  createBarsOnScreen(this.value);
};

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

window.onload = function () {
  createBarsOnScreen(300);
};

// generating the unsorted list
let randomUnsortedList = [];
generateListBtn.addEventListener("click", () => createBarsOnScreen(300));

function createBarsOnScreen(maxBars = 300) {
  bars.innerHTML = null;
  randomUnsortedList = listGenerator(5, 500, maxBars);
  randomUnsortedList.forEach((value, index) => {
    let bar = document.createElement("div");
    bar.classList.add("column");
    bar.style.width = "50px";
    bar.style.height = `${value}px`;
    bar.style.backgroundColor = "blue";
    //bar.style.margin = '0 5px 0 5px'
    bars.appendChild(bar);
  });
}

function generateRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function listGenerator(min, max, maxBars) {
  let list = [];
  for (let i = 0; i < maxBars; i++) list.push(generateRandomValue(min, max));
  return list;
}

// bubble sort
sortBtn.addEventListener("click", () => {
  switch (sortingAlgorithmSelected) {
    case "Bubble-sort":
      let animations;
      animations = bubbleSort(randomUnsortedList, (animations = []));
      bubbleSortAnimator(animations);
      console.log("bubble sort");
      break;
    case "Selection-sort":
      console.log("selection sort");
      break;
    case "Insertion-sort":
      console.log("Insertion sort");
      break;
    case "Merge-sort":
      console.log("Merge sort sort");
      break;
    default:
        console.log('nothing')
        break;
  }
});

async function bubbleSortAnimator(animations) {
  let bar = document.querySelectorAll(".column");
  for (let i = 0; i < animations.length; i++) {
    let { comparison, swap } = animations[i];

    setTimeout(() => {
      bar[comparison[0]].style.backgroundColor = "red";
      bar[comparison[1]].style.backgroundColor = "red";
      setTimeout(() => {
        bar[comparison[0]].style.backgroundColor = "blue";
        bar[comparison[1]].style.backgroundColor = "blue";
      }, 8);

      setTimeout(() => {
        if (swap) {
          bar[comparison[0]].style.backgroundColor = "blue";
          bar[comparison[1]].style.backgroundColor = "blue";
          // swap
          let temp = bar[comparison[0]].style.height;
          bar[comparison[0]].style.height = bar[comparison[1]].style.height;
          bar[comparison[1]].style.height = temp;
        } else {
          bar[comparison[0]].style.backgroundColor = "blue";
          bar[comparison[1]].style.backgroundColor = "blue";
        }
      }, 10);
    }, i * 5);
  }
}

function bubbleSort(list, animations) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length - i; j++) {
      let animation = {};
      animation.comparison = [j, j - 1];
      if (list[j] < list[j - 1]) {
        animation.swap = [j, j - 1];
        [list[j], list[j - 1]] = [list[j - 1], list[j]];
      }
      animations.push(animation);
    }
  }
  return animations;
}
