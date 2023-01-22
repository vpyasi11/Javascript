/*
Given an array, write a function to calculate its depth. Assume that a normal array has a depth of 1.
Examples
depth ([1, 2, 3, 4]) 1
depth ([1, [2, [3, 4]]]) 3
*/

const arr = [1,2,[2,3,[2,3]]]
var count = 1
var temp = arr

for(i=0;i<temp.length;i++){
    if(Array.isArray(temp[i])){
        count++
        temp = temp.filter(function(item){
            if(Array.isArray(item)){
                return item
            }
        })
    }
}

console.log("Depth of Array :" + count)
