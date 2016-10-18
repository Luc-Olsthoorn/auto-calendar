// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'components/displayCalendar/events.html',
            controller: 'NerdController'
            
        })

        // nerds page that will use the NerdController
        

    $locationProvider.html5Mode(true);

}]);