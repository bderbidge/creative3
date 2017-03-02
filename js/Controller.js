var myApp = angular.module('myApp', []);

 myApp.controller('mainCtrl', function ($scope){   

 $scope.txt = '';
 $scope.numbers = [];
 $scope.operators = [];
 $scope.currentDisplay = '';

 $scope.calculate = function () {
    var answer = 0;

    while($scope.operators.length > 0) {
      var right = $scope.numbers.pop();
      if(isNaN(right)){
        right = 0;
      }
      var left = $scope.numbers.pop();
      if (isNaN(left)){
        left = 0;
      }
      var op = $scope.operators.pop();
        
      answer += calc(left, right, op);

    }

    $scope.result = answer;
    $scope.numbers = [];
    $scope.operations = [];
    $scope.txt = '';
    $scope.currentDisplay = currentDisplay;
};

$scope.addNumber = function(num) {
    $scope.txt += num; 
    $scope.numbers.push(parseInt(num));
    $scope.currentDisplay += num;
};

$scope.addOperator = function(operator){
   $scope.txt += operator;
   $scope.operators.push(operator);
   $scope.currentDisplay += operator;
};

 function calc(lhs,rhs,op){
  switch(op){
    case '+':
      return lhs + rhs;
    case '-':
      return lhs - rhs;
    case '*':
      return lhs * rhs;      
    case '/':
      return lhs / rhs;
    case '%':
      return lhs % rhs;
  }
  return 0;
}



});