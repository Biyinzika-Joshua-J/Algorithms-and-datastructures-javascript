function bubbleSort(list){
    for (let i=0; i<list.length; i++){
        for (let j=1; j<list.length-i; j++){
            if (list[j] < list[j-1]){
                [list[j], list[j-1]] = [list[j-1], list[j]];
            }
        }
    }
    return list;
}

module.exports = bubbleSort;
