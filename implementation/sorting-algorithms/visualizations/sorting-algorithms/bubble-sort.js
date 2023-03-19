export function bubbleSort(list, animations) {
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
  

export function bubbleSortAnimator(animations) {
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
  
  