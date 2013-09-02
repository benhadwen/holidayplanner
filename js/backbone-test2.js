var HolidayPlanner = {  
	Models:{},
	Collections:{},
	Views:{},
	Templates:{}
}

// MODELS
HolidayPlanner.Models.StaffMember = Backbone.Model.extend({
	// defaults: function(){
	// 	return({
	// 	firstName: "firstName",
	// 	lastName: "lastName",
	// 	entitlement: 0
	// 	});
	// }
	// urlRoot: "/hadwensites/holidayplanner/js/data/user.json"
});

HolidayPlanner.Collections.StaffMembers = Backbone.Collection.extend({
	model: HolidayPlanner.Models.StaffMember,
	url: "/hadwensites/holidayplanner/js/data/user.json",
	initialize: function(){
		console.log("Staff Members initialize");
	}
});

//VIEW

HolidayPlanner.Views.StaffMemberView = Backbone.View.extend({
	initialize: function(){
		_.bindAll(this, "render");
		this.collection.bind("reset", this.render);
		console.log("initialize view");
	},
	render: function(){
		console.log("render");
		console.log(this.collection.length);
		var html = '<p>' + this.model.get('firstName')  + " " +  this.model.get('lastName') + '</p>';
		$(this.el).html(html);
	}
});






// var staffMemberView = new StaffMemberView({model: staffMember});
// staffMemberView.render();
// $(document).ready(function(){
// 	$('#userContent').html(staffMemberView.el);
// });




HolidayPlanner.Router = Backbone.Router.extend({
	routes:{
		"": "defaultRoute" //http://localhost/hadwensites/holidayplanner/backbone-test.html
	},

	defaultRoute:function(){
		console.log("defaultRoute");
		var staffMembers = new HolidayPlanner.Collections.StaffMembers();
		var staffMemberView = new HolidayPlanner.Views.StaffMemberView({collection:staffMembers});
		staffMembers.fetch();
		console.log(staffMembers.length);
	}
})

var appRouter = new HolidayPlanner.Router();
Backbone.history.start();





   






