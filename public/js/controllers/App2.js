myApp2.controller('App2Cntl',function ($scope, $http) {
 $http.post('/add_data').success(function(users) {
  //  Need to understand how to post parameter to the server;
  });
})