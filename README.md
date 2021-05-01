# KnockoutExamples

Here you can find examples of configuration for [KnockoutJS](https://knockoutjs.com/) based web applications. They may be used as a template for your applications.

### What is inside:

1. Three configurations: RequireJS, Webpack+TypeScript, Webpack+TypeScript+Asp.Net Core
2. Simple module hierarchy - index.html -> index.js -> HelloWorldComponent -> InputComponent
3. Each module is represented by a separate folder with the following structure: 
    - html file for view
    - ViewModel.js file for a view model
    - Component.js file for aggregating a view with a view model
4. Each module is registered with a custom html tag, which may be used in other views.
5. Observable and computed fields are added in order to test their behavior.

### Prerequirements
- [Node.js 10.13.0](https://nodejs.org/ru/blog/release/v10.13.0/) or higher
- Any browser with ES6 support. (Check browsers [here](https://caniuse.com/?search=es6))
- [.NET 5](https://dotnet.microsoft.com/download/dotnet/5.0) for an example with the Asp.Net Core

### RequireJS configuration

- The [RequireJS](https://requirejs.org/docs/start.html) is used for fetching modules asynchronously.
- [RequireJS/text](https://github.com/requirejs/text) plugin is used for importing html files with views.
- All dependencies (Knockout, RequireJS) are downloaded in the tools folder and imported as general javascript files.
- Simple node.js server is added in order to serve the website. You should fetch the website via this server. If you try to open the index.html in a browser as a file from a file system, the browser most likely will block some dependencies because of default CORS policies (tested in Chrome).

How to run:
  - Go to the RequireJS folder
  - Run in a terminal ```node ./server.js```
  - Go to the website in a browser via url ```http://127.0.0.1:12211/```

### Webpack + TypeScript configuration 

- [Webpack5](https://webpack.js.org/) is used for compiling and bundling the website.
- [TypeScript](https://www.typescriptlang.org/) is used for type-safety.
- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) is used for generating the index.html file on the fly. The entry file is index.ts, which injects the root-level component into the auto-generated index.html.
- Webpack optimizations are used to create separate bundles for business-logic files, vendor libraries (node_modules), and runtime information (which may change after each webpack compilation)

How to run:
  - Go to the Webpack folder
  - Install dependencies via ```npm install```
  - Run the webpack build via ```npm run build```. Optionally, you can run webpack in the [watch mode](https://webpack.js.org/configuration/watch/) ```npm run watch```
  - Go to the dist folder and open the index.html file in a browser.

### Asp.Net Core + Webpack + TypeScript configuration
- [Asp.Net Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0) is used as a web server.
- The same server provides static files from Webpack build and a backend API.
- During each build both .Net and Webpack targets are executed.
- There are examples of simple API calls. GET and POST requests are presented.

### Links
- Knockout https://knockoutjs.com/
- RequireJS https://requirejs.org/docs/start.html
- RequireJS/text https://github.com/requirejs/text
- Webpack https://webpack.js.org/
- TypeScript https://www.typescriptlang.org/
- Github repo, which I have used as an inspiration https://github.com/JonUK/webpack4-es6-knockout
- Webpack guide, from which I have used a learning app as a template https://webpack.js.org/guides/typescript/
- .Net 5 https://dotnet.microsoft.com/download/dotnet/5.0
- Asp.Net Core https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0

### Post scriptum 

If you want to improve those examples or push your own example - feel free to contribute. I will appreciate it :)

If you have any questions related to this repository, do not hesitate to contact me via email (email address should be presented in my profile).
