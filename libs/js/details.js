$(function(){
//	var myScroll;
//	myScroll = new IScroll('#centerContainerDetails',{ bounceEasing: 'circular',probeType:3, bounceTime: 600,scrollbars:true,fadeScrollbars:true,mouseWheel:true,click:true });
//	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	$('.fa-angle-left').click(function(){
		window.history.back();
	})
	
	$('.classifyBtn').on('click',function(){
		$('.classifyBtn').css({
			color:'white',
		})
	})
	
	//---------轮播图初始化--------------
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    
    //---------点击评论切换到评论页-------------
    $('.comment').click(function(){
    	$('#centerContainerDetails').html('');
    	var scroller='<div id="scroller"> </div>';
    	$(scroller).appendTo('#centerContainerDetails');
    	
    	for(var i=0;i<10;i++){
	    	var _html='<div class="commentBox"> <div class="boxTop"> <img src="libs/images/55.jpg" /> <span class="name">匿名</span> <span class="time gray">2016.10.12</span> </div> <div class="bottomBox"> <p><span class="fa fa-star"><span class="fa fa-star"><span class="fa fa-star"><span class="fa fa-star"><span class="fa fa-star"></span></p> <p>还不错</p> <p>2016.10.12</p> </div> </div>';
	    	$(_html).appendTo('#scroller');
    	}
    	
    	var myScroll;
		myScroll = new IScroll('#centerContainerDetails',{ bounceEasing: 'circular',probeType:3, bounceTime: 600,scrollbars:true,fadeScrollbars:true,mouseWheel:true,click:true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    	myScroll.refresh();
    	
    	//加载评论页
    	var pageIndex=-1;
    	myScroll.on('scrollEnd',function(){
    		if(myScroll.y<=myScroll.maxScrollY){
    			pageIndex++;
    			console.log(pageIndex);
    			$.get('libs/data/comment.json',function(data){
    				for(var j=0;j<data.length;j++){
    					if(pageIndex==j){
    						console.log(data[j])
    						for(var k in data[j]){
    							console.log(data[j][k].name)
	    						var _html='<div class="commentBox"> <div class="boxTop"> <img src="libs/images/55.jpg" /> <span class="name">'+
	    						data[j][k].name+'</span> <span class="time gray">2016.10.12</span> </div> <div class="bottomBox"> <p><span class="fa fa-star"><span class="fa fa-star"><span class="fa fa-star"><span class="fa fa-star"><span class="fa fa-star"></span></p> <p>'+
	    						data[j][k].content+'</p> <p>'+
	    						data[j][k].time+'</p> </div> </div>';
    							$(_html).appendTo('#scroller');
    						}
    					}
    				}
    				myScroll.refresh();
    			})
    		}
    	})
    	$('.details').css({
    		background:'#8E488E',
    		color:'#fff',
    	})
    	$('.comment').css({
    		background:'white',
    		color:'#000',
    	})
    	
    })
    
    //点击切换回详情页
    $('.details').click(function(){
    	$('#centerContainerDetails').html('');
    	var scroller='<div id="scroller"> </div>';
    	$(scroller).appendTo('#centerContainerDetails');
    	var _html='<div class="carouselBox"> <div class="swiper-container"> <div class="swiper-wrapper"> <div class="swiper-slide"><img src="libs/images/54.jpg"/></div> <div class="swiper-slide"><img src="libs/images/55.jpg"/></div> <div class="swiper-slide"><img src="libs/images/56.jpg"/></div> </div> <!-- Add Pagination --> <div class="swiper-pagination"></div> </div> <p>斯文印花黑灰色短袖连衣裙</p> <p>￥<span>140</span></p> </div>  <div class="info"> <p>品牌名称：<span class="gray">LETDIOSTO</span></p>  <p>商品名称：<span class="gray">女款黑白色条纹上衣阔腿裤套装</span></p>  <p>产地：<span class="gray">中国</span></p>  <p>材质：<span class="gray">上衣:粘纤77% 聚酯纤维18.5% 氨纶4.5% 裤子:聚酯纤维100% (装饰物除外)</span></p>  <p>洗涤说明：<span class="gray">最高洗涤温度40℃ 不可漂白 平摊晾干 熨斗底板最高温度110℃ 常规干洗（深色或者深色与浅色相拼的衣服洗涤时请注意：不宜用碱性过强的洗涤液；不宜浸泡时间过久）</span></p> </div> <div class="longPic"> <img src="libs/images/60.jpg"/> </div>';
    	$(_html).appendTo('#scroller');
    	
    	//动态修改详情页参数
	    var id=window.location.search;
	    var id=id.split('=');
	    var id=id[1];
	    console.log(id);
	    $.get('libs/data/details.json',function(data){
	    	for(var l=0;l<data.length;l++){
	    		if(data[l].id==id){
	    			console.log(data[l])
	    			$('.swiper-slide img').attr({'src':data[l].src});
	    			$('.price').html(data[l].price)
	    		}
	    	}
	    })
	    
	    //重新初始化轮播图
	    var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        spaceBetween: 30,
	        centeredSlides: true,
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false
	    });
	    
    	//重新初始化iscroll插件
    	var myScroll;
		myScroll = new IScroll('#centerContainerDetails',{ bounceEasing: 'circular',probeType:3, bounceTime: 600,scrollbars:true,fadeScrollbars:true,mouseWheel:true,click:true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    	myScroll.refresh();
    	
    	$('.comment').css({
    		background:'#8E488E',
    		color:'#fff',
    	})
    	$('.details').css({
    		background:'white',
    		color:'#000',
    	})
    })
    
    //动态修改详情页参数
    var id=window.location.search;
    var id=id.split('=');
    var id=id[1];
    console.log(id);
    $.get('libs/data/details.json',function(data){
    	for(var l=0;l<data.length;l++){
    		if(data[l].id==id){
    			console.log(data[l])
    			$('.swiper-slide img').attr({'src':data[l].src});
    			$('.price').html(data[l].price)
    		}
    	}
    })
    
    //点击加入购物车
    $('.joinCar').click(function(){
    	if(localStorage.getItem('carStorage')){
    		var arr=JSON.parse(localStorage.getItem('carStorage'))
    		var newJoin={"name":$('.name').html(),"price":$('.price').html(),"src":$('.pic').attr('src'),"id":1};
    		arr.push(newJoin)
    		var shopJsonNew=JSON.stringify(arr)
    		localStorage.setItem("carStorage",shopJsonNew)
    		console.log(arr.length)
    		$('.number').html(arr.length)
    	}else{
	    	var shoppingList=[];
	    	var goodsString={"name":$('.name').html(),"price":$('.price').html(),"src":$('.pic').attr('src'),"id":1};
	    	shoppingList.push(goodsString);
	    	var shopJson=JSON.stringify(shoppingList)
	    	localStorage.setItem("carStorage",shopJson)
    	}
    	
    })
    
    //显示购买的数量
    var arrL=JSON.parse(localStorage.getItem('carStorage'));
    var num=arrL.length;
    $('.number').html(num)
    
})

window.onload=function(){
	var myScroll;
	myScroll = new IScroll('#centerContainerDetails',{ bounceEasing: 'circular',probeType:3, bounceTime: 600,scrollbars:true,fadeScrollbars:true,mouseWheel:true,click:true });
	myScroll.refresh();
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}
