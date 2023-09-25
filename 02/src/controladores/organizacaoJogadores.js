const { jogadores } = require("../jogadores");

let jogador=0
const rodada = (req, res)=>{
    const jogadorAtual = jogadores[jogador]
    jogador++
        if(jogador >= jogadores.length){
            jogador =0;
        }
        return res.send(`É a vez de ${jogadorAtual} jogar!`);  
}

const remover = (req, res)=>{
    const {indiceJogador} = Number(req.query.indice);
    if(indiceJogador >= jogadores.length){
        return res.send(`Não existe jogador no índice informado (${indiceJogador}) para ser removido.`)
    }
    jogadores.splice(indiceJogador, 1);
    return res.send(jogadores);
}

const adicionar = (req, res)=>{
    let nomeJogador = req.query.nome
    const {indiceJogador} = Number(req.query.indice);
     nomeJogador = `${nomeJogador[0].toUpperCase()}${nomeJogador.slice(1).toLowerCase()}`;
    if(isNaN(indiceJogador)){
        jogadores.push(nomeJogador);
        return res.send(jogadores)
    }
    if(indiceJogador >= jogadores.length){
        return res.send(`O índice informado (${indiceJogador}) não existe no array. Novo jogador não adicionado.`)
    }
    jogadores.splice(indiceJogador, 0, nomeJogador);
    return res.send(jogadores)

}

module.exports = {rodada, remover, adicionar};