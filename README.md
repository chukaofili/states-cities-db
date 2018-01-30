# State Cities
--------------
Get a list of countries, or give it a country & get a list of states, or give it a state, and it will give you an array of all the city names in that state

## Install it

### NPM
$ npm install state-cities-db --save

### Yarn
$ yarn add state-cities-db

## Add it

```javascript
var sc = require('state-cities-db');
```

## Usage

### Get countries

```javascript
// Get all countries
var countries = sc.getCountries();

//Sample response
console.log(countries);

[ { name: 'Afghanistan',
    slug: 'afghanistan',
    iso: 'AFG',
    prefix: '+93',
    currency: 'AFN',
    region: 'Asia',
    subregion: 'Southern Asia',
    latlng: [ 33, 65 ] },
  { name: 'Albania',
    slug: 'albania',
    iso: 'ALB',
    prefix: '+355',
    currency: 'ALL',
    region: 'Europe',
    subregion: 'Southern Europe',
    latlng: [ 41, 20 ] }]
```

### Get states

```javascript
// Get all states by passing the country slug.
var states = sc.getStates('nigeria'); 

//Sample response
console.log(states);

[ { name: 'Abia',
    slug: 'nigeria_abia',
    stateSlug: 'abia',
    country: 'nigeria' },
  { name: 'Adamawa',
    slug: 'nigeria_adamawa',
    stateSlug: 'adamawa',
    country: 'nigeria' },
  { name: 'Akwa Ibom',
    slug: 'nigeria_akwa-ibom',
    stateSlug: 'akwa-ibom',
    country: 'nigeria' },
  { name: 'Anambra',
    slug: 'nigeria_anambra',
    stateSlug: 'anambra',
    country: 'nigeria' } ]

// Filter States
// Get all states in nigeria that contain the string 'ab'.
var filteredStates = sc.getStates('nigeria', 'ab');

//Sample response
console.log(filteredStates);

[ { name: 'Abia',
    slug: 'nigeria_abia',
    stateSlug: 'abia',
    country: 'nigeria' },
  { name: 'Taraba',
    slug: 'nigeria_taraba',
    stateSlug: 'taraba',
    country: 'nigeria' } ]
```
> Note: You can get the country slug from the getCountries() method.

### Get cities

```javascript
// Get all cities by passing the state slug.
var cities = sc.getCities('nigeria_lagos'); 

//Sample response
console.log(cities);

[ { name: 'Agege',
    slug: 'nigeria_lagos_agege',
    citySlug: 'agege',
    state: 'nigeria_lagos',
    country: 'nigeria' },
  { name: 'Ajeromi Ifelodun',
    slug: 'nigeria_lagos_ajeromi-ifelodun',
    citySlug: 'ajeromi-ifelodun',
    state: 'nigeria_lagos',
    country: 'nigeria' },
  { name: 'Alimosho',
    slug: 'nigeria_lagos_alimosho',
    citySlug: 'alimosho',
    state: 'nigeria_lagos',
    country: 'nigeria' } ]

// Filter cities
// Get all cities in lagos, nigeria that contain the string 'ike'.
var filteredCities = sc.getCities('nigeria_lagos', 'ike'); 

//Sample response
console.log(filteredCities);

[ { name: 'Ikeja',
    slug: 'nigeria_lagos_ikeja',
    citySlug: 'ikeja',
    state: 'nigeria_lagos',} ]
```
> Note: You can get the state slug from the getStates() method.
