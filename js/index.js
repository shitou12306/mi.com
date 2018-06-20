window.onload=function(){
	// 购物车开始
	let headRightR=document.getElementsByClassName("headRightR")[0];
	let gouwuchebox=document.getElementsByClassName("gouwuchebox")[0];
	headRightR.onmouseenter=function(){
		gouwuchebox.style.height=("98px");
		gouwuchebox.style.boxShadow=("0 2px 10px rgb(0,0,0,0.15)");
	}
	headRightR.onmouseleave=function(){
		gouwuchebox.style.height=("0");
	}
	// 购物车结束
	// aside开始
	let  aside=document.getElementsByClassName("aside")[0];
	let  lis=aside.getElementsByTagName("li");
	let asidebox=document.getElementsByClassName("asidebox");	
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
				asidebox[j].style.display="none";
			}
			asidebox[i].style.display="block";
		}
		lis[i].onmouseleave=function(){
			asidebox[i].style.display="none";
		}
	}
	// aside结束
	// 家电开始
	let jdtopr1=document.getElementsByClassName("jdtopr")[0];
	let jdtopznr=document.getElementsByClassName("jdtopznr")[0];
	let jdtopr2=document.getElementsByClassName("jdtopr")[1];
	let jdtopr3=document.getElementsByClassName("jdtopr")[2];
	let jdtopr4=document.getElementsByClassName("jdtopr")[3];
	let jdtopr5=document.getElementsByClassName("jdtopr")[4];

	let a=jdtopr1.getElementsByTagName("a");
	let b=jdtopznr.getElementsByTagName("a");
	let c=jdtopr2.getElementsByTagName("a");
	let d=jdtopr3.getElementsByTagName("a");
	let e=jdtopr4.getElementsByTagName("a");
	let f=jdtopr5.getElementsByTagName("a");

	let jiadian1=document.getElementsByClassName("jiadian")[0];
	let jiadian2=document.getElementsByClassName("jiadian")[1];
	let jiadian3=document.getElementsByClassName("jiadian")[2];
	let jiadian4=document.getElementsByClassName("jiadian")[3];
	let jiadian5=document.getElementsByClassName("jiadian")[4];
	let jiadian6=document.getElementsByClassName("jiadian")[5];

	let jiadianr1=jiadian1.getElementsByClassName("jiadianr");
	let jiadianr2=jiadian2.getElementsByClassName("jiadianr");
	let jiadianr3=jiadian3.getElementsByClassName("jiadianr");
	let jiadianr4=jiadian4.getElementsByClassName("jiadianr");
	let jiadianr5=jiadian5.getElementsByClassName("jiadianr");
	let jiadianr6=jiadian6.getElementsByClassName("jiadianr");
	jiadianr1[0].style.zIndex="999";
	function dh(a,jiadianr){
		for (let i=0;i<a.length;i++){
			a[i].onmouseenter=function(){
				for(let j=0;j<a.length;j++){
					jiadianr[j].style.display="none";
				}
				jiadianr[i].style.display="block";
				
			}
		}
	}
	dh(a,jiadianr1);
	dh(b,jiadianr2);
	dh(c,jiadianr3);
	dh(d,jiadianr4);
	dh(e,jiadianr5);
	dh(f,jiadianr6);


	let daohangzhong=document.getElementsByClassName("daohangzhong")[0];
	let hhh=daohangzhong.getElementsByTagName("a");
	let daohangzhongbox=document.getElementsByClassName("daohangzhongbox");
	console.log(hhh,daohangzhongbox);
	for (let i=0;i<8;i++){
		hhh[i].onmouseenter=function(){
			for(let j=0;j<8;j++){
					daohangzhongbox[j].style.height="0";
				}
				daohangzhongbox[i].style.height="230px";
		}
		hhh[i].onmouseleave=function(){
			daohangzhongbox[i].style.height="0";
		}
	}
	// 家电结束
	// banner开始
	// let lis2=document.querySelectorAll(".imgbox li");
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
	// 	if(currenindex==lis2.length){
	// 		currenindex=0;
	// 	}
	// 	lis2.forEach(function(element){
	// 		element.style.zIndex=5;
	// 	})
	// 	btn.forEach(function(element){
	// 		element.className="";
	// 	})
	// 	lis2[currenindex].style.zIndex=10;
	//     btn[currenindex].className="hot";
 //    }
 //    // 5-1
 //    function movel(){
 //    	currenindex--;
	// 	if(currenindex<0){
	// 		currenindex=lis2.length-1;
	// 	}
	// 	lis2.forEach(function(element){
	// 		element.style.zIndex=5;
	// 	})
	// 	btn.forEach(function(element){
	// 		element.className="";
	// 	})
	// 	lis2[currenindex].style.zIndex=10;
	//     btn[currenindex].className="hot";
 //    }
 //    // 鼠标移入
 //    banner.onmouseenter=function(){
 //    	clearInterval(t);
 //    }
 //    // 鼠标移出
 //    banner.onmouseleave=function(){
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
 //          lis2.forEach(function(element){
	// 		element.style.zIndex=5;
	// 	})
	// 	btn.forEach(function(element){
	// 		element.className="";
	// 	})
	// 	lis2[i].style.zIndex=10;
	//     btn[i].className="hot";
	//     currenindex=i;
 //        }
 //    }
    
    // banner点不动开始
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
    // banner点不动结束
    
    // 小米明星单品开始
    let zuo=document.querySelector(".zuo");
    let you=document.querySelector(".you");
    let danpindi=document.querySelector(".danpindi");
    let lw=parseInt(getComputedStyle(danpindi,null).width)/3;
    console.log(you,zuo,danpindi,lw);
    let times=0;
    you.onclick=function(){
       times++;
       if(times==3){
       	times=2;
       }
       danpindi.style.transform=`translateX(${-lw*times}px)`;
    }
    zuo.onclick=function(){
    	times--;
    	if(times<0){
    		times=0;
    	}
    	danpindi.style.transform=`translateX(${-lw*times}px)`;
    }
    // 小米明星单品结束
    
    // 内容轮播开始
    let banner1=document.querySelectorAll(".nrbox li");
    let lis3=document.querySelectorAll(".nrlunbo a");
    let btn2=document.querySelectorAll(".yuano .yuan");
    let leftjt1=document.querySelector(".nrleft");
    let rightjt1=document.querySelector(".nrright");
    console.log(lis3,leftjt1,rightjt1,banner1);
    let boxwidth1=parseInt(getComputedStyle(lis3[0],null).width);
    console.log(boxwidth1,btn2);

    let current1=0;
    let next1=0;
    // 向右
    rightjt1.onclick=function(){
        
        if(next1==lis3.length-1){
            next1=lis3.length-1;
            return;
        }
        next1++;
        btn2[current1].classList.remove("hot1");
        btn2[next1].classList.add("hot1");
        lis3[next1].style.left=boxwidth1+"px";
        animate(lis3[current1],{left:-boxwidth1});
        animate(lis3[next1],{left:0});
        current1=next1;
    }    
    // 向左
    leftjt1.onclick=function(){
        
        if(next1==0){
            next1=0;
            return;
        }
        next1--;
        btn2[current1].classList.remove("hot1");
        btn2[next1].classList.add("hot1");
        lis3[next1].style.left=-boxwidth1+"px";
        animate(lis3[current1],{left:boxwidth1});
        animate(lis3[next1],{left:0});
        current1=next1;
    }
    // 轮播图点击
    btn2.forEach(function(value,i,obj){
        value.onclick=function(){
            btn2[current1].classList.remove("hot1");
            btn2[i].classList.add("hot1");

            if(current1>i){
                console.log(boxwidth1)
                console.log(i)

                lis3[i].style.left=-boxwidth1+"px";
                animate(lis3[current1],{left:boxwidth1});
                animate(lis3[i],{left:0});
            }
            if(current1<i){
                lis3[i].style.left=boxwidth1+"px";
                animate(lis3[current1],{left:-boxwidth1});
                animate(lis3[i],{left:0});
            }
           next1=current1=i
        }
    })
    // 内容轮播结束
    // 内容轮播封装
    // let banner1=document.querySelectorAll(".nrbox li");
    // let lis3=document.querySelectorAll(".nrlunbo a");
    // let btn2=document.querySelectorAll(".yuano .yuan");
    // let leftjt1=document.querySelector(".nrleft");
    // let rightjt1=document.querySelector(".nrright");
    // console.log(lis3,leftjt1,rightjt1);
    // let boxwidth1=parseInt(getComputedStyle(lis3[0],null).width);
    // console.log(boxwidth1,btn2,banner1);
    // let current1=0;
    // let next1=0;
    // function nrfz(banner1){
       
    // }
    












    // 内容结束
 }
 
	
