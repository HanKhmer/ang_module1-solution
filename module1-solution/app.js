(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LCController', LCController);

function LCController ($scope,
                       $filter,
                       $injector) {
  $scope.lunch = "";
  $scope.aboutlunch = "";

  $scope.checklunch = function () {
    var menu = $scope.lunch;
    var lst=menu.split(',');
    if ((lst.length==1) && (lst[0]==""))
       $scope.aboutlunch = "Please enter data first";
    else if (lst.length<4)
       $scope.aboutlunch = "Enjoy";
    else 
       $scope.aboutlunch = "Too much!";

  };


}


})();
