
function ajax(url,params={},successfn,errorfn,type='POST',asyncType,requestCount){
	mui.ajax(url,{
		data:params,
		dataType: "json",
		type:type,//HTTP请求类型
		timeout:20000,	
		success:function(data){
			successfn(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			console.log(arguments);
		}
	});
};