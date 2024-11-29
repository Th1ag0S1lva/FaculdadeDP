const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/imagem', express.static(path.join(__dirname, 'IMGPerfumes')))

const db = new sqlite3.Database('./bd_perfumes.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados bd_perfumes.db');
    }
});


app.get('/api/perfumes', (req, res) => {
    const genero = req.query.genero;

    const query = "SELECT * FROM perfumes WHERE Genero = ?";
    db.all(query, [genero], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro ao buscar perfumes' });
            return;
        }
        res.json(rows);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join( 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
