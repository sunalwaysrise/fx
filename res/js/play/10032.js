var _={
  bt:10032,
  name:'双色球',
  top:function(){
      var html=[];
      html.push('<a onclick="cp2y.main.init(\'a0\',this)" class="on">基本走势</a>');
      html.push('<a onclick="cp2y.main.init(\'a1\',this)">定位</a>');
      html.push('<a onclick="cp2y.main.init(\'a2\',this)">和值</a>');
      $('#moreBox').html(html.join(''));
  }
};
_.a0={
  subName:'基本走势',
  canvas:function(){
    if(this.Data){
        this.set(this.Data);
    }else{
      $.ajax({
        url:WebAppUrl.APP+"xssq/",
        data:{fetchSize:this.fetchSize},
        beforeSend:function(){Dom.L.show();},
        success:function(data){
          Dom.L.hide();
          cp2y.main.Data=data;
          cp2y.main.set(data);
        },
        error:function(){Dom.L.hide();}
      });
    }
  },
  set:function(data){
    var D=data.datalist,i,len,html=[],h=[],red0=[],red=[],blue0=[],blue=[],tmpCode,t1,t2,j,len2,tI,lq=[],redYL=[],blueYL=[];
    Dom.S.addClass('ssqFx').css({'width':1405,'height':25*(D.length+1)+120});
    i=1;for(i;i<34;i++){red0.push('<em><i>'+i.addZero()+'</i></em>');}
    i=1;for(i;i<17;i++){blue0.push('<em><i>'+i.addZero()+'</i></em>');}
    html.push('<div class="l1"><div class="red">'+red0.join('')+'</div><div class="blue">'+blue0.join('')+'</div><div class="code">开奖号码</div></div>');
    h.push('<div class="issu">期号</div>');
    i=D.length-1;
    for(i;i>=0;i--){
      h.push('<div class="issu">'+D[i].issue.substr(4,3)+'</div>');
      tmpCode=D[i].drawNumber.split('#');
      t1=tmpCode[0].split(',');
      t2=tmpCode[1];
      redYL=D[i].missCombine.split('#')[0].split(',');
      blueYL=D[i].missCombine.split('#')[1].split(',');
      tmpCode='<a class="red">'+t1.join('</a><a class="red">')+'<a class="blue">'+t2+'</a>';
      html.push('<div class="l1">');
      j=1;red=[];blue=[];tI=0;
      for(j;j<34;j++){
        if(t1[tI]==j.addZero()){
          tI++;
          red.push('<em><i>'+j.addZero()+'</i></em>');
        }else{
          red.push('<em><span>'+redYL[j-1]+'</span></em>');
        }
      }
      j=1;
      for(j;j<17;j++){
        if(t2==j.addZero()){
          blue.push('<em><i>'+j.addZero()+'</i></em>');
        }else{
          blue.push('<em><span>'+blueYL[j-1]+'</span></em>');
        }
      }
      html.push('<div class="red">'+red.join('')+'</div><div class="blue">'+blue.join('')+'</div><div class="code">'+tmpCode+'</div></div>');
      lq.push(t2);
    }
    var red1=[],blue1=[];
    i=1;
    for(i;i<34;i++){
      red1.push('<em class="unSelc" onclick="cp2y.main.buy(this);"><i>'+i.addZero()+'</i></em>');
    }
    i=1;
    for(i;i<17;i++){
      blue1.push('<em class="unSelc2" onclick="cp2y.main.buy(this);"><i>'+i.addZero()+'</i></em>');
    }
    
    h.push('<div class="issu">选号</div><div class="issu mt10 btb"></div><div class="issu">出现</div><div class="issu">遗漏</div><div class="issu">欲出</div>');
    
    html.push('<div class="l1"><div id="red" class="red">'+red1.join('')+'</div><div id="blue" class="blue">'+blue1.join('')+'</div><div class="code" onclick="cp2y.main.submit();">去购买</div></div>');
    html.push('<div class="splitLine" style="height:'+(27*D.length-10)+'px;left:274px"></div>');
    html.push('<div class="splitLine" style="height:'+(27*D.length-10)+'px;left:549px"></div>');
    html.push('<div class="splitLine" style="height:'+(27*D.length-10)+'px;left:824px"></div>');
    html.push('<canvas id="lines1" width="400" height="'+25*D.length+'"></canvas>');
    html.push('<div class="l1 mt10 btb"><div class="red">'+red0.join('')+'</div><div class="blue">'+blue0.join('')+'</div><div class="code">'+this.fetchSize+'期遗漏</div></div>');
    html.push('<div class="l1"><div class="red"><em><span>'+data.redappearcount.join('</span></em><em><span>')+'</span></em></div><div class="blue"><em><span>'+data.blueappearcount.join('</span></em><em><span>')+'</span></em></div><div class="code">出现次数</div></div>');
    html.push('<div class="l1"><div class="red"><em><span>'+data.redmostomission.join('</span></em><em><span>')+'</span></em></div><div class="blue"><em><span>'+data.bluemostomission.join('</span></em><em><span>')+'</span></em></div><div class="code">最大遗漏</div></div>');		
    html.push('<div class="l1"><div class="red"><em><span>'+data.redappearrate.join('</span></em><em><span>')+'</span></em></div><div class="blue"><em><span>'+data.blueappearrate.join('</span></em><em><span>')+'</span></em></div><div class="code">欲出几率</div></div>');
    Dom.S.html(html.join(''));Dom.I.html(h.join(''));
    myScroll.refresh();myScroll2.refresh();
    var ctx=document.getElementById("lines1").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=400;/* 25x16 */
    ctx.lineWidth=0;
    ctx.strokeStyle="#2889EA";
    ctx.lineCap="square";
    i=1;
    len=lq.length;
    ctx.beginPath();
    var m=12.5;
    ctx.moveTo(((lq[0]-1)*25)+m,12.5);
    for(i;i<len;i++){ctx.lineTo(lq[i]*25-m,(i*25)+m);}
    ctx.stroke();
  },
  buy:function(o){
    $(o).toggleClass('cur');
  },
  submit:function(){
      var red=$("#red em"),blue=$("#blue em"),i=0,r=[],b=[];
      for(i;i<33;i++){
          if(red.eq(i).hasClass('cur')){
              r.push(i+1);
          }
      }
      i=0;
      for(i;i<16;i++){
          if(blue.eq(i).hasClass('cur')){
              b.push(i+1);
          }
      }
      if( r.length==0 && b.length==0 ){
          return false;
      }else{
          window.location.href="http://m.cp2y.com/lottery/10032?type=a0&r="+r.join(',')+"&b="+b.join(',');
      }
  }
};

_.a1={
  subName:'定位',
  canvas:_.a0.canvas,
  set:function(data){
    var D=data.datalist,i=0,len,html=[],h=[],r1=[],r2=[],r3=[],r4=[],r5=[],r6=[],b1=[],red=[],blue=[];
    i=D.length-1;
    for(i;i>=0;i--){
        red=D[i].drawNumber.split("#")[0].split(',');
        r1.push(red[0]);r2.push(red[1]);r3.push(red[2]);
        r4.push(red[3]);r5.push(red[4]);r6.push(red[5]);
    }
    var w1=[],w2=[],w3=[],w4=[],w5=[],w6=[];
    i=r1.min();len=r1.max();
    for(i;i<=len;i++){w1.push(i);}
    i=r2.min();len=r2.max();
    for(i;i<=len;i++){w2.push(i);}
    i=r3.min();len=r3.max();
    for(i;i<=len;i++){w3.push(i);}
    i=r4.min();len=r4.max();
    for(i;i<=len;i++){w4.push(i);}
    i=r5.min();len=r5.max();
    for(i;i<=len;i++){w5.push(i);}
    i=r6.min();len=r6.max();
    for(i;i<=len;i++){w6.push(i);}
    var w=(w1.length+w2.length+w3.length+w4.length+w5.length+w6.length)*25+6;
    Dom.S.css({'width':40+w,'height':25*(D.length+2)});
    html.push('<div class="l1"><div style="width:'+(w1.length*25)+'px;">第一位</div>');
    html.push('<div style="width:'+(w2.length*25)+'px;">第二位</div>');
    html.push('<div style="width:'+(w3.length*25)+'px;">第三位</div>');
    html.push('<div style="width:'+(w4.length*25)+'px;">第四位</div>');
    html.push('<div style="width:'+(w5.length*25)+'px;">第五位</div>');
    html.push('<div style="width:'+(w6.length*25)+'px;">第六位</div></div>');
    html.push('<div class="l1"><div><em>'+w1.join('</em><em>')+'</em></div>');
    html.push('<div><em>'+w2.join('</em><em>')+'</em></div>');
    html.push('<div><em>'+w3.join('</em><em>')+'</em></div>');
    html.push('<div><em>'+w4.join('</em><em>')+'</em></div>');
    html.push('<div><em>'+w5.join('</em><em>')+'</em></div>');
    html.push('<div><em>'+w6.join('</em><em>')+'</em></div></div>');
    h.push('<div class="issu"></div><div class="issu">期号</div>');
    i=0;len=D.length;
    var j,len2,t=[];
    for(i;i<len;i++){
      t=[];j=r1.min();len2=r1.max();
      h.push('<div class="issu">'+D[len-1-i].issue.substr(4,3)+'</div>');
      t.push('<div class="l1"><div class="w1">');
      for(j;j<=len2;j++){
        if(j==r1[i]){
          t.push('<em><i>'+j.addZero()+'</i></em>');
        }else{
          t.push('<em></em>');
        }
      }
      t.push('</div>');
      j=r2.min();len2=r2.max();
      t.push('<div class="w2">');
      for(j;j<=len2;j++){
        if(j==r2[i]){
          t.push('<em><i>'+j.addZero()+'</i></em>');
        }else{
          t.push('<em></em>');
        }
      }
      t.push('</div>');
      j=r3.min();len2=r3.max();
      t.push('<div class="w3">');
      for(j;j<=len2;j++){
        if(j==r3[i]){
          t.push('<em><i>'+j.addZero()+'</i></em>');
        }else{
          t.push('<em></em>');
        }
      }
      t.push('</div>');
      j=r4.min();len2=r4.max();
      t.push('<div class="w4">');
      for(j;j<=len2;j++){
        if(j==r4[i]){
          t.push('<em><i>'+j.addZero()+'</i></em>');
        }else{
          t.push('<em></em>');
        }
      }
      t.push('</div>');			
      j=r5.min();len2=r5.max();
      t.push('<div class="w5">');
      for(j;j<=len2;j++){
        if(j==r5[i]){
          t.push('<em><i>'+j.addZero()+'</i></em>');
        }else{
          t.push('<em></em>');
        }
      }
      t.push('</div>');
      j=r6.min();len2=r6.max();
      t.push('<div class="w6">');
      for(j;j<=len2;j++){
        if(j==r6[i]){
          t.push('<em><i>'+j.addZero()+'</i></em>');
        }else{
          t.push('<em></em>');
        }
      }
      t.push('</div>');
      t.push('</div>');
      html.push(t.join(''));
    }
    html.push('<canvas id="lineDw1" style="left:0" width="'+w1.length*25+'" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="lineDw2" style="left:'+(w1.length)*25+'px"  width="'+w2.length*25+'" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="lineDw3" style="left:'+(1+(w1.length+w2.length)*25)+'px"  width="'+w3.length*25+'" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="lineDw4" style="left:'+(2+(w1.length+w2.length+w3.length)*25)+'px"  width="'+w4.length*25+'" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="lineDw5" style="left:'+(3+(w1.length+w2.length+w3.length+w4.length)*25)+'px"  width="'+w5.length*25+'" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="lineDw6" style="left:'+(4+(w1.length+w2.length+w3.length+w4.length+w5.length)*25)+'px"  width="'+w6.length*25+'" height="'+25*D.length+'"></canvas>');
    Dom.S.html(html.join(''));Dom.I.html(h.join(''));
    myScroll.refresh();myScroll2.refresh();
    var ctx=document.getElementById("lineDw1").getContext('2d'),m=12.5,mm;
    ctx.height=25*D.length;
    ctx.width=w1.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f30f30";
    ctx.lineCap="square";
    ctx.beginPath();
    mm=r1.min();
    ctx.moveTo(((r1[0]-mm)*25)+m,m);
    i=1;
    len=D.length;
    for(i;i<len;i++){ctx.lineTo((r1[i]-mm+1)*25-m,(i*25)+m);}
    ctx.stroke();

    ctx=document.getElementById("lineDw2").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w2.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f30f30";
    ctx.lineCap="square";
    ctx.beginPath();
    mm=r2.min();
    ctx.moveTo(((r2[0]-mm)*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo((r2[i]-mm+1)*25-m,(i*25)+m);}
    ctx.stroke();

    ctx=document.getElementById("lineDw3").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w3.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f30f30";
    ctx.lineCap="square";
    ctx.beginPath();
    mm=r3.min();
    ctx.moveTo(((r3[0]-mm)*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo((r3[i]-mm+1)*25-m,(i*25)+m);}
    ctx.stroke();

    ctx=document.getElementById("lineDw4").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w4.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f30f30";
    ctx.lineCap="square";
    ctx.beginPath();
    mm=r4.min();
    ctx.moveTo(((r4[0]-mm)*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo((r4[i]-mm+1)*25-m,(i*25)+m);}
    ctx.stroke();

    ctx=document.getElementById("lineDw5").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w5.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f30f30";
    ctx.lineCap="square";
    ctx.beginPath();
    mm=r5.min();
    ctx.moveTo(((r5[0]-mm)*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo((r5[i]-mm+1)*25-m,(i*25)+m);}
    ctx.stroke();

    ctx=document.getElementById("lineDw6").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w6.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f30f30";
    ctx.lineCap="square";
    ctx.beginPath();
    mm=r6.min();
    ctx.moveTo(((r6[0]-mm)*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo((r6[i]-mm+1)*25-m,(i*25)+m);}
    ctx.stroke();
  }
};

_.a2={
  subName:'和值',
  canvas:_.a0.canvas,
  set:function(data){
    var D=data.datalist,i,j,len,html=[],h=[],red=[],blue,sum=[],tSum;
    html.push('<div class="l1"><div class="hz">和值</div><div class="hz2"></div><div class="code"></div></div>');
    html.push('<div class="l1"><div class="hz"><a>21</a><a>10%</a><a>20%</a><a>30%</a><a>40%</a><a>50%</a><a>60%</a><a>70%</a><a>80%</a><a>90%</a><a>183</a></div><div class="hz2">和值</div><div class="code">开奖号码</div></div>');
    h.push('<div class="issu"></div><div class="issu">期号</div>')
    i=D.length-1;
    for(i;i>=0;i--){
      red=D[i].drawNumber.split("#")[0].split(',');
      blue=D[i].drawNumber.split("#")[1];
      j=0;tSum=0;
      for(j;j<6;j++){
        tSum+=Number(red[j]);
      }
      sum.push(tSum);
      h.push('<div class="issu">'+D[i].issue.substr(4,3)+'</div>');
      html.push('<div class="l1"><div class="hz"><b style="left:'+((tSum-15)/183)*100+'%">'+tSum+'</b><a></a><a></a><a></a><a></a><a></a><a></a><a></a><a></a><a></a><a></a><a></a></div><div class="hz2">'+tSum+'</div><div class="code"><a class="red">'+red.join('</a><a class="red">')+'<a class="blue">'+blue+'</a></div></div>');
    }
    Dom.S.addClass('ssqFx').css({'width':661,'height':25*(D.length+2)});
    html.push('<canvas id="HeZhi" width="440" height="'+25*D.length+'"></canvas>');
    Dom.S.html(html.join(''));Dom.I.html(h.join(''));
    myScroll.refresh();myScroll2.refresh();
    
    var ctx=document.getElementById("HeZhi").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=440;
    ctx.lineWidth=0;
    ctx.strokeStyle="rgb(188,109,109)";
    ctx.lineCap="square";
    i=1;
    len=sum.length;
    ctx.beginPath();
    var m=14.5;
    ctx.moveTo(((sum[0]-15)/183*440)+m,12.5);
    for(i;i<len;i++){ctx.lineTo(((sum[i]-15)/183*440)+m,(i*25)+m);}
    ctx.stroke();
  }
};

