import fs from 'fs';

const folderName = 'demoFolder';
const fileName = `${folderName}/demo.txt`;
const renamedFile = `${folderName}/renamed.txt`;


if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
  console.log('Folder created');
}


fs.writeFileSync(fileName, 'Hello, this is FS module\n');
console.log('File created & written');


fs.appendFileSync(fileName, 'This line is appended\n');
console.log('Data appended');


const data = fs.readFileSync(fileName, 'utf8');
console.log('File content:\n', data);


//RENAME FILE

fs.renameSync(fileName, renamedFile);
console.log('File renamed');


//CHECK FILE EXISTS

if (fs.existsSync(renamedFile)) {
  console.log('Renamed file exists');
}

//READ DIRECTORY

const files = fs.readdirSync(folderName);
console.log('Files in folder:', files);


//DELETE FILE
fs.unlinkSync(renamedFile);
console.log('File deleted');


//DELETE FOLDER

fs.rmdirSync(folderName);
console.log('Folder deleted');