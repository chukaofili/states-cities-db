const _ = require('lodash');
const states = require('../data/states.json');

function getStates(country, name) { //pass country slug
  if (!_.isEmpty(country)) {
    const allStates = _.filter(states, { country: _.toLower(country) });

    if (!_.isEmpty(name)) {
      const filteredStates = _.filter(allStates, function (state) {
        return _.includes(_.toLower(state.name), _.toLower(name));
      });
      return filteredStates;
    };

    return allStates;
  }
  return states;
};

module.exports = getStates;