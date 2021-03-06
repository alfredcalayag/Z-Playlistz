angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})



// Index route
.controller('PlaylistsCtrl', function($scope, $http) {
  $http.get('https://api.github.com/zen').success(function(data, status, headers, config){
    console.log("YOU GOT IT BUDDY")
    console.log(data)
  $scope.playlists = [
    { title: data, id: 7 },
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ]
  }).error(function(){
    console.log("F'd up PAL!")
  })

  // $scope.playlists = [];

})

// Show route
.controller('PlaylistCtrl', function($scope, $stateParams) {
  console.log("hi")
  // ajax call here
  // set scope.playlist = ajax data

  $scope.playlist = {
  title: "Z Lizt",
    songs: [{ artist: "Boyz II Men", title: "Motown Philly", id: 1 },
    { artist: "Backstreet Boyz", title: "Backstreet's Back", id: 2 },
    { artist: "Ganza Farmer", title: "Marlon Whocares", id: 3 },
    { artist: "Taylor ZWift", title: "Shake it on", id: 4 },
    { artist: "N'Zync", title: "Bah Bah Bah", id: 5 },
    { artist: "Vitamin Z", title: "Graduationz", id: 6 },
    { artist: "60 Centz", title: "In da house party", id: 7 }]
  }

  // $scope.playlists
});
