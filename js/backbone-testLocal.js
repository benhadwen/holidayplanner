
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

	// urlRoot: "/hadwensites/holidayplanner/js/data/usertemp.json"
	 localStorage: new Backbone.LocalStorage("holidayplanner-backbone")
});

var staffMember = new StaffMember( 
	// {userId: 1}
	  // { id:1, firstName: 'Ben', lastName: 'Hadwen', entitlement:20 }
	// urlRoot : '/user'
	);

 staffMember.fetch();

//VIEW
var StaffMemberView = Backbone.View.extend({
	render: function(){
		var html = '<p>' + this.model.get('firstName')  + " " +  this.model.get('lastName') + '</p>';
		$(this.el).html(html);
	}
});


 // var jqxhr = $.getJSON('/hadwensites/holidayplanner/user.json', function(data){
 //        staffMember.set({data});
 //     });

// FOR TEST

  // staffMember.fetch({ url: "/hadwensites/holidayplanner/js/data/usertemp.json" }).complete(function() {
  // 	var myInfo = staffMember.toJSON();
  // 	console.log("myInfo");
  //   console.log(myInfo);

  // });

 // END FOR TEST


var staffMemberView = new StaffMemberView({model: staffMember});
staffMemberView.render();
// console.log(staffMemberView.el);
$(document).ready(function(){
	$('#userContent').html(staffMemberView.el);
});



   






