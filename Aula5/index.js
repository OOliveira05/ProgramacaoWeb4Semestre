import express from "express"
const app = express()
const port = 3000


app.get('/pessoa',(req,res)=>{
    const pessoa = {
        nome:"Otávio Lima",
        email: "otavio@gmail.com",
        idade: 21,
        hobbies:["Jogos online","Academia", "Livros", "Jogos de tabuleiro"]
    }
    const pessoaJson = JSON.stringify(pessoa)
    res.setHeader("Content-Type","application/json")
    res.send(pessoaJson)
})

app.get('/listapessoas',(req,res)=>{
    const pessoa1 = {
        nome:"Otávio Lima",
        email: "otavio@gmail.com",
        idade: 21,
        hobbies:["Jogos online","Academia", "Livros", "Jogos de tabuleiro"]
    }

    const pessoa2 = {
        nome:"Lucas oliveira",
        email: "lucas@gmail.com",
        idade: 22,
        hobbies:["Jogos online","Futebol", "Series", "Livros"]
    }

    const pessoa3 = {
        nome:"Amanda Silva",
        email: "amanda@gmail.com",
        idade: 25,
        hobbies:["Maquiagem","Moda", "Filmes", "Series"]
    }

    const listapessoas = [pessoa1, pessoa2, pessoa3]

    const listapessoasJson = JSON.stringify(listapessoas)
    res.setHeader("Content-Type","application/json")
    res.send(listapessoasJson)
}

)

app.listen(port,() =>{
    console.log('App executando na porta '+port)
})