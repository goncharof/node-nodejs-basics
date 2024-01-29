import { dirname } from 'path';
import { rename as fsRename } from 'node:fs/promises';
import { extendedDirname, isPathExists } from '../helpers/__path.js';

const rename = async () => {
  const from = extendedDirname(import.meta.url, 'files', 'wrongFilename.txt');
  const to = extendedDirname(import.meta.url, 'files', 'properFilename.md');

  if (await isPathExists(to) || !(await isPathExists(from))) {
    throw new Error('FS operation failed');
  } else {
    await fsRename(from, to);
  }
};

await rename();