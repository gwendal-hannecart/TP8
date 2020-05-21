/*function changeButtonColor(){
    let buton=document.getElementById("change");
    buton.style.backgroundColor="rgb("+Math.floor((Math.random() * 255) )+","+Math.floor((Math.random() * 255) )+","+Math.floor((Math.random() * 255) )+") ";
  }*/

  function changeButtonColor(MouseEvent){
    let buton=document.getElementById("change");
    buton.style.backgroundColor="rgb("+Math.floor((Math.random() * 255) )+","+Math.floor((Math.random() * 255) )+","+Math.floor((Math.random() * 255) )+") ";
  
  }

 
function printcoord(coord){
   change.innerText = `cordonnees ( X ; Y ): (${coord.clientX} ; ${coord.clientY})`;
}
 

function main(){
    let okButton = document.getElementById("change");
    changeButtonColor();
    okButton.addEventListener("mouseover", changeButtonColor);
    okButton.addEventListener("mouseover",printcoord);
 
   
   
}
main();
