var _ = require('lodash');
var cities = require('../data/cities.json');

function getCities(state, name) { //pass state slug
  if (!_.isEmpty(state)) {
    var allCities = _.filter(cities, { state: _.toLower(state) });

    if (!_.isEmpty(name)) {
      var filteredStates = _.filter(allCities, function (city) {
        return _.includes(_.toLower(city.name), _.toLower(name));
      });
      return filteredStates;
    };

    return allCities;
  }
  return ['Missing state name'];
};

module.exports = getCities;