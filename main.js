//function to display content
function displayContent(content){
   result.value += content
}
//clear input
function calcClear(){
    result.value=""
}
//result
function calacOutput(){
    result.value=eval(result.value)

}
function removeLastDigit(){
    result.value=result.value.slice(0,-1)
}