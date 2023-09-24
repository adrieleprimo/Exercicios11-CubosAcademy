const somar = (req, res)=>{
    const {num1, num2} = req.query;

    if(!isNaN(num1) && !isNaN(num2)){
        const soma = Number(num1) + Number(num2)
        return res.send(`${soma}`)
    }

    return res.send("Não são números")

}

const subtrair = (req, res)=>{
    const {num1, num2} = req.query;

    if(!isNaN(num1) && !isNaN(num2)){
        const subtracao = Number(num1)-Number(num2)
        return res.send(`${Math.abs(subtracao)}`)
    }

    return res.send("Não são números")
}

const multiplicar = (req, res)=>{
    const {num1, num2} = req.query;

    if(!isNaN(num1) && !isNaN(num2)){
        const multiplicar = Number(num1) * Number(num2)
        return res.send(`${multiplicar}`)
    }

    return res.send("Não são números")
}

const dividir = (req, res)=>{
    const {num1, num2} = req.query;

    if(!isNaN(num1) && !isNaN(num2)){
        const dividir = Number(num1)/Number(num2);
        return res.send(`${dividir}`)
    }

    return res.send("Não são números")
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}