const express = require("express")
const app = express()
const porta = process.env.PORT || 3000

const noticias = require("./src/noticias/noticias.json")

app.get("/fakes", (req, res) => {
    return res.json(noticias)
})


app.listen(porta, () => {
    console.log("Servidor DefakeRS rodando...")
})