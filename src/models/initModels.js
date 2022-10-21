//Se debe importar todos los modelos de tablas con que se esten trabajando y tengan relacion
const User = require('./users.models')
const Categories = require('./categories.models')
const Posts = require('./posts.models');
const Users = require('./users.models');

const initModels = () => {

    //* RELATION: 1 -> Muchos
    Posts.belongsTo(Users) // UN post le pertenece a UN usuario
    Users.hasMany(Posts)    // UN usuario puede tener MUCHAS publicaciones

    //* RELATION: 1 -> Muchos
    Posts.belongsTo(Categories) //UN post puede tener UNA categoria
    Categories.hasMany(Posts) // UNA categoria puede tener MUCHOS posts
};

module.exports = initModels