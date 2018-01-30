var _ = require('lodash');
var countries = require('../data/countries.json');

function getCountries(name) {
  if (!_.isEmpty(name)) {
      var country = _.filter(countries, function (country){
        return _.includes(_.toLower(country.name), _.toLower(name));
      });

      return country;
  }
  return countries;
};

module.exports = getCountries;