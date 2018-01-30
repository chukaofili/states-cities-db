var _ = require('lodash');
var states = require('../data/states.json');

function getStates(country, name) { //pass country slug
  if (!_.isEmpty(country)) {
    var allStates = _.filter(states, { country: _.toLower(country)});

    if (!_.isEmpty(name)) {
      var filteredStates = _.filter(allStates, function (state) {
        return _.includes(_.toLower(state.name), _.toLower(name));
      });
      return filteredStates;
    };

    return allStates;
  }
  return ['Missing country name'];
};

module.exports = getStates;