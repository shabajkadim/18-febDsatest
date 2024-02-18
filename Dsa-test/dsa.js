// // Q.2
// var x=121;

// function ispalindrome(number){
//     for(var i=0; i<Math.floor(number.length/2); i++){
//         if(number[i] != number[number.length-1-i]){
//             return false
//         }
//     }
//     return true
// }
// ispalindrome(x)
// console.log(ispalindrome(x));



//Q.3

// var array=[1,2,3,4,5]

// function Addition(value){
//     var sum=0
//     for(a of value){
//         sum += a
//     }
//     return sum
// }
// Addition(array)
// console.log(Addition(array));


//Q .4

// var array="malayalam"

// function isPalindrome(string){
//     for(var i=0; i<Math.floor(string.length/2);i++){
//         if(string[i] !== string[string.length-1-i]){
//             return false
//         }
//     }
//     return true
// }
// isPalindrome(array);
// console.log(isPalindrome(array));


//Q.5

// var array=[1,2,3,4,5,6]

// function reverseArray(number){
//     let result=array.reverse()
//     console.log(result); 
// }
// reverseArray(array)


//Q.6

// var array=[1,2,3,4,4,5,2,3,4,1]

// function dublicatearray(value){
//     let result=[...new Set(value)]
//     console.log(result);
// }
// dublicatearray(array)



//Q.7

// function factorial(value){
//     var sum=1
//     for(var i=value; i>0; i--){
//         sum *=i
//     }
//     return sum
//     // console.log(sum);
// }
// factorial(5)
// console.log(factorial(5));




//Q.10

// var array=[8,2,3,1,4,4,5,3,4,5,6]

// function sortedarray(value){
//     let result=array.sort()
//     console.log(result);
// }
// sortedarray(array)

//Q.10

// var array=[8,2,3,1,4,4,5,3,4,5,6]
// var newarray={}


// function sortevalue(value ){
//     for(var i=0; i<array.length; i++){
//         if(newarray[array[i]] === undefined){
//             newarray[array[i]]=1
//         }else{
//             newarray[array[i]]++
//         }
//     }
// }
// sortevalue(array)
// console.log(newarray);



//Q.15
// var x="hello"

// function removedublicate(string){
//     let result=[...new Set(string)]
//     console.log(result.join(''));
// }
// removedublicate(x)


//Q.12 
// var haystack="sadbutsad"
// var needle="sad" 

// function findvalue(string, value){
//     let result=haystack.includes(needle)
//     console.log(result);
// }
// findvalue(haystack, needle)