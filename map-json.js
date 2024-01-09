const fileToMap = process.argv[2];
const mapper = process.argv[3];
const mapperFunction = require(`./mappers/${mapper}`);
const mapperOptions = process.argv[4] ? JSON.parse(process.argv[4]) : {};
const destinationFilePath = `./output/${mapper}.json`;
const fs = require('fs');

const sourceFilePath = fileToMap;
const rawJson = fs.readFileSync(sourceFilePath, 'utf-8');
const originalData = JSON.parse(rawJson);

const mappedData = mapperFunction(originalData, mapperOptions);

const mappedJson = JSON.stringify(mappedData, null, 2);
fs.writeFileSync(destinationFilePath, mappedJson, 'utf-8');

console.log('Mapping completed. Mapped data written to:', destinationFilePath);