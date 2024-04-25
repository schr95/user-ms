import express from 'express';
import { createConnection } from 'typeorm';

const app = express();

createConnection()
  .then(async (connection) => {
    console.log('Conexión a la base de datos exitosa');

    const port = process.env.PORT || 5001;
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });
