var myApp = angular.module('myApp', []);

 myApp.controller('mainCtrl', function ($scope){   

 $scope.txt = "";
 $scope.numbers = [];
 $scope.operators = [];
 $scope.currentDisplay = "";
 $scope.count = 0;     

 $scope.calculate = function () {
    var answer = 0;

    $scope.numbers.push(parseInt($scope.txt));
     
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

   
    $scope.numbers = [];
    $scope.operators = [];
    $scope.txt = "";
    $scope.currentDisplay = answer;
    $scope.count = 0;
    
};

$scope.addNumber = function(num) {
    if($scope.count == 0){
        $scope.currentDisplay = "";
    }
    $scope.txt += num; 
    $scope.count += 1;
    $scope.currentDisplay += num;
    
   
};

$scope.addOperator = function(operator){
    $scope.numbers.push(parseInt($scope.txt));
    $scope.txt += operator;
    $scope.operators.push(operator);
    $scope.currentDisplay += " " + operator + " ";
    $scope.txt = "";
};
     
$scope.clear = function() {
    $scope.txt = "";
    $scope.numbers = [];
    $scope.operators = [];
    $scope.count = 0;
    $scope.currentDisplay = "";
    
};

 function calc(lhs,rhs,op){
     if (rhs === 0 && op === '/') {
         $scope.currentDisplay = "Err divide by zero.";
         return;
     }
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