$(document).ready(function(){
	$('#fname').focus();
	$('#area').attr('disabled',true).css('backgroundColor','rgb(230,230,230)');
	$('#date').datepicker({
		dateFormat: "yy-mm-dd"
	});// end of dateformat

	  $('#order_form').validate({
		rules:{
			lname: "required", //alternative to class="required"
			street: "required",
			city: "required",
			state: "required",
			zip:{
				required: true,
				minlength: 5
			},//end zip
			phone:{
				required: true,
				minlength: 10
			},// end phone
			email:{
				required: true,
				email: true
			},// end email
			date: "required",
			ccard: "required",
			cardhold: "required",
			cardnum: "required"
		},// end rules
		messages:{
			email:{
				required: "please supply your email address",
				email:"Please enter a valid email address"
			},// end email
			phone:{
				required: "Please give your phone number"
			},//end phone
			date:{
				required: "Please select a date from the widget"
			}
		}//end messages
	  })//end validate

});//end ready()
