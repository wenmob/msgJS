
(function() {
  // console.log($,"$");
  // var base_url = "http://uat-wolive.chaozhiedu.com:9091";
  /**
   * 公共参数区
   */
  var base_url = "";
  var socket;
  var channel= '38303372332f616369';
  var visiter_id = '6x587';
  var business_id = 'aci';
  var visiter ='游客803r3';

  /**
   * 样式参数区
   */
  var ms_outcir = getCss(cssFun().ms_outcir); // 定义外圆的样式
  var ms_pic_msg = getCss(cssFun().ms_pic_msg); // 图片chart的样式
  var chat_window = getCss(cssFun().chat_window); // 聊天窗口的样式
  var chat_header = getCss(cssFun().chat_header); // 头部的样式
  var chat_header_img = getCss(cssFun().chat_header_img); // 头部向下的按钮
  var chat_footer = getCss(cssFun().chat_footer); // 聊天窗口的底部
  var chat_footer_p = getCss(cssFun().chat_footer_p); 
  var chat_footer_btn = getCss(cssFun().chat_footer_btn);
  var chat_footer_file = getCss(cssFun().chat_footer_file);
  var chat_footer_file_bq = getCss(cssFun().chat_footer_file_bq);
  var chat_footer_nav_bq = getCss(cssFun().chat_footer_nav_bq);
  var chat_footer_nav_bq_ul = getCss(cssFun().chat_footer_nav_bq_ul);
  var chat_footer_nav_bq_li = getCss(cssFun().chat_footer_nav_bq_li);
  var chat_footer_nav_bq_li_em = getCss(cssFun().chat_footer_nav_bq_li_em);
  var uploadFileStyle = getCss(cssFun().uploadFileStyle);
  var char_cont = getCss(cssFun().char_cont);
  var char_cont_left = getCss(cssFun().char_cont_left);
  var char_cont_left_img = getCss(cssFun().char_cont_left_img);
  var char_cont_left_div = getCss(cssFun().char_cont_left_div);
  var char_cont_right = getCss(cssFun().char_cont_right);
  var char_cont_right_img = getCss(cssFun().char_cont_right_img);
  var char_cont_right_div = getCss(cssFun().char_cont_right_div);
  /**
   * 定义圆的属性
   */
  var circlelem = `
    <!--信息供点击-->
    <div style="${ms_outcir}" id="clickMsg">
      <img style="${ms_pic_msg}" src="../images/chat.png"/>
      <span id="ss" >在线咨询</span>
    </div>

    <!--聊天的界面-->
    <div style="${chat_window}" id="chat_window">
      <!--头部-->
      <div style="${chat_header}">
        <span>管理员aci</span>
        <img style="${chat_header_img}" src="../images/down.png" id="showDown"/>
      </div>
      <div style="${char_cont}">
        <!--左边-->
        <div style="${char_cont_left}">
            <img style="${char_cont_left_img}" src="../images/test1.jpeg"/>
            <div style="${char_cont_left_div}">您好，欢迎来到全国心理咨询师报名审核中心，2019年上半年【心理咨询师】报考已经开始！！！请问，您目前的学历是？（可回复下面数字） 【1】本科 【2】大专 【3】中专 【4】技校 【5】高中 【6】初中 【7】小学</div>
        </div>
        <!--右边-->
        <div style="${char_cont_right}">
          <img style="${char_cont_right_img}" src="../images/test2.jpeg"/>
          <div style="${char_cont_right_div}">您好，欢迎来到全国心理咨询师报名审核中心</div>
        </div>
      </div>
      <!--表情栏-->
      <div style="${chat_footer_nav_bq}" id="nav-bq" v-show="0">
        <ul style="${chat_footer_nav_bq_ul}">
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="微笑" src="../upload/emo_00.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="伤心" src="../upload/emo_01.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="美女" src="../upload/emo_02.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="发呆" src="../upload/emo_03.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="墨镜" src="../upload/emo_04.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="哭" src="../upload/emo_05.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="羞" src="../upload/emo_06.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="哑" src="../upload/emo_07.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="睡" src="../upload/emo_08.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="大哭" src="../upload/emo_09.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="囧" src="../upload/emo_10.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="怒" src="../upload/emo_11.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="俏皮" src="../upload/emo_12.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="笑" src="../upload/emo_13.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="惊讶" src="../upload/emo_14.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="难过" src="../upload/emo_15.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="酷" src="../upload/emo_16.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="汗" src="../upload/emo_17.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="抓狂" src="../upload/emo_18.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="吐" src="../upload/emo_19.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="晤面笑" src="../upload/emo_20.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="快乐" src="../upload/emo_21.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="奇" src="../upload/emo_22.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="傲" src="../upload/emo_23.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="饿" src="../upload/emo_24.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="累" src="../upload/emo_25.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="吓" src="../upload/emo_26.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="尴尬" src="../upload/emo_27.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="高兴" src="../upload/emo_28.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="闲" src="../upload/emo_29.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="努力" src="../upload/emo_30.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="骂" src="../upload/emo_31.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="疑问" src="../upload/emo_32.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="秘密" src="../upload/emo_33.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="乱" src="../upload/emo_34.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="疯" src="../upload/emo_35.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="哀" src="../upload/emo_36.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="鬼" src="../upload/emo_37.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="打击" src="../upload/emo_38.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="再见" src="../upload/emo_39.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="擦汗" src="../upload/emo_40.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="抠" src="../upload/emo_41.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="鼓掌" src="../upload/emo_42.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="糟糕" src="../upload/emo_43.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="恶搞" src="../upload/emo_44.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="什么" src="../upload/emo_45.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="右斜眼" src="../upload/emo_46.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="无聊" src="../upload/emo_47.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="鄙视" src="../upload/emo_48.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="不好意思" src="../upload/emo_49.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="委屈" src="../upload/emo_50.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="奸笑" src="../upload/emo_51.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="亲亲" src="../upload/emo_52.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="大惊失色" src="../upload/emo_53.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="可怜" src="../upload/emo_54.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="刀" src="../upload/emo_55.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="西瓜" src="../upload/emo_56.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="啤酒" src="../upload/emo_57.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="篮球" src="../upload/emo_58.gif" onclick="emoj(this)"/></li>
          <li style="${chat_footer_nav_bq_li}"><img style="${chat_footer_nav_bq_li_em}" title="乒乓" src="../upload/emo_59.gif" onclick="emoj(this)"/></li>       
        </ul>
      </div>
      <!--底部选项文件-->
      <div style="${chat_footer_file}">
        <img style="${chat_footer_file_bq}" src="../images/biaoqing.png" id="face"/>
        <img style="${chat_footer_file_bq}" src="../images/pic.png" onclick="openPic()"/>
        <input type="file" accept="image/*" id="upload" name="upload" style="${uploadFileStyle}" onchange="fileUpload()"/>
      </div>
      <!--底部聊天-->
      <div style="${chat_footer}">
        <div contenteditable="true" style="${chat_footer_p}" id="printCont"></div>
        <button style="${chat_footer_btn}">发送</button>
      </div>
    </div>
  `;
  /**
   * 向页面写入元素
   */
    getdata();
    connectServer();
    document.write(circlelem);
    clickMsg();
    showDown();
    showFace();
  
  /**
   * 事件区域
   */
  // 点击表情的效果
  window.emoj = function(e) {
    var element = document.getElementById("printCont");
    var str1 = element.innerText;
    element.innerText = str1 + 'face[' + e.getAttribute('title') + ']';
  }
  window.openPic = function(e) {
    var upload = document.getElementById("upload");
    upload.click();
  }
  window.fileUpload = function() {
    var obj = document.getElementById('upload').files[0];
    var path = document.getElementById('upload').value;
    ajax_method(base_url, obj, 'post', function (res) {
      console.log(res);
    });
  }
  //点击信息弹出聊天框的方法
  function clickMsg() {
    var element = document.getElementById("clickMsg");
    element.addEventListener('click', function() {
      var ele = document.getElementById("chat_window");
      var sy = {
        position: 'position: absolute;',
        right: 'right: 0px;',
        bottom: 'bottom: 0px;',
        width: 'width: 100vw;',
        height: 'height: 100vh;',
        background: 'background: #fff;',
        transition: 'transition: all .5s;',
        webkitTransition: '-webkit-transition: all .5s;',
        oTransition: '-o-transition: all .5s;',
        mozTransition: '-moz-transition: all .5s;',
        overflow: 'overflow: hidden;',
        zIndex: 'z-index: 25000;'
      }
      ele.style.cssText = getCss(sy);
    });
  }
  // 点击向下的方法
  function showDown() {
    var element = document.getElementById("showDown");
    element.addEventListener('click', function() {
      var ele = document.getElementById("chat_window");
      var sy = {
        position: 'position: absolute;',
        right: 'right: 0px;',
        bottom: 'bottom: 0px;',
        width: 'width: 0vw;',
        height: 'height: 0vh;',
        background: 'background: #fff;',
        transition: 'transition: all .5s;',
        webkitTransition: '-webkit-transition: all .5s;',
        oTransition: '-o-transition: all .5s;',
        mozTransition: '-moz-transition: all .5s;',
        overflow: 'overflow: hidden;',
        zIndex: 'z-index: 25000;'
      }
      ele.style.cssText = getCss(sy);
    });
  }
  // 点击是否展开表情
  function showFace() {
    var element = document.getElementById("face");
    element.addEventListener('click', function(){
      var ele = document.getElementById("nav-bq");
      var n = ele.getAttribute('v-show');
      if(n == '0') {
        faceBig();
      } else {
        faceSmall();
      }
    });
  }
  /**
   * 公共方法区
   */
  // 处理样式的方法
  function getCss(obj) {
    var ss = "";
    Object.keys(obj).forEach(function(key) {
      ss = ss + obj[key];
    });
    return ss;
  }
  // 表情展开
  function faceBig() {
    var element = document.getElementById("nav-bq");
    var sy = {
      position: 'position: absolute;',
      width: 'width: 100%;',
      height: 'height: 420px;',
      left: 'left: 0px;',
      bottom: 'bottom: 195px;',
      background: '',
      transition: 'transition: all .5s;',
      webkitTransition: '-webkit-transition: all .5s;',
      oTransition: '-o-transition: all .5s;',
      mozTransition: '-moz-transition: all .5s;',
      overflow: 'overflow: hidden;',
      borderTop: 'border-top: 1px solid #ccc'
    }
    element.style.cssText = getCss(sy);
    element.setAttribute('v-show', '1');
  }
  // 表情隐藏
  function faceSmall() {
    var element = document.getElementById("nav-bq");
    var sy = {
      position: 'position: absolute;',
      width: 'width: 0px;',
      height: 'height: 0px;',
      left: 'left: 0px;',
      bottom: 'bottom: 195px;',
      background: '',
      transition: 'transition: all .5s;',
      webkitTransition: '-webkit-transition: all .5s;',
      oTransition: '-o-transition: all .5s;',
      mozTransition: '-moz-transition: all .5s;',
      overflow: 'overflow: hidden;',
      borderTop: 'border-top: 1px solid #ccc'
    }
    element.style.cssText = getCss(sy);
    element.setAttribute('v-show', '0');
  }
  //读取cookie
  function getCookie(name){
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr = document.cookie.match(reg)){
          return (arr[2]);     
      }else{
          return null;     
      }
   };
  // 建立websocket
  function connectServer() {
    pusher = new Pusher('b054014693241bcd9c20489', {
      encrypted: false,
      enabledTransports: ['ws'],
      wsHost: 'uat-wolive.chaozhiedu.com',
      wsPort: 9091,
      authEndpoint: '/admin/login/auth',
      disableStats: true
    });
    // 验证是否成功
    pusher.connection.bind('connected', function() {
        console.log('连接成功');
    });
    var channels = pusher.subscribe("cu" + channel);
    // 接收消息
    channels.bind('my-event', function (data) {
      console.log(data);
      
    });
    // 认领通知
    channels.bind('cu_notice', function(data) {
      getdata();
    });
  }
  async function getdata() {
    var showtime="";
    var se,cid;
    if(getCookie("services")){
         se = getCookie("services");
     }else{
        se =0;
     }
    var curentdata =new Date();
    var time =curentdata.toLocaleDateString();
    if(getCookie("cid")){
        cid = getCookie("cid");
    }else{
        cid ="";
    }
    await $.ajax({
      url: "/admin/event/chatdata",
      type: "post",
      data: {hid:cid,vid:visiter_id,business_id:business_id,service_id:se},
      dataType:'json',
      success: function (res) {
        console.log(res);
        //添加 最近的 聊天 记录
        // var str = '';
        // // var vaule = visiter; 
        // if(response.code == 0){
        //   console.log(res);
        //   return res; 
        //  };
       }
      });   
}
  /**
   * 样式区
   */
  function cssFun() {
    return {
      ms_outcir: {
        position: 'position: absolute;',
        right: 'right: 0px;',
        bottom: 'bottom: 100px;',
        width: 'width: 180px;',
        height: 'height: 240px;',
        textAlign: 'text-align: center;',
        lineHeight: 'line-height: 90px;',
        color: 'color: #fff;',
        fontSize: 'font-size: 30px;',
        background: 'background: #538bf9;',
        cursor: 'cursor: pointer;',
        zIndex: 'z-index: 20000;'
      },
      ms_pic_msg: {
        display: 'display: block;',
        marginTop: 'margin-top: 36px;',
        marginLeft: 'margin-left: 48px;',
        borderRadius: 'border-radius: 7px;',
        width: 'width: 80px',
      },
      chat_window: {
        position: 'position: absolute;',
        right: 'right: 0px;',
        bottom: 'bottom: 0px;',
        width: 'width: 100vw;',
        height: 'height: 100vh;',
        background: 'background: #fff;',
        transition: 'transition: all .5s;',
        webkitTransition: '-webkit-transition: all .5s;',
        oTransition: '-o-transition: all .5s;',
        mozTransition: '-moz-transition: all .5s;',
        overflow: 'overflow: hidden;',
        zIndex: 'z-index: 25000;'
      },
      chat_header: {
        position: 'position: absolute;',
        left: 'left: 0px;',
        top: 'top: 0px;',
        width: 'width: 100%;',
        height: 'height: 100px;',
        background: 'background: black;',
        textAlign: 'text-align: center;',
        color: 'color: #fff;',
        lineHeight: 'line-height: 100px;',
        fontSize: 'font-size: 36px;',
      },
      chat_header_img: {
        position: 'position: absolute;',
        right: 'right: 20px;',
        top: 'top: 14px;',
        width: 'width: 66px;'
      },
      char_cont: {
        position: 'position: absolute;',
        width: 'width: 100%;',
        height: 'height: calc(100% - 298px);',
        left: 'left: 0px;',
        top: 'top: 102px;',
        background: '',
        overflowX: 'overflow-x: hidden;',
        overflowY: 'overflow-y: auto;'
      },
      char_cont_left: {
        padding: 'padding: 18px 15px;',
        clear: 'clear: both;'
      },
      char_cont_left_img: {
        float: 'float: left;',
        width: 'width: 110px;',
        height: 'height: 110px;',
        borderRadius: 'border-radius: 110px;',
        border: 'border: 1px solid #ccc;'
      },
      char_cont_left_div: {
        float: 'float: left;',
        maxWidth: 'max-width: calc(100% - 300px);',
        maxHeight:'max-height: 999999px;',
        marginLeft: 'margin-left: 20px;',
        marginTop: 'margin-top: 25px;',
        fontSize: 'font-size: 33px;',
        background: 'background: #eeeeee;',
        padding: 'padding: 15px 20px;',
        borderRadius: 'border-radius: 7px;'
      },
      char_cont_right: {
        padding: 'padding: 18px 15px;',
        clear: 'clear: both;'
      },
      char_cont_right_img: {
        float: 'float: right;',
        width: 'width: 110px;',
        height: 'height: 110px;',
        borderRadius: 'border-radius: 110px;',
        border: 'border: 1px solid #ccc;'
      },
      char_cont_right_div: {
        float: 'float: right;',
        maxWidth: 'max-width: calc(100% - 300px);',
        maxHeight:'max-height: 999999px;',
        marginLeft: 'margin-right: 20px;',
        marginTop: 'margin-top: 25px;',
        fontSize: 'font-size: 33px;',
        background: 'background: #b0e36f;',
        padding: 'padding: 15px 20px;',
        borderRadius: 'border-radius: 7px;'
      },
      chat_footer: {
        position: 'position: absolute;',
        display: 'display: flex;',
        justifyContent: 'justify-content: flex-start;',
        left: 'left: 0px;',
        bottom: 'bottom: 0px;',
        background: '',
        width: 'width: 100%;',
        height: 'height: 110px;',
        overflow: 'overflow: hidden;'
      },
      chat_footer_p: {
        width: 'width: 80%;',
        height: 'height: 88px;',
        outline: 'outline: 0;',
        fontSize: 'font-size: 26px;',
        padding: 'padding: 10px 15px;',
        wordWrap: 'word-wrap: break-word;',
        overflowy: 'overflow-y: auto;',
        overflowx: 'overflow-x: hidden;',
        lineHeight: 'line-height: 1.1;',
        borderTop: 'border-top: 1px solid #ccc;',
        borderBottom: 'border-bottom: 1px solid #ccc;'
      },
      chat_footer_file: {
        position: 'position: absolute;',
        display: 'display: flex;',
        justifyContent: 'justify-content: flex-start;',
        left: 'left: 0px;',
        bottom: 'bottom: 112px;',
        width: 'width: 100%;',
        height: 'height: 80px;'

      },
      chat_footer_file_bq: {
        width: 'width: 54px;',
        height: 'height: 54px;',
        marginLeft: 'margin-left: 30px;',
        marginTop: 'margin-top: 10px;',
      },
      chat_footer_btn: {
        width: 'width: 20%;',
        height: 'height: 100%;',
        background: 'background: #459ff8;',
        color: 'color: #fff;',
        fontSize: 'font-size: 36px;',
        textAlign: 'text-align: center;',
      },
      chat_footer_nav_bq: {
        position: 'position: absolute;',
        width: 'width: 0px;',
        height: 'height: 0px;',
        left: 'left: 0px;',
        bottom: 'bottom: 195px;',
        background: '',
        borderTop: 'border-top: 1px solid #ccc',
        transition: 'transition: all .5s;',
        webkitTransition: '-webkit-transition: all .5s;',
        oTransition: '-o-transition: all .5s;',
        mozTransition: '-moz-transition: all .5s;',
        overflowX: 'overflow-x: hidden;',
        overflowY: 'overflow-y: auto;'
      },
      chat_footer_nav_bq_ul: {
        listStyle: 'list-style: none;',
        margin: 'margin: 0px;',
        padding: 'padding: 0px;',
        clear: 'clear: both;'
      },
      chat_footer_nav_bq_li: {
        float: 'float: left;',
        marginTop: 'margin-top: 20px;',
        marginLeft: 'margin-left: 26px;'
      },
      chat_footer_nav_bq_li_em: {
        width: 'width: 55px;'
      },
      uploadFileStyle: {
        width: 'width: 0px;',
        height: 'height: 0px;',
        opacity: 'opacity: 0;',
      }
    }
  }
  
})()