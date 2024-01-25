import { createRequire } from "module";
import { sep } from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from "node:url";
import { extendedDirname } from "../helpers/__path.js";

import './files/c.js';


const require = createRequire(import.meta.url);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = require(extendedDirname(import.meta.url, 'files', 'a.json'));
} else {
  unknownObject = require(extendedDirname(import.meta.url, 'files', 'b.json'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${extendedDirname(import.meta.url)}`);

const myServer = createServerHttp((_, res) => res.end('Request accepted'));

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer,
}
