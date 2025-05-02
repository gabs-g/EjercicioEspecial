document.addEventListener('DOMContentLoaded', function(){

const main = document.getElementsByTagName("main").item(0);
const tarjetas = document.querySelectorAll(".tarjetas .col");
const botonClic = document.getElementById ('botonClic');
const URLMain="https://api.escuelajs.co/api/v1/products/";


botonClic.addEventListener('click', function(){
    fetch(URLMain)
    .then(response => response.json())
    .then(data => {
        tarjetas.forEach((tarjeta, i)=> {
            const producto = data [i];
            console.log("Producto:", producto);

            if(producto){
                const svg = tarjeta.querySelector (".bd-placeholder-img");

                //En Go Live me mostraba imágenes rotas, así que busqué cuál podría ser el motivo. 
                // Encontré que era mejor tratar al svg como img y así  poder llamar al url. Lo intenté pero sigo tenieendo las imágenes "rotas" en Go live.
                //Seguiré investigando.
                if(svg){
                const img = document.createElement("img");
                img.classList.add("card-img-top");
                img.src = producto.images [1];
                svg.replaceWith(img);
                
            }
            }

            tarjeta.querySelector(".card-text").innerText= producto.description;
            tarjeta.querySelector(".price").innerText= `${"Precio: " + producto.price +" pesos"}`;
              
        });
    })
    
            .catch((err) => {
                         main.insertAdjacentHTML("beforeend", 
                             `<div class="alert alert-danger" role="alert">
                                  ${err.message}
                             </div>`);
             });
                   
       });
    });

    