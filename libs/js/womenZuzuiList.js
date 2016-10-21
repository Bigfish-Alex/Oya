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
	
	//菜单
	$('.menu').on('click','div',function(){
		$('.fa',this).toggleClass('rotate');
		console.log($(this).text().trim())
		if($(this).text().trim()=="分类"){
			$('.brandSlide').hide();
			$(this).siblings('.brandDiv').find('.fa').removeClass('rotate');
			$('.triMenu').toggle(400);
		}
		if($(this).text().trim()=="品牌"){
			$('.triMenu').hide();
			$(this).siblings('.classifyDiv').find('.fa').removeClass('rotate');
			$('.brandSlide').toggle(400);
		}
	})
	
	//三级菜单
	$('.triMenu .middle').eq(0).show();
	$('.triMenu .left ul').on('click','li',function(){
		console.log($(this).index())
		$(this).siblings('li').css({
			background: 'rgb(233,233,233)'
		})
		$(this).css({
			background:'rgb(242,242,242)'
		})
		$('.triMenu .middle').hide().eq($(this).index()).show();
	})
})
window.onload=function(){
	var myScroll;
	myScroll = new IScroll('.contentBox',{ bounceEasing: 'circular',probeType:3, bounceTime: 600,scrollbars:true,fadeScrollbars:true,mouseWheel:true,click:true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	var pageIndex=-1;
	myScroll.on('scrollEnd',function(){
		if(myScroll.y<=myScroll.maxScrollY){
			pageIndex++;
			console.log(pageIndex);
			$.ajax({
				type:"get",
				url:"libs/data/zuzui.json",
				async:true,
				success:function(data){
					for(var i=0;i<data.length;i++){
						if(pageIndex==i){
							console.log(data[i]);
							for(var k in data[i]){
								var _html='<a href="'+
								data[i][k].locateTo+'"> <div class="productBox"> <img src="'+
								data[i][k].src+'"/> <span>'+
								data[i][k].name+'</span><br /> <span>￥</span><span>'+
								data[i][k].price+'</span> </div> </a>'
								$(_html).appendTo('#scroller')
							}
						}
					}
					myScroll.refresh();
				}
			});
		}
	})
}
