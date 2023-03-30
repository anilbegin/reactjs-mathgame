## About Project:

The Math game was _initially made in basic Javascript_.

This repo _demonstrates the same Math game_, but _made using ReactJs library_ instead.

**branch3** contains the **Final complete version** of the code.

**VsCode** is used as the **source-code editor**.

### Running the project on Local PC:

Clone the repo into your local PC, use VsCode(prefered editor).

Use the below commands in the VsCode cmd-line with your cloned repo as your target directory.

| command line | | description |
| (local PC) | | | ---- |
| :------------ | |--------------------:|
| npm run dev | | trigers the webpack to transpile the JSX to generate a bundled file to be run on a
Browser on the local PC.<br>
In the browser, you can access the site with, localhost:3000 |

| npm run webpackBuild | | will generate 'dist' folder, i.e production bundled version. |

| npm run previewDist | | triggers a node command which generates a server made in express.<br>
You can access this production bundle via this server on, localhost:4000 |

## Description about the repo:

| branch name | | description |
| :---------- | | ----------: |
| master | | Initial version of the code.<br>
This branch contains only the basic skeleton for the Math game,
since it was previously made in basic JS, this showcases only the first
step to adapt the code to be initially run with React.<br>
webpack config file is created for 'development version'.<br>
package.json automatically maintains a list of all packages installed using npm.<br>
custom script is written inside package.json ("dev": "webpack serve") as a triger
for compiling and running the React code.<br>
Typing, npm run dev (custom script written)in the command line trigers the webpack to
transpile the JSX to generate a bundled file to be run on a Browseron the local PC.<br>
In the browser, you can access the site with, http://localhost:3000<br>
Only the basic React packages (React, ReactDOM) are imported, so as to check
if the basic code gives the desired output in the Browser. |

| branch2 | | Here we further adapt the code to meet the JSX syntax requirements.<br>
React code is written for the Math Game.<br>
React methods namely useState, useRef and useEffect are used as required for the program. |

| branch3 | - | contains the 'Final version' of the code.<br>
webpack is modified to develop and run the production version of the project.<br>
older webpack is renamed as webpack-starter.config.js (maintained for future reference)<br>
current webpack config file is webpack.config.js<br>
custom script written in package.json ("webpackBuild": "webpack") which transpiles React Code
for production version of the site.<br>
typing npm run webpackBuild will generate 'dist' folder, i.e production bundled version.<br>
custom script written in package.json ("previewDist": "node previewDist",) to preview the
production bundled version on local PC.<br>
Typing npm run previewDist triggers a node command which generates a server made in express.<br>
You can access this production bundle via this server on, http://localhost:4000 <br>

> Initially /dist folder contained the bundled file generated for outputing the production version
> of the website.
> Github Pages only allows 'root' or '/docs' as the source for generating web pages.
> Webpack was modified to generate /docs folder, but Github Pages failed to publish
> the site from the same.
> Hence a third party host named Netlify was used to successfully host the site on the web. |
