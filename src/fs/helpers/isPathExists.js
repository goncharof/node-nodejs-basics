import { access, constants } from 'node:fs/promises';

export default async (filename) => {
  try {
    await access(filename, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}