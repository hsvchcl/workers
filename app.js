// crear un servidor express basico
const express = require("express");
const { set } = require("lodash");
const morgan = require("morgan");

// crear el servidor de express
const app = express();
app.use(morgan("dev"));

app.get("/counter", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

setInterval(() => {
  console.time("op");
  hardWork();
  console.timeEnd("op");
}, 10000);

const hardWork = () => {
  let i = 0;
  while (i < 4000000000) {
    i++;
  }
  return i;
};

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
