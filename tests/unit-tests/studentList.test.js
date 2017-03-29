describe('student List', function () {
    var studentList, httpMock, qMock;
    // load the module for our app
    beforeEach(angular.mock.module('StudentListDemo'));

    // instantiate the controller and mocks for every test
    beforeEach(inject(function (_studentList_) {
        // instantiate service
        studentList = _studentList_;
    }));

    it('should test if no of elements returned is five only', function () {
        studentList.getStudentList(10).then(function (list) {
            expect(list.length).toEqual(5);
        })
    });
});
