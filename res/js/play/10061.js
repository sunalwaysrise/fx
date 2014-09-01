var _={
  bt:10061,
  name:'江西时时彩',
  top:function(){
    var html=[];
    html.push('<a onclick="cp2y.main.init(\'a0\',this)" class="on">基本走势</a>');
    html.push('<a onclick="cp2y.main.init(\'a3\',this)">四星</a>');
    html.push('<a onclick="cp2y.main.init(\'a1\',this)">三星</a>');
    html.push('<a onclick="cp2y.main.init(\'a2\',this)">二星</a>');
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
        url:WebAppUrl.APP+"jxssc/",
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
    var D=data.datalist,i,html=[],h=[],YL=[],YL2=[],tmp=[],t1=[],tI,j,sum,k,w1=[],w2=[],w3=[],w4=[],w5=[];
    html.push('<div class="l1 title"><div class="code3D">第一位</div><div class="code3D">第二位</div><div class="code3D">第三位</div><div class="code3D">第四位</div><div class="code3D">第五位</div><div class="code3"></div><div class="codeKD2"></div></div>');
    i=0;
    for(i;i<10;i++){
      tmp.push('<em><i>'+i+'</i></em>');
    }
    tmp=tmp.join('');
    html.push('<div class="l1 title"><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3">开奖号码</div><div class="codeKD2">和值</div></div>');
    h.push('<div class="issu"></div><div class="issu">期号</div>');
    i=D.length-1;
    for(i;i>=0;i--){
      YL=D[i].miss.split('/');
      t1=D[i].drawNumber.split(',');
      j=0;
      tI=0;
      sum=0;
      h.push('<div class="issu">'+D[i].issue.substr(6,3)+'</div>');
      html.push('<div class="l1 ls">');
      w1.push(t1[0]);
      w2.push(t1[1]);
      w3.push(t1[2]);
      w4.push(t1[3]);
      w5.push(t1[4]);
      for(j;j<5;j++){
        html.push('<div class="code3D cl'+(j+1)+'">');
        k=0;YL2=YL[j].split(',');
        for(k;k<10;k++){
          if(Number(t1[j])==k){
            sum+=k;
            html.push('<em><i>'+k+'</i></em>');
          }else{
            html.push('<em><span>'+YL2[k]+'</span></em>');
          }
        }
        html.push('</div>');
      }
      html.push('<div class="code3 cl5"><a>'+t1.join('</a><a>')+'</a></div><div class="codeKD2 cl6">'+sum+'</div></div>');
    }
    html.push('<div class="l1 title mt10 btb"><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div></div>');
    h.push('<div class="code2 mt10 btb title">'+this.fetchSize+'期</div><div class="code2">出现</div><div class="code2">遗漏</div><div class="code2">几率</div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.appearcount1.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.appearcount2.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.appearcount3.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl4"><em><span>'+data.appearcount4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl5"><em><span>'+data.appearcount5.join('</span></em><em><span>')+'</span></em></div></div>');  
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.mostomission1.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.mostomission2.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.mostomission3.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl4"><em><span>'+data.mostomission4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl5"><em><span>'+data.mostomission5.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.appearrate1.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.appearrate2.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.appearrate3.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl4"><em><span>'+data.appearrate4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl5"><em><span>'+data.appearrate5.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<canvas id="line3D1" style="left:0" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D2" style="left:250px" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D3" style="left:500px" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D4" style="left:750px" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D5" style="left:1000px" width="250" height="'+25*D.length+'"></canvas>');
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<10;i++){
        boll.push('<em class="unSelc" onclick="cp2y.main.buy(this);"><i>'+i+'</i></em>');
      }
      h.push('<div class="issu xh">选号</div>');
      html.push('<div id="choose" class="xh"><div id="w1">'+boll.join('')+'</div><div id="w2" class="code3D">'+boll.join('')+'</div><div id="w3">'+boll.join('')+'</div><div id="w4" class="code3D">'+boll.join('')+'</div><div id="w5">'+boll.join('')+'</div></div>');
    }
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+10))+'px;left:250px"></div>');
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+10))+'px;left:501px"></div>');
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+10))+'px;left:752px"></div>');
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+10))+'px;left:1003px"></div>');
    Dom.I.html(h.join(''));
    Dom.S.css({'width':1470,'height':25*(D.length+2)+145}).html(html.join(''));
    this.setScroll();
    var ctx=document.getElementById("line3D1").getContext('2d'),m=12.5,mm;
    ctx.height=25*D.length;
    ctx.width=w1.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f35844";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w1[0]*25)+m,m);
    i=1;
    len=D.length;
    for(i;i<len;i++){ctx.lineTo((w1[i])*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D2").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w2.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f3973d";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w2[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w2[i]*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D3").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w3.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#eb67bb";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w3[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w3[i]*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D4").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w4.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#42c787";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w4[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w4[i]*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D5").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w5.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#42b1ff";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w5[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w5[i]*25+m,(i*25)+m);}
    ctx.stroke();
  },
  buy:function(o){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),ww1=[],w2=$("#w2 em"),ww2=[],w3=$("#w3 em"),ww3=[],w4=$("#w4 em"),ww4=[],w5=$("#w5 em"),ww5=[],i=0;
    for(i;i<10;i++){
      if(w1.eq(i).hasClass('cur')){
        ww1.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w2.eq(i).hasClass('cur')){
        ww2.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w3.eq(i).hasClass('cur')){
        ww3.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w4.eq(i).hasClass('cur')){
        ww4.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w5.eq(i).hasClass('cur')){
        ww5.push(i);
      }
    }
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a2&w1="+ww1.join(',')+"&w2="+ww2.join(',')+"&w3="+ww3.join(',')+"&w4="+ww4.join(',')+"&w5="+ww5.join(',');
  }
};

_.a3={
  subName:'四星',
  canvas:_.a0.canvas,
  set:function(data){
    var D=data.datalist,i,html=[],h=[],YL=[],YL2=[],tmp=[],t1=[],tI,j,sum,k,w1=[],w2=[],w3=[],w4=[],w5=[];
    html.push('<div class="l1 title"><div class="code3D">第一位</div><div class="code3D">第二位</div><div class="code3D">第三位</div><div class="code3D">第四位</div><div class="code3"></div><div class="codeKD2"></div></div>');
    i=0;
    for(i;i<10;i++){
      tmp.push('<em><a class="red">'+i+'</a></em>');
    }
    tmp=tmp.join('');
    html.push('<div class="l1 title"><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3">开奖号码</div><div class="codeKD2">和值</div></div>');
    h.push('<div class="issu"></div><div class="issu">期号</div>');
    i=D.length-1;
    for(i;i>=0;i--){
      YL=D[i].miss.split('/');
      t1=D[i].drawNumber.split(',');
      j=1;
      tI=0;
      sum=0;
      h.push('<div class="issu issu2">'+D[i].issue.substr(6,3)+'</div>');
      html.push('<div class="l1 ls">');
      w1.push(t1[0]);
      w2.push(t1[1]);
      w3.push(t1[2]);
      w4.push(t1[3]);
      w5.push(t1[4]);
      for(j;j<5;j++){
        html.push('<div class="code3D cl'+j+'">');
        k=0;YL2=YL[j].split(',');
        for(k;k<10;k++){
          if(Number(t1[j])==k){
            sum+=k;
            html.push('<em><i>'+k+'</i></em>');
          }else{
            html.push('<em><span>'+YL2[k]+'</span></em>');
          }
        }
        html.push('</div>');
      }
      html.push('<div class="code3 cl5"><a>'+t1[1]+'</a><a>'+t1[2]+'</a><a>'+t1[3]+'</a><a>'+t1[4]+'</a></div><div class="codeKD2 cl6">'+sum+'</div></div>');
    }
    html.push('<div class="l1 title mt10 btb"><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div></div>');
    h.push('<div class="code2 mt10 btb">'+this.fetchSize+'期</div><div class="code2">出现</div><div class="code2">遗漏</div><div class="code2">几率</div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.appearcount2.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.appearcount3.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.appearcount4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl4"><em><span>'+data.appearcount5.join('</span></em><em><span>')+'</span></em></div></div>');    
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.mostomission2.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.mostomission3.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.mostomission4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl4"><em><span>'+data.mostomission5.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.appearrate2.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.appearrate3.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.appearrate4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl4"><em><span>'+data.appearrate5.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<canvas id="line3D1" style="left:0" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D2" style="left:250px" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D3" style="left:500px" width="250" height="'+25*D.length+'"></canvas>');   
    html.push('<canvas id="line3D4" style="left:750px" width="250" height="'+25*D.length+'"></canvas>'); 
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<10;i++){
        boll.push('<em class="unSelc" onclick="cp2y.main.buy(this);"><i>'+i+'</i></em>');
      }
      h.push('<div class="issu xh">选号</div>');
      html.push('<div id="choose" class="xh"><div id="w1">'+boll.join('')+'</div><div id="w2">'+boll.join('')+'</div><div id="w3">'+boll.join('')+'</div><div id="w4">'+boll.join('')+'</div></div>');
    }
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+7))+'px;left:250px"></div>');
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+7))+'px;left:501px"></div>');
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+7))+'px;left:752px"></div>');
    Dom.I.html(h.join(''));
    Dom.S.html(html.join('')).css({'width':1220,'height':25*(D.length+2)+145});
    this.setScroll();
    var ctx=document.getElementById("line3D1").getContext('2d'),m=12.5,mm;
    ctx.height=25*D.length;
    ctx.width=w1.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f35844";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w2[0]*25)+m,m);
    i=1;
    len=D.length;
    for(i;i<len;i++){ctx.lineTo((w2[i])*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D2").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w2.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f3973d";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w3[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w3[i]*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D3").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w3.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#eb67bb";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w4[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w4[i]*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D4").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w5.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#42c787";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w5[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w5[i]*25+m,(i*25)+m);}
    ctx.stroke();
  },
  buy:function(o){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),ww1=[],w2=$("#w2 em"),ww2=[],w3=$("#w3 em"),ww3=[],w4=$("#w4 em"),ww4=[],i=0;
    for(i;i<10;i++){
      if(w1.eq(i).hasClass('cur')){
        ww1.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w2.eq(i).hasClass('cur')){
        ww2.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w3.eq(i).hasClass('cur')){
        ww3.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w4.eq(i).hasClass('cur')){
        ww4.push(i);
      }
    }
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a1&w1="+ww1.join(',')+"&w2="+ww2.join(',')+"&w3="+ww3.join(',')+"&w4="+ww4.join(',');
  }
};

_.a1={
  subName:'三星',
  canvas:_.a0.canvas,
  set:function(data){
    var D=data.datalist,i,html=[],h=[],YL=[],YL2=[],tmp=[],t1=[],tI,j,sum,k,w1=[],w2=[],w3=[],w4=[],w5=[];
    html.push('<div class="l1 title"><div class="code3D">第一位</div><div class="code3D">第二位</div><div class="code3D">第三位</div><div class="code2"></div><div class="codeKD2"></div></div>');
    i=0;
    for(i;i<10;i++){
      tmp.push('<em><a class="red">'+i+'</a></em>');
    }
    tmp=tmp.join('');
    html.push('<div class="l1 title"><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code2">开奖号码</div><div class="codeKD2">和值</div></div>');
    h.push('<div class="issu"></div><div class="issu">期号</div>');
    i=D.length-1;
    for(i;i>=0;i--){
      YL=D[i].miss.split('/');
      t1=D[i].drawNumber.split(',');
      j=2;
      tI=0;
      sum=0;
      h.push('<div class="issu issu2">'+D[i].issue.substr(6,3)+'</div>');
      html.push('<div class="l1 ls">');
      w1.push(t1[0]);
      w2.push(t1[1]);
      w3.push(t1[2]);
      w4.push(t1[3]);
      w5.push(t1[4]);
      for(j;j<5;j++){
        html.push('<div class="code3D cl'+(j-1)+'">');
        k=0;YL2=YL[j].split(',');
        for(k;k<10;k++){
          if(Number(t1[j])==k){
            sum+=k;
            html.push('<em><i>'+k+'</i></em>');
          }else{
            html.push('<em><span>'+YL2[k]+'</span></em>');
          }
        }
        html.push('</div>');
      }
      html.push('<div class="code2 cl5"><a>'+t1[2]+'</a><a>'+t1[3]+'</a><a>'+t1[4]+'</a></div><div class="codeKD2 cl6">'+sum+'</div></div>');
    }
    html.push('<div class="l1 title mt10 btb"><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div></div>');
    h.push('<div class="code2 mt10 btb">'+this.fetchSize+'期</div><div class="code2">出现</div><div class="code2">遗漏</div><div class="code2">几率</div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.appearcount3.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.appearcount4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.appearcount5.join('</span></em><em><span>')+'</span></em></div></div>');    
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.mostomission3.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.mostomission4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.mostomission5.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.appearrate3.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.appearrate4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.appearrate5.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<canvas id="line3D1" style="left:0" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D2" style="left:250px" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D3" style="left:500px" width="250" height="'+25*D.length+'"></canvas>'); 
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<10;i++){
        boll.push('<em class="unSelc" onclick="cp2y.main.buy(this);"><i>'+i+'</i></em>');
      }
      h.push('<div class="issu xh">选号</div>');
      html.push('<div id="choose" class="xh"><div id="w1">'+boll.join('')+'</div><div id="w2">'+boll.join('')+'</div><div id="w3">'+boll.join('')+'</div></div>');
    }
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+7))+'px;left:250px"></div>');
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+7))+'px;left:501px"></div>');
    Dom.I.html(h.join(''));
    Dom.S.html(html.join('')).css({'width':900,'height':25*(D.length+2)+145});;
    this.setScroll();
    var ctx=document.getElementById("line3D1").getContext('2d'),m=12.5,mm;
    ctx.height=25*D.length;
    ctx.width=w1.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f35844";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w3[0]*25)+m,m);
    i=1;
    len=D.length;
    for(i;i<len;i++){ctx.lineTo((w3[i])*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D2").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w2.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f3973d";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w4[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w4[i]*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D3").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w3.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#eb67bb";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w5[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w5[i]*25+m,(i*25)+m);}
    ctx.stroke();
  },
  buy:function(o){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),ww1=[],w2=$("#w2 em"),ww2=[],w3=$("#w3 em"),ww3=[],i=0;
    for(i;i<10;i++){
      if(w1.eq(i).hasClass('cur')){
        ww1.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w2.eq(i).hasClass('cur')){
        ww2.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w3.eq(i).hasClass('cur')){
        ww3.push(i);
      }
    }
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a11&w1="+ww1.join(',')+"&w2="+ww2.join(',')+"&w3="+ww3.join(',');
  }
};

_.a2={
  subName:'二星',
  canvas:_.a0.canvas,
  set:function(data){
    var D=data.datalist,i,html=[],h=[],YL=[],YL2=[],tmp=[],t1=[],tI,j,sum,k,w1=[],w2=[],w3=[],w4=[],w5=[];
    html.push('<div class="l1 title"><div class="code3D">第一位</div><div class="code3D">第二位</div><div class="code2"></div><div class="codeKD2"></div></div>');
    i=0;
    for(i;i<10;i++){
      tmp.push('<em><i>'+i+'</i></em>');
    }
    tmp=tmp.join('');
    html.push('<div class="l1 title"><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code2">开奖号码</div><div class="codeKD2">和值</div></div>');
    h.push('<div class="issu"></div><div class="issu">期号</div>');
    i=D.length-1;
    for(i;i>=0;i--){
      YL=D[i].miss.split('/');
      t1=D[i].drawNumber.split(',');
      j=3;
      tI=0;
      sum=0;
      h.push('<div class="issu issu2">'+D[i].issue.substr(6,3)+'</div>');
      html.push('<div class="l1 ls">');
      w1.push(t1[0]);
      w2.push(t1[1]);
      w3.push(t1[2]);
      w4.push(t1[3]);
      w5.push(t1[4]);
      for(j;j<5;j++){
        html.push('<div class="code3D cl'+(j-2)+'">');
        k=0;YL2=YL[j].split(',');
        for(k;k<10;k++){
          if(Number(t1[j])==k){
            sum+=k;
            html.push('<em><i>'+k+'</i></em>');
          }else{
            html.push('<em><span>'+YL2[k]+'</span></em>');
          }
        }
        html.push('</div>');
      }
      html.push('<div class="code2 cl5"><a>'+t1[3]+'</a><a>'+t1[4]+'</a></div><div class="codeKD2 cl6">'+sum+'</div></div>');
    }
    html.push('<div class="l1 title mt10 btb"><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div></div>');
    h.push('<div class="code2 mt10 btb">'+this.fetchSize+'期</div><div class="code2">出现</div><div class="code2">遗漏</div><div class="code2">几率</div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.appearcount4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.appearcount5.join('</span></em><em><span>')+'</span></em></div></div>');    
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.mostomission4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.mostomission5.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.appearrate4.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.appearrate5.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<canvas id="line3D1" style="left:0" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D2" style="left:250px" width="250" height="'+25*D.length+'"></canvas>');
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<10;i++){
        boll.push('<em class="unSelc" onclick="cp2y.main.buy(this);"><i>'+i+'</i></em>');
      }
      h.push('<div class="issu xh">选号</div>');
      html.push('<div id="choose" class="xh"><div id="w1">'+boll.join('')+'</div><div id="w2">'+boll.join('')+'</div><div></div></div>');
    }
    html.push('<div class="splitLine2" style="height:'+(26*(D.length+7))+'px;left:250px"></div>');    
    Dom.I.html(h.join(''));
    Dom.S.html(html.join('')).css({'width':650,'height':25*(D.length+2)+145});
    this.setScroll();
    var ctx=document.getElementById("line3D1").getContext('2d'),m=12.5,mm;
    ctx.height=25*D.length;
    ctx.width=w1.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f35844";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w4[0]*25)+m,m);
    i=1;
    len=D.length;
    for(i;i<len;i++){ctx.lineTo((w4[i])*25+m,(i*25)+m);}
    ctx.stroke();
    ctx=document.getElementById("line3D2").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=w2.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f3973d";
    ctx.lineCap="square";
    ctx.beginPath();
    ctx.moveTo((w5[0]*25)+m,m);
    i=1;
    for(i;i<len;i++){ctx.lineTo(w5[i]*25+m,(i*25)+m);}
    ctx.stroke();
  },
  buy:function(o){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),ww1=[],w2=$("#w2 em"),ww2=[],i=0;
    for(i;i<10;i++){
      if(w1.eq(i).hasClass('cur')){
        ww1.push(i);
      }
    }
    i=0;
    for(i;i<10;i++){
      if(w2.eq(i).hasClass('cur')){
        ww2.push(i);
      }
    }
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a10&w1="+ww1.join(',')+"&w2="+ww2.join(',');
  }
};