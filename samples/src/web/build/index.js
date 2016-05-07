var
  buildFactory = require('websdk/build')
  ,build       = buildFactory( __dirname, function(err, stats, compiler, cache){
    console.log('Demo was built!!!');
  })
;

// =========== It is possible to modify the way the build works, we will get the defaults for now
// Set which url we are serving the artifacts from
build.config.output.publicPath = '/artifacts/';
// delete build.config.entry.start; // Remove the start for now
// build.config.websdk.enableCommon = true; // Enables the common bundle websdk/build/vendors/bundle.js

// Enable the use of .html for HTML Imports instead of .web (does not apply to (web_modules|node_modules)/polymer and a few others, those always use .html)
build.config.websdk.enableHtmlImport = true;

// You have access to all of the loaders listed in build.config.module.loaders
console.log('Including loaders for: ');
Object
  .keys(build.loaders)
  .forEach(function(key){
    console.log(build.loaders[key].test, '====>', build.loaders[key].loader); 
  })
;

// You have access to all of the plugins listed in build.config.plugins
Object
  .keys(build.plugins)
  .forEach(function(key){
    console.log(key, '====>', build.plugins[key]); 
  })
;

// Sample on how to remove plugins (this would remove the context plugin)
build.config.plugins = build.config.plugins.filter(function(plugin){
  return !(build.plugins.context===plugin);
});

// You can pass arguments like --sc demo,someotherentry to create a building scope and you decide what it means
console.log('Combine building scope with build.websdk.disableClean = true, to make partial builds of your project when its to big. >1000 files');
console.log('Building scope is: ');
console.log(build.scope);
var buildDemo = ~build.scope.indexOf('all') || ~build.scope.indexOf('demo');

// ============


// Set the entry point (you could have multiple, depending on how many segments
// you have on your app, they can be only libraries that attach themselved ot the running app)
if(buildDemo) build.config.entry['start'] = __dirname + '/../app_modules/demo/demo.js';

// Run the build
build.run();
