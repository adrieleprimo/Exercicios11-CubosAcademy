const {imoveis} = require('../dados/imoveis');

const get = (req, res)=>{
    return res.send(imoveis);
}

const getPorId = (req, res)=>{
    const {id} = req.params
    const findImovel = imoveis.find((imovel)=>{
        return imovel.id === Number(id)
    }); 
    if(findImovel){
        return res.send(findImovel);
    }else{
        return res.send("Não há imóvel");
    }
}

module.exports = {
    get,
    getPorId
}