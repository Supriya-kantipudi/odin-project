let n = prompt("Enter the Number");

let n1;
let cnt = 0;
do{
    n1 = prompt("Guess the number")
    n1 = Number.parseInt(n1);
    if(n1 == n){
        console.log("Your Score",100-cnt);
    }
    cnt++;
}while(n1 != n)