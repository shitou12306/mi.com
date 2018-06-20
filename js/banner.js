window.onload=function(){
	// let lis=document.querySelectorAll(".imgbox li");
	// let btn=document.querySelectorAll(".btn li");
	// let banner=document.querySelector(".banner");
	// let leftjt=document.querySelector(".leftjt");
	// let rightjt=document.querySelector(".rightjt");
	// console.log(lis,btn,banner,leftjt,rightjt);
    
 //    let currenindex=0;
 //    let t=setInterval(move,2000);
 //    // 初始化
	// lis[0].style.zIndex=10;
	// btn[0].className="hot";
 //    // 1-5
 //    function move(){
 //    	currenindex++;
	// 	if(currenindex==lis.length){
	// 		currenindex=0;
	// 	}
	// 	lis.forEach(function(element){
	// 		element.style.zIndex=5;
	// 	})
	// 	btn.forEach(function(element){
	// 		element.className="";
	// 	})
	// 	lis[currenindex].style.zIndex=10;
	//     btn[currenindex].className="hot";
 //    }
 //    // 5-1
 //    function movel(){
 //    	currenindex--;
	// 	if(currenindex<0){
	// 		currenindex=lis.length-1;
	// 	}
	// 	lis.forEach(function(element){
	// 		element.style.zIndex=5;
	// 	})
	// 	btn.forEach(function(element){
	// 		element.className="";
	// 	})
	// 	lis[currenindex].style.zIndex=10;
	//     btn[currenindex].className="hot";
 //    }
 //    // 鼠标移入
 //    banner.mouseenter=function(){
 //    	clearInterval(t);
 //    }
 //    // 鼠标移出
 //    banner.mouseleave=function(){
 //    	t=setInterval(move,2000);
 //    }
 //    // 向后
 //    rightjt.onclick=function(){
 //    	move();
 //    }
 //    // 向前
 //    leftjt.onclick=function(){
 //    	movel();
 //    }
 //    // 小点点击
 //    for(let i=0;i<btn.length;i++){
 //        btn[i].onclick=function(){
 //          lis.forEach(function(element){
	// 		element.style.zIndex=5;
	// 	})
	// 	btn.forEach(function(element){
	// 		element.className="";
	// 	})
	// 	lis[i].style.zIndex=10;
	//     btn[i].className="hot";
	//     currenindex=i;
 //        }
 //    }
    let banner=document.querySelector(".banner");
    let btn=document.querySelectorAll(".btn li");
    let lis2=document.querySelectorAll(".imgbox li");
    let leftjt=document.querySelector(".leftjt");
    let rightjt=document.querySelector(".rightjt");
    console.log(banner,btn,lis2,leftjt,rightjt);
    // 宽度
    let boxwidth=parseInt(getComputedStyle(banner,null).width);
    let current=0;
    let next=0;
    let flag=true;
    let t=setInterval(move,2000);
    function move(){
    	next++;
    	if(next==lis2.length){
    		next=0;
    	}
    	btn[current].classList.remove("hot");
    	btn[next].classList.add("hot");
    	lis2[next].style.left=boxwidth+"px";
    	animate(lis2[current],{left:-boxwidth});
    	animate(lis2[next],{left:0},function(){
    		flag=true;
    	});
    	current=next;
    }
    function movel(){
    	next--;
    	if(next<0){
    		next=lis2.length-1;
    	}
    	btn[current].classList.remove("hot");
    	btn[next].classList.add("hot");
    	lis2[next].style.left=-boxwidth+"px";
    	animate(lis2[current],{left:boxwidth});
    	animate(lis2[next],{left:0},function(){
    		flag=true;
    	});
    	current=next;
    }
    // 鼠标移入
    banner.onmouseenter=function(){
    	clearInterval(t);
    }
    // 鼠标移出
    banner.onmouseleave=function(){
    	t=setInterval(move,2000);
    }
    // 向后
    rightjt.onclick=function(){
    	if(!flag){
    		return;
    	}
    	if(next==lis2.length-1){
    	   next=lis2.length-1;
    	   return;
    	}
    	flag=false;
    	move()
    }
    // 向前
    leftjt.onclick=function(){
    	if(!flag){
    		return;
    	}
    	if(next==0){
    	   next=0;
    	   return;
    	}
    	flag=false;
    	movel()
    	
    }

   
    // 点击轮播点
    btn.forEach(function(element,index,obj){
    	 element.onclick=function(){
    		btn[current].classList.remove("hot");
    		btn[index].classList.add("hot");

    		if(current<index){
    			lis2[index].style.left=boxwidth+"px";
    			animate(lis2[current],{left:-boxwidth});
    			animate(lis2[index],{left:0});
    		}
    		if(current>index){
    			lis2[index].style.left=-boxwidth+"px";
    			animate(lis2[current],{left:boxwidth});
    			animate(lis2[index],{left:0});
    		}
    		next=current=index;
    	}
    })
}