// NOTES this is to test loading a single user object from json into the model and output it


// MODEL
var StaffMember = Backbone.Model.extend({
	defaults: function(){
		return({
		firstName: "firstName",
		lastName: "lastName",
		entitlement: 0
		});
	},
	// urlRoot : '/hadwensites/holidayplanner/user.js'
	// urlRoot : '/hadwensites/holidayplanner/user.js'
	//urlRoot: "/hadwensites/holidayplanner/user.json"
	urlRoot: "/hadwensites/holidayplanner/js/data/usertemp.json",

	toggleStatus: function(){
		console.log("toggleStatus");
		if(this.get('status') === 'incomplete'){
			this.set({'status': 'complete'});
		}else{
			console.log("run else statement");
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
		'<%= firstName %></h3>'),
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
		console.log("togglestatus-view");
		this.model.toggleStatus();
		// this.render();
	},
	render: function(){
		console.log("model change made // render called");
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	},
	remove: function(){
		this.$el.remove();
		console.log("remove called");
	}
});


// INSTANTIATE INSTANCE OF MODEL
var staffMember = new StaffMember({});

// WORKING RENDER PULLING FROM EXTERNAL
// NEED TO REMOVE THIS AND ATTACH RENDER RESULT TO DOM WITHIN VIEW DECLARATION


staffMember.on('change', function(){
	console.log("model change made");
	// staffMemberView.render();
	 $('#userContent').html(staffMemberView.el);
});


var staffMemberView = new StaffMemberView({model: staffMember});

// staffMemberView.render();

// console.log(staffMemberView.el);
$(document).ready(function(){
	staffMember.fetch();
});

// FOR TEST becuase render other way didn't return for data to be returned
// in fact if the model is listening to changes to the modle the render should 
// occur when the change occurs and be triggered from the modle listener

  // staffMember.fetch({ url: "/hadwensites/holidayplanner/js/data/usertemp.json" }).complete(function() {
 

  // staffMember.fetch().complete(function() {
  // 	var myInfo = staffMember.toJSON();
  // 	console.log("myInfo");
  //   console.log(myInfo);
  // });

 // END FOR TEST


   






