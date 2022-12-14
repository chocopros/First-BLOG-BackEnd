//? Dependencies
const express = require('express')
const db = require('./utils/database')
//? Initials Configs
const app = express()
//? Used file json
app.use(express.json())
//? FILES
const {port} = require('./config')
const Users = require('./models/users.models')
//? IMPORT Routes
const userRouter = require('./users/users.routers')
const authRouter = require('./auth/auth.router')
const categoryRouter = require('./categories/categories.routers')
const postsRouter = require('./posts/posts.routers')


const initModels = require('./models/initModels')

//DATABASE AUTH AND SYNC
db.authenticate()
    .then(() => console.log('DATABASE AUTHENTIFICATED'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('DATA BASE SYNCED!!'))
    .catch(err => console.log(err))

//RelationsDB
initModels() 


//INIT START  
app.get('/',( req, res ) => {
    res.status(200).json({
        message: 'OK!!',
        users: `localhost:${port}/api/v1/users`
    })
})



app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/post', postsRouter)



app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT ${port}`)
})