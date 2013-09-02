var Theater = {
	Models: {},
	Collections: {},
	Views: {},
	Templates:{}
}

Theater.Models.Movie = Backbone.Model.extend({});

Theater.Collections.Movies = Backbone.Collection.extend({
	model: Theater.Models.Movie,
	url: "/hadwensites/holidayplanner/js/data/movie.js",
	initialize: function(){
		console.log("Movies initialize")
	}
});

Theater.Views.Movies = Backbone.View.extend({
	initialize: function(){
		// _.bindAll(this, "render");
		this.collection.bind("reset", this.render, this);
		// this.collection.bind("reset", this.render);
	},

	render: function(){
		console.log("render");
		console.log(this.collection.length);
	}
});

Theater.Router = Backbone.Router.extend({
	routes: {
		"": "defaultRoute" //http://localhost/hadwensites/holidayplanner/backbone-test.html
	},

	defaultRoute: function(){
		console.log("defaultRoute");
		Theater.movies = new Theater.Collections.Movies();
		// var movies = new Theater.Collections.Movies();
		new Theater.Views.Movies({ collection: Theater.movies }); //Add this line
		Theater.movies.fetch();
		console.log(Theater.movies.length);
	}
});

var appRouter = new Theater.Router();
Backbone.history.start();