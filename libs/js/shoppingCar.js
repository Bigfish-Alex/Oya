$(function(){
	$('.classifyBtn').on('click',function(){
		$('.classifyBtn').css({
			color:'white',
		})
	})
	
	$('.fa-angle-left').click(function(){
		window.history.back();
	})
	
	//获取carStorage里数据进行填充
	if( localStorage.getItem('carStorage') ){
		var carJson=JSON.parse( localStorage.getItem('carStorage') );
		for(var i=0;i<carJson.length;i++){
			console.log(carJson[i].price)
			var _html='<div class="carBox"> <div class="col-xs-1 checkbox"> <i class="fa fa-circle-o"></i> </div> <div class="col-xs-3 goodsPic"> <div class="goodsPic"> <img src="'+
			carJson[i].src+'"/> </div> </div> <div class="col-xs-8 bottomBox"> <div class="titleBox"> <p class="goodsName">'+
			carJson[i].name+'</p> </div> ￥<span class="goodsPrice">'+
			carJson[i].price+'</span> <div class="changeNum"> <span class="fa fa-minus"></span> <span class="buyNum">1</span> <span class="fa fa-plus"></span> </div> <i class="fa fa-trash-o"></i> </div> </div>';
			$(_html).appendTo('#scroller');
		}
		
	}else{
		$('#scroller').html('还没有商品加入哦')
	}
	
	//点击选中结算的商品
	$('.checkbox .fa').click(function(){
		if($(this).hasClass('fa-circle-o')){
			$(this).removeClass('fa-circle-o')
			$(this).addClass('fa-check-circle')
		}else{
			$(this).addClass('fa-circle-o')
			$(this).removeClass('fa-check-circle')
		}

		if( $('.checkbox .fa-check-circle').length==$('.checkbox').length ){
			$('.selectAll .fa').removeClass('fa-circle-o')
			$('.selectAll .fa').addClass('fa-check-circle')
		}else{
			$('.selectAll .fa').addClass('fa-circle-o')
			$('.selectAll .fa').removeClass('fa-check-circle')
		}
		cal();
	})
	
	//全选商品
	$('.selectAll .fa').click(function(){
		if($(this).hasClass('fa-circle-o')){
			$(this).removeClass('fa-circle-o')
			$(this).addClass('fa-check-circle')
			$('.checkbox .fa').removeClass('fa-circle-o')
			$('.checkbox .fa').addClass('fa-check-circle')
		}else{
			$(this).addClass('fa-circle-o')
			$(this).removeClass('fa-check-circle')
			$('.checkbox .fa').addClass('fa-circle-o')
			$('.checkbox .fa').removeClass('fa-check-circle')
		}
		cal()
	})
	
	//结算函数
	function cal(){
		if( $('.checkbox .fa-check-circle').length>0 ){
			console.log($('.checkbox .fa-check-circle').length+'件商品选择结算')
			var total=0;
			for(var i=0;i<$('.checkbox .fa-check-circle').length;i++){
				var singlecount=$('.checkbox .fa-check-circle').eq(i).parents('.checkbox').siblings('.bottomBox').find('.goodsPrice').html()*$('.fa-check-circle').eq(i).parents('.checkbox').siblings('.bottomBox').find('.buyNum').html()
				total+=singlecount;
			}
			console.log(total)
			$('.payConfirm span').html(total);
		}else{
			$('.payConfirm span').html(0);
		}
	}
	
	//点击加减商品
	$('.fa-minus').click(function(){
		var num= $(this).siblings('.buyNum').html();
		num--;
		if(num<=1){
			num=1;
			$(this).css({opacity:0.3})
		}
		$(this).siblings('.buyNum').html(num)
		cal();
	})
	
	$('.fa-plus').click(function(){
		var num= $(this).siblings('.buyNum').html();
		num++;
		if(num>=2){
			$(this).siblings('.fa-minus').css({opacity:1})
		}
		$(this).siblings('.buyNum').html(num)
		cal();
	})
	
	//删除商品
	$('.fa-trash-o').click(function(){
		var index=$('.fa-trash-o').index(this);
		$(this).parents('.carBox').remove();
		var arr=JSON.parse(localStorage.getItem('carStorage'));
		arr.splice(index,1)
		console.log(arr)
		var newJson=JSON.stringify(arr);
		localStorage.setItem('carStorage',newJson)
	})
	
	
})

window.onload=function(){
	var myScroll;
	myScroll = new IScroll('#centerContainer',{ bounceEasing: 'circular',probeType:3, bounceTime: 600,scrollbars:true,fadeScrollbars:true,mouseWheel:true,click:true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}
