import { bubbleSort, bubbleSortAnimator } from "./sorting-algorithms/bubble-sort.js";
import { listGenerator } from "./utilities.js";

const generateListBtn = document.getElementById("generate-list");
const sortBtn = document.getElementById("sort");
const bars = document.querySelector(".bars");
const slider = document.getElementById("myRange");

let sortingAlgorithmSelected = "Bubble-sort";

// algorithm selector
const algorithmSelector = document.getElementById("algorithms");
algorithmSelector.addEventListener("change", (event) => {
  sortingAlgorithmSelected = event.target.value;
});

slider.oninput = function () {
  createBarsOnScreen(this.value);
};

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

// create bars on the screen onloading the page
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

// sorting algorithms api
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

