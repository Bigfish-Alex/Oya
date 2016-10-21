$(function(){
	$('#footer').load('footer.html')
	
	$('.fa-angle-left').click(function(){
		window.history.back();
	})
	
	$('.classifyBtn').on('click',function(){
		$('.classifyBtn').css({
			color:'white',
		})
	})
	
	
})
