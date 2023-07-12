// /////////////factorial/////////////////////////////////////////////////////////

let num=4;
    let fact=1;
    for (let i=1;i<=num;i++){
        fact=fact*i;
    }
console.log(fact) 



// /////////////////////////Sort Array///////////////////////////////////////////////
let a=[25,24,5,2,40]
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
         let temp=0
         temp=a[i];
         a[i]=a[j]
 a[j]=temp
        }
    }
 console.log(a[i])   
}


// //////////////////String Reverse///////////////////

  // program to reverse a string

function reverseString(str) {

  
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


const string = 'Bhopal';

const result = reverseString(string);
console.log(result);