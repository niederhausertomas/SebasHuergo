let read=1;
const botonRead = document.getElementById("Read");
botonRead.addEventListener("click", eventoClick);
function eventoClick(){
    if (read ==1){
         botonRead.innerHTML=`<b>Read less.</b>`;
         read=-1;
        }else if (read==-1){
            botonRead.innerHTML=`<b>Read more.<b>`;
            read=1;}
}

function videoUrl(hmmm){
document.getElementById("videoo").src=hmmm;
}
