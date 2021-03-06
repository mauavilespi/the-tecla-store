class ProductsIndex {
    constructor(data) {
        this.data = data
    };

    //Metodos
    crearProductos = () => {
        for (let index = 0; index < 6; index++){
            //Contenedor principal donde se alojan las tarjetas
            let cardContainer = document.getElementById("cardContainer2");

            //div card
            let card = document.createElement("div");
            card.setAttribute("class", "card cardGrid border-light py-10");

            //div colimg (para colocar la imagen)
            let colImg = document.createElement("div");
            colImg.setAttribute("class", "cardImgGrid")

            //div imagen
            let image = document.createElement("img");
            image.setAttribute("src", this.data[index].thumbnail);
            image.setAttribute("class", "img-fluid rounded-start")
            image.style.width = "200px";

            //div cardBody
            let cardBody = document.createElement("div");
            cardBody.setAttribute ("class", "card-body cardBodyGrid")

            //Nombre del producto
            let productName = document.createElement("h5");
            productName.setAttribute("class", "card-title text-center");
            productName.textContent = `${this.data[index].title}`;

            //Pie de tarjeta
            let cardFooter = document.createElement("div");
            cardFooter.setAttribute("class", "d-flex align-items-center justify-content-center");

            //Precio del producto
            let productPrice = document.createElement("small");
<<<<<<< HEAD:public/js/ProductsIndex.js
            productPrice.textContent = `$${new Intl.NumberFormat("es-MX").format(this.data[index].price)}`;
=======
            productPrice.textContent = `$${this.data[index].price}`;
>>>>>>> master:Front/assets/dist/js/ProductsIndex.js
            productPrice.setAttribute("style", "font-size: 1.2em")

            cardContainer.appendChild(card);
            card.appendChild(colImg);
            colImg.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(productName);
            cardBody.appendChild(cardFooter);
            cardFooter.appendChild(productPrice);
        }
    }

    //AsyncAwait API ML
    static getProduct = async(url) => {
        let Product;

        const resp = await fetch(url)
        const data = await resp.json()
        Product = new ProductsIndex (data)
        Product.crearProductos()
        return data
    };
    
    static getProductList = async (list) =>{
        let result;
        result = await this.getProduct(list)
    }
}

ProductsIndex.getProductList("http://localhost:3000/devices");
<<<<<<< HEAD:public/js/ProductsIndex.js

//Activar etiqueta en dropdown
let item = document.getElementById('item-Inicio')
item.setAttribute("class", "nav-link active")
=======
>>>>>>> master:Front/assets/dist/js/ProductsIndex.js
