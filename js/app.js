var app = angular.module('moviedb',[]);

app.controller('movieController', function($http){
	var db = this;
	this.numberOfResults = 10;

	db.movies = {};
 
	this.searchMovie = function(){

		$http({
  			method: 'GET',
  			url: 'https://api.themoviedb.org/3/search/movie?api_key=5226c5fb4af2729078346dbd9590a81d&language=en-US&query=' + this.movie + '&page=1&include_adult=false'
		}).then(function successCallback(response) {
    		db.movies = response;
    		console.log(response);
  		}, function errorCallback(response) {
	   		alert("Something went wrong");
  		});

  		this.movie = '';
  	}

  	this.cssValue = function(vote){ 
  		if(vote >= 6){
  			this.css = {
  				"color": "#5cb85c"
  			};
  		}
  		else if(vote < 6 && vote > 4){
  			this.css = {
  				"color": "#f0ad4e"
  			};
  		}
  		else{
  			this.css = {
  				"color": "#d9534f"
  			};
  		}
  		return this.css;
  	}
	this.hasMovie = function(){
		return db.movies > 0;
	}

});