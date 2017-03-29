//List Page Controller 
module.controller('ListPageCtrl', ListPage);

function ListPage($scope, $state, studentList) {

    $scope.students = [];
    //pass starting index as 0 
    studentList.getStudentList($scope.students.length).then(function (students) {
        $scope.students = students;
    });

    $scope.loadMore = function () {
        studentList.getStudentList($scope.students.length).then(function (students) {
            if (students && students.length > 0)
                $scope.students = $scope.students.concat(students);

            $scope.$broadcast('scroll.infiniteScrollComplete');
        }).catch(function () {
            console.log('error occured');
        });
    }

    $scope.loadStudent = function (index) {
        $state.go('student', { student: $scope.students[index] })
    }
}
ListPage.$inject = ['$scope', '$state', 'studentList']