const quickSort = (arr) =>{
    if(arr.length <= 1) return arr;
    const leftArr = []
    const rightArr = []
    const pivot = arr[arr.length-1]

    for(var i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        }
        else{
            rightArr.push(arr[i])
        }   
    }
    return [...quickSort(leftArr) ,pivot,...quickSort(rightArr)];
}

const a = [3,5,15,1,45,87,11]
console.log(quickSort(a))

// complexity of n log(n) but relatively not stable