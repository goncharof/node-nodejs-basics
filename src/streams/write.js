import { open } from 'node:fs/promises';
import { stdin } from 'node:process';
import { extendedDirname } from '../helpers/__path.js';

const write = async () => {
  const ws = (await open(extendedDirname(import.meta.url, 'files', 'fileToWrite.txt'), 'w'))
    .createWriteStream();
  
  stdin
    .on('data', (chunk) => ws.write(chunk.toString('utf-8')))
    .on('error', (err) => console.error(err));
};

await write();