const app = require('express')()
const port = 8080
const swaggerUi = require('swagger-ui-express')
const swaggerDoucemnt = require('./docs/swagger.json');

app.get('/games',(req,res)=>{
    res.send(["CS2","GTA VI"])
})

app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDoucemnt))

app.listen(port,()=>{
    console.log(`Api up at: http://localhost:${port}`)
})