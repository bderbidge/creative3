angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('calculator', calculatorDirective);
    
    
function mainCtrl ($scope) {
    $scope.users = [];
  
    $scope.addNew = function (user) {
        $scope.users.push({
            name: user.name,
            avatarUrl: user.url,
            email: user.email
        });
        user.name = '';
        user.url = '';
        user.email = '';
    };
}