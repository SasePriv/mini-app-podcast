# mini-app-podcast

This repository contains a mini app frotend about podcast. Below, you will find a step-by-step guide to set up and run
the project.

## Prerequisites

* Node (preferable the version that is in the .nvmrc file)

## Configuration

1. Clone this repository to your local machine:

```bash
git clone https://github.com/SasePriv/mini-app-podcast.git
```

2. Navigate to the project's root directory:

```bash
cd mini-app-podcast
```

3. Install the dependecies

```bash
npm install
```

## Running the Project Development mode

1. Execute the following command for development mode :

```bash
npm start
```

This will start the application in local.

2. The browser will automatically open, otherwise you will have to visit http://localhost:9000.

3. Enjoy exploring the mini-app-podcast!

## Running the Project Production Mode

1. Execute the following command for production mode :

```bash
npm run build:serve
```

This will start the application in local.

2. You will have to visit http://127.0.0.1:8081/.

3. Enjoy exploring the mini-app-podcast!

## Build production

To build the production only need to run the following command:

```bash
npm run build
```

and you will get the production folder at `_root_/dist`

## How to execute the test

Run the following command

```bash
npm test
```

## To do

* Adding more unit test