var fs = require('fs');
fs.readFile('example_log.txt', function (err, logData) {
  if (err) throw err;
  var text = logData.toString();
  var arr = text.split('\n');
  for (var i = 0; i <  arr.length; i++)
  {
    console.log(i + ' - ' + arr[i]);
  }
});