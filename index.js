
const argv = require('minimist')(process.argv.slice(2), {
    'string': ['e', 'o', 'p'],
    'boolean': ['v'],
    'alias': {
        v: ['verbose'],
        p: ['port']
    }
});
const Sequelize = require('sequelize');
const fs = require('fs');

if (argv._.length !== 5) {
    console.log('Usage: ms-insecure-image-replace [-p | --port <port>] [-v | --verbose] [-e <logfile>] [-o <logfile>] <inFile> <host> <database> <username> <password>');
    process.exit(1);
}

const [inFile, host, database, username, password] = argv._;
const port = argv.p || 3306;
const verbose = argv.v || false;

const errLogStream = fs.createWriteStream(`${argv.e || './error.log'}`, {flags: 'w'});
process.stderr.write = errLogStream.write.bind(errLogStream);

if (argv.o) {
    const outLogStream = fs.createWriteStream(`${argv.o}}`, {flags: 'w'});
    process.stdout.write = outLogStream.write.bind(outLogStream);
}

const lines = require('fs').readFileSync(inFile, 'utf-8').split('\n').slice(1);

require('./replace_images')(require('./db')(database, username, password, host, port, verbose), lines, verbose);

