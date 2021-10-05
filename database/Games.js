const Sequelize = require("sequelize");
const connection = require("./database");

//Vai passar nome da tabel e abrinr um JSON para as clunas e suas caracteristicas
const Game = connection.define("Games",{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

//Sincronizar com o banco de dados
//force false usadado para n criar outra caso ja exista uma
Game.sync({force:false}).then(() => {});

module.exports = Game;