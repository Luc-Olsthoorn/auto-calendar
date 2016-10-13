angular.module('displayCalendarCtrl', []).controller('NerdController', [ '$scope','dayFilter', function($scope,dayFilter) {

  
  $scope.currentDate = new Date();
    $scope.getEvents = function() {
      console.log("clicked");
      $scope.daye = 4;
      $scope.events = events;
      checkAuth();
      //$scope.monday = dayFilter($scope.events, 4);
      console.log($scope.monday);
      console.log($scope.events);
  };
}]);

angular.module('filter', []).filter('day', function() {
    return function(events, day) {
        
        var tempEvents=[];
        var j = 0;
        for (var i = 0; i < events.length; i++) {
          var a = new Date(events[i].start.dateTime);
          if(a.getDay() == day )
          {
            tempEvents[j] = events[i];
            j++;
          }
        }
        return tempEvents;
    };
});
