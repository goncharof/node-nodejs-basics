import { cp } from 'node:fs/promises';
import { extendedDirname, isPathExists } from '../helpers/__path.js';

const copy = async () => {
  const dirSource = extendedDirname(import.meta.url, 'files');
  const dirDestination = extendedDirname(import.meta.url, 'files_copy');

  if ((await isPathExists(dirDestination)) || !(await isPathExists(dirSource))) {
    throw new Error('FS operation failed');
  }

  await cp(dirSource, dirDestination, { recursive: true });
};

await copy();
