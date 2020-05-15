/*function changeButtonColor(){
    let buton=document.getElementById("change");
    buton.style.backgroundColor="rgb("+Math.floor((Math.random() * 255) )+","+Math.floor((Math.random() * 255) )+","+Math.floor((Math.random() * 255) )+") ";
  }*/

  function changeButtonColor(MouseEvent){
    let buton=document.getElementById("change");
    buton.style.backgroundColor="rgb("+Math.floor((Math.random() * 255) )+","+Math.floor((Math.random() * 255) )+","+Math.floor((Math.random() * 255) )+") ";
    console.log(" Clients coords :("+MouseEvent.clientX+"),"+MouseEvent.clientX+")");
  
  }

function main(){
    let okButton = document.getElementById("change");
    okButton.addEventListener("mouseover", changeButtonColor);
   
}
main();