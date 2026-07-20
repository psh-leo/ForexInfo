const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const outputFile = path.join(projectRoot, 'listing-program.txt');

const includeDirs = ['app', 'components', 'lib'];
const includeConfigs = ['tailwind.config.ts', 'next.config.mjs', 'postcss.config.mjs', 'tsconfig.json'];

let counter = 1;
let output = '';

function traverseDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            traverseDir(fullPath);
        } else {
            if (fullPath.match(/\.(tsx|ts|js|jsx|css|mjs)$/)) {
                const relativePath = path.relative(projectRoot, fullPath).replace(/\\/g, '/');
                output += `${counter}. ${relativePath}\n\n`;
                output += fs.readFileSync(fullPath, 'utf8') + '\n\n';
                counter++;
            }
        }
    }
}

includeDirs.forEach(dir => traverseDir(path.join(projectRoot, dir)));

includeConfigs.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (fs.existsSync(filePath)) {
        output += `${counter}. ${file}\n\n`;
        output += fs.readFileSync(filePath, 'utf8') + '\n\n';
        counter++;
    }
});

fs.writeFileSync(outputFile, output);
console.log('Listing program generated at: ' + outputFile);
