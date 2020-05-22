function press(){
    if(event.key==='a' || event.key==='A' ){
        document.getElementById("key-a").className='key pressed';
    }
    if(event.key==='z'  || event.key==='Z'){
        document.getElementById("key-z").className='key pressed';
    }
    if(event.key==='e'  || event.key==='E'){
        document.getElementById("key-e").className='key pressed';
    }
    if(event.key==='r'  || event.key==='R'){
        document.getElementById("key-r").className='key pressed';
    }
    if(event.key==='t'  || event.key==='T'){
        document.getElementById("key-t").className='key pressed';
    }
    if(event.key==='y'  || event.key==='Y'){
        document.getElementById("key-y").className='key pressed';
    }
}

function release(){
    if(event.key==='a' || event.key==='A'){
        document.getElementById("key-a").className='key released';
    }
    if(event.key==='z'  || event.key==='Z'){
        document.getElementById("key-z").className='key released';
    }
    if(event.key==='e'  || event.key==='E'){
        document.getElementById("key-e").className='key released';
    }
    if(event.key==='r'  || event.key==='R'){
        document.getElementById("key-r").className='key released';
    }
    if(event.key==='t'  || event.key==='T'){
        document.getElementById("key-t").className='key released';
    }
    if(event.key==='y'  || event.key==='Y'){
        document.getElementById("key-y").className='key released';
    }
}


function main(){
    document.addEventListener('keydown', press );
    document.addEventListener('keyup', release);
 }
main();