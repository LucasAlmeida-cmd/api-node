require('dotenv').config();

const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarioRoutes');
const adminRoutes = require('./routes/adminRoutes');
const sequelize = require('./config/database');
const manipuladorErros = require('./middlewares/manipuladorErros');
const swaggerUi = require('swagger-ui-express'); 
const swaggerSpec = require('./config/swagger'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 

app.use('/api', usuarioRoutes); 
app.use('/api', adminRoutes); 
app.use(manipuladorErros);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); 



app.get('/', (req, res) => {
    res.send('Minha API está rodando perfeitamente!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`);
    console.log(`Acesse: http://localhost:${PORT}`);
});

sequelize.sync()
    .then(() => {
        console.log('📦 Conexão com o PostgreSQL estabelecida e Models sincronizados!');
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((erro) => {
        console.error('❌ Erro ao conectar com o banco de dados:', erro);
    });