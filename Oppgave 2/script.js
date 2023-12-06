function findHighestNumber() {
const num1 = parseFloat(Number(document.getElementById("num1").value));
const num2 = parseFloat(Number(document.getElementById("num2").value));
const num3 = parseFloat(Number(document.getElementById("num3").value));

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
    document.getElementById("result").innerHTML = "i 2020 var det " + num1 + " prosjekter";
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
    document.getElementById("result").innerHTML = "i 2021 var det " + num2 + " prosjekter";
}
else {
    largest = num3;
    document.getElementById("result").innerHTML = "i 2022 var det " + num3 + " prosjekter";
}
}
    
