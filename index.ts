import * as http from "http";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta básica
app.get("/", (req, res) => {
  res.send("¡Hola Mundo!");
});

app.post("/calcular", (req, res) => {
  const opt = req.body.operation;
  const num1 = req.body.number1;
  const num2 = req.body.number2;
  if (!opt) {
    throw new Error("No ha ingresado el tipo de operación");
  }
  if (!num1) {
    throw new Error("No ha ingresado el primer numero");
  }
  if (!num2) {
    throw new Error("No ha ingresado el segundo numero");
  }
  let result = 0;

  switch (String(opt).toLowerCase()) {
    case "suma":
      console.log("sumando...");
      result = num1 + num2;
      break;
    case "resta":
      console.log("restando...");
      result = num1 - num2;
      break;
    case "multiplicacion":
      console.log("multiplicando...");
      result = num1 * num2;
      break;
    case "division":
      console.log("dividiendo...");
      result = num1 / num2;
      break;
    default:
      result;
      break;
  }
  res.send({ resultado: result });
});

app.listen(PORT, () => {
  console.log("SERVICIO EJECUTANDOSE EN PUERTO: " + PORT);
});
