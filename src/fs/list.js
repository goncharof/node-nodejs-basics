import { readdir } from 'node:fs/promises';
import { extendedDirname } from '../helpers/__path.js';

const list = async () => {
	try {
		const files = await readdir(extendedDirname(import.meta.url, 'files'));

		for (const file of files)
			console.log(file);
	} catch (err) {
		throw new Error('FS operation failed');
	}
};

await list();