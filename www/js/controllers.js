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

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('FileManagerCtrl', function($scope, $cordovaFile) {

  $cordovaFile.checkDir(directory).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });


  // parameters: directory, replace (boolean)
  $cordovaFile.createDir(directory, false).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });


  $cordovaFile.checkFile(directory, file).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });


  // parameters: directory, file, replace (boolean)
  $cordovaFile.createFile(directory, file, true).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });


  $cordovaFile.removeFile(directory, file).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });


  // doesn't function at the moment
  $cordovaFile.writeFile(directory, file).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });

  // Reads a file as TEXT
  $cordovaFile.readFile(directory, file).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });

  // parameters: source, filePath, trust all hosts (boolean), options
  $cordovaFile.downloadFile(source, filePath, true, options).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });


  // parameters: source, filePath, options
  $cordovaFile.uploadFile(server, filePath, options).then(function(result) {
      // Success! 
  }, function(err) {
      // An error occured. Show a message to the user
  });

});
