var _ = require('lodash');
var cities = require('../data/cities.json');
var states = require('../data/states.json');
var countries = require('../data/countries.json');

function getBySlug(type, slug) { //pass the slug
  switch (type) {
    case 'city':
      var city = _.find(cities, { slug: _.toLower(slug) }) || {};
      return city;
      break;
    case 'state':
      var state = _.find(states, { slug: _.toLower(slug) }) || {};
      return state;
      break;
    case 'country':
      var country = _.find(countries, { slug: _.toLower(slug) }) || {};
      return country;
      break;
    default:
      return {};
      break;
  }
};

module.exports = getBySlug;