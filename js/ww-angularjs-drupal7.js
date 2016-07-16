/***** Module *****/
angular.module('app_ww_angularjs_drupal7', ['ngResource'])

/***** Factory *****/
.factory('factory_ww_angularjs_drupal7', ['$resource', function($resource) {
  return $resource('http://yourapi.local/', null,
  {
    'get': {
      method:'GET',
      isArray:false
    }
  });
}])

/***** Controller *****/
.controller('ctrl_ww_angularjs_drupal7', ['$scope', 'factory_ww_angularjs_drupal7', function($scope, factory_ww_angularjs_drupal7) {
  $scope.Data = factory_ww_angularjs_drupal7.get({}, function(Data) {

    /***** Create Result Object *****/
    Data.result = {};

    /***** Date *****/
    var date = new Date(Data.programme.date*1000);
    var months_french = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    var day_french = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche");
    Data.result.date = day_french[date.getDay()]+' '+date.getDate()+' '+months_french[date.getMonth()];

    /***** Informations *****/
    Data.result.name = Data.programme.name_display;
    Data.result.price = Data.programme.sum;
    Data.result.content = Data.programme.content;
  });
}]);
