import { Worker } from 'node:worker_threads';
import { extendedDirname } from '../helpers/__path.js';

const performCalculations = async () => {
  const worker = new Worker(extendedDirname(import.meta.url, 'worker.js'), { workerData: 10 });

  worker.on('message', (result) => {
    console.log(result);
  })
};

await performCalculations();