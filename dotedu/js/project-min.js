$(document).ready(function(){$("a").smoothScroll()});document.addEventListener("DOMContentLoaded",function(){function s(){var e=$(window).height(),t=$(window).width(),n;if(t>1200){n=1e3;$("#container-id").css({width:n,margin:"0 auto"})}else t<500?$("#container-id").css({width:"100%"}):$("#container-id").css({width:"100%"})}var e=Popcorn("#chickens"),t=$("#chickens").offset(),n=$(window).height(),r=$(window).width(),i;console.log(r);s();$(window).resize(function(){s()});$("button").click(function(){s();e.play()});e.code({start:28.5,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='yep'></button>");$("#footnotediv2").html("<button class='tbutton' id='ugh'></button>");e.pause();r>1200?$("#yep").css({top:t.top+"px",left:t.left+"px","margin-left":"38%","margin-top":"18%"}):r<500?$("#yep").css({top:t.top+"px",left:t.left+"px","margin-top":"10%","margin-left":"30%"}):$("#yep").css({top:t.top+"px",left:t.left+"px","margin-top":"20%","margin-left":"35%"});$("#yep").click(function(){e.play(28.5);$("button").hide();$("#progressbar").css("width","10%")});r>1200?$("#ugh").css({top:t.top+"px",left:t.left+"px","margin-left":"35%","margin-top":"30%"}):r<500?$("#ugh").css({top:t.top+"px",left:t.left+"px","margin-top":"40%","margin-left":"30%"}):$("#ugh").css({top:t.top+"px",left:t.left+"px","margin-top":"40%","margin-left":"35%"});$("#ugh").click(function(){e.play(28.5);$("button").hide();$("#progressbar").css("width","10%")})}});e.code({start:166,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='carly'></button>");$("#footnotediv2").html("<button class='tbutton' id='joe'></button>");$("#footnotediv3").html("<button class='tbutton' id='continue'>Continue</button>");e.pause();r>1200?$("#carly").css({top:t.top+"px",left:t.left+"px","margin-left":"45%"}):r<500?$("#carly").css({top:t.top+"px",left:t.left+"px","margin-top":"-50%","margin-left":"50%"}):$("#carly").css({top:t.top+"px",left:t.left+"px","margin-top":"0%","margin-left":"55%"});$("#carly").click(function(){e.play(186);$("button").hide();e.code({start:232,onStart:function(t){e.play(165)}})});r>1200?$("#joe").css({top:t.top+"px",left:t.left+"px","margin-left":"10%","margin-top":"15%"}):r<500?$("#joe").css({top:t.top+"px",left:t.left+"px"}):$("#joe").css({top:t.top+"px",left:t.left+"px","margin-top":"25%","margin-left":"5%"});$("#joe").click(function(){e.play(233);$("button").hide();e.code({start:263,onStart:function(t){e.play(165)}})});r>1200?$("#continue").css({top:t.top+"px",left:t.left+"px","margin-left":"15%","margin-top":"65%"}):r<500?$("#continue").css({top:t.top+"px",left:t.left+"px","margin-top":"5%","margin-left":"60%","font-size":".9em"}):$("#continue").css({top:t.top+"px",left:t.left+"px","margin-top":"25%","margin-left":"75%"});$("#continue").click(function(){e.play(263);$("button").hide();$("#progressbar").css("width","20%")})}});e.code({start:283,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='noway'></button>");$("#footnotediv2").html("<button class='tbutton' id='parents'></button>");$("#footnotediv3").html("<button class='tbutton' id='yesfafsa'></button>");e.pause();$("#yesfafsa").css({top:t.top+"px",left:t.left+"px"});$("#yesfafsa").click(function(){e.play(316);$("button").hide();$("#progressbar").css("width","35%")});$("#noway").css({top:t.top+"px",left:t.left+"px"});$("#noway").click(function(){e.play(1226);$("button").hide();$("#progressbar").css("width","35%");e.code({start:1262,onStart:function(t){e.play(316)}})});$("#parents").css({top:t.top+"px",left:t.left+"px"});$("#parents").click(function(){e.play(1226);$("button").hide();$("#progressbar").css("width","35%");e.code({start:1262,onStart:function(t){e.play(316)}})})}});e.code({start:354,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='keepgoing'></button>");e.pause();r>1200?$("#keepgoing").css({top:t.top+"px",left:t.left+"px","margin-left":"50%","margin-top":"18%"}):r<500?$("#keepgoing").css({top:t.top+"px",left:t.left+"px","margin-left":"50%"}):$("#keepgoing").css({top:t.top+"px",left:t.left+"px","margin-top":"32%","margin-left":"60%"});$("#keepgoing").click(function(){e.play(355);$("button").hide();$("#progressbar").css("width","45%")})}});e.code({start:436,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='call'></button>");$("#footnotediv2").html("<button class='tbutton' id='nocall'></button>");e.pause();$("#call").css({top:t.top+"px",left:t.left+"px"});$("#call").click(function(){e.play(442.5);$("button").hide();$("#progressbar").css("width","55%")});$("#nocall").css({top:t.top+"px",left:t.left+"px"});$("#nocall").click(function(){e.play(436);$("button").hide();$("#progressbar").css("width","55%")})}});e.code({start:768,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='frat'></button>");$("#footnotediv2").html("<button class='tbutton' id='football'></button>");$("#footnotediv3").html("<button class='tbutton' id='nicksparks'></button>");e.pause();$("#frat").css({top:t.top+"px",left:t.left+"px"});$("#frat").click(function(){e.play(768);$("button").hide();$("#progressbar").css("width","60%");e.code({start:780,onStart:function(t){e.play(808)}})});$("#football").css({top:t.top+"px",left:t.left+"px"});$("#football").click(function(){e.play(781);$("button").hide();$("#progressbar").css("width","60%");e.code({start:789,onStart:function(t){e.play(808)}})});$("#nicksparks").css({top:t.top+"px",left:t.left+"px"});$("#nicksparks").click(function(){e.play(790);$("button").hide();$("#progressbar").css("width","60%")})}});e.code({start:839,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='liveitup'></button>");$("#footnotediv2").html("<button class='tbutton' id='likemyfolks'></button>");e.pause();$("#liveitup").css({top:t.top+"px",left:t.left+"px"});$("#liveitup").click(function(){e.play(840);$("button").hide();$("#progressbar").css("width","70%")});$("#likemyfolks").css({top:t.top+"px",left:t.left+"px"});$("#likemyfolks").click(function(){e.play(1263);$("button").hide();$("#progressbar").css("width","70%")})}});e.code({start:854,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='keepon'></button>");e.pause();r>1200?$("#keepon").css({top:t.top+"px",left:t.left+"px","margin-left":"48%","margin-top":"14%"}):r<500?$("#keepon").css({top:t.top+"px",left:t.left+"px","margin-left":"50%"}):$("#keepon").css({top:t.top+"px",left:t.left+"px","margin-top":"23%","margin-left":"60%"});$("#keepon").click(function(){e.play(854);$("button").hide();$("#progressbar").css("width","70%")})}});e.code({start:919,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='all'></button>");$("#footnotediv2").html("<button class='tbutton' id='none'></button>");e.pause();$("#all").css({top:t.top+"px",left:t.left+"px"});$("#all").click(function(){e.play(919.5);$("button").hide();$("#progressbar").css("width","75%")});$("#none").css({top:t.top+"px",left:t.left+"px"});$("#none").click(function(){e.play(919.5);$("button").hide();$("#progressbar").css("width","75%")})}});e.code({start:1022,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='majormajormajor'></button>");$("#footnotediv2").html("<button class='tbutton' id='gimmetime'></button>");e.pause();$("#gimmetime").css({top:t.top+"px",left:t.left+"px"});$("#gimmetime").click(function(){e.play(1022.5);$("button").hide();$("#progressbar").css("width","80%")});$("#majormajormajor").css({top:t.top+"px",left:t.left+"px"});$("#majormajormajor").click(function(){e.play(1459.5);$("button").hide();$("#progressbar").css("width","80%")})}});e.code({start:1045,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='keepswimming'></button>");e.pause();r>1200?$("#keepswimming").css({top:t.top+"px",left:t.left+"px","margin-left":"15%","margin-top":"2%"}):r<500?$("#keepswimming").css({top:t.top+"px",left:t.left+"px","margin-left":"0%","margin-top":"5%"}):$("#keepswimming").css({top:t.top+"px",left:t.left+"px","margin-top":"5%","margin-left":"8%"});$("#keepswimming").click(function(){e.play(1475);$("button").hide();$("#progressbar").css("width","85%")});$("#keepswimming").click(function(){e.play(1046);$("button").hide();$("#progressbar").css("width","85%")})}});e.code({start:1072,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='ut'></button>");$("#footnotediv2").html("<button class='tbutton' id='os'></button>");$("#footnotediv3").html("<button class='tbutton' id='up'></button>");e.pause();$("#ut").css({top:t.top+"px",left:t.left+"px"});$("#ut").click(function(){e.play(1082);$("button").hide();$("#progressbar").css("width","65%")});$("#os").css({top:t.top+"px",left:t.left+"px"});$("#os").click(function(){e.play(1082);$("button").hide();$("#progressbar").css("width","65%")});$("#up").css({top:t.top+"px",left:t.left+"px"});$("#up").click(function(){e.play(1073);$("button").hide();$("#progressbar").css("width","65%");e.code({start:1081.5,onStart:function(t){e.play(1091.5)}})})}});e.code({start:1350,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='alltwo'></button>");$("#footnotediv2").html("<button class='tbutton' id='nonetwo'></button>");e.pause();$("#alltwo").css({top:t.top+"px",left:t.left+"px"});$("#alltwo").click(function(){e.play(1350.5);$("button").hide();$("#progressbar").css("width","75%")});$("#nonetwo").css({top:t.top+"px",left:t.left+"px"});$("#nonetwo").click(function(){e.play(1350.5);$("button").hide();$("#progressbar").css("width","75%")})}});e.code({start:1459,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='majormajormajortwo'></button>");$("#footnotediv2").html("<button class='tbutton' id='gimmetimetwo'></button>");e.pause();$("#gimmetwo").css({top:t.top+"px",left:t.left+"px"});$("#gimmetimetwo").click(function(){e.play(1022.5);$("button").hide();$("#progressbar").css("width","80%")});$("#majormajormajortwo").css({top:t.top+"px",left:t.left+"px"});$("#majormajormajortwo").click(function(){e.play(1459.5);$("button").hide();$("#progressbar").css("width","80%")})}});e.code({start:1474,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='keepswimmingtwo'></button>");e.pause();r>1200?$("#keepswimmingtwo").css({top:t.top+"px",left:t.left+"px","margin-left":"55%","margin-top":"0%"}):r<500?$("#keepswimmingtwo").css({top:t.top+"px",left:t.left+"px","margin-left":"5%","margin-top":"50%"}):$("#keepswimmingtwo").css({top:t.top+"px",left:t.left+"px","margin-top":"5%","margin-left":"63%"});$("#keepswimmingtwo").click(function(){e.play(1475);$("button").hide();$("#progressbar").css("width","85%")})}});e.code({start:1208,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='hellno'></button>");$("#footnotediv2").html("<button class='tbutton' id='letsgo'></button>");e.pause();$("#hellno").css({top:t.top+"px",left:t.left+"px"});$("#hellno").click(function(){e.play(1668.5);$("button").hide();$("#progressbar").css("width","70%");e.code({start:1700,onStart:function(t){e.play(1722)}})});$("#letsgo").css({top:t.top+"px",left:t.left+"px"});$("#letsgo").click(function(){e.play(1700.5);$("button").hide();$("#progressbar").css("width","70%")})}});e.code({start:1518,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='uttwo'></button>");$("#footnotediv2").html("<button class='tbutton' id='ostwo'></button>");$("#footnotediv3").html("<button class='tbutton' id='uptwo'></button>");e.pause();$("#uttwo").css({top:t.top+"px",left:t.left+"px"});$("#uttwo").click(function(){e.play(1533);$("button").hide();$("#progressbar").css("width","90%")});$("#ostwo").css({top:t.top+"px",left:t.left+"px"});$("#ostwo").click(function(){e.play(1533);$("button").hide();$("#progressbar").css("width","90%")});$("#uptwo").css({top:t.top+"px",left:t.left+"px"});$("#uptwo").click(function(){e.play(1518.5);$("button").hide();$("#progressbar").css("width","90%");e.code({start:1532.5,onStart:function(t){e.play(1544)}})})}});e.code({start:1656,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='hellnotwo'></button>");$("#footnotediv2").html("<button class='tbutton' id='letsgotwo'></button>");e.pause();r>1200?$("#hellnotwo").css({top:t.top+"px",left:t.left+"px","margin-left":"65%","margin-top":"28%"}):r<500?$("#hellnotwo").css({top:t.top+"px",left:t.left+"px","margin-left":"50%"}):$("#hellnotwo").css({top:t.top+"px",left:t.left+"px","margin-top":"40%","margin-left":"70%"});$("#hellnotwo").click(function(){e.play(1658);$("button").hide();$("#progressbar").css("width","70%");e.code({start:1668,onStart:function(t){e.play(1722)}})});r>1200?$("#letsgotwo").css({top:t.top+"px",left:t.left+"px","margin-left":"65%","margin-top":"18%"}):r<500?$("#letsgotwo").css({top:t.top+"px",left:t.left+"px","margin-left":"50%"}):$("#letsgotwo").css({top:t.top+"px",left:t.left+"px","margin-top":"25%","margin-left":"70%"});$("#letsgotwo").click(function(){e.play(1668.5);$("button").hide();$("#progressbar").css("width","70%");e.code({start:1700,onStart:function(t){e.play(1722)}})})}});e.code({start:1750,onStart:function(n){var i=Math.floor(Math.random()*100+1);$("#footnotediv").html("<button class='tbutton' id='results'></button>");$("#results").addClass(i);e.pause();r>1200?$("#results").css({top:t.top+"px",left:t.left+"px","margin-left":"38%","margin-top":"18%"}):r<500?$("#results").css({top:t.top+"px",left:t.left+"px","margin-left":"50%"}):$("#results").css({top:t.top+"px",left:t.left+"px","margin-top":"12%","margin-left":"60%"});$("#results").click(function(){if(i<30){e.play(1753);$("button").hide();$("#progressbar").css("width","100%");e.code({start:1773.5,onStart:function(t){e.play(1840)}})}else if(30<i<55){e.play(1774);$("button").hide();$("#progressbar").css("width","100%");e.code({start:1795.5,onStart:function(t){e.play(1840)}})}else if(55<i<80){e.play(1795.5);$("button").hide();$("#progressbar").css("width","100%");e.code({start:1823,onStart:function(t){e.play(1840)}})}else{e.play(1823);$("button").hide();$("#progressbar").css("width","100%")}})}});e.code({start:1780,onStart:function(n){var i=Math.floor(Math.random()*100+1);$("#footnotediv").html("<button class='tbutton' id='results'></button>");$("#results").addClass(i);e.pause();r>1200?$("#results").css({top:t.top+"px",left:t.left+"px","margin-left":"38%","margin-top":"18%"}):r<500?$("#results").css({top:t.top+"px",left:t.left+"px","margin-left":"50%"}):$("#results").css({top:t.top+"px",left:t.left+"px","margin-top":"12%","margin-left":"60%"});$("#results").click(function(){if(i<30){e.play(1753);$("button").hide();$("#progressbar").css("width","100%");e.code({start:1773.5,onStart:function(t){e.play(1840)}})}else if(30<i<55){e.play(1774);$("button").hide();$("#progressbar").css("width","100%");e.code({start:1795.5,onStart:function(t){e.play(1840)}})}else if(55<i<80){e.play(1795.5);$("button").hide();$("#progressbar").css("width","100%");e.code({start:1823,onStart:function(t){e.play(1840)}})}else{e.play(1823);$("button").hide();$("#progressbar").css("width","100%")}})}});e.code({start:1862,onStart:function(n){$("#footnotediv").html("<button class='tbutton' id='playagain'></button>");r>1200?$("#playagain").css({top:t.top+"px",left:t.left+"px","margin-left":"38%","margin-top":"18%"}):r<500?$("#playagain").css({top:t.top+"px",left:t.left+"px","margin-left":"25%"}):$("#playagain").css({top:t.top+"px",left:t.left+"px","margin-top":"18%","margin-left":"35%"});$("#playagain").click(function(){e.play(0);$("#button").hide();$("#progressbar").css("width","0%")})}})},!1);