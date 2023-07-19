import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

/*try {
  const db = mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then((db) => {
    console.log(`Conectado a ${db.connection.name}`);
  });
} catch (error) {
  console.error(error);
}*/

/*mongoose.connection.on("connected", () => {
  console.log("Mongoose conectado");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose desconectado");
});*/

const connectToDB = async () => {
  try{
    const db = await mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`Conectado a ${db.connection.name}`);
  }
  catch(err) {
    console.error(error);
  }
}

export default connectToDB;