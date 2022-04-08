// var probe = require('new_http_service_probe');
var http_probe = require('phi-accrual-detector');

var probe = http_probe.new_http_service_probe(
    "https://github.com/xiaozhiliaoo/nodejs-practice" /* url string or options object */,
    80 /* polling frequency_ms */,
    3 /* phi threshold */,
    10 /* max sample history */,
    20 /* min std deviation_ms */);
probe.on('available', function (phi) {
    console.log('Ho-hum');
});
probe.on('unavailable', function (phi) {
    console.log('First time for everything');
});