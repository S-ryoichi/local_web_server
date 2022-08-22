const fs = require("fs");
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");


const readTempData = () => {
    const readCSV = fs.readFileSync("./csv/tempData.csv");
    const parseData = parse(readCSV, { columns : true });
    return(parseData);
}


const writeTempData = (jsonData) => {
    const readCSV = fs.readFileSync("./csv/tempData.csv");
    const parseData = parse(readCSV, { columns : true });
    parseData.push(jsonData);
    const writeCSV = stringify(parseData, { header : true });
    fs.writeFileSync("./csv/tempData.csv", writeCSV);
}

module.exports = {
    readTempData: readTempData,
    writeTempData: writeTempData,
}