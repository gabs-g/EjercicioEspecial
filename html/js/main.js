const main = document.getElementsByTagName("main").item(0);
let tarjetas = document.getElementById("tarjetas");
const botonClic = document.getElementById ('botonClic');
const URLMain="https://api.escuelajs.co/api/v1/products/";

botonClic.addEventListener('click', function(event){
    event.preventDefault();

    function getData(information){
        const options = {method: "GET"};
        fetch(URLMain, options)
            .then((response) => {
                response.json().then((res)=>{
                    //console.log(res.length);
                    //console.log(res[2].title);
                    createCard(res)
            });
        })
    
            .catch((err) => {
                         main.insertAdjacentHTML("beforeend", 
                             `<div class="alert alert-danger" role="alert">
                                  ${err.message}
                             </div>`);
                        
       });
    
    }//getData

    function createCard(productos){
        tarjetas.innerText= "";
        productos.forEach(producto => {
        tarjetas.insertAdjacentHTML("beforeend",
            `<div class="card"  style="width: 18rem;">
                <img src="${producto.images[0]}" class="card-img-top" alt="${producto.title}">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description}</p>
                    <a href="#" class="btn btn-primary">Ver más</a>
                </div>
            </div>`
        );
    
    });
    }

    getData ();

});