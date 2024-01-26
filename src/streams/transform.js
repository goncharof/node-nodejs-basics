import { stdin, stdout } from 'node:process';
import { Transform, pipeline } from 'node:stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, cb) {
      cb(null, chunk.toString().trim().split('').reverse().join('') + '\n');
    }
  });
  
  pipeline(stdin, reverseStream, stdout, (error) => console.error(error));
};

await transform();