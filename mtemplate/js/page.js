function pagetype(){
			this.height=function(){
				var winh=window.innerHeight;
				return winh;
			};
			this.width=function(){
				var winw=window.innerWidth;
				return winw;
			};
			var pbody=document.getElementsByTagName('body')[0];
			pbody.style.margin=0;
			this.typearr=function(typearr){			
				
				//定义头部，内容区域，底部高度的变量
				var toph,conth,footh;
				
				//判断参数
				if(typearr.titleDom==undefined){
					typearr.titleDom={domname:'',domheight:''};
				}
				if(typearr.footDom==undefined){
					typearr.footDom={domname:'',domheight:''};
				}
				if(typearr.contDom==undefined){
					typearr.contDom={domname:'',domheight:''};
				}
				
				//判断并设置头部的高度
				if(typearr.titleDom.domname){
					var topdom = document.getElementById(typearr.titleDom.domname);
					if(typearr.titleDom.domheight){
						topdom.style.height=typearr.titleDom.domheight+'px';
						toph=typearr.titleDom.domheight;
					}else{
						topdom.style.height=40+'px';
						toph=40;
					}
				}else{
					toph=0;
				}
				
				//判断并设置底部的高度
				if(typearr.footDom.domname){
					var footdom = document.getElementById(typearr.footDom.domname);
					if(typearr.footDom.domheight){
						footdom.style.height=typearr.footDom.domheight+'px';
						footh=typearr.footDom.domheight;
					}else{
						footdom.style.height=40+'px';
						footh=40;
					}
				}else{
					footh=0;
				}
				
				//判断并设置内容区域的高度
				if(typearr.contDom.domname){
					var contdom = document.getElementById(typearr.contDom.domname);
					if(typearr.contDom.domheight){
						contdom.style.height=typearr.contDom.domheight+'px';
						conth=typearr.contDom.domheight;
					}else{
						contdom.style.height=(this.height()-toph-footh)+'px';
						conth=40;
					}
				}
				
				return true;
				if(typearr.el!=undefined){
					console.log('没有DOM元素')
				}
			}
			
		}
		var htpage = new pagetype();