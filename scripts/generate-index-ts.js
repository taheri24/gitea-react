const glob = require("glob");
const { parse } = require('path');
const execa = require('execa');

const files = [].concat(...['ts', 'tsx', 'jsx', 'js'].map(ext => glob.sync(`./src/**/*.${ext}`)));
const dirs = {};
for (const file of files) {
    const {dir,name}=parse(file);
    if(name=='index') continue;
    dirs[dir] = 1;
}
for (const dir of Object.keys(dirs)) {
    if(dir.length<=6) console;
    execa.sync('./node_modules/.bin/cti',[dir,'-b']);
    console.log(`cta ${dir}`);

}
