'use strict';

var getCountries = require('./lib/getCountries');
var getStates = require('./lib/getStates');
var getCities = require('./lib/getCities');

module.exports = {
  getCountries: getCountries,
  getStates: getStates,
  getCities: getCities,
};