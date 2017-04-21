console.log('loaded controller signup');
angular.module("RecommendationSystem")

.controller("SignUpCtrl", function ($scope, $http) {
  console.log('Signup controller testt controler');
  $scope.show_preferences = false;
  $scope.show_signup = true;
  $scope.state = "CA";
  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS '
    ).split(' ').map(function(state) {
        return {abbrev: state};
      });
  $scope.cuisine = "American";
   $scope.cuisines = ('Indian Mexican American Thai'
    ).split(' ').map(function(cuisine) {
        return {favCuisine: cuisine};
      });
  $scope.done_signup = function(user){
       console.log($scope.state);
       
           {
            // show preferences page
            console.log("show preference page");
            $scope.show_preferences = true;
            $scope.show_signup = false;
            var dataval = {
              "email":$scope.emailsign,
              "password":$scope.passwordsign,
              "firstname":$scope.firstname,
              "lastname":$scope.lastname,
            };
            $http({
              method : "POST",
              url : '/api/signup',
              data : dataval
            }).success(function(data) {
              console.log("signed up: "+data);
              //checking the response data for statusCode
      }).error(function(error) {
              //write failure code
              console.log("Error up: "+error);
    });
  }
}




    $scope.login_user = function(preference){
        console.log('show log in screen' );
       // location.href = 'http://localhost:3000/#!/login';
       
    //"state":$scope.state,
              var dataval = {
                  "email":$scope.emailsign,
                  "password":$scope.passwordsign,
                  "firstname":$scope.firstname,
                  "lastname":$scope.lastname,
                  "address":$scope.address,
                  "Zipcode":$scope.zipcode,
                  "cuisine":$scope.cuisine,
                  "state":$scope.state,
                  "contactnumber":$scope.contactnumber
              };
              console.log($scope.address);
              console.log($scope.zipcode);
              console.log($scope.cuisine);
              console.log($scope.state);
              console.log($scope.contactnumber);
              
              $http({
              method : "POST",
              url : '/api/addressDetails',
              data : dataval
            }).success(function(data) {
              console.log("signed up: "+data);
            }).error(function(error) {
              console.log("Error up: "+error);
          });
            
        }
    });

function show_error(msg){
  alert(msg);
}
