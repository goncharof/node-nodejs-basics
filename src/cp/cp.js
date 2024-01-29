import { fork } from 'node:child_process';
import { extendedDirname } from '../helpers/__path.js';
import { stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
  const cp = fork(
    extendedDirname(import.meta.url, 'files', 'script.js'),
    args,
    { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] }
  );
    
  stdin.pipe(cp.stdin).on('error', (err) => console.error(err));
  cp.stdout.pipe(stdout).on('error', (err) => console.error(err));
};
  
// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
  