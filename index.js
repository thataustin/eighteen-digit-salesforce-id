module.exports = function get18DigitSalesforceId(id) {
  if (id && id.length === 18) {
    return id;
  }

  if (! (id && id.length === 15 )) {
    throw new Error('Salesforce Id was neither 18 nor 15 chars');
  }

  var uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var i, j, flags, alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345';
  function isUppercase(c) {
    return new RegExp(c).test(uppercaseAlphabet);
  }

  for (i = 0; i < 3; i++) {
    flags = 0;
    for (j = 0; j < 5; j++) {
      if (isUppercase(id.charAt(i * 5 + j))) {
        flags += 1 << j;
      }
    }
    id += alphabet.charAt(flags);
  }
  return id;
}
