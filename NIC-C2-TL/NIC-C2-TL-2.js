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
        makeList();
        alert('02');
   }
}
function makeList(){
    document.getElementById("outputone").innerHTML ='';
    for(i = 0; i < itemArray.length; i++){
        let checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.id = "num" + i;
        checkBox.name = "listItem";
        checkBox.value = itemArray[i];
        let label = document.createElement('label');
        label.htmlFor = "num" + i;
        let labelText = document.createTextNode('   ' + itemArray[i]);
        label.style.fontSize = '20px';
        label.appendChild(labelText);
        let newLine = document.createElement('br');
        var divList = document.getElementById("outputone");
        divList.appendChild(checkBox);
        divList.appendChild(label);
        divList.appendChild(newLine);
    }
    let buttonTwo = document.createElement('button');
    buttonTwo.innerHTML = "Remove Checked";
    buttonTwo.style.fontSize = '25px';
    buttonTwo.style.textAlign = 'center';
    buttonTwo.addEventListener('click', removeChecked);
    divList.appendChild(document.createElement('br'));
    divList.appendChild(buttonTwo);
}
function removeChecked(){

}