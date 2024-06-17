$(document).ready(function(){
	$('#fname').focus();
	  $('#area').attr('disabled',true).css('backgroundColor','rgb(230,230,230)');
	
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
			quant:{
				required: true,
				digits: true,
				max: 4
			}// end quant

		},// end rules
		messages:{
			email:{
				required: "please supply your email address",
				email:"Please enter a valid email address"
			},// end email
			phone:{
				required: "Please give your phone number"
			},//end phone
			quant:{
				digits: "Please give a positive whole number"
			}
		}//end messages
	  })//end validate


	$('#quant').blur(function(){
		var quant = $('#quant').val(); //gets the value input into the quant field
		var price = 25; // stored price of a sigle item
		var slstax = .065; // store decimal for sales tax
		if(quant <= 4)
		{
			var subTotal = price*quant;//the price before tax
			$('#price').val("$"+subTotal);// store the price value in the form
			var taxPrice = price*slstax;// store the tax price for one item
			var taxTotal = taxPrice*quant;// the total sales tax for different amounts
			$('#slstax').val("$"+taxTotal.toFixed(2));// store the salestax value in the form
			var total = subTotal+taxTotal;//the grandtotal with tax added
			$('#total').val("$"+total.toFixed(2));
		}
		else
		{
			$('#price').val('');// store a blank value in the form
			$('#slstax').val('');// store a blank value in the form
			$('#total').val('');// store a blank value in the form
		}
	});//end blur

});//end ready()
