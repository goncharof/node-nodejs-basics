import { dirname } from 'path';
import { readFile } from 'node:fs/promises';

const read = async () => {
  const filename = `${dirname(import.meta.filename)}/files/fileToRead.txt`;

  try {
    const contents = await readFile(filename, 'utf8');
    console.log(contents);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();