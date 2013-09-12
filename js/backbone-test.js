// NOTES this is to test loading a single user object from json into the model and output it
// COLLECTION
var StaffMembers = Backbone.Collection.extend({
	// model:StaffMember,
	url: "/hadwensites/holidayplanner/js/data/users.json"
});
var staffMembers = new StaffMembers();

staffMembers.on('reset', function(){
	alert("collection event triggered");
});
staffMembers.on('change', function(){
	console.log("collection change event triggered");
});

staffMembers.fetch();

// MODEL
var StaffMember = Backbone.Model.extend({
	defaults: function(){
		return({
		firstName: "firstName",
		lastName: "lastName",
		entitlement: 0
		});
	},
	
	 urlRoot: "/hadwensites/holidayplanner/js/data/usertemp.json",

	toggleStatus: function(){
		if(this.get('status') === 'incomplete'){
			this.set({'status': 'complete'});
		}else{
			this.set({'status': 'incomplete'});
		}
		 // this.save();
	}
});



//VIEW
var StaffMemberView = Backbone.View.extend({
	tagName: 'div',
	className: 'staffMember',
	template: _.template('<h3 class="<%= status %>">' + '<input type=checkbox '+ '<% if(status=== "complete") print("checked") %>/>' + 
		'<%= firstName %> <%= lastName %></h3>'),
	events:{
		// "click h3": "alertStatus",
		'change input': 'toggleStatus'
	},
	alertStatus: function(e){
		// alert("h3 clicked");
	},
	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this)
	},

	toggleStatus: function(){
		this.model.toggleStatus();
	},
	render: function(){
		console.log("model change made // render called");
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	},
	remove: function(){
		this.$el.remove();
		console.log("remove called");
		// return this;
	}
});


// INSTANTIATE INSTANCE OF MODEL
var staffMember = new StaffMember({});
var staffMemberView = new StaffMemberView({model: staffMember});

// console.log(staffMemberView.el);
$(document).ready(function(){
	staffMember.fetch();
	staffMemberView.render();
	//attach view to the DOM
	$('#userContent').append(staffMemberView.el);

	//For collections
	// appointmentsView.render();
	// $('#app').append(appointmentsView.el);

});



   






