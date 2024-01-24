import { rm } from 'node:fs/promises';
import { extendedDirname } from '../helpers/__path.js';

const remove = async () => {
  const filename = extendedDirname(import.meta.url, 'files', 'fileToRemove.txt');

  try {
    await rm(filename, { force: false })
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();