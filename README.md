## About Project:

The Math game was _initially made in basic Javascript_ :yellow_circle: refer <a href="https://github.com/anilbegin/js-mathgame" target="_blank"> js-mathgame (repo) </a>.

This repo _demonstrates the same Math game_, but _made using ReactJs library_ instead.

🟢 **branch3** contains the **Final complete version** of the code.

**VsCode** is used as the **source-code editor**.

## repo summary:

| branch name | description                                                         |
| ----------- | ------------------------------------------------------------------- |
| master      | Initial version of the code.                                        |
| branch2     | Here we further adapt the code to meet the JSX syntax requirements. |
| branch3     | contains the 'Final version' of the code.                           |

### Running the project on Local PC:

Clone the repo into your local PC, use VsCode(prefered editor).

- Read the **command line** and its **description** carefully before running the code on your Local PC
- If you are cloning branch2 or branch3 **delete** the existing /docs and /dist directory (they get auto created on running the 'npm run webpackBuild' command).

Use the below commands in the VsCode cmd-line with your cloned repo as your target directory.

| command line <br>(local PC) | description                                                                                                                                                                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm run dev                 | `trigers the webpack to transpile the JSX to generate a bundled file to be run on a Browser on the local PC.`<br> `In the browser, you can access the site with, localhost:3000` <br> `this command is applicable for source code of all 3 branches ` |
| npm run webpackBuild        | `will generate 'dist' folder, i.e production bundled version.` <br> `applicable for source code of only branch2 and branch3 `                                                                                                                         |
| npm run previewDist         | ` triggers a node command which generates a server made in express.`<br>`You can access this production bundle via this server on, localhost:4000 ` <br> `applicable for only branch3 `                                                               |

## Decription about each branch

### master

- Initial version of the code.
- This branch contains only the basic skeleton for the Math game,
  since it was previously made in basic JS, this showcases only the first
  step to adapt the code to be initially run with React.

      > webpack config file is created for 'development version'.
      > webpack file you want to use has to be named 'webpack.config.js'

- package.json file automatically maintains a list of all packages installed using npm.
- _custom script_ is written inside _package.json_ file (**"dev": "webpack serve"**) as a trigger for compiling and running the React code.
- Typing, **npm run dev** (custom script written)in the command line triggers the webpack to _transpile the JSX_ to generate a bundled file to be run on a Browser on the local PC.
- In the browser, you can access the site with, http://localhost:3000 \
  Only the basic React packages (React, ReactDOM) are imported, so as to check
  if the basic code gives the desired output in the Browser.

### branch2

- Here we further adapt the code to meet the JSX syntax requirements.
- React code is written for the Math Game.
- React methods namely useState, useRef and useEffect are used as required for the program.

### branch3

- contains the 'Final version' of the code.
  > webpack is modified to develop and run the production version of the project.
- **older webpack** is renamed as **webpack-starter.config.js** (maintained for future reference)
- **current webpack** config file is **webpack.config.js**
- custom script written in package.json (**"webpackBuild": "webpack"**) which transpiles React Code
  for production version of the site.
- typing npm run webpackBuild will generate 'dist' folder, i.e production bundled version.
- custom script written in package.json (**"previewDist": "node previewDist"**) to preview the
  production bundled version on local PC.
- Typing npm run previewDist triggers a node command which generates a server made in express.
  You can access this production bundle via this server on, http://localhost:4000

`Initially /dist folder contained the bundled file generated for outputing the production version of the website.`<br>

`Github Pages only allows 'root' or '/docs' as the source for generating web pages.`<br>

`Webpack was modified to generate /docs folder, but Github Pages failed to publish the site from the same.`<br>

`Hence a third party host named Netlify was used to successfully host the site on the web.`
