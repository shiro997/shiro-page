// Importa Express
const express = require('express');
const db = require('./db/database');
const deviceRoutes = require('./routes/deviceroutes');

// Crea una instancia de la aplicación
const app = express();

// Define un puerto
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API en blanco con Express!');
});

app.use('/device',deviceRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  db();
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});