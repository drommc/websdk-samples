# Web SDK [SAMPLES]

[![Circle CI](https://circleci.com/gh/juliostanley/websdk-samples.svg?style=svg)](https://circleci.com/gh/juliostanley/websdk-samples)

> View samples running at http://websdk.fullvi.com

Read about the [Web SDK](https://github.com/juliostanley/websdk)

# How to run

```
git clone git@github.com:juliostanley/websdk-samples.git
cd websdk-samples
npm install
npm run build
npm start
```

### Work in progress
This is just the initial version, more to come soon. Many things supported in this release are not available in the sample code

## Things to notice or not obvious in the samples
- Open your console and look at the logs
- Angular is mixed with polymer
- HTML Imports are allowed, and work with webpack notice [demo.js](./samples/src/web/app_modules/demo) and [title-polymer.html](./samples/src/web/app_modules/demo/welcome/title-polymer)
- The build supports chunks by using ```build.config.websdk.lib = {name:'path'}```
- Chunks can be loaded async using ```<ensure import="">content pending</ensure>```
- Paper elements and angular code are bundled
- No link tag blocking rendering (try throttling your connection), the site weights under 2K uncompressed, you prob want to stop the live-server and use a standard HTTP server
- Changes to files take around one second since webpack only needs to do partial rebuilds when watching files
- The build supports source maps and complete minification (even of HTML imports)
