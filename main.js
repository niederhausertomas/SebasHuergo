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

function carrouselResposibe(){
    if ( screen.width >  (1024) ){

let contenedorNav = "";
contenedorNav += `

				<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<div class="row">
								<div class="col ">
									<div >
										<img src="images/Imagen1.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video1.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen2.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video2.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen3.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video3.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen4.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video4.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen5.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video5.mp4')">
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="row">
								<div class="col">
									<div class="">
										<img src="images/Imagen6.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video6.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen7.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video7.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen8.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video8.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen9.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video9.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen10.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video10.mp4')">
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="row">
								<div class="col">
									<div class="">
										<img src="images/Imagen11.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video11.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen12.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video12.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen13.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video13.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen14.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video14.mp4')">
									</div>
								</div>
								<div class="col">
									<div class="">
										<img src="images/Imagen15.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video15.mp4')">
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" id="slider_bt" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" id="slider_bt" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>

`;
document.getElementById("carouselFunction").innerHTML=contenedorNav;
    }


    if ( screen.width < 1023){

        let contenedorNav = "";
        contenedorNav += `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <div class="col ">
                        <div >
                            <img src="images/Imagen1.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video1.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen2.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video2.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen3.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video3.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen4.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video4.mp4')">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="row">
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen5.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video5.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen6.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video6.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen7.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video7.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen8.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video8.mp4')">
                        </div>
                    </div>

                </div>
            </div>
            <div class="carousel-item">
                <div class="row">
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen9.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video9.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen10.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video10.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen11.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video11.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen12.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video12.mp4')">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="row">
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen12.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video12.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen13.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video13.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen14.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video14.mp4')">
                        </div>
                    </div>
                    <div class="col">
                        <div class="">
                            <img src="images/Imagen15.jpg" class="d-block w-100 fotitos" alt="..." onclick= "videoUrl ('Videos/Video15.mp4')">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" id="slider_bt" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" id="slider_bt" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
        
        `;
        document.getElementById("carouselFunction").innerHTML=contenedorNav;
            }
};

    carrouselResposibe();