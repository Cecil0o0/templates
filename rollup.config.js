'use strict'
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import liveReload from 'rollup-plugin-livereload';
import pkg from './package.json';
import os from 'os';

const numCPUs = os.cpus().length;
const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/index.js',
    plugins: [
      !production && serve({
        open: true,
        openPage: '/',
        contentBase: ['dist-rollup'],
        host: getIPAddress()
      }),
      !production && liveReload('dist-rollup'),
      json(),
      resolve(),
      commonjs(),
      babel(),
      production && uglify({
        numWorkers: numCPUs
      })
    ],
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'rollup-bundle',
      banner: '// this is created from /src/index.js'
    }
  }
];

function getIPAddress() {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal && !alias.address.startsWith('169.254')) {
        return alias.address;
      }
    }
  }
}
