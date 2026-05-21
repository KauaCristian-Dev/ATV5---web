const pool = require("../database/db");

async function last(_req, res){

    try{

    } catch ( error ) {
        console.log(error.message);
        return res.status(500).json({message:"Erro interno do servidor"});
    }
    res.send("last")
}

export async function getConcurso(req, res){
    res.send("getConcurso");
}

module.exports = {
    last, getConcurso
}