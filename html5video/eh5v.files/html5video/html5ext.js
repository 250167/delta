/**
 *	EasyHTML5Video JavaScript Extension API version 1.2
 *	Created by EasyHTML5Video.com
 *	Modified 14:07 04.02.2015
 *	This file content fullscreen api
 */
!function(){function e(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent("on"+n,t)}function n(e,n,t){e.removeEventListener?e.removeEventListener(n,t):e.detachEvent("on"+n,t)}function t(e,n){e.length||(e=[e]);for(var t in n)for(var o=0;o<e.length;o++)e[o].style[t]=n[t]}function o(e,n){if(n=n||document,document.getElementsByClassName)return n.getElementsByClassName(e);for(var t=n.getElementsByTagName("*"),o=[],i=0;i<t.length;i++)if(new RegExp("(^|\\s+)"+e+"(\\s+|$)","g").test(t[i].className)){o.push(t[i]);break}return o}function i(e){if(!c)return!!e.eh5v;switch(s){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;default:return document[s+"FullScreen"]}}function l(n){if(c)return""===s?n.requestFullScreen():n[s+"RequestFullScreen"]();if(n){v&&r(v);var t={position:"fixed",left:0,top:0,right:"auto",bottom:"auto",width:window.innerWidth+"px",height:window.innerHeight+"px",backgroundColor:"rgba(0,0,0,0.9)",border:"none",zIndex:9999999};n.eh5v={};for(var o in t)n.eh5v[o]=n.style[o];for(var o in t)n.style[o]=t[o];e(document.body,"keydown",a),v=n}}function r(e){if(c)return""===s?document.cancelFullScreen():document[s+"CancelFullScreen"]();if(e){for(var t in e.eh5v)e.style[t]=e.eh5v[t];e.eh5v=0,n(document.body,"keydown",a),v=0}}function a(e){27==e.keyCode&&r(v)}function u(n,o){function a(){p.style.display="none"}function u(){h.style.display="none"}function c(){b.unmute.item.style.display=s.muted?"block":"none",b.mute.item.style.display=s.muted?"none":"block",b.play.item.style.display=s.paused?"block":"none",b.pause.item.style.display=s.paused?"none":"block"}var s=n.getElementsByTagName("video")[0];if(s){if(/(iPad|iPhone|iPod)/gi.test(navigator.userAgent)){var d=new Image;d.style.visibility="hidden",d.src=s.poster,n.appendChild(d),s.style.position="absolute",s.style.height="100%"}if(s.eh5v)return;s.eh5v={fullScreen:function(e){return e?l(s):i(s)&&r(s),i(s)}};var p;if(!o.noFS&&s.getAttribute("controls")&&(window.opera||/MSIE/.test(navigator.userAgent)||navigator.mozVibrate)){var f=/(.*\/)[^\/]+/.exec(s.poster)[1]+"fullscreen.png";m||(m=new Image,m.src=f),p=document.createElement("div"),t(p,{position:"absolute",zIndex:10,display:"none",right:"0px",top:"0px",width:"28px",height:"28px",background:'rgba(0,0,0,0.50) url("'+f+'") 50% 50% no-repeat',border:"none"}),s.parentNode.appendChild(p),e(s,"mouseover",function(){p.style.display="block"}),e(s,"mouseout",function(){a()}),e(p,"mouseover",function(){p.style.display="block"}),e(p,"click",function(){l(s),a()})}if(e(s,"dblclick",function(){i(s)?r(s):l(s),p&&setTimeout(a,100)}),s.getAttribute("loop")||e(s,"ended",function(){setTimeout(function(){s.load(),s.pause()},400)}),/Android/.test(navigator.userAgent))for(var v,y=s.getElementsByTagName("source"),g=y.length-1;g>=0;g--)y[g].type?v&&/mp4/.test(y[g].type)&&(y[g].src=v,s.load()):v=y[g].src;if(o.preventCopy){var h=document.createElement("ul"),b={pause:{label:"Pause",click:function(){s.pause()}},play:{label:"Play",click:function(){s.play()}},mute:{label:"Mute",click:function(){s.muted=!0}},unmute:{label:"Unmute",click:function(){s.muted=!1}}};t(h,{position:"absolute",display:"none",listStyleType:"none",margin:"0px",padding:"0px",background:"#fff",cursor:"pointer",zIndex:2147483647,WebkitBoxShadow:"2px 2px 10px #313131",MozBoxShadow:"2px 2px 10px #313131",boxShadow:"2px 2px 10px #313131"}),e(h,"contextmenu",function(e){e.preventDefault()}),e(h,"click",u),e(window,"resize",u),e(document,"click",u),e(document,"contextmenu",u);for(var x in b){var k=document.createElement("li");t(k,{margin:"0px",padding:"3px 20px"}),k.innerHTML=b[x].label,h.appendChild(k),e(k,"click",b[x].click),e(k,"mouseover",function(){t(this,{backgroundColor:"#4281F4",color:"#fff"})}),e(k,"mouseleave",function(){t(this,{backgroundColor:"transparent",color:"#000"})}),b[x].item=k}n.appendChild(h),e(s,"contextmenu",function(e){t(h,{left:e.offsetX+"px",top:e.offsetY+"px",display:"block"}),e.preventDefault(),e.stopPropagation()}),e(window,"load",c),e(s,"pause",c),e(s,"play",c),e(s,"volumechange",c)}}}var c=0,s="";if("undefined"!=typeof document.cancelFullScreen)c=!0;else for(var d="webkit moz o ms khtml".split(" "),p=0,f=d.length;f>p;p++)if(s=d[p],"undefined"!=typeof document[s+"CancelFullScreen"]){c=!0;break}for(var m,v=0,y=o("easyhtml5video"),p=0;p<y.length;p++)u(y[p],{noFS:0,preventCopy:1})}();