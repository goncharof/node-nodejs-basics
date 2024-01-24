import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { extendedDirname } from '../helpers/__path.js';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream(extendedDirname(import.meta.url, 'files/fileToCalculateHashFor.txt'));
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();