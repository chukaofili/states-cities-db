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

// Filter States
// Get all states in nigeria that contain the string 'ab'.
var filteredStates = sc.getStates('nigeria', 'ab'); 
```
> Note: You can get the country slug from the getCountries() method.

### Get cities

```javascript
// Get all cities by passing the state slug.
var cities = sc.getCities('nigeria_lagos'); 

// Filter cities
// Get all cities in lagos, nigeria that contain the string 'ike'.
var filteredCities = sc.getCities('nigeria_lagos', 'ike'); 
```
> Note: You can get the state slug from the getStates() method.