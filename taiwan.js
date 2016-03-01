var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var http = require('http');
var util = require('util');
//var libxmljs = require("libxmljs");

var log_file = fs.createWriteStream('CHIAYI_2014.csv', {flags : 'w'})
var log_stdout = process.stdout

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

//var years = {'1':2006,'2':2007,'3':2008,'4':2009,'5':2010,'6':2011,'7':2012,'8':2013,'9':2014}
var year = 2014
url = 'http://www.cwb.gov.tw/V7/climate/dailyPrecipitation/Data/467480_'+year+'.htm'
request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var tdtext = []
    $('.Form00 td').each(function() {
    tdtext.push($(this).text())
    })
    console.log(tdtext.join('\n'))
  }
})


