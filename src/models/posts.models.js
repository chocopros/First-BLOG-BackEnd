const db = require('../utils/database')
const {DataTypes} = require('sequelize') // para declarar el tipo de data en las columnas
const Users = require('./users.models') //Se importa el modelo de usuario para poder relacionar
const Categories = require('./categories.models') //Se importa el modelo de categorias para poder relacionar


const Posts = db.define('posts', {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    //?, Llave foranea desde Users
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'created_by',
        references: {
            key: 'id',
            model: Users
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    }
})


module.exports = Posts