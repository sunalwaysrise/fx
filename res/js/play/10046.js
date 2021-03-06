var _={
  bt:10046,
  name:'十一运夺金',
  top:function(){
    var html=[];
    html.push('<a ontouchstart="cp2y.main.init(\'a0\',this)" class="on">基本走势</a>');
    html.push('<a ontouchstart="cp2y.main.init(\'a1\',this)">前三直选</a>');
    html.push('<a ontouchstart="cp2y.main.init(\'a2\',this)">前二直选</a>');
    html.push('<a ontouchstart="cp2y.main.init(\'a3\',this)">前三组选</a>');//
    html.push('<a ontouchstart="cp2y.main.init(\'a4\',this)">前二组选</a>');
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
        url:WebAppUrl.APP+"sd115/",
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
    var D=data.datalist,i,html=[],h=[],YL=[],tmp=[],t1=[],tI,j,sum;
    i=1;
    for(i;i<12;i++){
      tmp.push('<em><i>'+i.addZero()+'</i></em>');
    }
    tmp=tmp.join('');
    html.push('<div class="l1 title"><div class="code11">'+tmp+'</div><div class="code3">开奖号码</div><div class="codeKD2">和值</div></div>');
    h.push('<div class="issu">期号</div>');
    i=D.length-1;
    for(i;i>=0;i--){
      YL=D[i].missCombine.split(',');
      t1=D[i].drawNumber.split(',');
      j=0;
      tI=0;
      sum=0;
      h.push('<div class="issu issu2">'+D[i].issue.substr(6,3)+'</div>');
      html.push('<div class="l1 ls"><div class="code11 cl0">');
      for(j;j<11;j++){
        if(Number(t1[tI])==j+1){
          sum+=(j+1);
          tI++;
          html.push('<em><i>'+(j+1).addZero()+'</i></em>');
        }else{
          html.push('<em><span>'+YL[j]+'</span></em>');
        }
      }
      html.push('</div><div class="code3 cl5"><a>'+t1.join('</a><a>')+'</a></div><div class="codeKD2 cl6">'+sum+'</div></div>');
    }
    html.push('<div class="l1 title mt10 btb"><div class="code11">'+tmp+'</div></div>');
    h.push('<div class="code2 mt10 btb">'+this.fetchSize+'期</div><div class="code2">出现</div><div class="code2">遗漏</div><div class="code2">几率</div>');
    html.push('<div class="l1 ls"><div class="code11 cl0"><em><span>'+data.appearcount.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl0"><em><span>'+data.mostomission.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl0"><em><span>'+data.appearrate.join('</span></em><em><span>')+'</span></em></div></div>');
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<11;i++){
        boll.push('<em class="unSelc" ontouchstart="cp2y.main.buy(this);"><i>'+(i+1).addZero()+'</i></em>');
      }
      h.push('<div class="issu xh">选号</div>');
      html.push('<div id="choose" class="xh"><div id="w1" class="code11">'+boll.join('')+'</div><div class="code3"></div></div>');
    }
    Dom.I.html(h.join(''));
    Dom.S.html(html.join('')).css({'width':497,'height':25*(D.length+2)+120});
    this.setScroll();
  },
  buy:function(o){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),ww1=[],i=0;
    for(i;i<11;i++){
      if(w1.eq(i).hasClass('cur')){
        ww1.push(i+1);
      }
    }
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a19&w1="+ww1.join(',');
  }
};

_.a1={
  subName:'前三直选',
  canvas:function(){
    if(this.Data1){
      this.set(this.Data1);
    }else{
      $.ajax({
        url:WebAppUrl.APP+"sd115/three",
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
    var D=data.datalist,i,len,html=[],h=[],boll=[],YL=[],YL2=[],t1=[],j,k,len2,tI,tmp=[],w1=[],w2=[],w3=[];
    html.push('<div class="l1 title"><div class="code11">第一位</div><div class="code11">第二位</div><div class="code11">第三位</div><div class="code2"></div></div>');
    h.push('<div class="issu"></div>');
    i=1;
    for(i;i<12;i++){
      tmp.push('<em><i>'+i.addZero()+'</i></em>');
    }
    tmp=tmp.join('');
    h.push('<div class="issu">期号</div>');
    html.push('<div class="l1 title"><div class="code11 cl1">'+tmp+'</div><div class="code11 cl2">'+tmp+'</div><div class="code11 cl3">'+tmp+'</div><div class="code2 cl6">开奖号码</div></div>');
    i=D.length-1;
    for(i;i>=0;i--){
      boll=[];
      YL=D[i].miss.split('/');
      t1=D[i].drawNumber.split(',');
      h.push('<div class="issu issu2">'+D[i].issue.substr(6,3)+'</div>');
      html.push('<div class="l1 ls">');
      j=0;
      w1.push(t1[0]);w2.push(t1[1]);w3.push(t1[2]);
      for(j;j<3;j++){
        html.push('<div class="code11 cl'+(j+1)+'">');
        YL2=YL[j].split(',');
        k=0;
        for(k;k<11;k++){
          if(t1[j]==k+1){
            tI++;
            html.push('<em><i>'+(k+1).addZero()+'</i></em>');
          }else{
            html.push('<em><span>'+YL2[k]+'</span></em>');
          }
        }
        html.push('</div>');
      }
      html.push('<div class="code2 cl6"><a>'+t1.join('</a><a>')+'</a></div></div>');
    }
    html.push('<canvas id="line11_1" width="275" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line11_2" width="275" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line11_3" width="275" height="'+25*D.length+'"></canvas>');
    h.push('<div class="code2 mt10 btb title"></div><div class="code2">'+this.fetchSize+'期</div><div class="code2">出现</div><div class="code2">遗漏</div><div class="code2">欲出</div>');
    html.push('<div class="l1 mt10 btb title"><div class="code11">第一位</div><div class="code11">第二位</div><div class="code11">第三位</div></div>');
    html.push('<div class="l1 title"><div class="code11">'+tmp+'</div><div class="code11">'+tmp+'</div><div class="code11">'+tmp+'</div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl1"><em><span>'+data.appearcount1.join('</span></em><em><span>')+'</span></em></div><div class="code11 cl2"><em><span>'+data.appearcount2.join('</span></em><em><span>')+'</span></em></div><div class="code11 cl3"><em><span>'+data.appearcount3.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl1"><em><span>'+data.mostomission1.join('</span></em><em><span>')+'</span></em></div><div class="code11 cl2"><em><span>'+data.mostomission2.join('</span></em><em><span>')+'</span></em></div><div class="code11 cl3"><em><span>'+data.mostomission3.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl1"><em><span>'+data.appearrate1.join('</span></em><em><span>')+'</span></em></div><div class="code11 cl2"><em><span>'+data.appearrate2.join('</span></em><em><span>')+'</span></em></div><div class="code11 cl3"><em><span>'+data.appearrate3.join('</span></em><em><span>')+'</span></em></div></div>');
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<11;i++){
        boll.push('<em class="unSelc" ontouchstart="cp2y.main.buy(this);"><i>'+(i+1).addZero()+'</i></em>');
      }
      h.push('<div class="issu xh">选号</div>');
      html.push('<div class="xh"><div id="w1" class="code11">'+boll.join('')+'</div><div id="w2" class="code11">'+boll.join('')+'</div><div class="code11" id="w3">'+boll.join('')+'</div><div class="code2"></div></div>');
    }
    html.push('<div class="splitLine" style="height:'+(26*(D.length+11))+'px;left:275px"></div>');
    html.push('<div class="splitLine" style="height:'+(26*(D.length+11))+'px;left:551px"></div>');
    Dom.S.html(html.join('')).css({'width':948,'height':25*(D.length+3)+145});
    Dom.I.html(h.join(''));
    this.setScroll();
    var ctx=document.getElementById("line11_1").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=250;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f35844";
    ctx.lineCap="square";
    i=1;
    len=w1.length;
    ctx.beginPath();
    var m=12.5;
    ctx.moveTo(((w1[0]-1)*25)+m,12.5);
    for(i;i<len;i++){ctx.lineTo((w1[i]-1)*25+m,(i*25)+m);}
    ctx.stroke();
    var ctx=document.getElementById("line11_2").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=250;
    ctx.lineWidth=0;
    ctx.strokeStyle="rgb(241,150,71)";
    ctx.lineCap="square";
    i=1;
    len=w2.length;
    ctx.beginPath();
    var m=12.5;
    ctx.moveTo(((w2[0]-1)*25)+m,12.5);
    for(i;i<len;i++){ctx.lineTo((w2[i]-1)*25+m,(i*25)+m);}
    ctx.stroke();
    var ctx=document.getElementById("line11_3").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=250;
    ctx.lineWidth=0;
    ctx.strokeStyle="#eb67bb";
    ctx.lineCap="square";
    i=1;
    len=w3.length;
    ctx.beginPath();
    var m=12.5;
    ctx.moveTo(((w3[0]-1)*25)+m,12.5);
    for(i;i<len;i++){ctx.lineTo((w3[i]-1)*25+m,(i*25)+m);}
    ctx.stroke();
  },
  buy:function(o,i){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),w2=$("#w2 em"),w3=$("#w3 em"),i=0,ww1=[],ww2=[],ww3=[];
    for(i;i<11;i++){
      if(w1.eq(i).hasClass('cur')){
        ww1.push(i+1);
      }
    }
    i=0;
    for(i;i<11;i++){
      if(w2.eq(i).hasClass('cur')){
        ww2.push(i+1);
      }
    }
    i=0;
    for(i;i<11;i++){
      if(w3.eq(i).hasClass('cur')){
        ww3.push(i+1);
      }
    }
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a11&w1="+ww1.join(',')+"&w2="+ww2.join(',')+"&w3="+ww3.join(',');
  }
};

_.a2={
  subName:'前二直选',
  canvas:function(){
    if(this.Data1){
      this.set(this.Data1);
    }else{
      $.ajax({
        url:WebAppUrl.APP+"sd115/three",
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
    var D=data.datalist,i,len,html=[],boll=[],h=[],YL=[],YL2=[],t1=[],j,k,len2,tI,tmp=[],w1=[],w2=[],w3=[];
    html.push('<div class="l1 title"><div class="code11">第一位</div><div class="code11">第二位</div><div class="code2"></div></div>');
    i=1;
    for(i;i<12;i++){
      tmp.push('<em><i>'+i.addZero()+'</i></em>');
    }
    tmp=tmp.join('');
    h.push('<div class="issu"></div><div class="issu">期号</div>');
    html.push('<div class="l1 title"><div class="code11">'+tmp+'</div><div class="code11">'+tmp+'</div><div class="code2">开奖号码</div></div>');
    i=D.length-1;
    for(i;i>=0;i--){
      boll=[];
      YL=D[i].miss.split('/');
      t1=D[i].drawNumber.split(',');
      t1.pop();
      h.push('<div class="issu issu2">'+D[i].issue.substr(6,3)+'</div>');
      html.push('<div class="l1 ls">');
      j=0;
      w1.push(t1[0]);w2.push(t1[1]);w3.push(t1[2]);
      for(j;j<2;j++){
          html.push('<div class="code11 cl'+(j+1)+'">');
          YL2=YL[j].split(',');
          k=0;
          for(k;k<11;k++){
              if(t1[j]==k+1){
                  tI++;
                  html.push('<em><i>'+(k+1).addZero()+'</i></em>');
              }else{
                  html.push('<em><span>'+YL2[k]+'</span></em>');
              }
          }
          html.push('</div>');
      }
      html.push('<div class="code2 cl6"><a>'+t1.join('</a><a>')+'</a></div></div>');
    }
    html.push('<canvas id="line11_1" width="275" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line11_2" width="275" height="'+25*D.length+'"></canvas>');
    html.push('<div class="l1 mt10 btb title"><div class="code11">第一位</div><div class="code11">第二位</div></div>');
    h.push('<div class="issu mt10 btb title"></div><div class="code2">'+this.fetchSize+'期</div><div class="code2">出现</div><div class="code2">遗漏</div><div class="code2">欲出</div>');
    html.push('<div class="l1 title"><div class="code11">'+tmp+'</div><div class="code11">'+tmp+'</div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl1"><em><span>'+data.appearcount1.join('</span></em><em><span>')+'</span></em></div><div class="code11 cl2"><em><span>'+data.appearcount2.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl1"><em><span>'+data.mostomission1.join('</span></em><em><span>')+'</span></em></div><div class="code11 cl2"><em><span>'+data.mostomission2.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl1"><em><span>'+data.appearrate1.join('</span></em><em><span>')+'</span></em></div><div class="code11 cl2"><em><span>'+data.appearrate2.join('</span></em><em><span>')+'</span></em></div></div>');
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<11;i++){
          boll.push('<em class="unSelc" ontouchstart="cp2y.main.buy(this)"><i>'+(i+1).addZero()+'</i></em>');
      }
      h.push('<div class="issu xh">选号</div>');
      html.push('<div class="xh"><div id="w1" class="code11">'+boll.join('')+'</div><div id="w2" class="code11">'+boll.join('')+'</div><div class="code2"></div></div>');
    }
    html.push('<div class="splitLine" style="height:'+(26*(D.length+20))+'px;left:274px"></div>');
    Dom.S.html(html.join('')).css({'width':672,'height':25*(D.length+3)+145});
    Dom.I.html(h.join(''));
    this.setScroll();
    var ctx=document.getElementById("line11_1").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=250;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f35844";
    ctx.lineCap="square";
    i=1;
    len=w1.length;
    ctx.beginPath();
    var m=12.5;
    ctx.moveTo(((w1[0]-1)*25)+m,12.5);
    for(i;i<len;i++){ctx.lineTo((w1[i]-1)*25+m,(i*25)+m);}
    ctx.stroke();
    var ctx=document.getElementById("line11_2").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=250;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f3973d";
    ctx.lineCap="square";
    i=1;
    len=w2.length;
    ctx.beginPath();
    var m=12.5;
    ctx.moveTo(((w2[0]-1)*25)+m,12.5);
    for(i;i<len;i++){ctx.lineTo((w2[i]-1)*25+m,(i*25)+m);}
    ctx.stroke();
  },
  buy:function(o){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),w2=$("#w2 em"),i=0,ww1=[],ww2=[];
    for(i;i<11;i++){
      if(w1.eq(i).hasClass('cur')){
        ww1.push(i+1);
      }
    }
    i=0;
    for(i;i<11;i++){
      if(w2.eq(i).hasClass('cur')){
        ww2.push(i+1);
      }
    }
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a4&w1="+ww1.join(',')+"&w2="+ww2.join(',');
  }
};

_.a3={
  subName:'前三组选',
  canvas:function(){
    if(this.Data1){
      this.set(this.Data1);
    }else{
      $.ajax({
        url:WebAppUrl.APP+"sd115/three",
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
    var D=data.datalist,i,len,html=[],h=[],boll=[],YL=[],YL2=[],t1=[],k,len2,tI,tmp=[],w1=[],w2=[],w3=[];
    i=1;
    for(i;i<12;i++){
      tmp.push('<em><i>'+i.addZero()+'</i></em>');
    }
    tmp=tmp.join('');
    html.push('<div class="l1 title"><div class="code11">'+tmp+'</div><div class="code2">开奖号码</div></div>');
    h.push('<div class="issu">期号</div>');
    i=D.length-1;
    for(i;i>=0;i--){
      boll=[];
      YL=D[i].missCombine.split(',');
      t1=D[i].drawNumber.split(',');
      h.push('<div class="issu issu2">'+D[i].issue.substr(6,3)+'</div>');
      html.push('<div class="l1 ls"><div class="code11 cl0">');
      k=0;
      for(k;k<11;k++){
        if(t1.indexOf(String(k+1))!=-1){
          html.push('<em><i>'+(k+1).addZero()+'</i></em>');
        }else{
          html.push('<em><span>'+YL[k]+'</span></em>');
        }
      }
      html.push('</div>');
      html.push('<div class="code2 cl6"><a>'+t1.join('</a><a>')+'</a></div></div>');
    }
    h.push('<div class="issu mt10 btb title">'+this.fetchSize+'期</div><div class="issu">遗漏</div><div class="issu">出现</div><div class="issu">欲出</div>');
    html.push('<div class="l1 title mt10 btb"><div class="code11">'+tmp+'</div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl0"><em><span>'+data.appearcount1.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl0"><em><span>'+data.mostomission1.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl0"><em><span>'+data.appearrate1.join('</span></em><em><span>')+'</span></em></div></div>');
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<11;i++){
        boll.push('<em class="unSelc" ontouchstart="cp2y.main.buy(this);"><i>'+(i+1).addZero()+'</i></em>');
      }
      h.push('<div class="issu xh">选号</div>');
      html.push('<div class="xh"><div id="w1">'+boll.join('')+'</div></div>');
    }
    Dom.S.html(html.join('')).css({'width':396,'height':25*(D.length+2)+120});
    Dom.I.html(h.join(''));
    this.setScroll();
  },
  buy:function(o,i){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),i=0,ww1=[];
    for(i;i<11;i++){
      if(w1.eq(i).hasClass('cur')){
        ww1.push(i+1);
      }
    }
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a14&w1="+ww1.join(',');
  }
};

_.a4={
  subName:'前二组选',
  canvas:function(){
    if(this.Data2){
      this.set(this.Data2);
    }else{
      $.ajax({
        url:WebAppUrl.APP+"sd115/two",
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
    var D=data.datalist,i,len,html=[],h=[],boll=[],YL=[],YL2=[],t1=[],k,len2,tI,tmp=[],w1=[],w2=[],w3=[];
    i=1;
    for(i;i<12;i++){
      tmp.push('<em><i>'+i.addZero()+'</i></em>');
    }
    tmp=tmp.join('');
    h.push('<div class="issu">期号</div>');
    html.push('<div class="l1 title"><div class="code11">'+tmp+'</div><div class="code2">开奖号码</div></div>');
    i=D.length-1;
    for(i;i>=0;i--){
      boll=[];
      YL=D[i].missCombine.split(',');
      t1=D[i].drawNumber.split(',');
      h.push('<div class="issu issu2">'+D[i].issue.substr(6,3)+'</div>');
      html.push('<div class="l1 ls"><div class="code11 cl0">');
      k=0;
      for(k;k<11;k++){
        if(t1.indexOf(String(k+1))!=-1){
          html.push('<em><i>'+(k+1).addZero()+'</i></em>');
        }else{
          html.push('<em><span>'+YL[k]+'</span></em>');
        }
      }
      html.push('</div>');
      html.push('<div class="code2 cl6"><a>'+t1.join('</a><a>')+'</a></div></div>');
    }
    h.push('<div class="issu mt10 btb">'+this.fetchSize+'期</div><div class="issu">出现</div><div class="issu">遗漏</div><div class="issu">欲出</div>');
    html.push('<div class="l1 title mt10 btb"><div class="code11">'+tmp+'</div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl0"><em><span>'+data.appearcount.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl0"><em><span>'+data.mostomission.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="code11 cl0"><em><span>'+data.appearrate.join('</span></em><em><span>')+'</span></em></div></div>');
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<11;i++){
        boll.push('<em class="unSelc" ontouchstart="cp2y.main.buy(this);"><i>'+(i+1).addZero()+'</i></em>');
      }
      h.push('<div class="issu xh">选号</div>');
      html.push('<div class="xh"><div id="w1">'+boll.join('')+'</div></div>');
    }
    Dom.S.html(html.join('')).css({'width':396,'height':25*(D.length+2)+120});
    Dom.I.html(h.join(''));
    this.setScroll();
  },
  buy:function(o){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),i=0,ww1=[];
    for(i;i<11;i++){
      if(w1.eq(i).hasClass('cur')){
        ww1.push(i+1);
      }
    }
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a6&w1="+ww1.join(',');
  }
};
