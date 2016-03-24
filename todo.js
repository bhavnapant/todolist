(function(){

var task = {
	task: ['Buy milk', 'Put clothes into the wash'],
	template: $('#task').html(),
	init: function(){
		this.cacheDom();
		this.bindEvents();
		this.render();
	},
	cacheDom: function(){
		this.$el = $('#taskModule');
		this.$button = this.$el.find('button');
		this.$input = this.$el.find('input');
		this.$ul = this.$el.find('ul');
		this.template = this.$el.find('#task').html();
	}
	render: function(){
		var data = {
			task: this.task,
		};
		this.$ul.html(Mustache.render(this.template, data));
	},
	addPerson: function(){
		this.people.push(this.$input.val());
	}
};
 people.init();
})()

