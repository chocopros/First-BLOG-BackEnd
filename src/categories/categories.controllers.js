const Categories = require('../models/categories.models')

const getAllCategories = async() => {
    const data = await Categories.findAll()
    return data
};


const getCategorieById = async (id) => {
    const data = await Categories.findOne({
        where: {
            id
        }
    })
    return data
};


const createCategory = async(name) => {
    const data = await Categories.create({name})
    return data
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategorieById
}