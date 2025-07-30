const express = require('express')

const app = express()

const PORT = 3000

app.use(express.json())

let usuarios = [
    {id: 1, nombre: 'agustin', edad: 31},
    {id: 2, nombre: 'gonzalo', edad: 32}
]


app.get('/', (req, res) => {
    res.send('<h1>API DE USUARIOS FUNCIONANDO</h1>')
})

app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

app.get('/usuarios/:id', (req, res) => {
    const response = parseInt(req.params.id)
    const usuarioEncontrado = usuarios.find(u => u.id === response)

    if (usuarioEncontrado) {
        res.send(`este es tu usuario ${JSON.stringify(usuarioEncontrado)}`)
    } else {
        res.status(404).send('Usuario no encontrado')
    }
})

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body
    nuevoUsuario.id = usuarios.length + 1

    if (!nuevoUsuario.nombre || !nuevoUsuario.edad) {
        res.status(404).send('falta agregar propiedades')
    } else {
        usuarios.push(nuevoUsuario)
    }
    res.send(usuarios)
})

app.put('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const  datosActualizados = req.body
    const index = usuarios.findIndex(u => u.id === id)

    if(index !== -1){
        usuarios[index] = {...usuarios[index], ...datosActualizados}

        res.send(usuarios[index])
    } else {
        res.status(404)
        res.json({message : "no se encuentra el id"})
    }
})

app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id)
    
    usuarios = usuarios.filter(u => u.id !== id)

    res.json({message : "usuario eliminado"})
})

app.listen(PORT, () => {
    console.log(`estas escuchando el puerto http://localhost:${PORT}`);
    
})