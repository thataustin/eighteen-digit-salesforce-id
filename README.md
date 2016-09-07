# eighteen-digit-salesforce-id

`npm install eighteen-digit-salesforce-id`

`var get18DigitId = require('eighteen-digit-salesforce-id');`
`console.log(get18DigitId('00341000001sKYi'));  // logs '00341000001sKYiAAM'`

**Note** - if you pass in a string that's already 18 characters, you just get that same string back.
**Note** - if you pass in a string that's neither 15 nor 18 characters long, it throws an error.
