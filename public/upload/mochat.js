/**
 * Created by chenrui on 2017/7/10.
 */


var e={'微笑':'emo_00','伤心':'emo_01','美女':'emo_02','发呆':'emo_03','墨镜':'emo_04','哭':'emo_05','羞':'emo_06','哑':'emo_07','睡':'emo_08','大哭':'emo_09','囧':'emo_10','怒':'emo_11','快乐':'emo_12','笑':'emo_13','惊讶':'emo_14','难过':'emo_15','酷':'emo_16','汗':'emo_17','抓狂':'emo_18','吐':'emo_19','晤面笑':'emo_20','快乐':'emo_21','奇':'emo_22','傲':'emo_23','饿':'emo_24','累':'emo_25','吓':'emo_26','尴尬':'emo_27','高兴':'emo_28','闲':'emo_29','努力':'emo_30','骂':'emo_31','疑问':'emo_32','秘密':'emo_33','乱':'emo_34','疯':'emo_35','哀':'emo_36','鬼':'emo_37','打击':'emo_38','再见':'emo_39','擦汗':'emo_40','抠':'emo_41','鼓掌':'emo_42','糟糕':'emo_43','恶搞':'emo_44','什么':'emo_45','右斜眼':'emo_46','无聊':'emo_47','鄙视':'emo_48','不好意思':'emo_49','委屈':'emo_50','奸笑':'emo_51','亲亲':'emo_52','大惊失色':'emo_53','可怜':'emo_54','刀':'emo_55','西瓜':'emo_56','啤酒':'emo_57','篮球':'emo_58','乒乓':'emo_59'};

var faceon = function () {
    $(".wl_faces_main").empty();
    var str =""
    str +='<ul>';
    str +='<li><img title="微笑" src="/upload/emoji/emo_00.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="伤心" src="/upload/emoji/emo_01.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="美女" src="/upload/emoji/emo_02.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="发呆" src="/upload/emoji/emo_03.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="墨镜" src="/upload/emoji/emo_04.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="哭" src="/upload/emoji/emo_05.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="羞" src="/upload/emoji/emo_06.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="哑" src="/upload/emoji/emo_07.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="睡" src="/upload/emoji/emo_08.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="大哭" src="/upload/emoji/emo_09.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="囧" src="/upload/emoji/emo_10.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="怒" src="/upload/emoji/emo_11.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="快乐" src="/upload/emoji/emo_12.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="笑" src="/upload/emoji/emo_13.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="惊讶" src="/upload/emoji/emo_14.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="难过" src="/upload/emoji/emo_15.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="酷" src="/upload/emoji/emo_16.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="汗" src="/upload/emoji/emo_17.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="抓狂" src="/upload/emoji/emo_18.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="吐" src="/upload/emoji/emo_19.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="晤面笑" src="/upload/emoji/emo_20.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="快乐" src="/upload/emoji/emo_21.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="奇" src="/upload/emoji/emo_22.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="傲" src="/upload/emoji/emo_23.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="饿" src="/upload/emoji/emo_24.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="累" src="/upload/emoji/emo_25.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="吓" src="/upload/emoji/emo_26.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="尴尬"  src="/upload/emoji/emo_27.gif"  onclick="emoj(this)"/></li>';
    str +='<li><img title="高兴" src="/upload/emoji/emo_28.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="闲" src="/upload/emoji/emo_29.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="努力" src="/upload/emoji/emo_30.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="骂" src="/upload/emoji/emo_31.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="疑问" src="/upload/emoji/emo_32.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="秘密" src="/upload/emoji/emo_33.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="乱" src="/upload/emoji/emo_34.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="疯" src="/upload/emoji/emo_35.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="哀" src="/upload/emoji/emo_36.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="鬼" src="/upload/emoji/emo_37.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="打击" src="/upload/emoji/emo_38.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="再见" src="/upload/emoji/emo_39.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="擦汗" src="/upload/emoji/emo_40.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="抠" src="/upload/emoji/emo_41.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="鼓掌" src="/upload/emoji/emo_42.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="糟糕" src="/upload/emoji/emo_43.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="恶搞" src="/upload/emoji/emo_44.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="什么" src="/upload/emoji/emo_45.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="右斜眼" src="/upload/emoji/emo_46.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="无聊" src="/upload/emoji/emo_47.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="鄙视" src="/upload/emoji/emo_48.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="不好意思" src="/upload/emoji/emo_49.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="委屈" src="/upload/emoji/emo_50.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="奸笑" src="/upload/emoji/emo_51.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="亲亲" src="/upload/emoji/emo_52.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="大惊失色" src="/upload/emoji/emo_53.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="可怜" src="/upload/emoji/emo_54.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="刀" src="/upload/emoji/emo_55.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="西瓜" src="/upload/emoji/emo_56.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="啤酒" src="/upload/emoji/emo_57.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="篮球" src="/upload/emoji/emo_58.gif" onclick="emoj(this)"/></li>';
    str +='<li><img title="乒乓" src="/upload/emoji/emo_59.gif" onclick="emoj(this)"/></li>';
    str +="</ul>";
    $(".wl_faces_main").append(str);
    $(".tool_box").toggle();
}


var emoj=function (obj) {
    var a=  $(obj).attr("title");
    var str=$("#text_in").val();
    var reg = new RegExp( '<' , "g" )
        str =str.replace(reg,'&lt;');

    var reg2 = new RegExp( '>' , "g" )     

        str =str.replace(reg2,'&gt;'); 
    var b = "";
    b += str+" face["+a+"]";
    $("#text_in").val(b);
    $(".tool_box").hide()

}

// 图片上传
function put() {

    var value = $('input[name="upload"]').val();
    var index1=value.lastIndexOf(".");
    var index2=value.length;
    var suffix=value.substring(index1+1,index2);
    var debugs =suffix.toLowerCase();


    if (debugs == "jpg" || debugs == "gif" ||debugs == "png" ||debugs == "jpeg") {

        $("#picture").ajaxSubmit({
            url: '/admin/event/upload',
            type: "post",
            dataType:'json',
            data:{visiter_id:visiter_id,business_id: business_id, avatar: pic,record: record,service_id:service_id},
            success: function (res) {
             
                if(res.code == 0){
                    var msg = '<img src="' + res.data +'" onclick="getbig(this)" >';
                    var se = $('#services').text();
                    var myDate = new Date();
                    var time = myDate.toLocaleTimeString();
                    var str = '';
                    str += '<li class="chatmsg"><div class="showtime">' + time + '</div>';
                    str += '<div style="position: absolute;top: 26px;right: 2px;"><img  class="my-circle cu_pic" src="' + pic + '" width="40px" height="40px"></div>';
                    str += "<div class='outer-right'><div class='customer'>";
                    str += "<pre>"+ res.data+"</pre>";
                    str += "</div></div>";
                    str += "</li>";
                    $(".conversation").append(str);
                    var div = document.getElementById("wrap");
                    div.scrollTop = div.scrollHeight;
                    if($.cookie('services')){
                        var sid =$.cookie('services');
                    }
                    
                }else{
                    layer.msg(res.msg,{icon:2});
                }
            }
        });

    } else {

        layer.msg("请选择图片", {icon: 2});
    }

}

// 文件上传
function putfile() {

    var value = $('input[name="folder"]').val();
    var sarr = value.split('\\');
    var name = sarr[sarr.length - 1];

    var arr = value.split(".");
    var debugs =arr[1].toLowerCase();
    if ( debugs == "js" ||  debugs == "css" ||  debugs == "html" ||  debugs == "php") {
        layer.msg("不支持该格式的文件", {icon: 2});
    } else {


        var myDate = new Date();
        var time =  myDate.getHours()+":"+myDate.getMinutes();
       
        $("#file").ajaxSubmit({
            url: '/admin/event/uploadfile',
            type: 'post',
            dataType:'json',
            data:{visiter_id:visiter_id,business_id: business_id, avatar: pic,record: record,service_id:service_id},
            success: function (res) {
                if(res.code == 0){
                    var str = '';
                    str += '<li class="chatmsg"><div class="showtime">' + time + '</div>';
                    str += '<div style="position: absolute;top: 26px;right: 2px;"><img  class="my-circle cu_pic" src="' + pic + '" width="40px" height="40px"></div>';
                    str += "<div class='outer-right'><div class='customer'>";
                    str += "<pre>"+res.data+"</pre>"
                    str += "</div></div>";
                    str += "</li>";

                    $(".conversation").append(str);
                    var div = document.getElementById("wrap");
                    div.scrollTop = div.scrollHeight;
                    var msg = "<div><a href='" + res.data + "' style='display: inline-block;text-align: center;min-width: 70px;text-decoration: none;' download='" + name + "'><i class='layui-icon' style='font-size: 60px;'>&#xe61e;</i><br>" + name + "</a></div>";
                    var se = $('#services').text();

                    if($.cookie('services')){
                        var sid =$.cookie('services');
                    }

                  
                }else{
                    layer.msg(res.msg,{icon:2});
                }
            }
        });

    }
}


function getbig(obj) {
    var text = $(obj).attr('src');
    layer.open({
        type: 1,
        title: false,
        closeBtn: 1,
        area: '70%',
        shadeClose: true,
        content: "<img src='" + text + "' width='100%' height='100%'>"
    });
}


function getdata() {
    var showtime="";
    if($.cookie("services")){
         var se = $.cookie("services");
     }else{
        var se =0;
     }
    var curentdata =new Date();
    var time =curentdata.toLocaleDateString();
    if($.cookie("cid") != "" ){
        var cid =$.cookie("cid");
    }else{
        var cid ="";

    }
       $.ajax({
           url: "/admin/event/chatdata",
           type: "post",
           data: {hid:cid,vid:visiter_id,service_id:se,business_id:business_id},
           success: function (res) {
               //添加 最近的 聊天 记录
               var str = '';
               var vaule = visiter;
             
             if(res.code == 0){

                $.each(res.data, function (k, v) {

                   if(getdata.puttime){

                       if((v.timestamp - getdata.puttime) > 60){
                           var myDate = new Date(v.timestamp*1000);
                           var puttime =myDate.toLocaleDateString();
                           if(puttime == time){
                               showtime =myDate.getHours()+":"+myDate.getMinutes();

                           }else{
                               showtime =myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes();
                           }

                       }else{
                           showtime = "";
                       }

                   }else{

                       var myDate = new Date(v.timestamp*1000);
                       var puttime =myDate.toLocaleDateString();
                       if(puttime == time){
                           showtime =myDate.getHours()+":"+myDate.getMinutes();
                       }else{
                           showtime =myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes();
                       }

                   }

                   getdata.puttime = v.timestamp;

                  if (v.direction == 'to_service') {

                       str += '<li class="chatmsg"><div class="showtime">' +showtime + '</div>';
                       str += '<div class="" style="position: absolute;top: 26px;right: 2px;"><img class="my-circle" src="' + v.avatar + '" width="40px" height="40px"></div>';
                       str += "<div class='outer-right'><div class='customer'>";
                       str += "<pre>" + v.content + "</pre>";
                       str += "</div></div>";
                       str += "</li>";

                   } else {

                    
                           str += '<li class="chatmsg"><div class="showtime">' +showtime + '</div><div style="position: absolute;left:3px;">';
                           str += '<img  class="my-circle  se_pic" src="' + v.avatar + '" width="40px" height="40px"></div>';
                           str += "<div class='outer-left'><div class='service'>";
                           str += "<pre>" + v.content + "</pre>";
                           str += "</div></div>";
                           str += "</li>";
                       
                   }
               });

               var div = document.getElementById("wrap");
               if($.cookie("cid") == ""){

                   $(".conversation").append(str);
                   if(div){
                       div.scrollTop = div.scrollHeight;
                   }
               }else{

                   $(".conversation").prepend(str);
                   if(res.length <= 2){
                       $("#top_div").remove();
                       $(".conversation").prepend("<div id='top_div' class='showtime'>已没有数据</div>");
                       if(div){
                           div.scrollTop =0;
                       }
                   }else{
                       if(div){
                           div.scrollTop =div.scrollHeight/3;
                       }
                   }
               }
               if(res.length >0){
                   $.cookie("cid",data[0]['cid']);
                   $(".chatmsg_notice").remove();
               }
             }
               
           }
       });
}

// 通知 客服
var init = function () {

    getquestion(business_id);
    $.cookie("cid","");
    wolive_connect();
  
    $.ajax({
        url: "/admin/event/notice",
        type: 'post',
        data: {visiter_id:visiter_id, visiter_name: visiter, business_id: business_id, from_url: record, avatar: pic,groupid:cid},
        dataType:'json',
        async: false,
        success: function (res) {

       
        if(res.code == 0){
                var data =res.data;
                $("#img_head").attr('src',data.avatar);

                $("#services").text(data.nick_name);
                // 问候语
                var msg = '';
                    msg += '<li class="chatmsg_no"><div style="position: absolute;top:2px;left:3px;">';
                    msg += '<img  class="my-circle" src="' + data.avatar + '" width="40px" height="40px"></div>';
                    msg += "<div class='outer-left'><div class='service'>";
                    msg += "<pre>" + data.content + "</pre>";
                    msg += "</div></div>";
                    msg += "</li>";
                    $(".conversation").append(msg);
                    var div = document.getElementById("wrap");
                    div.scrollTop = div.scrollHeight;
    
             $.cookie("services",data.service_id);
               service_id =data.service_id;
            }else if(res.code == 1){

                layer.msg(res.msg,{icon:2});

            }else if(res.code == 2){

                $("#img_head").attr("src","/assets/images/index/workerman_logo.png");
                $("#services").text("");
                var num= getnums(business_id);
                // 告知客服在排队
                var msg='';
                msg+='<li class="chatmsg_notice"><div style="position: absolute;left:3px;">';
                msg+='<img  class="my-circle" src="/assets/images/index/workerman_logo.png" width="40px" height="40px"></div>';
                msg+="<div class='outer-left'><div class='service'>";
                msg+="<pre>通知 ： 现在还有"+num+" 人在排队，请等待 ....</pre>";
                msg+="</div></div>";
                msg+="</li>";
                $(".conversation").append(msg);
               $.cookie("services",'');

            }else if(res.code == 3){
                
                layer.msg(res.msg,{icon:2,end:function(){
                      window.location.href = url + "/index/message?business_id=" + business_id;
                }});

               $.cookie("services",'');

            }else if(res.code == 4){
                var data =res.data;
                $("#img_head").attr('src',data.avatar);
                $("#services").text(data.nick_name);
                $("#img_head").addClass("icon_gray");
                
                layer.open({
                    title:'提示框',
                    area: ['300px', '180px'],
                    content:'该客服离线中，是否转接其他客服？',
                    btn:['是','否'],
                    yes:function(){
                        $.ajax({
                            url:'/admin/event/getchangekefu',
                            type:'post',
                            data:{visiter_id:visiter_id,business_id:business_id},
                            success:function(res){
                                if(res.code == 0){

                                 layer.msg('转接中....',{icon:3,end:function(){
                                    location.reload();
                                 }})
                                
                              }
                           }
                        });
                    },
                    btn2:function(){
                        layer.close();
                    }
                })

            }
           getdata();   
           
        }
    });
 
    $.cookie("itime","");
}

window.onload = init();


function getquestion(business_id){

    $.ajax({
       url:'/admin/event/getquestion',
       type:'post',
       data:{business_id:business_id},
       success:function(res){
          if(res.code == 0){
             var str='';
                str += '<li class="chatmsg"><div class="showtime"></div><div style="top:2px;left:3px;">';
                str += '<img  class="my-circle" src="/assets/images/index/workerman_logo.png" width="40px" height="40px"></div>';
                str += "<div class='outer-left'><div class='service'>";
                str += "<pre>" ;

                str+='<p style="font-weight:blod;">我猜你想问：</p>'
              var num ='';
              $.each(res.data,function(k,v){
                  var a = JSON.stringify(v);
                  if(num){
                    num =num+1;
                  }else{
                    num =1
                  }
                
                  str+='<div class="question" onclick="getanswer('+v.qid+')"><span>'+num+'. </span> '+v.question+'</div>';                 
              });

                str += "</pre></div></div>";
                str += "</li>";

              $(".conversation").append(str);
          }
       }
    });
  
}


function getanswer(id){

        $.ajax({
            url:'/admin/event/getanswer',
            type:'post',
            data:{qid:id},
            success:function(res){

                if(res.code == 0){
                    var str = '';
                        str += '<li class="chatmsg"><div class="showtime"></div>';
                        str += '<div  style="position: absolute;top: 26px;right: 2px;"><img  class="my-circle" src="' + pic + '" width="40px" height="40px"></div>';
                        str += "<div class='outer-right'><div class='customer'>";
                        str += "<pre>" + res.data.question + "</pre>";
                        str += "</div></div>";
                        str += "</li>";
                        $(".conversation").append(str);

                    var msg = '';
                        msg += '<li class="chatmsg"><div class="showtime"></div><div style="left:3px;">';
                        msg += '<img  class="my-circle se_pic" src="/assets/images/index/workerman_logo.png" width="40px" height="40px"></div>';
                        msg += "<div class='outer-left'><div class='service'>";
                        msg += "<pre><div class='markdown-body ' style='width:' >" +res.data.answer+ "</div></pre>";
                        msg += "</div></div>";
                        msg += "</li>";
                        $(".conversation").append(msg);
                        var div = document.getElementById("wrap");
                        div.scrollTop = div.scrollHeight;
                 }
            }
        });
}



// 获取排队的数量
function getnums(id){
    var value ="";
    $.ajax({
        url:"/admin/event/getwaitnum",
        type:"post",
        async: false,
        data:{business_id:id,groupid:cid},
        success:function(res){
          value =res;
        }
    });
   return value;
}

//发送消息

var send = function () {
    //获取 游客id
   
    var msg = $("#text_in").val();
    var reg = new RegExp( '<' , "g" )
    var msg2 =msg.replace(reg,'&lt;');

    var reg2 = new RegExp( '>' , "g" )     
        msg2 =msg2.replace(reg2,'&gt;'); 
       msg2 =msg2.replace('http://','');
     msg2 =msg2.replace('https://','');

     msg2=msg2.replace(/[a-z]+[.]{1}[a-z\d\-]+[.]{1}[a-z\d]*[\/]*[A-Za-z\d]*[\/]*[A-Za-z\d]*[\/]*[A-Za-z\d]*[\/]*[A-Za-z\d]/g,function (i) {
         
       return 'http://'+i;
    });    


    msg2=msg2.replace(/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,function (i) {
       
         a=i.replace('http://','');
        return '<a href="'+i+'" target="_blank">'+a+'</a>';
    });    
    

    if(msg2.indexOf("face[")!=-1){

       msg2=msg2.replace(/face\[([^\s\[\]]+?)\]/g,function (i) {
         var a = i.replace(/^face/g, "");
             a=a.replace('[','');
             a=a.replace(']','');  
         return '<img src="/upload/emoji/'+e[a]+'.gif"/>'
      });

    }
    
  
    if (msg == '' || $.cookie("service") == '') {
        layer.msg('请输入信息');
    } else {
        var time;

        if($.cookie("itime") == ""){
            var myDate = new Date();
                time = myDate.getHours()+":"+myDate.getMinutes();
            var timestamp = Date.parse(new Date());
            $.cookie("itime",timestamp/1000);
        
        }else{

            var timestamp = Date.parse(new Date());
            var lasttime =$.cookie("itime");
            if((timestamp/1000 - lasttime) >30){
                var myDate =new Date(timestamp);
                time = myDate.getHours()+":"+myDate.getMinutes();
            }else{
                time ="";
            }

            $.cookie("itime",timestamp/1000);
        }

        var str = '';
        str += '<li class="chatmsg"><div class="showtime">' + time + '</div>';
        str += '<div class="" style="position: absolute;top: 26px;right: 2px;"><img  class="my-circle cu_pic" src="' + pic + '" width="40px" height="40px"></div>';
        str += "<div class='outer-right'><div class='customer'>";
        str += "<pre>" + msg2 + "</pre>";
        str += "</div></div>";
        str += "</li>";

        $(".conversation").append(str);
        $("#text_in").val('');
        var div = document.getElementById("wrap");
        div.scrollTop = div.scrollHeight;

        $.ajax({
            url: "/admin/event/chat",
            type: "post",
            data: {visiter_id:visiter_id,content: msg2,business_id: business_id, avatar: pic,record: record,service_id:service_id},
            dataType:'json',
            success:function(res){
                if(res.code != 0){
                    layer.msg(res.msg,{icon:2});
                }
            }
        });
    }
}


document.getElementById("text_in").onkeydown = function (e) {
    e = e || window.event;
    if (e.ctrlKey && e.keyCode == 13) {
        if ($('#text_in').val() == "" || $.cookie("service") == '' ) {
            layer.msg('请输入信息');
        } else {
            send();
        }
    }
}

var loginout = function () {

    delCookie("visiter");

    $.ajax({
        url: "/admin/event/qdelete",
        type: "post",
        data: {channel: channel},
        success: function (res) {


            if (res) {
                window.history.go(-1);
            } else {

                window.history.go(-1);
            }
        }
    });
}

function delCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=a; expires=" + date.toGMTString();
}

