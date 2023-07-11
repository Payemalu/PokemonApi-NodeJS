const express = require('express');

const authRoutes = require('./auth/auth.router').router;
const teamsRoutes = require('./routes/pokes.router').router;

const app = express();
const port = 3000;

const connectDB = require('./config/db');
const cors = require('cors');

// Connect to the DB
connectDB();
app.use(cors());

// app.get('/pokemon/1', (req, res) => {
//     const bulbasaur = {
//         id: "1",
//         nombre: "Bulbasaur",
//         tipo: "planta"
//     };
//     res.send(bulbasaur)
// })

app.get('/',(req, res) => {
    res.status(200).send('Hello World!!!');
});

app.use('/auth', authRoutes);
app.use('/routes', teamsRoutes);

app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
})
