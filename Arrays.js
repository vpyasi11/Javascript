var arr1=[1,2,3,4,5,6]
console.log(arr1[0])//1
console.log(arr1[3])//5
console.log(arr1.length())

var arr2 = new Array(45,67,52,23)
console.log(arr2)
console.log(typeof(arr2))//object

for(var i=0;i<arr1.length;i++){
    console.log(arr1[i])
} //Prints Array elements

for (var i in arr2){
    console.log(arr2[i])
}

for (var i of arr2){
    console.log(i)
}

//Adding values

//Pushing element in end
arr1.push(100)
//Unshift to add at beginning
arr1.unshift(200)
//splice to add/remove at particular index
arr1.splice(0,2)//deleted element at index 0 & 1
arr1.splice(3,0,1000,2000)//added at index 3 values 1000,2000

//Removing elements
//pop to remove from end
arr1.pop()
//shift to remove from beginning
arr1.shift()

//push and pop are faster than shift/unshift



