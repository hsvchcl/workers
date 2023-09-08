// crear un servidor express basico
const express = require("express");
const { Worker } = require("worker_threads");
const morgan = require("morgan");

// crear el servidor de express
const app = express();
app.use(morgan("dev"));

app.get("/counter", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

/**
 * Ejecucion de tarea en hilo principal
 */
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

/**
 * Creando un nuevo worker:
 */
// const worker = new Worker("./workers/hard-work.worker.js");
// setInterval(() => {
//   worker.postMessage("start");
// }, 10000);

// worker.on("message", (msg) => {
//   if (msg === "done") {
//     console.log("worker process done!");
//   }
// });
// end worker

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
