//Importamos los modulos a utilizar
const modelUsers = require('../modelo/modelo.usuarios')
const jwt = require('jsonwebtoken')

//Exportamos nuestros modulos
module.exports.createUsers = async (user)=> {
    let newUser = [
        usuer.nombres,
        usuer.apellidos,
        usuer.email,
        usuer.usuario,
        usuer.pass
    ]
    try {
        let resultado = await modelUsers.Usernew(newUser)
        if (resultado) {
            return 'Alta de usuario correcta'
        }else {
            
            throw new Error ('Error en la creacion del usuario o el usuario ya existe')
        }

    }catch (err) {
        console.log(err)
        throw new Error ('Error en la creacion del usuario')
    }
}

module.exports.generateToken = async (data)=> {
    const token = jwt.sign({
        data} , process.env.SECRET_KEY 
    ) //Tiempo maximo 15 minutos de validez
    return token
}

module.exports.verifyUser = async (token)=> {
    const resultado = jwt.verify(token, process.env.SECRET_KEY)

    if(resultado){
        return resultado
    }else {
        throw new Error ('Token no valido!')
    }
}

module.exports.checkUser = async(usr)=>{
    try {
        let resultado = await modelUsers.Userexist (usr)
        console.log(resultado)
        if (resultado) {
            return resultado
        }else {
            throw new Error ('No existe el Usuario')
        }
    }catch (err) {
        console.log(err)
        throw new Error (err)
    }
}

module.exports.deleteUser = async(user)=>{
    let delusr=req.params.nombre
    try{
        if(modelUsers.delUsersChk(user)){
            delete delusr
            return true
        }else{
            return false
        }
        
    }catch(err){
        console.log(err)
        throw new Error ('No se pudo borrar el usuario especificado')
    }
    
}

module.exports.updateUser = async(newUsr,currUsr) => {
    try{
        const updateUser = await modelUsers.Update(newUsr,currUsr)
        return updateUser
    }catch(err){
        console.log(err)
        throw new Error (err)
    }
}

module.exports.showUsers=async ()=>{
    try{
        let userShow = await sequelize.query('SELECT * FROM usuarios')
      return userShow
    }catch(err){
        console.log(error)
      throw new Error ('Ocurrio un error en la consulta de usuarios')
    }
}
