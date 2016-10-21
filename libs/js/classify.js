$(function(){
	console.log('classify');
	$('.fa-angle-left').click(function(){
		window.history.back();
	})
	
	$('#footer').load('footer.html')
	$('.classifyBtn').on('click',function(){
		$('.classifyBtn').css({
			color:'white',
		})
	})
	
	$('.leftBox li').eq(0).css({
		background:'rgb(241,245,246)',
		color:'red'
	})
	
	$('.leftBox ul').on('click','li',function(){
		var index=$(this).index()-1;
		console.log(index);
		$('.leftBox li').css({
			background:'rgb(255,255,255)',
			color:'#000'
		})
		$(this).css({
			background:'rgb(241,245,246)',
			color:'red'
		})
		$.get('libs/data/classify.json',function(data){
			for(var i=0;i<data.length;i++){
				if(index==i){
					console.log(i)
					$('.hotBrandBox').remove();
					for(var k in data[i]){
						var _html='<a href="'+
						data[i][k].locateTo+'"><div class="hotBrandBox"> <img src="'+
						data[i][k].src+'"/> <p>'+
						data[i][k].name+'</p> </div></a>'
						$(_html).appendTo('.hotBrand');
					}
				}
			}
		})
	})
	
	
})


