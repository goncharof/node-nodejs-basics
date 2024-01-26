import { createHash } from 'node:crypto';
import { open } from 'node:fs/promises';
import { stdout } from 'node:process';
import { extendedDirname } from '../helpers/__path.js';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const fd = await open(extendedDirname(import.meta.url, 'files', 'fileToCalculateHashFor.txt'), 'r');
  fd.createReadStream().pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();