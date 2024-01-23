import { writeFile } from 'node:fs/promises';
import { dirname } from 'path';
import isPathExists from './helpers/isPathExists.js';

const create = async () => {
  const filename = `${dirname(import.meta.filename)}/files/freshFile.txt`;

  if (await isPathExists(filename)) {
    throw new Error('FS operation failed');
  }

  await writeFile(filename, 'I am fresh and young');
};

await create();