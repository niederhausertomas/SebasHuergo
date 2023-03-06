const nav = document.getElementById('menu');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 300) {
            nav.classList.add('navColor');
        } else {
            nav.classList.remove('navColor');
        }
    })


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
