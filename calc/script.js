let outputScreen = document.getElementById("outputscreen")
function display(value){
    outputScreen.value += value
}
function Calculate(){
    try{
        outputScreen.value = eval (outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value =outputScreen.value.slice(0,-1)
}