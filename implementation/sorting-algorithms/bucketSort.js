const bubbleSort = require('./bubbleSort');

function findMaximum(list){
    let maximum = list[0];
    for (let i=1; i<list.length; i++){
        maximum = Math.max(maximum, list[i]);
    }
    return maximum;
}

function bucketSort(list){
    let numberOfBuckets = Math.round(Math.sqrt(list.length)),
        maxValue = findMaximum(list)
        mainBucket = [];
        for (let i=0; i<numberOfBuckets; i++){
            mainBucket.push([]);
        }
        for (j=0; j<list.length; j++){
            let bucket_index = Math.ceil(list[j]*numberOfBuckets/maxValue)-1;
            if (bucket_index < 0) bucket_index+=1;
            mainBucket[bucket_index].push(list[j]);
        }
        for (let k=0; k<numberOfBuckets; k++){
            mainBucket[k] = bubbleSort(mainBucket[k]);
        }
        let k = 0;
        for (let i=0; i<numberOfBuckets; i++){
            for (j=0; j<mainBucket[i].length; j++){
                list[k] = mainBucket[i][j];
                k+=1;
            }
        }
        return list;
}

console.log(bucketSort([20,1,0,10,3,2,7,4,5,100,-1]))
