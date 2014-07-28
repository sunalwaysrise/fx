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
  }
};
var myScroll;
function loaded() {
  myScroll = new iScroll('main',{checkDOMChanges:true});
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);

