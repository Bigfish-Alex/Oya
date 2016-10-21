$(function(){
	$('#footer').load('footer.html')
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

//回到顶部
//  $('#centerContainer').scroll(function(){
//  	var osTop=$('#centerContainer').scrollTop();
//  	if(osTop>=500){
//  		$('#backToTop').show();
//  	}else{
//  		$('#backToTop').hide();
//  	}
//  })
    
//  $('#backToTop').on('click',function(){
//  	$('#centerContainer').scrollTop(0);
//  })
})

window.onload=function(){
	var myScroll;
	
	myScroll = new IScroll('#centerContainer',{ bounceEasing: 'circular',probeType:3, bounceTime: 600,scrollbars:true,fadeScrollbars:true,mouseWheel:true,click:true });

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	myScroll.on('scroll',function(){
		if(myScroll.y<=-300){
			$('#backToTop').show(400);
		}else{
			$('#backToTop').hide();
		}
	})
	
	var loadPage=-1;
	myScroll.on('scrollEnd',function(){
		if(myScroll.y<=myScroll.maxScrollY){
			loadPage++;
			console.log(loadPage);
			$('#loading').show();
			window.setTimeout(function(){
//				var loadRecommend=$('.recommend').clone(true,true).appendTo('#scroller');
				$.get('libs/data/recommend.json',function(data){
					for(var i=0;i<data.length;i++){
						if(loadPage==i){
							for(var k in data[i]){
								console.log(data[i][k])
								var _html='<div class="recommendBox"> <img src="'+
								data[i][k].src+'"/> <h4>'+
								data[i][k].name+'</h4> <h4>¥'+
								data[i][k].price+'</h4> </div>';
								$(_html).appendTo('.recommend')
							}
						}
					}
					myScroll.refresh();
				})
				$('#loading').hide();
			},500)		
		}
	})
	
	$('#backToTop').on('click',function(){
    	myScroll.scrollTo(0, 0, 500, IScroll.utils.ease.circular);
    })
	
}