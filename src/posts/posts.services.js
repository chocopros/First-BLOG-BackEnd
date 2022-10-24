const postControllers = require('./posts.controllers')


const createPost = ( req, res ) => {
    const userId = req.user.id
    const { title, content, categoryId } = req.body

    if (title && content && categoryId) {
        postControllers.createPost({title, content, userId, categoryId})
            .then((data) => res.status(201).json({message: data}))
            .catch(err => res.status(400).json({messageCatch: err.message}))
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                title: 'string',
                content: 'string',
                categoryId: 'number'
            }
        })
    }
};

module.exports = {
    createPost
}