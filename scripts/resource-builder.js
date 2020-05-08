
let allResources = {};
const { argv } = require('yargs');
const path = require('path');
if (!argv.in) throw `--in required`;
if (!argv.out) throw `--out required`;

const fs = require('fs');
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
function resource(value) {

    Object.assign(allResources, value);
}
const inFiles = argv.in instanceof Array ? argv.in : [argv.in];
globalThis[argv.method || 'resource'] = resource;

function clearRequireCache() {
    for (const key of Object.keys(require.cache)) {
        if (/node_modules/.test(key)) continue;
        if (key == process.mainModule.filename) continue;
        delete require.cache[key];
    }
}
function updateFiles(files) {
    for (const fileSerie of files) {
        clearRequireCache();
        for (const key of Object.keys(allResources))
            delete allResources[key];
        for (const inclFile of fileSerie.split(',')) {
            require(path.resolve(inclFile));

        }
        const [file] = fileSerie.split(',');
        const filePath = path.join(argv.out, path.parse(file).name + '.json');
        fs.writeFileSync(filePath,
            JSON.stringify(allResources, null, 4), 'utf-8');
        const [date, time] = (new Date().toJSON()).split('T');
        console.log(`${time.replace('Z', '').split('.')[0]}: resource ${fileSerie} >>> ${filePath} writtern`);
    }
}
const debouncedUpdateFiles = debounce(updateFiles, 100);
for (const inFile of inFiles) {
    fs.watchFile(inFile, { interval: 100 }, () => debouncedUpdateFiles([inFile]))
}
updateFiles(inFiles);

