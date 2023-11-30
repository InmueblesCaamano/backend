require('dotenv').config({ path: '.env' })
const express = require('express');
const app = express();
const PORT = 5000;
const routerApi = require('./network/routerApi');
const dbConnect = require('./dbConnection');
const cors = require('cors')

app.use(cors())
app.use(express.json())
dbConnect()
routerApi(app)
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})