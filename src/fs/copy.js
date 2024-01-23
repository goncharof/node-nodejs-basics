import { dirname } from 'path';
import { cp } from 'node:fs/promises';
import isPathExists from './helpers/isPathExists.js';

const copy = async () => {
  const dirSource = `${dirname(import.meta.filename)}/files`;
  const dirDestination = `${dirname(import.meta.filename)}/files_copy`;

  if ((await isPathExists(dirDestination)) || !(await isPathExists(dirSource))) {
    throw new Error('FS operation failed');
  }

  await cp(dirSource, dirDestination, { recursive: true });
};

await copy();
