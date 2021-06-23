const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
  const files = [
    './dist/angular-custom-element/main.js',
    './dist/angular-custom-element/polyfills.js',
    './dist/angular-custom-element/runtime.js'
  ];

  await fs.ensureDir('server');
  await concat(files, 'server/scripts.min.js');
}
build();
