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
			this.set({'status': 'complete'})
		}else{
			this.set({'status': 'incomplete'});
		}
		// this.save();
	}
});

var staffMember = new StaffMember( {}
	// {userId: 1}
	  // { id:1, firstName: 'Ben', lastName: 'Hadwen', entitlement:20 }
	// urlRoot : '/user'
	);

	staffMember.on('change', function(){
	console.log("change made");
	// render view here
	// staffMemberView.render();
	// this.view.render();
	 // $('#userContent').html(staffMemberView.el);
	// this.view.render();

});



 

//VIEW
var StaffMemberView = Backbone.View.extend({
	tagName: 'div',
	className: 'staffMember',
	template: _.template('<h3 class=<%=status%>>' + '<input type=checkbox '+ '<% if(status=== "complete") print("checked") %>/>' + 
		'<%= firstName %> <%= lastName %></h3>'),
	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	events:{
		"click h3": "alertStatus",
		"change input": "toggleStatus"
	},
	alertStatus: function(e){
		// alert("h3 clicked");
	},
	toggleStatus: function(){
		console.log("togglestatus-view");
		this.model.toggleStatus();
		// this.render();
	},
	render: function(){
		console.log("render called");
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
		$('#userContent').html(staffMemberView.el);
	}
});





var staffMemberView = new StaffMemberView({model: staffMember});

// staffMemberView.render();
console.log(staffMemberView.el);
$(document).ready(function(){
	staffMember.fetch();
	//output render before data from JSON fetch is returned should be default
	// $('#userContent').html(staffMemberView.el);
});

// FOR TEST becuase render other way didn't return for data to be returned
// in fact if the model is listening to changes to the modle the render should 
// occur when the change occurs and be triggered from the modle listener

  // staffMember.fetch({ url: "/hadwensites/holidayplanner/js/data/usertemp.json" }).complete(function() {
  staffMember.fetch().complete(function() {
  	var myInfo = staffMember.toJSON();
  	console.log("myInfo");
    console.log(myInfo);
    //  staffMemberView.render();
    // $('#userContent').html(staffMemberView.el);

  });

 // END FOR TEST


   






