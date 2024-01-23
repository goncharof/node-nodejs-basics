import { readdir } from 'node:fs/promises';
import { dirname } from 'path';

const list = async () => {
	try {
		const files = await readdir(`${dirname(import.meta.filename)}/files`);

		for (const file of files)
			console.log(file);
	} catch (err) {
		throw new Error('FS operation failed');
	}
};

await list();