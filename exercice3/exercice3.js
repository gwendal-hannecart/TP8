function haut (){
    document.getElementById("photo").style.top= 0+"px" ; 

}

function bas (){
document.getElementById("photo").style.top= 100+"px" ; 

}

function gauche(){
    document.getElementById("photo").style.left=-100+"px"; 
}
 
function droite(){
    document.getElementById("photo").style.left=100+"px" ;
}

function ouv(){
    var windowObjectReference;
    windowObjectReference = window.open(
    "https://www.isen.fr/",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
    );

}

function ferm(){
    window.close();

}


function main(){
    let okButton = document.getElementById("top");
    okButton.addEventListener('click', haut);
    let bs = document.getElementById("bottom");
    bs.addEventListener('click', bas);
    let lf = document.getElementById("left");
    lf.addEventListener('click', gauche);
    let rg = document.getElementById("right");
    rg.addEventListener('click', droite);
    let ouvrir = document.getElementById("open");
    ouvrir.addEventListener('click', ouv);
    let fermer = document.getElementById("close");
    fermer.addEventListener('click', ferm);

   
}
main();