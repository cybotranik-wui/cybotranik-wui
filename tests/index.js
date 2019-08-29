/// Test Referance
var CybotranikWUI = require('../src')

/// Instance Test
var isInstanceTest = function () {
  // Instanse name
  var expected = 'cybotranik-wui'
  var actual = new CybotranikWUI().Name
  console.log(expected === actual ? 'Instance constractor is ok?' : 'Failure')
}
isInstanceTest()