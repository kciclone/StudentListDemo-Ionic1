var module = angular.module('StudentListDemo', ['ionic'])

  .config(configuration);

function configuration($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('listPage', {
      url: '/',
      templateUrl: 'js/listPage/listPage.html',
      controller: ListPage
    }).state('student', {
      url: '/student',
      params: { student: null },
      templateUrl: 'js/studentPage/studentDetail.html',
      controller: StudentDetail
    });
  $urlRouterProvider.otherwise("/");
}
configuration.$inject = ['$stateProvider', '$urlRouterProvider'];
