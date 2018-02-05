'use strict';

var getCountries = require('./lib/getCountries');
var getStates = require('./lib/getStates');
var getCities = require('./lib/getCities');
var getBySlug = require('./lib/getBySlug');

module.exports = {
  getCountries: getCountries,
  getStates: getStates,
  getCities: getCities,
  getBySlug: getBySlug,
};