module.controller('StudentDetail', StudentDetail);

function StudentDetail($scope, $stateParams) {
    console.log($stateParams);
    $scope.student = $stateParams.student;
}

StudentDetail.$inject = ['$scope', '$stateParams']