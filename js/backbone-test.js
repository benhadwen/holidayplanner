// NOTES this is to test loading a single user object from json into the model and output it


// MODEL
var StaffMember = Backbone.Model.extend({
	// defaults: function(){
	// 	return({
	// 	firstName: "firstName",
	// 	lastName: "lastName",
	// 	entitlement: 0
	// 	});
	// },
	// urlRoot : '/hadwensites/holidayplanner/user.js'
	// urlRoot : '/hadwensites/holidayplanner/user.js'
	//urlRoot: "/hadwensites/holidayplanner/user.json"
	urlRoot: "/hadwensites/holidayplanner/js/data/usertemp.json"
});

var staffMember = new StaffMember( 
	// {userId: 1}
	  // { id:1, firstName: 'Ben', lastName: 'Hadwen', entitlement:20 }
	// urlRoot : '/user'
	);

 

//VIEW
var StaffMemberView = Backbone.View.extend({
	render: function(){
		var html = '<p>' + this.model.get('firstName')  + " " +  this.model.get('lastName') + '</p>';
		$(this.el).html(html);
	}
});





var staffMemberView = new StaffMemberView({model: staffMember});
staffMemberView.render();
// console.log(staffMemberView.el);
$(document).ready(function(){
	staffMember.fetch();
	// $('#userContent').html(staffMemberView.el);
});

// FOR TEST becuase render other way didn't return for data to be returned
// in fact if the model is listening to changes to the modle the render should 
// occur when the change occurs and be triggered from the modle listener

  staffMember.fetch({ url: "/hadwensites/holidayplanner/js/data/usertemp.json" }).complete(function() {
  	var myInfo = staffMember.toJSON();
  	console.log("myInfo");
    console.log(myInfo);
    staffMemberView.render();
    $('#userContent').html(staffMemberView.el);

  });

 // END FOR TEST


   






