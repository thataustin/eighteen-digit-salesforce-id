# eighteen-digit-salesforce-id

```js
npm install --save eighteen-digit-salesforce-id
```
```js
var get18DigitId = require('eighteen-digit-salesforce-id');
console.log(get18DigitId('00341000001sKYi'));  // logs '00341000001sKYiAAM'
```

**Note** - if you pass in a string that's already 18 characters, you just get that same string back.

**Note** - if you pass in a string that's neither 15 nor 18 characters long, it throws an error.
