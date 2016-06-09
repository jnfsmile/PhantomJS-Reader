$(function (){
	$('input').change(function(e)
	{
		var file = this[0];
		var reader = new FileReader();

		console.log(file);
	});
});