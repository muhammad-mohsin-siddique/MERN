# My Parcel Project

This project demonstrates how to bundle multiple JavaScript files into a single file using Parcel and run it in a Node.js environment.

## Getting Started

Follow the steps below to set up and run the project.

### Step 1: Initialize the Project

Create a new directory and navigate into it. Then, initialize a new Node.js project.

```sh
mkdir my-parcel-project
cd my-parcel-project
npm init -y

npm install --save-dev parcel

```

### Step 2: Create JavaScript Files

### Step 3: Configure Parcel

Add the following scripts to your package.json file to run Parcel:

``` json
{
  "name": "my-parcel-project",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "parcel build src/main.js --target node --bundle-node-modules",
    "start": "node dist/main.js"
  },
  "devDependencies": {
    "parcel": "^2.0.0"
  }
}

```


### Step 4: Bundle the JavaScript Files

``` sh

npm run build

```

### Step 5: Run the Bundled File