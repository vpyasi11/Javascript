/*
Given an array of positive integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.
Input:
N = 7
a[] = {2,6,1,9,4,5,3}
Output:
6
Explanation:The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.
*/

const arr = [2,6,1,9,4,5,3]
arr.sort()

var temp = arr[0]

for(i=0;i<arr.length;i++){
    if(arr[i]==temp+1)
}




/*
function arrGenerator(){
    const arr = []
    let length = Math.floor(Math.random()*11)
    for(i=0;i<=length;i++){
        arr[i]=Math.floor(Math.random()*10)
    }
    return arr
}*/


