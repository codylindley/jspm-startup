# jspm-startup

## Installation:

A boiler plate to get you going with jspm.io, ES6, and ES6 modules.

### Step 1: Install jspm globally (might have to sudo)

```
npm install jspm/jspm-cli -g
```

### Step 2: Clone this repo and from a terminal in the root of the jspm-startup directoy run:

```
npm install --dev
```

and 

```
jspm install
```

### Step 3: run:

```
jspm registry create bower jspm-bower-endpoint
```

## Serve It (starts browser-sync and servers the index.html in src directory to localhost:3000):

```
$ npm run serveit
```
