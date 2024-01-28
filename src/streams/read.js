import { open } from 'node:fs/promises';
import { stdout } from 'node:process';
import { extendedDirname } from '../helpers/__path.js';

const read = async () => {
  (await open(extendedDirname(import.meta.url, 'files', 'fileToRead.txt'), 'r'))
    .createReadStream()
    .pipe(stdout)
    .on('error', (err) => console.error(err));
};

await read();