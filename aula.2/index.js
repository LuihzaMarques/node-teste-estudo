const express = require('express')

const app = express()

app.use(express.json())

let users = [
    
        {id: 1, name:"Euclides"},
        {id: 2, name:"Felipe"},
        {id: 3, name:"Maria"}
]

app.get("/", function(req,res){
    res.send(users)
})


app.get('/:id', function(req,res){
    const id = parseInt(req.params.id)
    const user= users.find(user => user.id === id)
    if(user){
        res.json(user)
    }
    else {
        res.status(400).json({message: "Usuario não encontrado"})
    }
})


app.post("/users", function(req,res){
    console.log(req.body);
    const { name } = req.body
    const id = users.length+1
    const newUser = {id,name}

    users.push(newUser)
    res.status(201).json(newUser)
})

app.delete("/users/:id",(req,res)=> {

    const id = parseInt(req.params.id)
    users = users.filter(user => user.id !== id);
    res.sendStatus(204) 
})

app.put('users/:id', (req,res) =>{

    const id = parseInt(req,params.id)

    const {name} = req.body
    userIndex = users.findIndex(user => user.id === id);

    if(userIndex !== -1){
        users[userIndex].name = name; 
        res.json(users[userIndex])
    } else {
        res.status(400).json({message: "usuario nao encontrado"})
    }
})



app.listen(3000)