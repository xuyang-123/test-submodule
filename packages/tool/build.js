const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const distPath = path.join(__dirname, 'dist')

if (fs.existsSync(distPath)) {
    rimraf.rimrafSync('./dist')
}

fs.mkdirSync(distPath)
fs.copyFileSync(path.join(__dirname, './index.js'), path.join(__dirname, './dist/index.js'))
