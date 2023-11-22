function display(num){
    result.value+=num
}

//evaluate expression(egual to)
function equal(){
   result.value=eval(result.value)
}
function clearAll(){
    result.value=""
}
function back(){
    result.value=result.value.slice(0,-1)
}