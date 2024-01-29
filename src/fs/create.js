import { writeFile } from 'node:fs/promises';
import { extendedDirname, isPathExists } from '../helpers/__path.js';

const create = async () => {
  const filename = extendedDirname(import.meta.url, 'files', 'freshFile.txt');

  if (await isPathExists(filename)) {
    throw new Error('FS operation failed');
  }

  await writeFile(filename, 'I am fresh and young');
};

await create();