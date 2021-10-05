const express = require("express");
const router = express.Router(); //criar rotas para ser exportado
const Game = require("../database/Games"); //import model 


router.get("/games", (req, res) => {
    //metodo usado para obter todo conteudo da tabela
    Game.findAll({raw:true}).then( game =>{
        res.statusCode = 200;
        res.json(game);
    })
});

router.get("/game/:id", (req, res) => {
    //pegando o id digitado
    let id = req.params.id;
    //metodo usado para buscar com condição
    Game.findOne({
        where: { id: id }
    }).then(game => {
        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        }else{
            res.sendStatus(404);
        }
    });
});

router.post("/game", (req, res) => {
    //pegando os dados da requisição post usando a desconstrução
    let { title, price, year } = req.body;
    
    //verificação se os conteudos são undefined
    if (title != undefined && price != undefined && year != undefined ){
        //metodo responsavel por salvar os dados no banco
        Game.create({
            title: title,
            year: year,
            price: price
        }).then(() => {
            //caso a pergunta seja salva com sucesso retorna codigo 200
            res.sendStatus(200);
        });
    }else{
        //caso tenho um erro o condigo retorna codigo 400
        res.sendStatus(400);
    }

});

router.delete("/game/:id", (req, res) => {
    let id = req.params.id;
    //metodo responsavel por apagar conteudo do banco de dados
    Game.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.sendStatus(200);
    });
});

module.exports = router;