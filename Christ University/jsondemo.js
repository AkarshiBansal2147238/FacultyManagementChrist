var myapp=angular.module("myapp",[]);
myapp.controller("myctrl",function($scope,$http)
{
    $http.get('https://akarshibansal2147238.github.io/faculty/faculty.json')
    .success(function(response)
    {
        $scope.names=response.records;
    });
});
myapp.filter('toUpperCase', function () {
 
    return function (input)
    {
        var output = "";       
        output = input.toUpperCase();
        return output;
    }
});
myapp.filter('myFormat', function() {
    return function(x) {
      var i, c, txt = "";
      for (i = 0; i < x.length; i++) {
        c = x[i];
        if (i % 2 == 0) {
          c = c.toUpperCase();
        }
        txt += c;
      }
      return txt;
    }
});