webpackJsonp([127],{260:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default='<p>Out of the box, webpack won\'t require you to use a configuration file. However, it will assume the entry point of your project is <code>src/index</code> and will output the result in <code>dist/main.js</code> minified and optimized for production.</p>\n<p>Usually your projects will need to extend this functionality, for this you can create a <code>webpack.config.js</code> file in the root folder and webpack will automatically use it.</p>\n<p>All the available configuration options are specified below.</p>\n<blockquote class="tip">\n<p>New to webpack? Check out our guide to some of webpack\'s <a href="/concepts">core concepts</a> to get started!</p>\n</blockquote>\n<h2 id="use-different-config-file">Use different config file<a href="#use-different-config-file" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>If for some reason you want to use different config file depending on certain situations you can change this via command line by using the <code>--config</code> flag.</p>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --config prod.config.js"</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Click on the name of each option in the configuration code below to jump to the detailed documentation. Also note that the items with arrows can be expanded to show more examples and, in some cases, more advanced configuration.</p>\n<blockquote class="warning">\n<p>Notice that throughout the configuration we use Node\'s built-in <a href="https://nodejs.org/api/path.html">path module</a> and prefix it with the <a href="https://nodejs.org/docs/latest/api/globals.html#globals_dirname">__dirname</a> global. This prevents file path issues between operating systems and allows relative paths to work as expected. See <a href="https://nodejs.org/api/path.html#path_windows_vs_posix">this section</a> for more info on POSIX vs. Windows paths.</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js-with-links-with-details">const path = require(\'path\');\n\nmodule.exports = {\n  &#x3C;details>&#x3C;summary>[mode](/concepts/mode): "production", // "production" | "development" | "none"&#x3C;/summary>\n  [mode](/concepts/mode): "production", // enable many optimizations for production builds\n  [mode](/concepts/mode): "development", // enabled useful tools for development\n  [mode](/concepts/mode): "none", // no defaults\n  &#x3C;/details>\n  // Chosen mode tells webpack to use its built-in optimizations accordingly.\n  &#x3C;details>&#x3C;summary>[entry](/configuration/entry-context#entry): "./app/entry", // string | object | array&#x3C;/summary>\n  [entry](/configuration/entry-context#entry): ["./app/entry1", "./app/entry2"],\n  [entry](/configuration/entry-context#entry): {\n    a: "./app/entry-a",\n    b: ["./app/entry-b1", "./app/entry-b2"]\n  },\n  &#x3C;/details>\n  // defaults to ./src\n  // Here the application starts executing\n  // and webpack starts bundling\n  [output](/configuration/output): {\n    // options related to how webpack emits results\n    [path](/configuration/output#output-path): path.resolve(__dirname, "dist"), // string\n    // the target directory for all output files\n    // must be an absolute path (use the Node.js path module)\n    &#x3C;details>&#x3C;summary>[filename](/configuration/output#output-filename): "bundle.js", // string&#x3C;/summary>\n    [filename](/configuration/output#output-filename): "[name].js", // for multiple entry points\n    [filename](/configuration/output#output-filename): "[chunkhash].js", // for [long term caching](/guides/caching)\n    &#x3C;/details>\n    // the filename template for entry chunks\n    &#x3C;details>&#x3C;summary>[publicPath](/configuration/output#output-publicpath): "/assets/", // string&#x3C;/summary>\n    [publicPath](/configuration/output#output-publicpath): "",\n    [publicPath](/configuration/output#output-publicpath): "https://cdn.example.com/",\n    &#x3C;/details>\n    // the url to the output directory resolved relative to the HTML page\n    [library](/configuration/output#output-library): "MyLibrary", // string,\n    // the name of the exported library\n    &#x3C;details>&#x3C;summary>[libraryTarget](/configuration/output#output-librarytarget): "umd", // universal module definition&#x3C;/summary>\n        [libraryTarget](/configuration/output#output-librarytarget): "umd2", // universal module definition\n        [libraryTarget](/configuration/output#output-librarytarget): "commonjs2", // exported with module.exports\n        [libraryTarget](/configuration/output#output-librarytarget): "commonjs", // exported as properties to exports\n        [libraryTarget](/configuration/output#output-librarytarget): "amd", // defined with AMD defined method\n        [libraryTarget](/configuration/output#output-librarytarget): "this", // property set on this\n        [libraryTarget](/configuration/output#output-librarytarget): "var", // variable defined in root scope\n        [libraryTarget](/configuration/output#output-librarytarget): "assign", // blind assignment\n        [libraryTarget](/configuration/output#output-librarytarget): "window", // property set to window object\n        [libraryTarget](/configuration/output#output-librarytarget): "global", // property set to global object\n        [libraryTarget](/configuration/output#output-librarytarget): "jsonp", // jsonp wrapper\n    &#x3C;/details>\n    // the type of the exported library\n    &#x3C;details>&#x3C;summary>/* Advanced output configuration (click to show) */&#x3C;/summary>\n    [pathinfo](/configuration/output#output-pathinfo): true, // boolean\n    // include useful path info about modules, exports, requests, etc. into the generated cod\n    [chunkFilename](/configuration/output#output-chunkfilename): "[id].js",\n    [chunkFilename](/configuration/output#output-chunkfilename): "[chunkhash].js", // for [long term caching](/guides/caching)\n    // the filename template for additional chunks\n    [jsonpFunction](/configuration/output#output-jsonpfunction): "myWebpackJsonp", // string\n    // name of the JSONP function used to load chunks\n    [sourceMapFilename](/configuration/output#output-sourcemapfilename): "[file].map", // string\n    [sourceMapFilename](/configuration/output#output-sourcemapfilename): "sourcemaps/[file].map", // string\n    // the filename template of the source map location\n    [devtoolModuleFilenameTemplate](/configuration/output#output-devtoolmodulefilenametemplate): "webpack:///[resource-path]", // string\n    // the name template for modules in a devtool\n    [devtoolFallbackModuleFilenameTemplate](/configuration/output#output-devtoolfallbackmodulefilenametemplate): "webpack:///[resource-path]?[hash]", // string\n    // the name template for modules in a devtool (used for conflicts)\n    [umdNamedDefine](/configuration/output#output-umdnameddefine): true, // boolean\n    // use a named AMD module in UMD library\n    [crossOriginLoading](/configuration/output#output-crossoriginloading): "use-credentials", // enum\n    [crossOriginLoading](/configuration/output#output-crossoriginloading): "anonymous",\n    [crossOriginLoading](/configuration/output#output-crossoriginloading): false,\n    // specifies how cross origin request are issued by the runtime\n    &#x3C;details>&#x3C;summary>/* Expert output configuration (on own risk) */&#x3C;/summary>\n    [devtoolLineToLine](/configuration/output#output-devtoollinetoline): {\n      test: /\\.jsx$/\n    },\n    // use a simple 1:1 mapped SourceMaps for these modules (faster)\n    [hotUpdateMainFilename](/configuration/output#output-hotupdatemainfilename): "[hash].hot-update.json", // string\n    // filename template for HMR manifest\n    [hotUpdateChunkFilename](/configuration/output#output-hotupdatechunkfilename): "[id].[hash].hot-update.js", // string\n    // filename template for HMR chunks\n    [sourcePrefix](/configuration/output#output-sourceprefix): "\\t", // string\n    // prefix module sources in bundle for better readablitity\n    &#x3C;/details>\n    &#x3C;/details>\n  },\n  [module](/configuration/module): {\n    // configuration regarding modules\n    [rules](/configuration/module#module-rules): [\n      // rules for modules (configure loaders, parser options, etc.)\n      {\n        [test](/configuration/module#rule-test): /\\.jsx?$/,\n        [include](/configuration/module#rule-include): [\n          path.resolve(__dirname, "app")\n        ],\n        [exclude](/configuration/module#rule-exclude): [\n          path.resolve(__dirname, "app/demo-files")\n        ],\n        // these are matching conditions, each accepting a regular expression or string\n        // test and include have the same behavior, both must be matched\n        // exclude must not be matched (takes preferrence over test and include)\n        // Best practices:\n        // - Use RegExp only in test and for filename matching\n        // - Use arrays of absolute paths in include and exclude\n        // - Try to avoid exclude and prefer include\n        [issuer](/configuration/module#rule-issuer): { test, include, exclude },\n        // conditions for the issuer (the origin of the import)\n        [enforce](/configuration/module#rule-enforce): "pre",\n        [enforce](/configuration/module#rule-enforce): "post",\n        // flags to apply these rules, even if they are overridden (advanced option)\n        [loader](/configuration/module#rule-loader): "babel-loader",\n        // the loader which should be applied, it\'ll be resolved relative to the context\n        // -loader suffix is no longer optional in webpack2 for clarity reasons\n        // see [webpack 1 upgrade guide](/guides/migrating)\n        [options](/configuration/module#rule-options-rule-query): {\n          presets: ["es2015"]\n        },\n        // options for the loader\n      },\n      {\n        [test](/configuration/module#rule-test): /\\.html$/,\n        [use](/configuration/module#rule-use): [\n          // apply multiple loaders and options\n          "htmllint-loader",\n          {\n            loader: "html-loader",\n            options: {\n              /* ... */\n            }\n          }\n        ]\n      },\n      { [oneOf](/configuration/module#rule-oneof): [ /* rules */ ] },\n      // only use one of these nested rules\n      { [rules](/configuration/module#rule-rules): [ /* rules */ ] },\n      // use all of these nested rules (combine with conditions to be useful)\n      { [resource](/configuration/module#rule-resource): { [and](/configuration/module#condition): [ /* conditions */ ] } },\n      // matches only if all conditions are matched\n      { [resource](/configuration/module#rule-resource): { [or](/configuration/module#condition): [ /* conditions */ ] } },\n      { [resource](/configuration/module#rule-resource): [ /* conditions */ ] },\n      // matches if any condition is matched (default for arrays)\n      { [resource](/configuration/module#rule-resource): { [not](/configuration/module#condition): /* condition */ } }\n      // matches if the condition is not matched\n    ],\n    &#x3C;details>&#x3C;summary>/* Advanced module configuration (click to show) */&#x3C;/summary>\n    [noParse](/configuration/module#module-noparse): [\n      /special-library\\.js$/\n    ],\n    // do not parse this module\n    unknownContextRequest: ".",\n    unknownContextRecursive: true,\n    unknownContextRegExp: /^\\.\\/.*$/,\n    unknownContextCritical: true,\n    exprContextRequest: ".",\n    exprContextRegExp: /^\\.\\/.*$/,\n    exprContextRecursive: true,\n    exprContextCritical: true,\n    wrappedContextRegExp: /.*/,\n    wrappedContextRecursive: true,\n    wrappedContextCritical: false,\n    // specifies default behavior for dynamic requests\n    &#x3C;/details>\n  },\n  [resolve](/configuration/resolve): {\n    // options for resolving module requests\n    // (does not apply to resolving to loaders)\n    [modules](/configuration/resolve#resolve-modules): [\n      "node_modules",\n      path.resolve(__dirname, "app")\n    ],\n    // directories where to look for modules\n    [extensions](/configuration/resolve#resolve-extensions): [".js", ".json", ".jsx", ".css"],\n    // extensions that are used\n    [alias](/configuration/resolve#resolve-alias): {\n      // a list of module name aliases\n      "module": "new-module",\n      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"\n      "only-module$": "new-module",\n      // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"\n      "module": path.resolve(__dirname, "app/third/module.js"),\n      // alias "module" -> "./app/third/module.js" and "module/file" results in error\n      // modules aliases are imported relative to the current context\n    },\n    &#x3C;details>&#x3C;summary>/* alternative alias syntax (click to show) */&#x3C;/summary>\n    [alias](/configuration/resolve#resolve-alias): [\n      {\n        name: "module",\n        // the old request\n        alias: "new-module",\n        // the new request\n        onlyModule: true\n        // if true only "module" is aliased\n        // if false "module/inner/path" is also aliased\n      }\n    ],\n    &#x3C;/details>\n    &#x3C;details>&#x3C;summary>/* Advanced resolve configuration (click to show) */&#x3C;/summary>\n    [symlinks](/configuration/resolve#resolve-symlinks): true,\n    // follow symlinks to new location\n    [descriptionFiles](/configuration/resolve#resolve-descriptionfiles): ["package.json"],\n    // files that are read for package description\n    [mainFields](/configuration/resolve#resolve-mainfields): ["main"],\n    // properties that are read from description file\n    // when a folder is requested\n    [aliasFields](/configuration/resolve#resolve-aliasfields): ["browser"],\n    // properites that are read from description file\n    // to alias requests in this package\n    [enforceExtension](/configuration/resolve#resolve-enforceextension): false,\n    // if true request must not include an extensions\n    // if false request may already include an extension\n    [moduleExtensions](/configuration/resolve#resolveloader-moduleextensions): ["-module"],\n    [enforceModuleExtension](/configuration/resolve#resolve-enforcemoduleextension): false,\n    // like extensions/enforceExtension but for module names instead of files\n    [unsafeCache](/configuration/resolve#resolve-unsafecache): true,\n    [unsafeCache](/configuration/resolve#resolve-unsafecache): {},\n    // enables caching for resolved requests\n    // this is unsafe as folder structure may change\n    // but performance improvement is really big\n    [cachePredicate](/configuration/resolve#resolve-cachepredicate): (path, request) => true,\n    // predicate function which selects requests for caching\n    [plugins](/configuration/resolve#resolve-plugins): [\n      // ...\n    ]\n    // additional plugins applied to the resolver\n    &#x3C;/details>\n  },\n  [performance](/configuration/performance): {\n    &#x3C;details>&#x3C;summary>[hints](/configuration/performance#performance-hints): "warning", // enum &#x3C;/summary>\n    [hints](/configuration/performance#performance-hints): "error", // emit errors for perf hints\n    [hints](/configuration/performance#performance-hints): false, // turn off perf hints\n    &#x3C;/details>\n    [maxAssetSize](/configuration/performance#performance-maxassetsize): 200000, // int (in bytes),\n    [maxEntrypointSize](/configuration/performance#performance-maxentrypointsize): 400000, // int (in bytes)\n    [assetFilter](/configuration/performance#performance-assetfilter): function(assetFilename) {\n      // Function predicate that provides asset filenames\n      return assetFilename.endsWith(\'.css\') || assetFilename.endsWith(\'.js\');\n    }\n  },\n  &#x3C;details>&#x3C;summary>[devtool](/configuration/devtool): "source-map", // enum &#x3C;/summary>\n  [devtool](/configuration/devtool): "inline-source-map", // inlines SourceMap into original file\n  [devtool](/configuration/devtool): "eval-source-map", // inlines SourceMap per module\n  [devtool](/configuration/devtool): "hidden-source-map", // SourceMap without reference in original file\n  [devtool](/configuration/devtool): "cheap-source-map", // cheap-variant of SourceMap without module mappings\n  [devtool](/configuration/devtool): "cheap-module-source-map", // cheap-variant of SourceMap with module mappings\n  [devtool](/configuration/devtool): "eval", // no SourceMap, but named modules. Fastest at the expense of detail.\n  &#x3C;/details>\n  // enhance debugging by adding meta info for the browser devtools\n  // source-map most detailed at the expense of build speed.\n  [context](/configuration/entry-context#context): __dirname, // string (absolute path!)\n  // the home directory for webpack\n  // the [entry](/configuration/entry-context) and [module.rules.loader](/configuration/module#rule-loader) option\n  //   is resolved relative to this directory\n  &#x3C;details>&#x3C;summary>[target](/configuration/target): "web", // enum&#x3C;/summary>\n  [target](/configuration/target): "webworker", // WebWorker\n  [target](/configuration/target): "node", // Node.js via require\n  [target](/configuration/target): "async-node", // Node.js via fs and vm\n  [target](/configuration/target): "node-webkit", // nw.js\n  [target](/configuration/target): "electron-main", // electron, main process\n  [target](/configuration/target): "electron-renderer", // electron, renderer process\n  [target](/configuration/target): (compiler) => { /* ... */ }, // custom\n  &#x3C;/details>\n  // the environment in which the bundle should run\n  // changes chunk loading behavior and available modules\n  &#x3C;details>&#x3C;summary>[externals](/configuration/externals): ["react", /^@angular\\//],&#x3C;/summary>\n  [externals](/configuration/externals): "react", // string (exact match)\n  [externals](/configuration/externals): /^[a-z\\-]+($|\\/)/, // Regex\n  [externals](/configuration/externals): { // object\n    angular: "this angular", // this["angular"]\n    react: { // UMD\n      commonjs: "react",\n      commonjs2: "react",\n      amd: "react",\n      root: "React"\n    }\n  },\n  [externals](/configuration/externals): (request) => { /* ... */ return "commonjs " + request }\n  &#x3C;/details>\n  // Don\'t follow/bundle these modules, but request them at runtime from the environment\n  [serve](https://github.com/webpack-contrib/webpack-serve#options): { //object\n    port: 1337,\n    content: \'./dist\',\n    // ...\n  },\n  // lets you provide options for webpack-serve\n  &#x3C;details>&#x3C;summary>[stats](/configuration/stats): "errors-only",&#x3C;/summary>\n  [stats](/configuration/stats): { //object\n    assets: true,\n    colors: true,\n    errors: true,\n    errorDetails: true,\n    hash: true,\n    // ...\n  },\n  &#x3C;/details>\n  // lets you precisely control what bundle information gets displayed\n  [devServer](/configuration/dev-server): {\n    proxy: { // proxy URLs to backend development server\n      \'/api\': \'http://localhost:3000\'\n    },\n    contentBase: path.join(__dirname, \'public\'), // boolean | string | array, static file location\n    compress: true, // enable gzip compression\n    historyApiFallback: true, // true for index.html upon 404, object for multiple paths\n    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin\n    https: false, // true for self-signed, object for cert authority\n    noInfo: true, // only errors &#x26; warns on hot reload\n    // ...\n  },\n  [plugins](plugins): [\n    // ...\n  ],\n  // list of additional plugins\n  &#x3C;details>&#x3C;summary>/* Advanced configuration (click to show) */&#x3C;/summary>\n  [resolveLoader](/configuration/resolve#resolveloader): { /* same as resolve */ }\n  // separate resolve options for loaders\n  [parallelism](other-options#parallelism): 1, // number\n  // limit the number of parallel processed modules\n  [profile](other-options#profile): true, // boolean\n  // capture timing information\n  [bail](other-options#bail): true, //boolean\n  // fail out on the first error instead of tolerating it.\n  [cache](other-options#cache): false, // boolean\n  // disable/enable caching\n  [watch](watch#watch): true, // boolean\n  // enables watching\n  [watchOptions](watch#watchoptions): {\n    [aggregateTimeout](watch#watchoptions-aggregatetimeout): 1000, // in ms\n    // aggregates multiple changes to a single rebuild\n    [poll](watch#watchoptions-poll): true,\n    [poll](watch#watchoptions-poll): 500, // intervall in ms\n    // enables polling mode for watching\n    // must be used on filesystems that doesn\'t notify on change\n    // i. e. nfs shares\n  },\n  [node](node): {\n    // Polyfills and mocks to run Node.js-\n    // environment code in non-Node environments.\n    [console](node#node-console): false, // boolean | "mock"\n    [global](node#node-global): true, // boolean | "mock"\n    [process](node#node-process): true, // boolean\n    [__filename](node#node-__filename): "mock", // boolean | "mock"\n    [__dirname](node#node-__dirname): "mock", // boolean | "mock"\n    [Buffer](node#node-buffer): true, // boolean | "mock"\n    [setImmediate](node#node-setimmediate): true // boolean | "mock" | "empty"\n  },\n  [recordsPath](other-options#recordspath): path.resolve(__dirname, "build/records.json"),\n  [recordsInputPath](other-options#recordsinputpath): path.resolve(__dirname, "build/records.json"),\n  [recordsOutputPath](other-options#recordsoutputpath): path.resolve(__dirname, "build/records.json"),\n  // TODO\n  &#x3C;/details>\n}\n</code></pre>\n<blockquote class="tip">\n<p>Want to rapidly generate webpack configuration file for your project requirements with few clicks away.</p>\n</blockquote>\n<p><a href="https://generatewebpackconfig.netlify.com/">Generate Custom Webpack Configuration</a> is an interactive portal you can play around by selecting custom webpack configuration options tailored for your frontend project. It automatically generates\na minimal webpack configuration based on your selection of loaders/plugins, etc.</p>\n'}});