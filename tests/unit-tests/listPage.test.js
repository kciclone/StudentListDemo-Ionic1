describe('ListPageCtrl', function () {
    var ListPageCtrl, stateMock, scopeMock;
    // load the module for our app
    beforeEach(angular.mock.module('StudentListDemo'));

    // mock $state
    stateMock = jasmine.createSpyObj('$state spy', ['go']);

    // instantiate the controller and mocks for every test
    beforeEach(inject(function ($rootScope, $controller) {
        // instantiate service
        scopeMock = $rootScope.$new();
        scopeMock.students = [{
            "id": 94,
            "firstname": "Karin",
            "lastname": "Michael",
            "class": 1,
            "attendance": 368
        }];
        ListPageCtrl = $controller('ListPageCtrl', {
            '$scope': scopeMock,
            '$state': stateMock
        });
    }))


    it('check if view is redirected to studentpage', function () {
        expect(scopeMock.loadStudent).toBeDefined();
        scopeMock.loadStudent(0);
        expect(stateMock.go).toHaveBeenCalledWith('student', { student: scopeMock.students[0] });
    });

});