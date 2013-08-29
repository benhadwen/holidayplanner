// MODEL
var StaffMember = Backbone.Model.extend({
	// urlRoot : '/hadwensites/holidayplanner/user.js'
	urlRoot : '/hadwensites/holidayplanner/user.js'
});

var staffMember = new StaffMember({ 
	// { id:1, firstName: 'Ben', lastName: 'Hadwen', user_entitlement:20 }
	// urlRoot : '/user'
	
	});


//VIEW
var StaffMemberView = Backbone.View.extend({
	render: function(){
		var html = '<p>' + this.model.get('firstName')  + " " +  this.model.get('lastName') + '</p>';
		$(this.el).html(html);
	}
});

staffMember.fetch();

var staffMemberView = new StaffMemberView({model: staffMember});
staffMemberView.render();
console.log(staffMemberView.el);



  // var jqxhr = $.getJSON('/hadwensites/holidayplanner/user.js', function(data){
  //       spinnerData = data;
  //   });







