function getNumber(num){
    var input =document.getElementById("calculate");
    input.value += num;
}

function setResult(){
    var set =document.getElementById("calculate");
    set.value = "";
}

function getResult(){
    var result =document.getElementById("calculate");
    result.value = eval(result.value);
}