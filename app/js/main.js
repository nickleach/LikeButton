;(function (){

  'use strict';

  angular.module('LikeButton', [])
.controller('ButtonController', ['$scope', function ($scope) {

  $scope.numberLikes = 0;

  $scope.buttonClick = function(){

    ($scope.numberLikes ++);


  };
  $scope.showLikes = function(){

    if ($scope.numberLikes === 1){
      return $scope.numberLikes + " Like";
    }else{
      return $scope.numberLikes + " Likes";
    }

  };


}]);

}());
