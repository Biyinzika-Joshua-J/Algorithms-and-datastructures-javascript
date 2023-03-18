function insertionSort(list){
    for (let i=1; i<list.length; i++){
        let key = list[i],
            j = i-1;
        while (j >= 0 && list[j] > key){
            list[j+1] = list[j];
            j -= 1;
        }
        list[j + 1] = key;
    }
    return list;
}

console.log(insertionSort([20,1,0,10,3,2,7,4,5,100,-1]))