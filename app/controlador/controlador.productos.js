//Importamos los modulos a utilizar
const modelProducts = require('../modelo/modelo.productos')
const dbProducts = require('../../db/theProducts')
const sequelize = require('../../db/connection')

module.exports.showProductsByCategory=async(category)=>{
    try{
        const obtainProducts = await modelProducts.getProducts(category)
        return obtainProducts
    }catch(error){
        console.log(error)
        throw new Error ('Ocurrio un error desde el controlador')
    }
}

module.exports.createProduct=async(product)=>{
    let newProduct = [
        product.idprod,
        product.nombreprod,
        product.precio,
        product.categoria,
        product.stockCantidad
    ]
    console.log(newProduct)
    try{
        let productCreation = await modelProducts.lastProduct(productNew)
        if (productCreation){
            return 'El producto se creo exitosamente'
        }else{
            throw new Error ('Error en la creación del producto, ya se encuentra en existencia')
        }
    }catch(error){
        console.log(error)
        throw new Error ('Ocurrio un error al crear el producto')
    }
}

module.exports.storeProduct = async () =>{
    try{
        devices = await dbProducts.ML.getDBProductList("https://api.mercadolibre.com/sites/MLM/search?category=MLM1055&sort=available_quantity_desc&offset=20&limit=20")
        accesories = await dbProducts.ML.getDBProductList("https://api.mercadolibre.com/sites/MLM/search?category=MLM3813&sort=available_quantity_desc&offset=20&limit=20")
        esencials = await dbProducts.ML.getDBProductList("https://api.mercadolibre.com/sites/MLM/search?category=MLM192051&sort=available_quantity_desc&offset=20&limit=20")
        chargers = await dbProducts.ML.getDBProductList("https://api.mercadolibre.com/sites/MLM/search?q=cargadores&sort=available_quantity_desc&offset=20&limit=20")
        
        this.createProduct(devices.ProductsDB)
        this.createProduct(accesories.ProductsDB)
        this.createProduct(esencials.ProductsDB)
        this.createProduct(chargers.ProductsDB)
    }catch(err){
        console.log(err)
        throw new Error (err)
    }
}

module.exports.updateProduct = async(newproduct,currprod)=>{
    try{
        const updateProd = await modelProducts.Update(newproduct,currprod)
        return updateProd
    }catch(err){
        console.log(err)
        throw new Error (err)
    }
}

module.exports.delProd = async(prodName)=>{
    let delProd = req.params.nombreprod
    try{
        if(modelProducts.delProdChk()){
            delete delProd
            return true
        }else{
            return false
        }
    }catch(err){
        console.log(err)
        throw new Error ('No se pudo eliminar el producto indicado')
    }
}

module.exports.updateCategory = async(newCat,currCat) => {
    try{
        const updateCategory = await modelUsers.UpdateCat(newCat,currCat)
        return updateCategory
    }catch(err){
        console.log(err)
        throw new Error (err)
    }
}
