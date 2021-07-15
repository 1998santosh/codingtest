
function calc(){
let input = parseInt(document.getElementById("number").value);
var result = 1;
let output = "";
demo.innerHTML= "";


 
    if( input % 2 ===0){
      input = input-1;
    }
      

    for (let index = 0; index <input; index++) {
      console.log(result);
      document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + result;
      result = result+2;

    }     
    
  }
  

