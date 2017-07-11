function require(deps,callback){
	require.callback=callback;
	require.loadeps(deps,callback);
	console.log(1);
}

require.loadeps=function (deps,callback){
	define.loadeps(deps,callback);
	console.log(2);
}

function define(deps,callback){
	define.loadeps(deps,callback);
	console.log(3);
}

define.loadeps=function (deps,callback){
	console.log(4);
	var flag=0;
	if(deps.length===0){
		var obj=callback();
		require.callback(obj);
	}
	deps.forEach(function (item){
		var script=document.createElement("script");
		script.src=item;
		document.body.appendChild(script);
		document.body.removeChild(script);
		script.onload=function(){
			flag+=1;
			if(flag===deps.length){
				var obj=callback();
				require.callback(obj);
			}
		}
	})
}

require(["a.js","b.js"],function(objB){
	console.log(objB);
})
