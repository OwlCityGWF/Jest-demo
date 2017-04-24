'use strict'

const fs = require('fs');

function summarizeFilesInDirectorySync (dir) {
    return fs.readdirSync(dir).map(fileName => ({dir, fileName}))
}

exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;