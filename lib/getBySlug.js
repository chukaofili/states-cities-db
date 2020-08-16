const _ = require('lodash');
const cities = require('../data/cities.json');
const states = require('../data/states.json');
const countries = require('../data/countries.json');

function getBySlug(type, slug) { //pass the slug
  switch (type) {
    case 'city':
      return _.find(cities, { slug: _.toLower(slug) }) || {};
    case 'state':
      return _.find(states, { slug: _.toLower(slug) }) || {};;
    case 'country':
      return _.find(countries, { slug: _.toLower(slug) }) || {};;
    default:
      return {};
  }
};

module.exports = getBySlug;