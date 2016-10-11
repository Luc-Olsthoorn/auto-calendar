// Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
      var events="";
      var CLIENT_ID = '217774091050-mhhdso21bkcqe2finktjhvn5do0nhreq.apps.googleusercontent.com';

      var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, handleAuthResult);
      }

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          loadCalendarApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      }

      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      function handleAuthClick(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }

      /**
       * Load Google Calendar client library. List upcoming events
       * once client library is loaded.
       */
      function loadCalendarApi() {
        gapi.client.load('calendar', 'v3', listUpcomingEvents);
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
      function listUpcomingEvents() {

        var request = gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        });

        request.execute(function(resp) 
        {
            events = resp.items;
            
        });
        
      }

angular.module('NerdCtrl', []).controller('NerdController', function($scope) {

  
  $scope.currentDate = new Date();
    $scope.getEvents = function() {
      console.log("clicked");
      $scope.events = events;
      checkAuth();

  };
  
  $scope.$watchCollection('events', function(events){
      console.log(events);
      
      for(var i = 0; i < events.length; i++)
      {
        var a = new Date(events[i].start.dateTime);
         
        console.log(a.getDay());
        if(a.getDay() == 2 )
        {
          
        }
      }
      });

});