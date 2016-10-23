//Create events
var events=[];
//Load google API
function loadGoogleEvents()
{
    checkAuth();//eventually will return json
    for(var i=0; i<googleEvents.length;i++)
    {
      var eventDate = new Date(googleEvents[i].start.dateTime);
      var eventEnd = new Date(googleEvents[i].end.dateTime);
      events.push({
        name: googleEvents[i].summary,
        start: eventDate,
        end: eventEnd,
        deadline: 1
      });
    }
    console.log(events);
}

displayCalendar.controller('displayCalendarCtrl', [ '$scope','dayFilter', function($scope,dayFilter) {
    $scope.getEvents = function() {
      loadGoogleEvents();
      $scope.actualTemplateUrl = "";
      $scope.events = events;
  };
}]);

//Filter based on day
displayCalendar.filter('day', function() {
    return function(events, day) 
    {
        var currentDate = new Date();
        var tempEvents=[];
        var j = 0;

        for (var i = 0; i < events.length; i++) {
          var week = 604800000;
          var dateDifference = (events[i].start.getTime()-currentDate.getTime());
         
          if(events[i].start.getDay() == day && 0 <= dateDifference && dateDifference <= week )
          {
            
            tempEvents[j] = events[i];
            j++;
          }
        }
        return tempEvents;
    };
});
