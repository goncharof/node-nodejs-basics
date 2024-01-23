import isPathExists from './helpers/isPathExists.js';
import { dirname } from 'path';
import { rename as fsRename } from 'node:fs/promises';

const rename = async () => {
  const from = `${dirname(import.meta.filename)}/files/wrongFilename.txt`;
  const to = `${dirname(import.meta.filename)}/files/properFilename.md`;

  if (await isPathExists(to) || !(await isPathExists(from))) {
    throw new Error('FS operation failed');
  } else {
    await fsRename(from, to);
  }
};

await rename();