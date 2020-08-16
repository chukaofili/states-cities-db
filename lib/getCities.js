const _ = require('lodash');
const cities = require('../data/cities.json');

function getCities(state, name) { //pass state slug
  if (!_.isEmpty(state)) {
    const allCities = _.filter(cities, { state: _.toLower(state) });

    if (!_.isEmpty(name)) {
      const filteredStates = _.filter(allCities, function (city) {
        return _.includes(_.toLower(city.name), _.toLower(name));
      });
      return filteredStates;
    };

    return allCities;
  }
  return cities;
};

module.exports = getCities;