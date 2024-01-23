import { writeFile, access, constants } from 'node:fs/promises';
import { dirname } from 'path';

const checkIfFileExists = async (filename) => {
  try {
    await access(filename, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const create = async () => {
  const filename = `${dirname(import.meta.filename)}/files/freshFile.txt`;

  if (await checkIfFileExists(filename)) {
    throw new Error('FS operation failed');
  }

  await writeFile(filename, 'I am fresh and young');
};

await create();