window.onload = () =>  {
    let today = new Date();
    let dayNumber = today.getDay();
    let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let monthNumber = today.getMonth();
    let monthNames = ["January","Febuary","March","April","May","June","July","August","September","October","November","Decemeber"];
    let day = today.getDate();
    let year = today.getFullYear();
    document.getElementById("date").innerHTML = dayNames[dayNumber] + '<br>' + monthNames[monthNumber] + " " + day + ', ' + year;
}
let itemArray = [];
function buttonOne(){
    let inputOne = document.getElementById("inputone").value;
    if(inputOne.length == 0){
        alert('01');
    }
    else{
        let first = inputOne.substr(0, 1);
        let last = inputOne.substr(1);
        first = first.toUpperCase();
        last = last.toLowerCase();
        inputOne = first + last;
        itemArray.push(inputOne);
        document.getElementById("inputform").reset();
        alert('02');
   }
}