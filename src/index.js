// importando dotenv para a minha queirda aplicação
require('dotenv').config();
const express = require('express');
const orientacoesRoutes = require('./routes/orientacoesRoutes');
const path = require('path');

const app = express();

/* Este código serve arquivos estáticos da pasta public, 
   que está localizada no mesmo diretório do arquivo onde 
   este código é executado. */ 
app.use(express.static(path.join(__dirname, 'public')));

// Este código serve arquivos estáticos da pasta uploads.
app.use('/uploads', express.static('uploads'));

app.use(express.json());

// Usar rotas Orientações
app.use(orientacoesRoutes);

app.listen(3000, () => {
  console.log('Servidor: http://localhost:3000/');
});
