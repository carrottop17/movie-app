$(document).ready(function(){
	
	// base url for all api calls
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	// the query string including the apk key

	var imageBaseUrl = 'http://image.tmdb.org/t/p/'

	var searchBaseUrl = 'http://private-anon-0b7e660fdd-themoviedb.apiary-mock.com/3/'
	// base url for all images
	// after the / comes the width imageBaseUrl + 'w300' + poster_path
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var npUrl = apiBaseUrl + 'movie/nowPlayingData' + apiKey;
	

	$('.search-form').submit(function(){
		event.preventDefault();
		var searchInput = $('.searchbar').val();
		
		$.getJSON(apiBaseUrl + 'search/movie' + apiKey + '&query=' + searchInput, function(nowPlayingData){
			console.log(nowPlayingData);
			var npHTML = '';
			for(var i = 0; i < nowPlayingData.results.length; i++){
				npHTML += '<div class="col">';
					// npHTML += nowPlayingData.results[i].title;
					if(nowPlayingData.results[i].poster_path == null){
						var posterUrl = 'images/generic.jpg'
					}else{
						var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
					}
					npHTML += '<img src="' + posterUrl + '">';
				npHTML += '</div>';

			}
			$('.poster-grid').html(npHTML);
		});
	});

	$.getJSON(apiBaseUrl + 'movie/now_playing' + apiKey, function(nowPlayingData){
			console.log(nowPlayingData);
			var npHTML = '';
			for(var i = 0; i < nowPlayingData.results.length; i++){
				npHTML += '<div class="col">';
					// npHTML += nowPlayingData.results[i].title;
					var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
					npHTML += '<img src="' + posterUrl + '">';
				npHTML += '</div>';
			}
			$('.poster-grid').html(npHTML);
	});

});