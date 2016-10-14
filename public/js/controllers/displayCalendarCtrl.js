angular.module('displayCalendarCtrl', []).controller('NerdController', [ '$scope','dayFilter', function($scope,dayFilter) {

  
   
    $scope.getEvents = function() {
      checkAuth();
      $scope.events = events;
      console.log(events);
  };
}]);

angular.module('filter', []).filter('day', function() {
    return function(events, day) 
    {
        var currentDate = new Date();
        var tempEvents=[];
        var j = 0;

        for (var i = 0; i < events.length; i++) {
          var eventDate = new Date(events[i].start.dateTime);
          var dateDifference = (currentDate.getDate()-eventDate.getDate());
          console.log(dateDifference);
          if(eventDate.getDay() == day && 0 <= dateDifference && dateDifference <= 7 )
          {
            console.log("b" +dateDifference);
            tempEvents[j] = events[i];
            j++;
          }
        }
        return tempEvents;
    };
});
