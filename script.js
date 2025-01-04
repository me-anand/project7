const number = window.prompt("Enter the number from 0 to 1000000.");

const intNumber = parseInt(number);

if(number>1000000){
    console.log("INVALID NUMBER.");
}else{
    const sumOf = (intNumber * (intNumber+1))/2;
    console.log(`Sum of ${number} is ${sumOf}`);
}