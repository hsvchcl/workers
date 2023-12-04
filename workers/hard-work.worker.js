const { parentPort } = require("worker_threads");

parentPort.on("message", (msg) => {
  if (msg === "start") {
    console.time("opInWorker");
    const result = hardWork();
    console.log(result);
    parentPort.postMessage("done");
    console.timeEnd("opInWorker");
  }
  parentPort.close();
});

const hardWork = () => {
  let i = 0;
  while (i < 4000000000) {
    i++;
  }
  return i;
};
