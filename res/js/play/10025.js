var _={
	bt:10025,
	name:'福彩3D',
	top:function(){
		var html=[];
		html.push('<a onclick="cp2y.main.init(\'a0\',this)" class="on">基本走势</a>');
		html.push('<a onclick="cp2y.main.init(\'a1\',this)">跨度</a>');
		html.push('<a onclick="cp2y.main.init(\'a2\',this)">和值</a>');
		$('#moreBox').html(html.join(''));
	}
};
_.a0={
	subName:'基本走势',
	canvas:function(){
		if(this.Data0){
			this.set(this.Data0);
		}else{
			$.ajax({
				url:WebAppUrl.APP+"x3d/",
				data:{fetchSize:this.fetchSize},
				beforeSend:function(){Dom.L.show();},
				success:function(data){
					Dom.L.hide();
					cp2y.main.Data0=data;
					cp2y.main.set(data);
				},
				error:function(){Dom.L.hide();}
			});
		}
	},
	set:function(data){
		var D=data.alldatalist,i,len,html=[],boll=[],YL=[],YL2=[],t1=[],j,k,len2,tI,tmp=[],w1=[],w2=[],w3=[];
		Dom.D.addClass('ssqFx').css({'width':913,'height':25*(D.length+2)+120});
		html.push('<div class="l1"><div class="issu"></div><div class="code2"></div><div class="code3D">第一位</div><div class="code3D">第二位</div><div class="code3D">第三位</div></div>');
		i=0;
		for(i;i<10;i++){
			tmp.push('<em><a class="red">'+i+'</a></em>');
		}
		tmp=tmp.join('');
		html.push('<div class="l1"><div class="issu">期号</div><div class="code2">开奖号码</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div></div>');
		i=D.length-1;
		for(i;i>=0;i--){
			boll=[];
			YL=D[i].miss.split('/');
			t1=D[i].drawNumber.split(',');
			html.push('<div class="l1"><div class="issu">'+D[i].issue+'</div><div class="code2"><a>'+t1.join('</a><a>')+'</a></div>');
			j=0;
			w1.push(t1[0]);w2.push(t1[1]);w3.push(t1[2]);
			for(j;j<3;j++){
				html.push('<div class="code3D">');
				YL2=YL[j].split(',');
				k=0;
				for(k;k<10;k++){
					if(t1[j]==k){
						tI++;
						html.push('<em><i>'+k+'</i></em>');
					}else{
						html.push('<em><span>'+YL2[k]+'</span></em>');
					}
				}
				html.push('</div>');
			}
			html.push('</div>');
		}
		html.push('<div class="splitLine" style="height:'+(26*(D.length+1)-6)+'px;left:409px"></div>');
		html.push('<div class="splitLine" style="height:'+(26*(D.length+1)-6)+'px;right:251px"></div>');
		html.push('<canvas id="line3D1" width="250" height="'+25*D.length+'"></canvas>');
		html.push('<canvas id="line3D2" width="250" height="'+25*D.length+'"></canvas>');
		html.push('<canvas id="line3D3" width="250" height="'+25*D.length+'"></canvas>');
		html.push('<div class="l1 mt10 btb"><div class="code2">'+this.fetchSize+'期遗漏</div><div class="code3D">第一位</div><div class="code3D">第二位</div><div class="code3D">第三位</div></div>');
		html.push('<div class="l1"><div class="code2">出现次数</div><div class="code3D"><em><span>'+data.oneappearcount.join('</span></em><em><span>')+'</span></em></div><div class="code3D"><em><span>'+data.twoappearcount.join('</span></em><em><span>')+'</span></em></div><div class="code3D"><em><span>'+data.threeappearcount.join('</span></em><em><span>')+'</span></em></div></div>');
		html.push('<div class="l1"><div class="code2">最大遗漏</div><div class="code3D"><em><span>'+data.onemostomission.join('</span></em><em><span>')+'</span></em></div><div class="code3D"><em><span>'+data.twomostomission.join('</span></em><em><span>')+'</span></em></div><div class="code3D"><em><span>'+data.threemostomission.join('</span></em><em><span>')+'</span></em></div></div>');
		html.push('<div class="l1"><div class="code2">欲出几率</div><div class="code3D"><em><span>'+data.oneappearrate.join('</span></em><em><span>')+'</span></em></div><div class="code3D"><em><span>'+data.twoappearrate.join('</span></em><em><span>')+'</span></em></div><div class="code3D"><em><span>'+data.threeappearrate.join('</span></em><em><span>')+'</span></em></div></div>');
		Dom.D.html(html.join(''));
		var ctx=document.getElementById("line3D1").getContext('2d');
		ctx.height=25*D.length;
		ctx.width=250;
		ctx.lineWidth=0;
		ctx.strokeStyle="#f30f30";
		ctx.lineCap="square";
		i=1;
		len=w1.length;
		ctx.beginPath();
		var m=12.5;
		ctx.moveTo(((w1[0])*25)+m,12.5);
		for(i;i<len;i++){ctx.lineTo(w1[i]*25+m,(i*25)+m);}
		ctx.stroke();
		var ctx=document.getElementById("line3D2").getContext('2d');
		ctx.height=25*D.length;
		ctx.width=250;
		ctx.lineWidth=0;
		ctx.strokeStyle="#f30f30";
		ctx.lineCap="square";
		i=1;
		len=w2.length;
		ctx.beginPath();
		var m=12.5;
		ctx.moveTo(((w2[0])*25)+m,12.5);
		for(i;i<len;i++){ctx.lineTo(w2[i]*25+m,(i*25)+m);}
		ctx.stroke();
		var ctx=document.getElementById("line3D3").getContext('2d');
		ctx.height=25*D.length;
		ctx.width=250;
		ctx.lineWidth=0;
		ctx.strokeStyle="#f30f30";
		ctx.lineCap="square";
		i=1;
		len=w3.length;
		ctx.beginPath();
		var m=12.5;
		ctx.moveTo(((w3[0])*25)+m,12.5);
		for(i;i<len;i++){ctx.lineTo(w3[i]*25+m,(i*25)+m);}
		ctx.stroke();
	}
};

_.a1={
	subName:'跨度',
	canvas:function(){
		if(this.Data1){
			this.set(this.Data1);
		}else{
			$.ajax({
				url:WebAppUrl.APP+"x3d/kuadu",
				data:{fetchSize:this.fetchSize},
				beforeSend:function(){Dom.L.show();},
				success:function(data){
					Dom.L.hide();
					cp2y.main.Data1=data;
					cp2y.main.set(data);
				},
				error:function(){Dom.L.hide();}
			});
		}
	},
	set:function(data){
		var D=data.datalist,i,j,len,html=[],w1=[],YL=[],r1=[];
		i=0;
		for(i;i<10;i++){w1.push('<em><i>'+i+'</i></em>');}
		Dom.D.css({'width':442,'height':25*(D.length+2)+140});
		html.push('<div class="l1"><div class="issu"></div><div class="code2"></div><div class="codeKD">跨度</div><div class="codeKD2"></div></div>');
		html.push('<div class="l1"><div class="issu">期数</div><div class="code2">开奖号码</div><div class="codeKD">'+w1.join('')+'</div><div class="codeKD2">跨度</div></div>');
		i=D.length-1;
		for(i;i>=0;i--){
			html.push('<div class="l1"><div class="issu">'+D[i].issueOrder+'</div><div class="code2"><a>'+D[i].valueNumber.split(',').join('</a><a>')+'</a></div><div class="codeKD">');
			j=0;
			YL=D[i].valueMiss.split(',');
			r1.push(D[i].value);
			for(j;j<10;j++){
				if(D[i].value==j){
					html.push('<em><i>'+j+'</i></em>');
				}else{
					html.push('<em><span>'+YL[j]+'</span></em>');
				}
			}
			html.push('</div><div class="codeKD2">'+D[i].value+'</div></div>');
		}
		html.push('<canvas id="lineDw1" style="left:160px" width="'+w1.length*25+'" height="'+25*D.length+'"></canvas>');
		html.push('<div class="l1 mt10 btb"><div class="issu"></div><div class="code2"></div><div class="codeKD">跨度</div></div>');
		html.push('<div class="l1"><div class="code2">'+this.fetchSize+'期遗漏</div><div class="codeKD">'+w1.join('')+'</div><div class="codeKD2"></div></div>');
		html.push('<div class="l1"><div class="code2">出现次数</div><div class="codeKD"><em><span>'+data.appearcount.join('</span></em><em><span>')+'</span></em></div><div class="codeKD2"></div></div>');
		html.push('<div class="l1"><div class="code2">最大遗漏</div><div class="codeKD"><em><span>'+data.mostomission.join('</span></em><em><span>')+'</span></em></div><div class="codeKD2"></div></div>');
		html.push('<div class="l1"><div class="code2">欲出几率</div><div class="codeKD"><em><span>'+data.appearrate.join('</span></em><em><span>')+'</span></em></div><div class="codeKD2"></div></div>');
		Dom.D.html(html.join(''));
		var ctx=document.getElementById("lineDw1").getContext('2d'),m=12.5;
		ctx.height=25*D.length;
		ctx.width=w1.length*25;
		ctx.lineWidth=0;
		ctx.strokeStyle="#f30f30";
		ctx.lineCap="square";
		ctx.beginPath();
		ctx.moveTo((r1[0]*25)+m,m);
		i=1;
		len=D.length;
		for(i;i<len;i++){ctx.lineTo(r1[i]*25+m,(i*25)+m);}
		ctx.stroke();
	}
};

_.a2={
	subName:'和值',
	canvas:function(){
		if(this.Data2){
			this.set(this.Data2);
		}else{
			$.ajax({
				url:WebAppUrl.APP+"x3d/sum",
				data:{fetchSize:this.fetchSize},
				beforeSend:function(){Dom.L.show();},
				success:function(data){
					Dom.L.hide();
					cp2y.main.Data2=data;
					cp2y.main.set(data);
				},
				error:function(){Dom.L.hide();}
			});
		}
	},
	set:function(data){
		var D=data.datalist,i,j,len,html=[],b=[],blue,b2=[],sum=[];
		html.push('<div class="l1"><div class="issu"></div><div class="code2"></div><div class="hz3">和值</div><div class="codeKD2"></div></div>');
		i=0;
		for(i;i<28;i++){
			b.push('<em>'+i+'</em>');
		}
		html.push('<div class="l1"><div class="issu">期号</div><div class="code2">开奖号码</div><div class="hz3">'+b.join('')+'</div><div class="codeKD2">和值</div></div>');
		i=D.length-1;
		for(i;i>=0;i--){
			html.push('<div class="l1"><div class="issu">'+D[i].issueOrder+'</div><div class="code2"><a>'+D[i].valueNumber.split(',').join('</a><a>')+'</a></div><div class="hz3">');
			j=0;
			b2=D[i].valueMiss.split(',');
			for(j;j<28;j++){
				if(D[i].value==j){
					sum.push(j);
					html.push('<em><i>'+j+'</i></em>');
				}else{
					html.push('<em><span>'+b2[j]+'</span></em>');
				}
			}			
			html.push('</div><div class="codeKD2">'+D[i].value+'</div></div>');
		}
		Dom.D.addClass('ssqFx').css({'width':1312,'height':25*(D.length+2)+140});
		html.push('<canvas id="HeZhi3D" width="1120" height="'+25*D.length+'"></canvas>');
		html.push('<div class="l1 mt10 btb"><div class="issu"></div><div class="code2"></div><div class="hz3">和值</div><div class="codeKD2"></div></div>');
		html.push('<div class="l1"><div class="code2">'+this.fetchSize+'期遗漏</div><div class="hz3">'+b.join('')+'</div><div class="codeKD2"></div></div>');
		html.push('<div class="l1"><div class="code2">出现次数</div><div class="hz3"><em><span>'+data.appearcount.join('</span></em><em><span>')+'</span></em></div><div class="codeKD2"></div></div>');
		html.push('<div class="l1"><div class="code2">最大遗漏</div><div class="hz3"><em><span>'+data.mostomission.join('</span></em><em><span>')+'</span></em></div><div class="codeKD2"></div></div>');
		html.push('<div class="l1"><div class="code2">欲出几率</div><div class="hz3"><em><span>'+data.appearrate.join('</span></em><em><span>')+'</span></em></div><div class="codeKD2"></div></div>');
		Dom.D.html(html.join(''));
		var ctx=document.getElementById("HeZhi3D").getContext('2d');
		ctx.height=25*D.length;
		ctx.width=1120;
		ctx.lineWidth=0;
		ctx.strokeStyle="#f30f30";
		ctx.lineCap="square";
		i=1;
		len=sum.length;
		ctx.beginPath();
		var m=19.5;
		ctx.moveTo(sum[0]*40+m,12.5);
		for(i;i<len;i++){ctx.lineTo(sum[i]*40+m,(i*25)+12.5);}
		ctx.stroke();
	}
};
cp2y.main.init('a0');