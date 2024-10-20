npm init -y
npm install --save-dev webpack webpack-cli

npx webpack //this creates the file in dist

npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader

npm install --save-dev webpack-dev-server

npx webpack serve ctrl + c to kill

git branch gh-pages
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main