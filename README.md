# State Cities
--------------
Get a list of countries, or give it a country & get a list of states, or give it a state, and it will give you an array of all the city names in that state

## Install it

### NPM
```javascript
$ npm install state-cities-db --save
```

### Yarn
```javascript
$ yarn add state-cities-db
```

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
// Get all states
var states = sc.getStates(); 

// OR
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
// Get all cities
var cities = sc.getCities(); 

// OR
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

### Get item by slug

```javascript
// Get by slug
var country = sc.getBySlug('country', 'nigeria');
var state = sc.getBySlug('state', 'nigeria_lagos');
var city = sc.getBySlug('city', 'nigeria_lagos_apapa');

//Sample responses
console.log(country);

{ name: 'Nigeria',
  slug: 'nigeria',
  iso: 'NGA',
  prefix: '+234',
  currency: 'NGN',
  region: 'Africa',
  subregion: 'Western Africa',
  latlng: [ 10, 8 ] }

console.log(state);

{ name: 'Lagos',
  slug: 'nigeria_lagos',
  stateSlug: 'lagos',
  country: 'nigeria' }

console.log(city);

{ name: 'Apapa',
  slug: 'nigeria_lagos_apapa',
  citySlug: 'apapa',
  state: 'nigeria_lagos',
  country: 'nigeria' }
```

## TODO
* Add cities for other countries (Currently only Nigerian cities pupolated)

PRs are welcome :)
