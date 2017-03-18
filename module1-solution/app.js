(function() {
  angular.module('TooMuchApp', [])
    .controller('TooMuchController', TooMuchController);

  TooMuchController.$inject = ['$scope'];
  function TooMuchController($scope) {
    $scope.message = '';
    $scope.input = '';
    $scope.inputState = '';

    $scope.checkItems = function() {
      var numItems = numberOfItems($scope.input);
      if ($scope.input.length === 0 || numItems === 0) {
        $scope.message = 'Please enter data first';
        $scope.inputState = 'empty';
      } else {
        $scope.inputState = 'valid';
        if (numItems <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too Much!';
        }
      }
    };
  }

  function numberOfItems(string) {
    var items = string.split(',');
    var num = 0;
    for (var i = 0, l = items.length; i < l; i++) {
      if (items[i].trim().length > 0) {
        num += 1;
      }
    }

    return num;
  }
})();
