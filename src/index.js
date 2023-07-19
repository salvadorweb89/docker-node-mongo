import 'dotenv/config';
import app from "./app.js";
import connectToDB from "./database.js";


async function run () {
  const port = process.env.NODE_LOCAL_PORT;

  await connectToDB();
  console.log(`Conexión con DB completada`)
  
  app.listen(port);
  console.log(`Servidor docker-node-mongo andando en puerto ${port}`);
}

run();