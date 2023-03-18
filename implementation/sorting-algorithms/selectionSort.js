function selectionSort(list){
    for (let i=0; i<list.length; i++){
        let min_index = i;
        for (j=i+1; j<list.length; j++){
            if (list[min_index] > list[j]){
                min_index = j;
            }
        }
        [list[min_index], list[i]] = [list[i], list[min_index]];
    }
    return list;
}

console.log(selectionSort([20,1,0,10,3,2,7,4,5,100,-1]))