/*
myApp1.controller('App1Cntl',function ($scope, $http) {

 $http({method:'GET',url:'/data1'}).success(function(users) {
    $scope.users = users;
      //  Need to understand how to post parameter to the server;
  });
})
*/
function App1Cntl($scope, $resource) {
  var mySqlResult = $resource('/data/',params:{id:2});
      //    $scope.users = mySqlResult.query();
          $scope.users = mySqlResult.query();
}



/*
function App1Cntl($scope, $http) {
 $http({method:'GET',url:'/data1'}).success(function(users) {
    $scope.users = users;
  });

      // Below a sub controller based on the


       $scope.hello = function(user, $http) {
        alert('Hello ' + (user || 'world') + '!');
        $http({method:'GET',url:'/data',params:{id:3}}).success(function(users) {
        $scope.users = users;
        $scope.URL='/';
        alert('Hello ' + (user || 'world') + '!');
          }); 
         //alert('Hello ' + (user || 'world') + '!');
    }
}

/*
function App1Cntl2($scope, $http) {
  alert('test');
  $http({method:'GET',url:'/data/',params:{id:3}}).success(function(users) {
    $scope.users = users;
      //  Need to understand how to post parameter to the server;
  });        
}
*/