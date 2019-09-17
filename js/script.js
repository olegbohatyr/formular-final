$(function(){
	$('input.timepicker').timepicker({timeFormat: 'HH:mm'});

	$('input[data-val]').on('focus', function(){
		$(this).val($(this).attr('data-val'));
	})
});