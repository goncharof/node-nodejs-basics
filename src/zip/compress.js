import { open } from 'node:fs/promises';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { extendedDirname } from '../helpers/__path.js';

const compress = async () => {
  const [fdSource, fdDestination] = await Promise.all([
    open(extendedDirname(import.meta.url, 'files', 'fileToCompress.txt'), 'r'),
    open(extendedDirname(import.meta.url, 'files', 'archive.gz'), 'w')
  ])

  pipeline(fdSource.createReadStream(), createGzip(), fdDestination.createWriteStream(), (err) => {
    if (err) console.error(err);
  })
};

await compress();