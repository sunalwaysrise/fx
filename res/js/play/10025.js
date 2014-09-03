var _={
  bt:10025,
  name:'福彩3D',
  top:function(){
      var html=[];
      html.push('<a ontouchstart="cp2y.main.init(\'a0\',this)" class="on">基本走势</a>');
      html.push('<a ontouchstart="cp2y.main.init(\'a1\',this)">跨度</a>');
      html.push('<a ontouchstart="cp2y.main.init(\'a2\',this)">和值</a>');
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
    var D=data.alldatalist,i,len,html=[],h=[],boll=[],YL=[],YL2=[],t1=[],j,k,len2,tI,tmp=[],w1=[],w2=[],w3=[];
    html.push('<div class="l1 title"><div class="code3D">第一位</div><div class="code3D">第二位</div><div class="code3D">第三位</div><div class="code2"></div></div>');
    h.push('<div class="issu"></div><div class="issu">期号</div>');
    i=0;
    for(i;i<10;i++){
      tmp.push('<em><a class="red">'+i+'</a></em>');
    }
    tmp=tmp.join('');
    html.push('<div class="l1 title"><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code3D">'+tmp+'</div><div class="code2">开奖号码</div></div>');
    i=D.length-1;
    for(i;i>=0;i--){
      boll=[];
      YL=D[i].miss.split('/');
      t1=D[i].drawNumber.split(',');
      h.push('<div class="issu issu2">'+D[i].issue.substr(2,3)+'</div>');
      html.push('<div class="l1 ls">');
      j=0;
      w1.push(t1[0]);w2.push(t1[1]);w3.push(t1[2]);
      for(j;j<3;j++){
        html.push('<div class="code3D cl'+(j+1)+'">');
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
      html.push('<div class="code2 cl4"><a>'+t1.join('</a><a>')+'</a></div></div>');
    }
    h.push('<div class="issu mt10 btb">'+this.fetchSize+'期</div><div class="issu">出现</div><div class="issu">遗漏</div><div class="issu">欲出</div>');
    html.push('<div class="splitLine" style="height:'+(26*(D.length+10))+'px;left:250px"></div>');
    html.push('<div class="splitLine" style="height:'+(26*(D.length+10))+'px;left:501px"></div>');
    html.push('<canvas id="line3D1" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D2" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<canvas id="line3D3" width="250" height="'+25*D.length+'"></canvas>');
    html.push('<div class="l1 mt10 btb title"><div class="code3D cl1">第一位</div><div class="code3D cl2">第二位</div><div class="code3D cl3">第三位</div><div class="code2"></div></div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.oneappearcount.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.twoappearcount.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.threeappearcount.join('</span></em><em><span>')+'</span></em></div><div class="code2 cl4"></div></div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.onemostomission.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.twomostomission.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.threemostomission.join('</span></em><em><span>')+'</span></em></div><div class="code2 cl4"></div></div>');
    html.push('<div class="l1 ls"><div class="code3D cl1"><em><span>'+data.oneappearrate.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl2"><em><span>'+data.twoappearrate.join('</span></em><em><span>')+'</span></em></div><div class="code3D cl3"><em><span>'+data.threeappearrate.join('</span></em><em><span>')+'</span></em></div><div class="code2 cl4"></div></div>');
    if(!cp2y.flag){
      boll=[];i=0;
      for(i;i<10;i++){
        boll.push('<em class="unSelc" ontouchstart="cp2y.main.buy(this);"><i>'+i+'</i></em>');
      }
      html.push('<div class="xh"><div id="w1" class="bcl">'+boll.join('')+'</div><div id="w2" class="bcl">'+boll.join('')+'</div><div class="bcl" id="w3">'+boll.join('')+'</div><div class="code2"></div></div>');
      h.push('<div class="issu xh">选号</div>');
    }
    Dom.S.html(html.join('')).css({'width':873,'height':25*(D.length+2)+145});
    Dom.I.html(h.join(''));
    this.setScroll();
    var ctx=document.getElementById("line3D1").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=250;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f35844";
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
    ctx.strokeStyle="rgb(241,150,71)";
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
    ctx.strokeStyle="#eb67bb";
    ctx.lineCap="square";
    i=1;
    len=w3.length;
    ctx.beginPath();
    var m=12.5;
    ctx.moveTo(((w3[0])*25)+m,12.5);
    for(i;i<len;i++){ctx.lineTo(w3[i]*25+m,(i*25)+m);}
    ctx.stroke();
  },
  buy:function(o,i){
    $(o).toggleClass('cur');
  },
  submit:function(){
    var w1=$("#w1 em"),w2=$("#w2 em"),w3=$("#w3 em"),i=0,ww1=[],ww2=[],ww3=[];
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
    window.location.href="http://m.cp2y.com/lottery/"+_.bt+"?type=a0&w1="+ww1.join(',')+"&w2="+ww2.join(',')+"&w3="+ww3.join(',');
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
    var D=data.datalist,i,j,len,html=[],h=[],w1=[],YL=[],r1=[];
    i=0;
    for(i;i<10;i++){w1.push('<em><i>'+i+'</i></em>');}
    html.push('<div class="l1 title"><div class="codeKD">'+w1.join('')+'</div><div class="codeKD2">跨度</div><div class="code2">开奖号码</div></div>');
    h.push('<div class="issu">期数</div>');
    i=D.length-1;
    for(i;i>=0;i--){
      h.push('<div class="issu issu2">'+String(D[i].issueOrder).substr(2,3)+'</div>');
      html.push('<div class="l1 ls"><div class="codeKD cl0">');
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
      html.push('</div><div class="codeKD2 cl5">'+D[i].value+'</div><div class="code2 cl6"><a>'+D[i].valueNumber.split(',').join('</a><a>')+'</a></div></div>');
    }
  h.push('<div class="code2 mt10 btb">'+this.fetchSize+'期</div><div class="code2">出现</div><div class="code2">遗漏</div><div class="code2">欲出</div>');
    html.push('<canvas id="lineDw1" style="left:0;top:25px" width="'+w1.length*25+'" height="'+25*D.length+'"></canvas>');
    html.push('<div class="l1 mt10 btb title"><div class="codeKD">'+w1.join('')+'</div></div>');
    html.push('<div class="l1 ls"><div class="codeKD cl0"><em><span>'+data.appearcount.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="codeKD cl0"><em><span>'+data.mostomission.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="codeKD cl0"><em><span>'+data.appearrate.join('</span></em><em><span>')+'</span></em></div></div>');
    Dom.S.html(html.join('')).css({'width':402,'height':25*(D.length+1)+110});
    Dom.I.html(h.join(''));
    this.setScroll();
    var ctx=document.getElementById("lineDw1").getContext('2d'),m=12.5;
    ctx.height=25*D.length;
    ctx.width=w1.length*25;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f35844";
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
    var D=data.datalist,i,j,len,html=[],h=[],b=[],blue,b2=[],sum=[];
    html.push('<div class="l1 title"><div class="hz3">和值</div><div class="codeKD2"></div><div class="code2"></div></div>');
    i=0;
    for(i;i<28;i++){
      b.push('<em><i>'+i+'</i></em>');
    }
    h.push('<div class="issu"></div><div class="issu">期号</div>')
    html.push('<div class="l1 title"><div class="hz3">'+b.join('')+'</div><div class="codeKD2">和值</div><div class="code2">开奖号码</div></div>');
    i=D.length-1;
    for(i;i>=0;i--){
      h.push('<div class="issu issu2">'+String(D[i].issueOrder).substr(2,3)+'</div>');
      html.push('<div class="l1 ls"><div class="hz3 cl0">');
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
    html.push('</div><div class="codeKD2 cl5">'+D[i].value+'</div><div class="code2 cl6"><a>'+D[i].valueNumber.split(',').join('</a><a>')+'</a></div></div>');
    }
    html.push('<canvas id="HeZhi3D" width="1120" height="'+25*D.length+'"></canvas>');
    html.push('<div class="l1 mt10 btb title"><div class="hz3">'+b.join('')+'</div></div>');
    h.push('<div class="issu mt10 btb">'+this.fetchSize+'期</div><div class="issu">出现</div><div class="issu">遗漏</div><div class="issu">欲出</div>');
    html.push('<div class="l1 ls"><div class="hz3 cl0"><em><span>'+data.appearcount.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="hz3 cl0"><em><span>'+data.mostomission.join('</span></em><em><span>')+'</span></em></div></div>');
    html.push('<div class="l1 ls"><div class="hz3 cl0"><em><span>'+data.appearrate.join('</span></em><em><span>')+'</span></em></div></div>');
    Dom.S.html(html.join('')).css({'width':1273,'height':25*(D.length+2)+110});
    Dom.I.html(h.join(''));
    this.setScroll();
    var ctx=document.getElementById("HeZhi3D").getContext('2d');
    ctx.height=25*D.length;
    ctx.width=1120;
    ctx.lineWidth=0;
    ctx.strokeStyle="#f35844";
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
