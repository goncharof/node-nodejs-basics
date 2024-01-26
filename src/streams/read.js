import { open } from 'node:fs/promises';
import { stdout } from 'node:process';
import { extendedDirname } from '../helpers/__path.js';

const read = async () => {
  const fd = await open(extendedDirname(import.meta.url, 'files', 'fileToRead.txt'), 'r');
  fd.createReadStream().pipe(stdout);
};

await read();