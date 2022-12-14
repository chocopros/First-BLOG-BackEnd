const router = require('express').Router()
const passport = require('passport') //proteger Rutas
const userServices = require('./users.services')
const adminValidate = require('../middlewares/role.middleware')

require('../middlewares/auth.middleware')(passport) // para proteger rutas

// Ruta raiz
router.get('/', passport.authenticate('jwt', {session: false}) , userServices.getAllUsers)

//TODO el registerUser ira en la ruta /auth/register




//? Ruta de infomacion propia del usuario logueado
router.route('/me')
    .get(passport.authenticate('jwt', {session:false}), userServices.getMyUser)
    .patch(passport.authenticate('jwt', {session:false}), userServices.patchMyUser)
    .delete(passport.authenticate('jwt', {session:false}), userServices.deleteMyUser)


//? /api/v1/users/:id
//? Rutas Dinamicas por ID
router.route('/:id')
    .get(userServices.getUserById)
    .patch(
        passport.authenticate('jwt', {session:false}),
        adminValidate,
        userServices.patchUser)
    .delete(
        passport.authenticate('jwt', {session:false}),
        adminValidate,
        userServices.deleteUser)


    
module.exports = router


// rutas dinamicas por ID /users/:id
//FORMA PASADA
// router.get('/:id')
// router.path('/:id')
// router.put('/:id')
// router.delete('/:id') --------> FORMA PASADA