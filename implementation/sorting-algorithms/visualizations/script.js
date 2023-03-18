const generateListBtn = document.getElementById('generate-list');
const bubbleSortBtn = document.getElementById('bubble-sort');
const bars = document.querySelector('.bars')

window.onload = function(){
    createBarsOnScreen();
}

// generating the unsorted list
let randomUnsortedList = []; 
generateListBtn.addEventListener('click', createBarsOnScreen)

function createBarsOnScreen(){
    bars.innerHTML = null;
    randomUnsortedList = listGenerator(10, 500);
    randomUnsortedList.forEach((value, index)=>{
        let bar = document.createElement('div');
        bar.classList.add('column');
        bar.style.width = '10px';
        bar.style.height = `${value}px`;
        bar.style.backgroundColor = 'blue';
        //bar.style.margin = '0 5px 0 5px'
        bars.appendChild(bar);
    })
}


function generateRandomValue(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

function listGenerator(min, max){
    let list = [];
    for (let i=0; i<300; i++) list.push(generateRandomValue(min, max));
    return list;
}

// bubble sort
bubbleSortBtn.addEventListener('click', ()=>{
    let animations;
    animations = bubbleSort(randomUnsortedList, animations=[])
    bubbleSortAnimator(animations);
    console.log(animations)
});



function bubbleSortAnimator(animations){
    let bar = document.querySelectorAll('.column');
    for (let i=0; i<animations.length; i++){
        let {comparison, swap} = animations[i];
        setTimeout(()=>{
            bar[comparison[0]].style.backgroundColor = 'red';
            bar[comparison[1]].style.backgroundColor = 'red';
           
            if (swap){   
                    bar[comparison[0]].style.backgroundColor = 'blue';
                    bar[comparison[1]].style.backgroundColor = 'blue';
                    // swap
                    let temp =  bar[comparison[0]].style.height;
                    bar[comparison[0]].style.height =  bar[comparison[1]].style.height;
                    bar[comparison[1]].style.height = temp;
               
            }
            bar[comparison[0]].style.backgroundColor = 'blue';
            bar[comparison[1]].style.backgroundColor = 'blue';
        }, i*2)
    }
}

function bubbleSort(list, animations){
    for (let i=0; i<list.length; i++){
        for (let j=1; j<list.length-i; j++){
            let animation = {};
            animation.comparison = [j, j-1];
            if (list[j] < list[j-1]){
                animation.swap = [j, j-1];
                [list[j], list[j-1]] = [list[j-1], list[j]];
            }
            animations.push(animation);
        }
    }
    return animations;
}