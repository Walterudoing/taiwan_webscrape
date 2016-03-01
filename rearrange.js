var fs = require('fs')
var util = require('util')


var log_file = fs.createWriteStream('./CHIAYI/CHIAYI_2006.csv', {flags : 'w'})
var log_stdout = process.stdout

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};


// ================================== Read file ==================================

var cityRows = fs.readFileSync('CHIAYI_2006.csv').toString().split('\n')

// ================================== Data Process 1 ==================================
var month = []
for (var j = 0; j<12; j++){
for( var i = j; i < cityRows.length; i += 12){
    month.push(cityRows[i])
    //console.log(cityRows[i])
}
}
/*
for( var i = 1; i < cityRows.length; i += 12){
    month.push(cityRows[i])
    //console.log(cityRows[i])
}

for( var i = 2; i < cityRows.length; i += 12){
    month.push(cityRows[i])
    //console.log(cityRows[i])
}
//year = {year: 2014, month:1, day: (i/12)+1, rf:cityRows[i]}
*/

console.log(month.join('\n'))