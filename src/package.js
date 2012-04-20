var util = require("util"),
    d3 = require("d3"),
    cubism = require("../cubism.v0").cubism;

util.puts(JSON.stringify({
  "name": "cubism",
  "version": cubism.version,
  "private": true,
  "main": "./index.js",
  "repository": {
    "type": "git",
    "url": "http://github.com/square/cubism.git"
  },
  "dependencies": {
    "d3": "2.8.1"
  },
  "devDependencies": {
    "vows": "0.6.1",
    "uglify-js": "1.2.5"
  }
}
, null, 2));
