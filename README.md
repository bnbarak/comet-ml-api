# Node.js Client for Comet.ml

Based on the supercharge Machine learning library [comet.ml](comet.ml) 

## Installation
`npm install comet-ml-api`


## Example
```
const CometMlAPI = require('comet-ml-api');

const apiKey = 's9ILl8ox92nZSTVh8eo4B47LC';
const cometMl = new CometMlAPI(apiKey, 'v1');

cometMl.projects().then((response) => {
  console.log(response);
}).catch(e => {
  console.log(e);
});

```
