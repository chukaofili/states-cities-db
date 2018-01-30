var _ = require('lodash');
var states = require('./_states.json');
var countrySlug = 'nigeria';

all = _.map(states, function (state) {
  return {
    name: _.startCase(state.name.toLowerCase()),
    slug: countrySlug + '_' + _.kebabCase(state.name),
    stateSlug: _.kebabCase(state.name),
    country: countrySlug,
  }
});

console.log(JSON.stringify(all))