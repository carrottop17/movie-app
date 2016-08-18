$(document).ready(function(){
	
	// // base url for all api calls
	// var apiBaseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=';
	// // the query string including the apk key

	// var imageBaseUrl = 'http://image.tmdb.org/t/p/'

	// var searchBaseUrl = 'http://private-anon-0b7e660fdd-themoviedb.apiary-mock.com/3/'
	// // base url for all images
	// // after the / comes the width imageBaseUrl + 'w300' + poster_path
	// var apiKey = 'Xe61EAoXgKAnv40G5NGgdYS2rTofYHS7';
	// var npUrl = apiBaseUrl + 'movie/nowPlayingData' + apiKey;

	
	

	// $('.search-form').submit(function(){
	// 	event.preventDefault();
	// 	var searchInput = $('.searchbar').val();
		
	// 	$.getJSON(apiBaseUrl + 'search/movie' + apiKey + '&query=' + searchInput, function(nowPlayingData){
	// 		console.log(nowPlayingData);
	// 		var npHTML = '';
	// 		for(var i = 0; i < nowPlayingData.results.length; i++){
	// 			npHTML += '<div class="col description" id="' + nowPlayingData.results[i].id + '">';
	// 				npHTML += nowPlayingData.results[i].overview;
	// 			npHTML += '</div>';
	// 			npHTML += '<div class="col">';
	// 				if(nowPlayingData.results[i].poster_path == null){
	// 					var posterUrl = 'images/generic.jpg'
	// 				}else{
	// 					var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
	// 				}
	// 				npHTML += '<img src="' + posterUrl + '" class="poster' + " " + nowPlayingData.results[i].id + '" movieId = '+nowPlayingData.results[i].id+'>';
	// 			npHTML += '</div>';
	// 		}
	// 		$('.poster-grid').html(npHTML);
			
	// 		$(".poster").click(function(){
 //    			// $(".description").toggle();
 //    			var posterAttr = $(this).attr('movieId');
 //    			// var posterID = ($(this)[0].classList[1]);
 //    			$('#'+posterAttr).toggle();
	// 		});

	// 	});
	// });
	


	$.getJSON('https://app.ticketmaster.com/discovery/v2/events.json?keyword=monster&countryCode=US&apikey=Xe61EAoXgKAnv40G5NGgdYS2rTofYHS7', function(nowPlayingData){
			console.log(nowPlayingData);
			// var npHTML = '';
			// for(var i = 0; i < nowPlayingData.results.length; i++){
			// 	npHTML += '<div class="col">';
			// 		// npHTML += nowPlayingData.results[i].title;
			// 		var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
			// 		npHTML += '<img src="' + posterUrl + '">';
			// 	npHTML += '</div>';
			// }
			// $('.poster-grid').html(npHTML);
	});

});

