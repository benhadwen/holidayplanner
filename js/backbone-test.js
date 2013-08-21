var StaffMember = Backbone.Model.extend({});



var staffMember = new StaffMember(
	{ id:1, firstName: 'Ben', lastName: 'Hadwen', user_entitlement:20 }
	);

var StaffMemberView = Backbone.View.extend({
	render: function(){
		var html = '<p>' + this.model.get('firstName') + '</p>' + '<p>' + this.model.get('lastname') + '</p>';
		$(this.el).html(html);
	}
});

var staffMemberView = new StaffMemberView({model: staffMember});

staffMemberView.render();





