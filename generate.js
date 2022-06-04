import fs from 'fs';
import { dirname, extname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const files = fs.readdirSync(__dirname);
const htmlFiles = files.filter((_, idx) => extname(_) === '.html');

const ids = Array(105).fill(0);

const data = htmlFiles.map((_) => {
	const filePath = resolve(__dirname, _);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

	const getFileName = (file) => {
		const fileName = file.replace('.html', '');
		const rawName = fileName.split('_');
		let name = '';

		for (let i of rawName[1]) name += i.toUpperCase() === i ? ` ${i}` : i;

		return { id: +rawName[0], name: name.trim() };
	};
	const standardizeData = (data) => {
		data = data.replace(/[<]/g, '&lt;');
		data = data.replace(/[>]/g, '&gt;');
		// data = data.replace(/[\n\t\r]/g, '');
		return data;
	};

	const { id, name } = getFileName(_);

	ids[id] = 1;

	return {
		id,
		name,
		data: standardizeData(fileContent),
	};
});

for (let i = 0; i <= 100; i++)
	if (!ids[i])
		data.push({
			id: i,
			name: '',
			data: ``,
		});

console.log(data);

fs.writeFileSync(resolve(__dirname, 'howToData.json'), JSON.stringify(data));
