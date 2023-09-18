let input = document.getElementById("input");
console.log(input.lenght);
function display(x) {
  input.value += x;
}
function dete(){
    input.value="";
}
function res(){
    input.value=eval(input.value)
}
function del(){
    // let splitingValue=input.value.split("")
    // console.log(splitingValue)
  input.value= input.value.slice(0,-1)
}