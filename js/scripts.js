$(document).ready(function(){

	$("#submit").click(function(){

		var name = $("#contactName").val();
		var email = $("#contactEmail").val();
		var info = $("#textArea").val();

		$(".contactName").text(name);
		$(".contactEmail").text(email);
		$(".textArea").text(info);

		$("#output").show();
		alert("Thank you " + name + " for your feedback. We will be in touch via " +email);
	
		event.preventDefault();
	});
});

$(document).ready(function() {
  $("#shift1").click(function() {
    $(".txt1").toggle();
    $(".img1").toggle();
  });
});

$(document).ready(function() {
  $("#shift2").click(function() {
    $(".txt2").toggle();
    $(".img2").toggle();
  });
});

