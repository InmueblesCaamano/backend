require('dotenv').config({ path: '.env' })
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routerApi = require('./network/routerApi');
const dbConnect = require('./dbConnection');
const cors = require('cors')

app.use(cors())
app.use(express.json())
dbConnect()

app.get('/',(req,res) =>{
  res.send("Welcome")
})

routerApi(app)
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})