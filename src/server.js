const express = require("express");
const app = express();

app.get("/message/:id/:user", (request, response)=> {
const {id, user} = request.params;/*<-- atenção ao PARAMS  (OBRIGATÓRIO)*/

    response.send(`O ID nº${id} é para o usuário ${user}`)
})


app.get("/users", (request, response)=> {
    const { page, limit} = request.query; /*<-- atenção ao QUERY */
    
        response.send(`Pagina ${page} no Limite ${limit}`)
    })


const port = 3333;

app.listen(port, () => console.log(`server is running on Port ${port}`))