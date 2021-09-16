$.ajax({
	method: "GET",
	url: "http://api.weatherbit.io/v2.0/current",
	data: {
		city:"Los+Angeles,CA",
		key:"440587296b11449cbc7514f55fb12692",
		units:"I"
	}
})

.done( function(results){
	console.log(results);
	let weatherNow=results.data[0];
	$("#weather").text("Today's weather in Los Angeles: "+results.data[0].temp+"\xB0 "
		+ results.data[0].weather.description
		+". Feels like "+results.data[0].app_temp+"\xB0");
	})
.fail(function() {
	console.log("ERROR");
	})

$("ul").on("click", "li", function() {
	$(this).toggleClass("crossed");
});

$("ul").on("click", "li i", function() {
	// console.log("click box");
	$(this).parents("li").fadeOut();
	$(this).parents("li").remove();
});

$("#form").on("submit", function(event) {
	event.preventDefault();
	let input=$("#listInput").val();
	// console.log(input);
	if(input.length>0){
		$( "ul" ).append( '<li class="item"><i class="far fa-square"></i> '+input+'</li>' );
		$("#listInput").val("");
	}

});

$(".plus").on("click", function() {
	console.log("plus");
	$("#form").slideToggle();
});