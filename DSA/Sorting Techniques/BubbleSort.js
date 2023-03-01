function swap(x,y,arr){
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}

function bubbleSort(arr){
    for(i=0;i<arr.length;i++){
        for(j=0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]){
                swap(j,j+1,arr)
            }
        }
    }
    return arr
}

const a = [3,5,15,1,45,87,11]
console.log(bubbleSort(a))