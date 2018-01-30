var _ = require('lodash');
var cities = require('./_lgas.json');
var states = require('./_states.json');
var dsStates = require('../data/states.json');

all = _.map(cities, function (city) {
  var state = _.find(states, {id: city.state_id});
  var dsState = _.find(dsStates, {stateSlug: _.kebabCase(state.name)});
  return {
    name: _.startCase(city.name.toLowerCase()),
    slug: dsState.slug + '_' + _.kebabCase(city.name),
    citySlug: _.kebabCase(city.name),
    state: dsState.slug,
    country: dsState.country,
  }
});

console.log(JSON.stringify(all))