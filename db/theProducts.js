//? Import the necessary modules
const fetch = require('node-fetch');

//? Necessary objects
let Product = {};
let ProductsDB = {};
//? ML Class
class ML {
    //* Constructos
    constructor(data){
        this.data=data
    };

    //* Save Products data
    saveProducts = async() => {
        for(let index = 0; index < 20 ; index ++){
            Product[index] = {"id" : this.data.results[index].id,
                "title" : this.data.results[index].title,
                "thumbnail" : this.data.results[index].thumbnail,
                "price" : this.data.results[index].price,
                "index" : index}   
        }
    };

    insertDBProducts = async () =>{
        for(let index = 0; index < 20 ; index ++){
            ProductsDB[index] = {"id" : this.data.results[index].id,
                "title" : this.data.results[index].title,
                "price" : this.data.results[index].price,
                "category": null,
                "stock" : 100}   
        }
    };

    //* AsyncAwait API ML
    static getProduct = async(url) => {
        let mlProduct;

        const resp = await fetch(url)
        const data = await resp.json()
        mlProduct = new ML (data)
        await mlProduct.saveProducts();
        return data
    };

    static getDBProduct = async(url) =>{
        let dbProduct;

        const resp =await fetch(url)
        const data = await resp.json()
        dbProduct = new ML (data)
        await dbProduct.insertDBProducts();
        return data
    }

    static getProductList = async (list) =>{
        let result;
        result = await this.getProduct(list)
    };

    static getDBProductList =  async (list) =>{
        let result;
        result = await this.getDBProduct(list)
    }
}

//? Exports modules
module.exports = {ML, Product}
