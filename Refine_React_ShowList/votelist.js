
function showPoperOver() {
	$(".poperover").show();
}

$(document).ready(function () {
	$('.poperover').show();

	setTimeout("showPoperOver()", 3000);

	$(".gooditem input[type='checkbox']").click(function () {
		$(this).prev().show();
	});

	/*$("#submit_choices").click(function () {
		$.ajax ({  
			    url:'http://127.0.0.1:8888/choices',
			    data:{  
			        username: 'Logan',
			        choice_name: 'Mongo',
			        price: '5',
			        count: 1
			    },
			    type:'post',  
			    cache:false,  
			    dataType:'binary',

			    success:function(data) { 
			    	console.log(data);
			    },  
			    error : function() {  
			           alert("you are fail!!");  
			    }
		});
	});*/


   $("#submit_choices").click(function () {
		 $.post("http://127.0.0.1:8888/choices", {  
		    username: 'Logan',
		    choice_name: 'Mongo',
		    price: '5',
			count: 1
		}, function (data) {
		    var jsonData =JSON.parse(data);

		    for(var item of jsonData) {

		    	console.log(item);

		    	$('<div class="item">' 
		    	+ '<div>' + item.username+ '</div>'
                + '<div>' + item.choice_name + '</div>'
                + '<div>' + item.price + '</div>'
                +  '<div>' + item.count + '</div>'
                + '</div>' ).appendTo(".choice_results"); 
		    }
		});
   });
});

