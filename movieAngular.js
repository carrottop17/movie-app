var movieApp = angular.module('movieApp',['ngAnimate', 'ngMaterial']);
movieApp.controller('movieController', function($scope, $http, $mdDialog){

	var npMovieURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';
	var genreURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=fec8b5ab27b292a68294261bb21b04a5';
	$scope.imagePath = 'http://image.tmdb.org/t/p/w300/';
	// var genreIds = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":10769,"name":"Foreign"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}

	$scope.myStyle = "orange";

	$scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

	$http({
		method: 'GET',
		url: npMovieURL
		}).then(function successFunction(searchData){
			$scope.movieArray = searchData.data.results;
			console.log(genreURL);
		},function failureFunction(searchData){
			console.log(movieData);
		}
	);

	$scope.getNewMovieStuff = function(){
		$http({
		method: 'GET',
		url: movieURL + $scope.queryString
		}).then(function successFunction(searchData){
			$scope.movieArray = searchData.data.results;
			console.log(searchData);
		},function failureFunction(searchData){
			
		}
	);
	}

	$scope.nextPage = function(){
		$http({
		method: 'GET',
		url: movieURL + $scope.queryString + '&page=2'
		}).then(function successFunction(searchData){
			$scope.movieArray = searchData.data.results;
		},function failureFunction(searchData){
			
		}
	);
	}

	$scope.click = function(){
		console.log(this);
	};

});