function require(deps,callback){
	require.callback=callback;
	require.loadeps(deps,callback);
}

function define(deps,callback){
	define.loadeps(deps,callback);
}

define.loadeps=function (deps,callback){
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

require.loadeps=function (deps,callback){
	deps.forEach(function (item){
		var script=document.createElement("script");
		script.src=item;
		document.body.appendChild(script);
		document.body.removeChild(script);
	})
}

require(["a.js","b.js"],function(objB){
	console.log(objB);
})
