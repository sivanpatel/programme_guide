programmeGuide.controller('ProgrammeGuideController', ['$http', function($http) {

  var self = this
  self.programmes = []

  var apiCall = function() {
    $http.get('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1')
      .then(function(response) {
        self.programmes = response.data.atoz_programmes.elements
        console.log(self.programmes)
      })
  }

  apiCall()

}])
