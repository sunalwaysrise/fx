var dom={curIssue:$("#curIssue"),curCountDown:$("#curCountDown")};
cp2y.main={
  isLock:false,
  toggle:function(){
    if(this.isLock){
      this.isLock=false;Dom.B.removeClass('cur');Dom.M.hide();Dom.C.hide();
    }else{
      this.isLock=true;Dom.B.addClass('cur');Dom.M.show();Dom.C.show();
    }
  },
  openGuide:function(){
    $("#downLock").show();
    $("#downBox").show();
  },
  closeGuide:function(){
    $("#downLock").hide();
    $("#downBox").hide();
  },
  fetchSize:30,
  setSize:function(s){
    this.fetchSize=s;
    localStorage.setItem('fetchSize',s);
  },
  BT:10032,
  init:function(play,o){
    if(localStorage.getItem('fetchSize')){
      this.fetchSize=localStorage.getItem('fetchSize');
    }
    if(!o){
      this.BT=cp2y.util.getArgs('bt');
      $.getScript(WebAppUrl.JS_URL+this.BT+'.js?v=20140630',function(){
        $.extend(cp2y.main,_[play]);
        _.top();
        $("#name").html(_.name);
        $("#subName").html(cp2y.main.subName);
        cp2y.main.canvas();
      });
    }else{
      $.extend(cp2y.main,_[play]);
      this.canvas();
      if(o){$(o).addClass('on').siblings().removeClass('on');}
      $("#subName").html(this.subName);
    }
    this.initCountDown();
  },
  initCountDown:function(){
    $.getScript('http://m.cp2y.com/lottery/query_cur_issue_fx?lotteryId='+this.BT+'&callback=cp2y.main._countDown');
  },
  _countDown:function(result){
    var o = result;
    if(o.flag!=1){return false;}
    cp2y.main.serverTime = parseInt(o.time);
    cp2y.main.currentIssue = o.issue;
    cp2y.main.currentIssueId = o.issueId;
    //cp2y.buy.issueStatus = o.flag;
    cp2y.main.sellEndTime = o.sellEndTime;
    dom.curIssue.html(o.issue);
    if(cp2y.main.serverTime>1001){
      cp2y.main.autoRun();
    }else{
      setTimeout('cp2y.main.countDown()',5000);
    }
  },
  clearData:function(){
    delete this.Data0;
    delete this.Data1;
    delete this.Data2;
    delete this.Data3;
  },
  countDown:function(){
    this.clearData();
    this.canvas();
    $.getScript('http://m.cp2y.com/lottery/query_cur_issue_fx?lotteryId='+this.BT+'&callback=cp2y.main._countDown');
  },
  autoRun:function(){
    cp2y.main.serverTime-=1000;
    if(cp2y.main.serverTime<=0){
      this.countDown();
    }else{
      var day=Math.floor(cp2y.main.serverTime/(24 * 60 * 60 * 1000)),tmp,hour,munites,second,html='';
      tmp=cp2y.main.serverTime-(day*24*60*60*1000);
      hour=Math.floor(tmp/(60*60*1000));
      tmp=cp2y.main.serverTime-(day*24*60*60*1000)-(hour*60*60*1000);
      munites=Math.floor(tmp/(60 * 1000));
      tmp=cp2y.main.serverTime-(day*24*60*60*1000)-(hour*60*60*1000)-(munites*60*1000);
      second=Math.floor(tmp/1000);
      if(day){
        html+=day+"天";
      }
      if(hour){
        html+=hour+"小时";
      }
      munites=munites<10?'0'+munites:munites;
      second=second<10?'0'+second:second;
      html+=munites+':'+second;
      dom.curCountDown.html(html);
      try{
        clearTimeout(autoRunMark);
      }catch(e){}
      autoRunMark=setTimeout('cp2y.main.autoRun()',1000);
    }
  },
  hide:function(){
    //$("#choose").hide();
  },
  event:function(){
    //$("#choose").css({"top":$(window).height()-this.y-66}).show();
    //console.log($(window).height()+this.y);
  }
};
var myScroll,myScroll2,autoRunMark;
function loaded(){
  myScroll = new IScroll('#main',{scrollX:true,scrollX:false});
  myScroll2 = new IScroll('#scrollBox',{scrollX:false,scrollX:true,click:true});
  //myScroll.on('scrollStart', cp2y.main.hide);
  //myScroll.on('scrollEnd', cp2y.main.event);
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);

