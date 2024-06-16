# Getting Started with Apollo Server
## Initialize a new Node.js project with npm (or another package manager you prefer, such as Yarn):
```
npm init --yes && npm pkg set type="module"
```
This getting started guide sets up a project using ES Modules, which simplifies our examples and allows us to use top-level await.

Your project directory now contains a package.json file.

# Step 2: Install dependencies 
Application that runs Apollo server requires two top leve dependencies: i.e _**graphql**_ and _**@apollo/server**_
Run the following command to install both of these packages and save them in your project's **node_modules** directory.
```
npm install @apollo/server graphql
```
