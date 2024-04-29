// Creating an Array of numbers to take input from the user and add numbers to this array
let n = prompt("Enter the number of numbers");
n = Number.parseInt(n);
const arr = [];
for(let i=0;i<n;i++){
    let ele = prompt("Enter the element");
    arr.push(ele);
}
console.log(arr);

// Keep adding numbers to the array until zero is added to the array
const arr1 = [];
let n1;
do{
    n1 = prompt("Enter the number");
    n1 = Number.parseInt(n1);
    arr1.push(n1);
}while(n1 != 0);
console.log(arr1);


//filter the number that are divisible by 10 from the given array.
let newArr = arr1.filter((a) => {
    return (a%10 == 0);
})
console.log(newArr);

// Return the square of a given number
let mapArr = arr1.map((a) => {
    return a*a;
})
console.log(mapArr);


//Use Reduce to create a factorial of a number from the array of numbers
const arr2 = [1,2,3,4,5]
let ans = arr2.reduce((a1,a2)=>{
    return a1*a2;
})
console.log(ans);
 

