import { createHash } from 'node:crypto';
import { open } from 'node:fs/promises';
import { stdout } from 'node:process';
import { extendedDirname } from '../helpers/__path.js';
import { pipeline } from 'node:stream';

const calculateHash = async () => {
  pipeline(
    (await open(extendedDirname(import.meta.url, 'files', 'fileToCalculateHashFor.txt'), 'r')).createReadStream(),
    createHash('sha256').setEncoding('hex'),
    stdout,
    (err) => {
      if (err) console.error(err)
    }
  )
};

await calculateHash();