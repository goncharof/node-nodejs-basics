import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { extendedDirname } from '../helpers/__path.js';

const createWorker = async (workerData) => {
  return new Promise((resolve, reject) => {
    new Worker(extendedDirname(import.meta.url, 'worker.js'), { workerData })
    .on('message', (data) => {
      resolve({
        status: 'resolved',
        data
      });
    })
    .on('error', () => {
      resolve({
        status: 'error',
        data: null
      });
    })
  })
}

const performCalculations = async () => {
  const workers = [];
  for(let i = 0; i < cpus().length; i++) {
    workers.push(createWorker(10 + i));
  }
  console.log(await Promise.all(workers))
};

await performCalculations();