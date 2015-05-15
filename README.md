# jspm-startup

## Installation 
(Note: prerequisites = Node.js):

#### Step 1: Install jspm CLI & jspm-bower-endpoint globally (might have to sudo)

```
npm install jspm/jspm-cli jspm-bower-endpoint -g
```

#### Step 2: Clone this repo and from a terminal in the root of the jspm-startup directoy run:

```
npm install --dev
```

and, then:

```
jspm install
```

#### Step 3: run:

```
jspm registry create bower jspm-bower-endpoint
```

## Serve It 
(i.e. starts browser-sync and serves the index.html in src directory to localhost:3000):

```
$ npm run serveit
```
