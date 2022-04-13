const express = require('express');
const app = express();

app.use(( req, res, next ) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if ( req.method === 'OPTIONS' ) {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
    }
    next();
   });

app.use(express.json())
let users=[]
let Publicaciones=[]

app.get('/', async (req, res) => {
    //si hay una sesion mostrar welcome

    //sino unwelcome :v
});

app.get('/login', async (req, res) => {
    res.json("aaa")
});

app.post('/login', async (req, res) => {
    //recibir credenciales
});

app.get('/usuarios', async (req, res) => {
    res.json(users)
});

app.post('/usuarios', async (req, res) => {
    const user = req.body;
    if (user.Nombre && user.Username && user.Password) {
        const id = genIdUser++
        const newUser = {
            Username: user.Username,
            Nombre: user.Nombre,
            Password: user.Password,
            idUser: id
        }
        users = [...users, newUser]
        res.status(200).json({ message: 'Success' })
    } else {
        res.status(400).end()
    }
});

app.get('/publicaciones', async (req, res) => {
    res.json(users)
});

app.post('/publicaciones', async (req, res) => {
    
});


app.use(async (req,res) => {
    res.status(404).json("Error Success")
    });

app.listen(8080);