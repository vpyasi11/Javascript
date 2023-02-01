// Binary Search

function binarySearch(arr,num){
    var start = 0
    var end = arr.lenght-1
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        let middleValue = arr[mid]

        if(num === middleValue){
            return true
        }else if(num < middleValue){
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    return false
}

arr = [1,2,3,4,5,6,7,8,9,10]
num = 4
console.log(arr)
console.log(binarySearch(arr,num))