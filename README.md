# jspm-startup

## Installation 
(Note: prerequisites = Node.js):

#### Step 1: Install jspm CLI & jspm-bower-endpoint globally (might have to sudo)

```
sudo npm install jspm/jspm-cli -g
```

#### Step 2: run:

```
sudo jspm registry create bower jspm-bower-endpoint
```

#### Step 3: Clone this repo and from a terminal in the root of the jspm-startup directoy run:

```
sudo npm install --dev
```

and, then:

```
sudo jspm install
```

## Serve It 
(i.e. starts browser-sync and serves the index.html in src directory to localhost:3000):

```
$ npm run serveit
```
