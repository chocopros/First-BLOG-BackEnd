
const Posts = require('../models/posts.models')

const uuid = require('uuid')


const getAllPosts = async () => {
    const info = await Posts.findAll()
    return info

};


const getPostById = async(id) => {

}


const createPost = async(data) => {
    
    const response = await Posts.create({
        id: uuid.v4(),
        title: data.title,
        content: data.content,
        userId: data.userId,
        categoryId: data.categoryId
    })
    return response
}


module.exports = {
    getAllPosts,
    getPostById,
    createPost
}