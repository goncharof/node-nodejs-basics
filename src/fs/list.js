import { readdir } from 'node:fs/promises';
import { extendedDirname } from '../helpers/__path.js';

const list = async () => {
	try {
		const files = (await readdir(extendedDirname(import.meta.url, 'files'), { withFileTypes: true }))
		.map(file => ({
				name: file.name,
				isFile: file.isFile(),
				isDirectory: file.isDirectory()
			}));
			
			console.table(files, ['name', 'isFile', 'isDirectory']);
		} catch (err) {
			console.log(err);
			throw new Error('FS operation failed');
		}
	};
	
	await list();