import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

const products = {
  id: 1,
  nombre: "Mayonesa",
  price: 3000,
};

app.get("/products", (req, res) => {
  res.send("Obteniendo productos");
});

app.get("/products/:id", (req, res) => {
  res.send("Obteniendo producto por id");
});
app.post("/products", (req, res) => {
  console.log({...req.body, id: 3});
  res.send("Creando productos");
});
app.put("/products", (req, res) => {
  res.send("Actualizando producto");
});
app.patch("/", (req, res) => {
  res.send("Actualizando caracteristica de un producto");
});
app.delete("/", (req, res) => {
  res.send("Borrando producto");
});

app.listen(3000);
console.log(`Servido en puerto ${3000}`);
