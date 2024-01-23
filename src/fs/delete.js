import { dirname } from 'path';
import { rm } from 'node:fs/promises';

const remove = async () => {
  const filename = `${dirname(import.meta.filename)}/files/xxx.txt`;

  try {
    await rm(filename, { force: false })
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();