// Importa Express
const express = require('express');
const cors = require('cors');
const db = require('./db/database');
const apiroutes = require('./routes/api.routes');

// Crea una instancia de la aplicación
const app = express();

// Define un puerto
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());
app.use(cors());

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API en blanco con Express!');
});

app.use('/api', apiroutes);

// Inicia el servidor
app.listen(PORT, () => {
  db();
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});