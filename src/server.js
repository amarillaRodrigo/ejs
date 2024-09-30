import express from "express";
import morgan from "morgan";


//Settings
app.set('appName', 'Express Course')

//Middlewares
const app = express();
app.use(morgan("dev"));
app.use(express.json());


let products = {
  id: 1,
  nombre: "Mayonesa",
  price: 3000,
};


//Routes

app.get("/products", (req, res) => {
  res.send("Obteniendo productos");
});

app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  products.find(function (product) {
    const productFound = product.find((p) => p.id == parseInt(req.params.id));
    if (!productFound) {
      return res.status(400).json({ message: "Product not found" });
    }
    res.send(productFound);
  });
});
app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.lenght + 1 };
  products.push(newProduct);
  res.send("Creando productos");
});

app.put("/products", (req, res) => {
  const newData = req.body
  products.find(function (product) {
    const productFound = product.find((p) => p.id == parseInt(req.params.id));
    if (!productFound) {
      return res.status(400).json({ message: "Product not found" });
    }
  });

  products = products.map( p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p)
  res.json({message : "Producto actualizado"})
});

app.patch("/", (req, res) => {
  res.send("Actualizando caracteristica de un producto");
});
app.delete("/products/:id", (req, res) => {
  const productFound = product.find((p) => p.id == parseInt(req.params.id));
  if (!productFound) {
    return res.status(400).json({ message: "Product not found" });
  }

  products = products.filter((p) => p.id !== parseInt(req.params.id));
  console.log(newProduct);
  res.send("Borrando producto");
});

app.listen(3000);
console.log(`Servido en puerto ${3000}`);
