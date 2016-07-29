// var API_KEY = 'e6afcebf955057650e1331d9d1a6f4b8';
// var api = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',uk&'' + API_KEY + ''&units=imperial';


function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('San Francisco').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
})
