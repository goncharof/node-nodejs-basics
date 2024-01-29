import { open } from 'node:fs/promises';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { extendedDirname } from '../helpers/__path.js';

const decompress = async () => {
  const [fdSource, fdDestination] = await Promise.all([
    open(extendedDirname(import.meta.url, 'files', 'archive.gz'), 'r'),
    open(extendedDirname(import.meta.url, 'files', 'fileToCompress.txt'), 'w')
  ])

  pipeline(fdSource.createReadStream(), createUnzip(), fdDestination.createWriteStream(), (err) => {
    if (err) console.error(err);
  })
};

await decompress();