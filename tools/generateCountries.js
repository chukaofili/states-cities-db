var _ = require('lodash');
var wc = require('world-countries');
var countries = require('./_countries.json');

var all = [];

countries.forEach(function (country) {
  if (!country.iso3) { 
  } else if (!_.find(wc, { cca3: country.iso3 })) {
  } else {
    var wcCountry = _.find(wc, { cca3: country.iso3 });
    var _country = {
      name: wcCountry.name.common,
      slug: _.kebabCase(wcCountry.name.common),
      iso: country.iso3,
      iso2: country.iso,
      prefix: '+' + country.phonecode,
      currency: wcCountry.currency[0],
      region: wcCountry.region,
      subregion: wcCountry.subregion,
      latlng: wcCountry.latlng
    }
    all.push(_country);
  }
});

console.log(JSON.stringify(all))