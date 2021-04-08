const fs = require('fs');
const path = require('path');
const solc = require('solc');

const practicePath = path.resolve(__dirname, 'contracts', 'Practice.sol');
const source = fs.readFileSync(practicePath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Practice'];
