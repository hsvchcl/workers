// crear un servidor express basico
const express = require("express");
const { Worker } = require("worker_threads");
const morgan = require("morgan");

// crear el servidor de express
const app = express();
app.use(morgan("dev"));

app.get("/get-users", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

/**
 * Ejecucion de tarea en hilo principal
 */
// setInterval(() => {
//   console.time("op");
//   hardWork();
//   console.timeEnd("op");
// }, 10000);

// const hardWork = () => {
//   let i = 0;
//   while (i < 4500000000) {
//     i++;
//   }
//   return i;
// };

/**
 * Creando un nuevo worker:
 */
// Función para iniciar un nuevo worker
const startWorker = () => {
  const worker = new Worker("./workers/hard-work.worker.js");
  worker.on("message", (msg) => {
    if (msg === "done") {
      console.log("worker process done!");
      worker.terminate().then(() => {
        console.log("worker terminated!");
      });
    }
  });
  // Enviar mensaje al worker para iniciar la tarea
  worker.postMessage("start");
};

setInterval(() => {
  console.log("starting worker...");
  startWorker();
}, 10000);

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
