import fs from 'fs';
import { dirname, extname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const files = fs.readdirSync(__dirname);
const htmlFiles = files.filter((_, idx) => extname(_) === '.html');

const data = htmlFiles.map((_, id) => {
	const filePath = resolve(__dirname, _);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

	const getFileName = (file) => {
		const rawName = file.replace('.html', '').split('_')[1];
		let name = '';

		for (let i of rawName) name += i.toUpperCase() === i ? ` ${i}` : i;

		return name.trim();
	};
	const standardizeData = (data) => {
		data = data.replace(/[<]/g, '&lt;');
		data = data.replace(/[>]/g, '&gt;');
		// data = data.replace(/[\n\t\r]/g, '');
		return data;
	};

	return {
		id: id + 1,
		name: getFileName(_),
		data: standardizeData(fileContent),
	};
});

fs.writeFileSync(resolve(__dirname, 'howToData.json'), JSON.stringify(data));
