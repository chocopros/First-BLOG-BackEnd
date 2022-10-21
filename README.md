# SKELETON

- express
- PostgreSQL
- sequelize ORM
- Autentificacion con Tokens
- Brcrypt para hashear contraseñas
- Uso de Json web Token

---

- Rutas de Login y creasion de usuarios (register)
- Herramienta para publicar imagenes de perfil
- CRUD de usuarios con autentificacion y manejo de permisos
- /users/:id DELETE, PUT
- /users/me

---

# npm

npm i express uuid dotenv sequelize pg pg-hstore bcrypt
- express -> para que funcione la aplicacion.
- uuid -> generador de codigos UUID.
- dotenv -> habilitar variables de entorno.
- sequelize -> crear modelos y tablas.
- pg pg-hstore -> depedencia que necesita sequelize para integrar postgres
- bcrypt -> encriptar contraseñas

npm i -D nodemon
- -D nodemon -> para generar un servidor repetitivo.

npm i passport passport-jwt jsonwebtoken

# BLOG APLI

- Front:
* Obetner todas las publicaciones.
* Obtener una en especifico.
* Obtener todas las categorias
* Obtener todos los post de una categoria en especifico
* Obetener todos los posts que he creado
* Podemos Paginar los Posts

```json
    {
        "total": 68,
        "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
        "next": "localhost:9000/api/v1/posts?start=61&limit=68",
        "data": [
            {
                "id": "uncodigoUUID",
                "title": "example-title",
                "content": "lorem ipsum",
                "createdBy": {
                    "id": "uncodigoUUID",
                    "name": "jesus",
                    "email": "jesuschock93@gmail.com"
                },
                "category": {
                    "id": 4,
                    "name": "Tecnologia"
                }
            }
        ]

    }