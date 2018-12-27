/*
* @Author: Lenovo
* @Date:   2018-12-16 20:56:18
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-12-21 18:49:07
*/
window.onload=function(){
    var cover=document.getElementsByClassName('part')[0];
    window.onscroll=function(){
	    var st=document.documentElement.scrollTop || document.body.scrollTop;
	    if(st>150){
	        cover.style.position='fixed';
	    }
	    else{
	        cover.style.position='static';
	    }        
	}
}

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 25)
}
