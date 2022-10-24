const categoriesControllers = require('./categories.controllers')

const getAllCategories = ( req, res ) => {
    categoriesControllers.getAllCategories()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({message: err.message}))
};

const getCategoryById = ( req, res ) => {
    const id = req.params.id
    categoriesControllers.getCategorieById(Number(id))
        .then(data => {
            data ? res.status(200).json(data) : res.status(400).json({message: 'No existe ID'});
        })
        .catch(err => res.status(400).json({message: err.message}))
};

const postCategory = ( req ,res ) => {
    const {name} = req.body

    if (name) {
        categoriesControllers.createCategory(name)
            .then(data => res.status(201).json(data))
            .catch( err => res.status(400).json({message: err.message}))
    } else {
        res.status(400).json({message: 'Missing data'})
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    postCategory
};