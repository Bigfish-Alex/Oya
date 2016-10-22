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
	
//	$('#city-picker3').on('blur',function(){
//		$('.address').html('您的地址是:'+$('#city-picker3').val())
//	})
	
	$('.detailAddress input').on('keydown',function(){
		$('.address').html('您的地址是:'+$('#city-picker3').val()+'/'+$('.detailAddress input').val())
		
	})
	
	$('.detailAddress input').on('blur',function(){
		$('.address').html('您的地址是:'+$('#city-picker3').val()+'/'+$('.detailAddress input').val())
		
	})
	
	$('.submit').click(function(){
		if( $('.form-control').eq(0).val() && $('.form-control').eq(1).val() && $('.form-control').eq(3).val()){
			var userName=$('.form-control').eq(0).val();
			var phoneNum=$('.form-control').eq(1).val();
			var address=$('.address').html();
			var infoList=[];
			var str={"name":userName,"phone":phoneNum,"address":address};
			infoList.push(str);
			var infoJson=JSON.stringify(infoList);
			localStorage.setItem("userInfo",infoJson)
			console.log(localStorage.getItem('userInfo'))
			alert('修改成功');
			window.location.href='userCenter.html';
		}else{
			alert('不能有空的 噢')
		}
	})
})