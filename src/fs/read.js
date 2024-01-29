import { readFile } from 'node:fs/promises';
import { extendedDirname } from '../helpers/__path.js';

const read = async () => {
  const filename = extendedDirname(import.meta.url, 'files', 'fileToRead.txt');

  try {
    const contents = await readFile(filename, 'utf8');
    console.log(contents);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();