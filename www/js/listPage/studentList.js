//service to get Student List

module.service('studentList', StudentList);

function StudentList($http, $q) {

    this.getStudentList = function (start) {
        var deferred = $q.defer();
        $http.get('students.json').then(function (result) {
            console.log('Start ' + start);
            var students, end;
            end = start + 5;
            students = [];
            if (start < result.data.length)
                students = result.data.slice(start, (end < result.data.length ? (start + 5) : result.data.length - 1));
            console.log(students);
            deferred.resolve(students);
        }, function (error) {
            deferred.reject('Some error Occured');
        })
        return deferred.promise;
    }
}

StudentList.$inject = ['$http', '$q'];