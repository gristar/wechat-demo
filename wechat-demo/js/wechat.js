function getSignature(){
	$.ajax({
		type:"get",
		url:"http://commonweal.muying178.com/Api/Index/getJsSdkSign2?appid=wx9864d67ae5c81281&appSecret=d8478876aca4e549fa2c89407122c018",
		async:false,
		data:{url:location.href.split("#")[0]},
		dataType:"json",
		success:function(rst){
			console.log(rst, "rst");
			if(rst.content.ret == 1){
				signature = rst.content.content;
			}
			else{
				alert("获取signature失败");
			}
		},
		error:function(){
			alert("获取signature失败");
		}
	});
}

function getTicket(token){
	var ticket;
	$.ajax({
		type:"get",
		url:"https://api.weixin.qq.com/cgi-bin/ticket/getticket",
		async:false,
		data:{access_token:token,type:"jsapi"},
		dataType:"json",
		success:function(r){
			console.log(r);
			ticket = r.ticket;
		}
	})
	return ticket;
}
function getToken(appid,secret){
	var token;
	$.ajax({
		url:"https://api.weixin.qq.com/cgi-bin/token",
		type:"get",
		dataType:"json",
		async:false,
		//data:{grant_type:"client_credential",appid:"wx2d65e373e33947fc",secret:"6d8365b3104bf45992698f9deec3ac5a"},//讯音
//		data:{grant_type:"client_credential",appid:"wxe92019a5b547c740",secret:"473a625e3760fec7389442aa6410e45d"},//快线
		data:{grant_type:"client_credential",appid:appid,secret:secret},
		success:function(rst){
			console.log("access_token:"+rst,"请缓存");
			token = rst.access_token;
		}
	})
	return token;
}