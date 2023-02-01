/*
Given an array of positive integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.
Input:
N = 7
a[] = {2,6,1,9,4,5,3}
Output:
6
Explanation:The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.
*/




// function arrGenerator(){
//     const arr = []
//     let length = Math.floor(Math.random()*11)
//     for(i=0;i<=length;i++){
//         arr[i]=Math.floor(Math.random()*10)
//     }
//     return arr
// }

// arr1 = arrGenerator()

// console.log(arr1)

function subseq(arr,n){
   
    const sort=  arr.sort(function(a,b){
          return a-b
          
      })
    //   console.log(sort)
      var empty=[];
      empty.push(arr[0])
      
      for (let i=1; i<n;i++){
        
          if(sort[i]!=sort[i-1]){
            empty.push(sort[i])
      }
  
      console.log(empty)
      return empty
  }}
  let arr1 = subseq([1,2,3,5,4,9,6,7],8)
  
  console.log(arr1)


//   Max count = 0;
//   index = 0;
  
//   i=0; i< length ; i++ 
//    {
//      For(j=i;j<count<j++)
//      { 
//        If( a[j]+1 != a[j+1])
//          Count = j-i+1;
//          index = j-i;
//      }
//      If(count>MaxCount){
//         count = MaxCount ; 
//         NewIndex = index;
//     }
//   }




// const arr = [2,6,1,9,4,5,3]
// arr.sort() // 1 2 3 4 5 6 9

// var temp;
// var count;

// for(i=0;i<arr.length;i++){
//     // temp=arr[i]
//     for(j=0;j<arr.length;j++)
//     if(temp+1==arr[j+1]){
//         count++
//     }
//     // else{
//     //     count = 0
//     // }
// }

// console.log("Sub sequence:"+count)








