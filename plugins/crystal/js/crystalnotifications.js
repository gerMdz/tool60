// =======================================================================================
// 
// Crystal Notifications v2.1
//
// v2.1 changelog
// 		- Fix some issues with the notification panel in IE
// 		- Fix some z-index problems 
//
//
//
//
// Author: Klerith
// Page: http://codecanyon.net/user/klerith
// Email: fernando.herrera85@gmail.com BUT, first send me a message through codecanyon page.
//        That's because some people stole the code and ask me support when they are not a customer :(
//
// =======================================================================================



(function ($) 
{

var cnEmptyMessage = "You don't have any notifications.";
var cn = 0;
var NcSwiper;

    // Tweenlite
    (window._gsQueue||(window._gsQueue=[])).push(function(){_gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a){"use strict";var d,e,f,g,c=function(){a.call(this,"css"),this._overwriteProps.length=0},h={},i=c.prototype=new a("css");i.constructor=c,c.version="1.8.0",c.API=2,c.defaultTransformPerspective=0,i="px",c.suffixMap={top:i,right:i,bottom:i,left:i,width:i,height:i,fontSize:i,padding:i,margin:i,perspective:i};var G,H,I,J,K,L,j=/(?:\d|\-\d|\.\d|\-\.\d)+/g,k=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,l=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,m=/[^\d\-\.]/g,n=/(?:\d|\-|\+|=|#|\.)*/g,o=/opacity *= *([^)]*)/,p=/opacity:([^;]*)/,q=/alpha\(opacity *=.+?\)/i,r=/([A-Z])/g,s=/-([a-z])/gi,t=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,u=function(a,b){return b.toUpperCase()},v=/(?:Left|Right|Width)/i,w=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,x=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,y=Math.PI/180,z=180/Math.PI,A={},B=document,C=B.createElement("div"),D=B.createElement("img"),E=c._internals={_specialProps:h},F=navigator.userAgent,M=function(){var c,a=F.indexOf("Android"),b=B.createElement("div");return I=-1!==F.indexOf("Safari")&&-1===F.indexOf("Chrome")&&(-1===a||Number(F.substr(a+8,1))>3),K=I&&6>Number(F.substr(F.indexOf("Version/")+8,1)),J=-1!==F.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F),L=parseFloat(RegExp.$1),b.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",c=b.getElementsByTagName("a")[0],c?/^0.55/.test(c.style.opacity):!1}(),N=function(a){return o.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},O=function(a){window.console&&console.log(a)},P="",Q="",R=function(a,b){b=b||C;var d,e,c=b.style;if(void 0!==c[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),d=["O","Moz","ms","Ms","Webkit"],e=5;--e>-1&&void 0===c[d[e]+a];);return e>=0?(Q=3===e?"ms":d[e],P="-"+Q.toLowerCase()+"-",Q+a):null},S=B.defaultView?B.defaultView.getComputedStyle:function(){},T=c.getStyle=function(a,b,c,d,e){var f;return M||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||S(a,null))?(a=c.getPropertyValue(b.replace(r,"-$1").toLowerCase()),f=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,f=c[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):N(a)},U=function(a,b,c){var f,g,d={},e=a._gsOverwrittenClassNamePT;if(e&&!c){for(;e;)e.setRatio(0),e=e._next;a._gsOverwrittenClassNamePT=null}if(b=b||S(a,null))if(f=b.length)for(;--f>-1;)d[b[f].replace(s,u)]=b.getPropertyValue(b[f]);else for(f in b)d[f]=b[f];else if(b=a.currentStyle||a.style)for(f in b)d[f.replace(s,u)]=b[f];return M||(d.opacity=N(a)),g=wb(a,b,!1),d.rotation=g.rotation*z,d.skewX=g.skewX*z,d.scaleX=g.scaleX,d.scaleY=g.scaleY,d.x=g.x,d.y=g.y,vb&&(d.z=g.z,d.rotationX=g.rotationX*z,d.rotationY=g.rotationY*z,d.scaleZ=g.scaleZ),d.filters&&delete d.filters,d},V=function(a,b,c,d){var g,h,i,e={},f=a.style;for(h in c)"cssText"!==h&&"length"!==h&&isNaN(h)&&b[h]!==(g=c[h])&&-1===h.indexOf("Origin")&&("number"==typeof g||"string"==typeof g)&&(e[h]=""!==g&&"auto"!==g&&"none"!==g||"string"!=typeof b[h]||""===b[h].replace(m,"")?g:0,void 0!==f[h]&&(i=new jb(f,h,f[h],i)));if(d)for(h in d)"className"!==h&&(e[h]=d[h]);return{difs:e,firstMPT:i}},W={width:["Left","Right"],height:["Top","Bottom"]},X=["marginLeft","marginRight","marginTop","marginBottom"],Y=function(a,b,c){var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=W[b],f=e.length;for(c=c||S(a,null);--f>-1;)d-=parseFloat(T(a,"padding"+e[f],c,!0))||0,d-=parseFloat(T(a,"border"+e[f]+"Width",c,!0))||0;return d},Z=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var j,f=v.test(b),g=a,h=C.style,i=0>c;return i&&(c=-c),"%"===d&&-1!==b.indexOf("border")?j=c/100*(f?a.clientWidth:a.clientHeight):(h.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==d&&"em"!==d&&g.appendChild?h[f?"borderLeftWidth":"borderTopWidth"]=c+d:(g=a.parentNode||B.body,h[f?"width":"height"]=c+d),g.appendChild(C),j=parseFloat(C[f?"offsetWidth":"offsetHeight"]),g.removeChild(C),0!==j||e||(j=Z(a,b,c,d,!0))),i?-j:j},$=function(a,b){(null==a||""===a||"auto"===a||"auto auto"===a)&&(a="0 0");var c=a.split(" "),d=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":c[0],e=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":c[1];return null==e?e="0":"center"===e&&(e="50%"),("center"===d||isNaN(parseFloat(d)))&&(d="50%"),b&&(b.oxp=-1!==d.indexOf("%"),b.oyp=-1!==e.indexOf("%"),b.oxr="="===d.charAt(1),b.oyr="="===e.charAt(1),b.ox=parseFloat(d.replace(m,"")),b.oy=parseFloat(e.replace(m,""))),d+" "+e+(c.length>2?" "+c[2]:"")},_=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)},ab=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*Number(a.substr(2))+b:parseFloat(a)},bb=function(a,b){if(null==a)return b;var c=-1===a.indexOf("rad")?y:1,d="="===a.charAt(1);return a=Number(a.replace(m,""))*c,d?a+b:a},cb=function(a,b){var c="number"==typeof a?a*y:bb(a,b),d=(c-b)%(2*Math.PI);return d!==d%Math.PI&&(d+=Math.PI*(0>d?2:-2)),b+d},db={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},eb=function(a){if(!a||""===a)return db.black;if(db[a])return db[a];if("number"==typeof a)return[a>>16,255&a>>8,255&a];if("#"===a.charAt(0)){if(4===a.length){var b=a.charAt(1),c=a.charAt(2),d=a.charAt(3);a="#"+b+b+c+c+d+d}return a=parseInt(a.substr(1),16),[a>>16,255&a>>8,255&a]}return a=a.match(j)||db.transparent,a[0]=Number(a[0]),a[1]=Number(a[1]),a[2]=Number(a[2]),a.length>3&&(a[3]=Number(a[3])),a},fb="(?:\\b(?:(?:rgb|rgba)\\(.+?\\))|\\B#.+?\\b";for(i in db)fb+="|"+i+"\\b";fb=RegExp(fb+")","gi");var gb=function(a,b,c){if(null==a)return function(a){return a};var d=b?(a.match(fb)||[""])[0]:"",e=a.split(d).join("").match(l)||[],f=a.substr(0,a.indexOf(e[0])),g=")"===a.charAt(a.length-1)?")":"",h=-1!==a.indexOf(" ")?" ":",",i=e.length,k=i>0?e[0].replace(j,""):"";return b?function(a){"number"==typeof a&&(a+=k);var b=(a.match(fb)||[d])[0],j=a.split(b).join("").match(l)||[],m=j.length;if(i>m--)for(;i>++m;)j[m]=c?j[(m-1)/2>>0]:e[m];return f+j.join(h)+h+b+g}:function(a){"number"==typeof a&&(a+=k);var b=a.match(l)||[],d=b.length;if(i>d--)for(;i>++d;)b[d]=c?b[(d-1)/2>>0]:e[d];return f+b.join(h)+g}},hb=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var j,i=(c+"").split(" ");for(h={},j=0;4>j;j++)h[a[j]]=i[j]=i[j]||i[(j-1)/2>>0];return e.parse(b,h,f,g)}},jb=(E._setPluginRatio=function(a){this.plugin.setRatio(a);for(var f,g,h,i,b=this.data,c=b.proxy,d=b.firstMPT,e=1e-6;d;)f=c[d.v],d.r?f=f>0?f+.5>>0:f-.5>>0:e>f&&f>-e&&(f=0),d.t[d.p]=f,d=d._next;if(b.autoRotate&&(b.autoRotate.rotation=c.rotation),1===a)for(d=b.firstMPT;d;){if(g=d.t,g.type){if(1===g.type){for(i=g.xs0+g.s+g.xs1,h=1;g.l>h;h++)i+=g["xn"+h]+g["xs"+(h+1)];g.e=i}}else g.e=g.s+g.xs0;d=d._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),lb=(E._parseToProxy=function(a,b,c,d,e,f){var l,m,n,o,p,g=d,h={},i={},j=c._transform,k=A;for(c._transform=null,A=b,d=p=c.parse(a,b,d,e),A=k,f&&(c._transform=j,g&&(g._prev=null,g._prev&&(g._prev._next=null)));d&&d!==g;){if(1>=d.type&&(m=d.p,i[m]=d.s+d.c,h[m]=d.s,f||(o=new jb(d,"s",m,o,d.r),d.c=0),1===d.type))for(l=d.l;--l>0;)n="xn"+l,m=d.p+"_"+n,i[m]=d.data[n],h[m]=d[n],f||(o=new jb(d,n,m,o,d.rxp[n]));d=d._next}return{proxy:h,end:i,firstMPT:o,pt:p}},E.CSSPropTween=function(a,b,c,e,f,h,i,j,k,l,m){this.t=a,this.p=b,this.s=c,this.c=e,this.n=i||"css_"+b,a instanceof lb||g.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,d=!0),this.b=void 0===l?c:l,this.e=void 0===m?c+e:m,f&&(this._next=f,f._prev=this)}),mb=c.parseComplex=function(a,b,c,d,e,f,g,h,i,l){g=new lb(a,b,0,0,g,l?2:1,null,!1,h,c,d);var q,r,s,t,u,v,w,x,y,z,A,B,m=c.split(", ").join(",").split(" "),n=(d+"").split(", ").join(",").split(" "),o=m.length,p=G!==!1;for(o!==n.length&&(m=(f||"").split(" "),o=m.length),g.plugin=i,g.setRatio=l,q=0;o>q;q++)if(t=m[q],u=n[q],x=parseFloat(t),x||0===x)g.appendXtra("",x,_(u,x),u.replace(k,""),p&&-1!==u.indexOf("px"),!0);else if(e&&("#"===t.charAt(0)||0===t.indexOf("rgb")||db[t]))t=eb(t),u=eb(u),y=t.length+u.length>6,y&&!M&&0===u[3]?(g["xs"+g.l]+=g.l?" transparent":"transparent",g.e=g.e.split(n[q]).join("transparent")):(M||(y=!1),g.appendXtra(y?"rgba(":"rgb(",t[0],u[0]-t[0],",",!0,!0).appendXtra("",t[1],u[1]-t[1],",",!0).appendXtra("",t[2],u[2]-t[2],y?",":")",!0),y&&(t=4>t.length?1:t[3],g.appendXtra("",t,(4>u.length?1:u[3])-t,")",!1)));else if(v=t.match(j)){if(w=u.match(k),!w||w.length!==v.length)return g;for(s=0,r=0;v.length>r;r++)A=v[r],z=t.indexOf(A,s),g.appendXtra(t.substr(s,z-s),Number(A),_(w[r],A),"",p&&"px"===t.substr(z+A.length,2),0===r),s=z+A.length;g["xs"+g.l]+=t.substr(s)}else g["xs"+g.l]+=g.l?" "+t:t;if(-1!==d.indexOf("=")&&g.data){for(B=g.xs0+g.data.s,q=1;g.l>q;q++)B+=g["xs"+q]+g.data["xn"+q];g.e=B+g["xs"+q]}return g.l||(g.type=-1,g.xs0=g.e),g.xfirst||g},nb=9;for(i=lb.prototype,i.l=i.pr=0;--nb>0;)i["xn"+nb]=0,i["xs"+nb]="";i.xs0="",i._next=i._prev=i.xfirst=i.data=i.plugin=i.setRatio=i.rxp=null,i.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&h?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new lb(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var ob=function(a,b,c,d,e,f,g){this.p=d?R(a)||a:a,h[a]=h[this.p]=this,this.format=f||gb(b,e),c&&(this.parse=c),this.clrs=e,this.dflt=b,this.pr=g||0},pb=E._registerComplexSpecialProp=function(a,b,c,d,e,f,g){for(var k,h=a.split(","),i=b instanceof Array?b:[b],j=h.length;--j>-1;)k=new ob(h[j],i[j],c,d&&0===j,e,f,g)},qb=function(a){if(!h[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";pb(a,null,function(a,c,d,e,f,g,i){var j=(window.GreenSockGlobals||window).com.greensock.plugins[b];return j?(j._cssRegister(),h[d].parse(a,c,d,e,f,g,i)):(O("Error: "+b+" js file not loaded."),f)})}};i=ob.prototype,i.parseComplex=function(a,b,c,d,e,f){return mb(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},i.parse=function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(T(a,c,f,!1,this.dflt)),this.format(b),e,g)},c.registerSpecialProp=function(a,b,c){pb(a,null,function(a,d,e,f,g,h){var j=new lb(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},!1,!1,null,c)};var rb=["scaleX","scaleY","scaleZ","x","y","z","skewX","rotation","rotationX","rotationY","perspective"],sb=R("transform"),tb=P+"transform",ub=R("transformOrigin"),vb=null!==R("perspective"),wb=function(a,b,d){var l,m,n,o,p,q,r,s,t,u,v,x,e=d?a._gsTransform||{skewY:0}:{skewY:0},f=0>e.scaleX,g=2e-5,h=1e5,i=-Math.PI+1e-4,j=Math.PI-1e-4,k=vb?parseFloat(T(a,ub,b,!1,"0 0 0").split(" ")[2])||e.zOrigin||0:0;for(sb?l=T(a,tb,b,!0):a.currentStyle&&(l=a.currentStyle.filter.match(w),l=l&&4===l.length?l[0].substr(4)+","+Number(l[2].substr(4))+","+Number(l[1].substr(4))+","+l[3].substr(4)+","+(e?e.x:0)+","+(e?e.y:0):null),m=(l||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],n=m.length;--n>-1;)o=Number(m[n]),m[n]=(o*h+(0>o?-.5:.5)>>0)/h;if(16===m.length){var y=m[8],z=m[9],A=m[10],B=m[12],C=m[13],D=m[14];if(e.zOrigin&&(D=-e.zOrigin,B=y*D-m[12],C=z*D-m[13],D=A*D+e.zOrigin-m[14]),!d||B!==e.x||C!==e.y||D!==e.z){var P,Q,R,S,U,V,W,X,E=m[0],F=m[1],G=m[2],H=m[3],I=m[4],J=m[5],K=m[6],L=m[7],M=m[11],N=e.rotationX=Math.atan2(K,A),O=i>N||N>j;N&&(U=Math.cos(-N),V=Math.sin(-N),P=I*U+y*V,Q=J*U+z*V,R=K*U+A*V,S=L*U+M*V,y=I*-V+y*U,z=J*-V+z*U,A=K*-V+A*U,M=L*-V+M*U,I=P,J=Q,K=R),N=e.rotationY=Math.atan2(y,E),N&&(W=i>N||N>j,U=Math.cos(-N),V=Math.sin(-N),P=E*U-y*V,Q=F*U-z*V,R=G*U-A*V,S=H*U-M*V,z=F*V+z*U,A=G*V+A*U,M=H*V+M*U,E=P,F=Q,G=R),N=e.rotation=Math.atan2(F,J),N&&(X=i>N||N>j,U=Math.cos(-N),V=Math.sin(-N),E=E*U+I*V,Q=F*U+J*V,J=F*-V+J*U,K=G*-V+K*U,F=Q),X&&O?e.rotation=e.rotationX=0:X&&W?e.rotation=e.rotationY=0:W&&O&&(e.rotationY=e.rotationX=0),e.scaleX=(Math.sqrt(E*E+F*F)*h+.5>>0)/h,e.scaleY=(Math.sqrt(J*J+z*z)*h+.5>>0)/h,e.scaleZ=(Math.sqrt(K*K+A*A)*h+.5>>0)/h,e.skewX=0,e.perspective=M?1/M:0,e.x=B,e.y=C,e.z=D}}else if(!vb||0===m.length||e.x!==m[4]||e.y!==m[5]||!e.rotationX&&!e.rotationY){var Y=m.length>=6,Z=Y?m[0]:1,$=m[1]||0,_=m[2]||0,ab=Y?m[3]:1;e.x=m[4]||0,e.y=m[5]||0,p=Math.sqrt(Z*Z+$*$),q=Math.sqrt(ab*ab+_*_),r=Z||$?Math.atan2($,Z):e.rotation||0,s=_||ab?Math.atan2(_,ab)+r:e.skewX||0,t=p-Math.abs(e.scaleX||0),u=q-Math.abs(e.scaleY||0),Math.abs(s)>Math.PI/2&&Math.abs(s)<1.5*Math.PI&&(f?(p*=-1,s+=0>=r?Math.PI:-Math.PI,r+=0>=r?Math.PI:-Math.PI):(q*=-1,s+=0>=s?Math.PI:-Math.PI)),v=(r-e.rotation)%Math.PI,x=(s-e.skewX)%Math.PI,(void 0===e.skewX||t>g||-g>t||u>g||-g>u||v>i&&j>v&&0!==v*h>>0||x>i&&j>x&&0!==x*h>>0)&&(e.scaleX=p,e.scaleY=q,e.rotation=r,e.skewX=s),vb&&(e.rotationX=e.rotationY=e.z=0,e.perspective=parseFloat(c.defaultTransformPerspective)||0,e.scaleZ=1)}e.zOrigin=k;for(n in e)g>e[n]&&e[n]>-g&&(e[n]=0);return d&&(a._gsTransform=e),e},xb=function(a){var l,m,b=this.data,c=-b.rotation,d=c+b.skewX,e=1e5,f=(Math.cos(c)*b.scaleX*e>>0)/e,g=(Math.sin(c)*b.scaleX*e>>0)/e,h=(Math.sin(d)*-b.scaleY*e>>0)/e,i=(Math.cos(d)*b.scaleY*e>>0)/e,j=this.t.style,k=this.t.currentStyle;if(k){m=g,g=-h,h=-m,l=k.filter,j.filter="";var v,w,p=this.t.offsetWidth,q=this.t.offsetHeight,r="absolute"!==k.position,s="progid:DXImageTransform.Microsoft.Matrix(M11="+f+", M12="+g+", M21="+h+", M22="+i,t=b.x,u=b.y;if(null!=b.ox&&(v=(b.oxp?.01*p*b.ox:b.ox)-p/2,w=(b.oyp?.01*q*b.oy:b.oy)-q/2,t+=v-(v*f+w*g),u+=w-(v*h+w*i)),r)v=p/2,w=q/2,s+=", Dx="+(v-(v*f+w*g)+t)+", Dy="+(w-(v*h+w*i)+u)+")";else{var z,A,B,y=8>L?1:-1;for(v=b.ieOffsetX||0,w=b.ieOffsetY||0,b.ieOffsetX=Math.round((p-((0>f?-f:f)*p+(0>g?-g:g)*q))/2+t),b.ieOffsetY=Math.round((q-((0>i?-i:i)*q+(0>h?-h:h)*p))/2+u),nb=0;4>nb;nb++)A=X[nb],z=k[A],m=-1!==z.indexOf("px")?parseFloat(z):Z(this.t,A,parseFloat(z),z.replace(n,""))||0,B=m!==b[A]?2>nb?-b.ieOffsetX:-b.ieOffsetY:2>nb?v-b.ieOffsetX:w-b.ieOffsetY,j[A]=(b[A]=Math.round(m-B*(0===nb||2===nb?1:y)))+"px";s+=", sizingMethod='auto expand')"}j.filter=-1!==l.indexOf("DXImageTransform.Microsoft.Matrix(")?l.replace(x,s):s+" "+l,(0===a||1===a)&&1===f&&0===g&&0===h&&1===i&&(r&&-1===s.indexOf("Dx=0, Dy=0")||o.test(l)&&100!==parseFloat(RegExp.$1)||-1===l.indexOf("gradient(")&&j.removeAttribute("filter"))}},yb=function(){var x,y,z,A,B,C,D,E,F,b=this.data,c=this.t.style,d=b.perspective,e=b.scaleX,f=0,g=0,h=0,i=0,j=b.scaleY,k=0,l=0,m=0,n=0,o=b.scaleZ,p=0,q=0,r=0,s=d?-1/d:0,t=b.rotation,u=b.zOrigin,v=",",w=1e5;J&&(D=T(this.t,"top",null,!1,"0"),E=parseFloat(D)||0,F=D.substr((E+"").length),b._ffFix=!b._ffFix,c.top=(b._ffFix?E+.05:E-.05)+(""===F?"px":F)),t&&(x=Math.cos(t),y=Math.sin(t),z=e*x,A=j*y,f=e*-y,j*=x,e=z,i=A),t=b.rotationY,t&&(x=Math.cos(t),y=Math.sin(t),z=e*x,A=i*x,B=o*-y,C=s*-y,g=e*y,k=i*y,o*=x,s*=x,e=z,i=A,m=B,q=C),t=b.rotationX,t&&(x=Math.cos(t),y=Math.sin(t),z=f*x+g*y,A=j*x+k*y,B=n*x+o*y,C=r*x+s*y,g=f*-y+g*x,k=j*-y+k*x,o=n*-y+o*x,s=r*-y+s*x,f=z,j=A,n=B,r=C),u&&(p-=u,h=g*p,l=k*p,p=o*p+u),h+=b.x,l+=b.y,p=((p+b.z)*w>>0)/w,c[sb]="matrix3d("+(e*w>>0)/w+v+(i*w>>0)/w+v+(m*w>>0)/w+v+(q*w>>0)/w+v+(f*w>>0)/w+v+(j*w>>0)/w+v+(n*w>>0)/w+v+(r*w>>0)/w+v+(g*w>>0)/w+v+(k*w>>0)/w+v+(o*w>>0)/w+v+(s*w>>0)/w+v+(h*w>>0)/w+v+(l*w>>0)/w+v+p+v+(d?1+-p/d:1)+")"},zb=function(){var d,e,f,g,h,i,j,k,b=this.data,c=this.t;J&&(d=T(c,"top",null,!1,"0"),e=parseFloat(d)||0,f=d.substr((e+"").length),b._ffFix=!b._ffFix,c.style.top=(b._ffFix?e+.05:e-.05)+(""===f?"px":f)),b.rotation||b.skewX?(g=b.rotation,h=g-b.skewX,i=1e5,j=b.scaleX*i,k=b.scaleY*i,c.style[sb]="matrix("+(Math.cos(g)*j>>0)/i+","+(Math.sin(g)*j>>0)/i+","+(Math.sin(h)*-k>>0)/i+","+(Math.cos(h)*k>>0)/i+","+b.x+","+b.y+")"):c.style[sb]="matrix("+b.scaleX+",0,0,"+b.scaleY+","+b.x+","+b.y+")"};pb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective",null,function(a,b,c,d,e,g,h){if(d._transform)return e;var n,o,p,q,r,s,t,i=d._transform=wb(a,f,!0),j=a.style,k=1e-6,l=rb.length,m=h;for("string"==typeof m.transform&&sb?(q=j[sb],j[sb]=m.transform,n=wb(a,null,!1),j[sb]=q):"object"==typeof m&&(o=null!=m.rotation?m.rotation:null!=m.rotationZ?m.rotationZ:i.rotation*z,n={scaleX:ab(null!=m.scaleX?m.scaleX:m.scale,i.scaleX),scaleY:ab(null!=m.scaleY?m.scaleY:m.scale,i.scaleY),scaleZ:ab(null!=m.scaleZ?m.scaleZ:m.scale,i.scaleZ),x:ab(m.x,i.x),y:ab(m.y,i.y),z:ab(m.z,i.z),perspective:ab(m.transformPerspective,i.perspective)},n.rotation=null!=m.shortRotation||null!=m.shortRotationZ?cb(m.shortRotation||m.shortRotationZ||0,i.rotation):"number"==typeof o?o*y:bb(o,i.rotation),vb&&(n.rotationX=null!=m.shortRotationX?cb(m.shortRotationX,i.rotationX):"number"==typeof m.rotationX?m.rotationX*y:bb(m.rotationX,i.rotationX),n.rotationY=null!=m.shortRotationY?cb(m.shortRotationY,i.rotationY):"number"==typeof m.rotationY?m.rotationY*y:bb(m.rotationY,i.rotationY),k>n.rotationX&&n.rotationX>-k&&(n.rotationX=0),k>n.rotationY&&n.rotationY>-k&&(n.rotationY=0)),n.skewX=null==m.skewX?i.skewX:"number"==typeof m.skewX?m.skewX*y:bb(m.skewX,i.skewX),n.skewY=null==m.skewY?i.skewY:"number"==typeof m.skewY?m.skewY*y:bb(m.skewY,i.skewY),(p=n.skewY-i.skewY)&&(n.skewX+=p,n.rotation+=p),k>n.skewY&&n.skewY>-k&&(n.skewY=0),k>n.skewX&&n.skewX>-k&&(n.skewX=0),k>n.rotation&&n.rotation>-k&&(n.rotation=0)),s=i.z||i.rotationX||i.rotationY||n.z||n.rotationX||n.rotationY||n.perspective,s||null==n.scale||(n.scaleZ=1);--l>-1;)c=rb[l],r=n[c]-i[c],(r>k||-k>r||null!=A[c])&&(t=!0,e=new lb(i,c,i[c],r,e),e.xs0=0,e.plugin=g,d._overwriteProps.push(e.n));return r=m.transformOrigin,(r||vb&&s&&i.zOrigin)&&(sb?(t=!0,r=(r||T(a,c,f,!1,"50% 50%"))+"",c=ub,e=new lb(j,c,0,0,e,-1,"css_transformOrigin"),e.b=j[c],e.plugin=g,vb?(q=i.zOrigin,r=r.split(" "),i.zOrigin=(r.length>2?parseFloat(r[2]):q)||0,e.xs0=e.e=j[c]=r[0]+" "+(r[1]||"50%")+" 0px",e=new lb(i,"zOrigin",0,0,e,-1,e.n),e.b=q,e.xs0=e.e=i.zOrigin):e.xs0=e.e=j[c]=r):$(r+"",i)),t&&(d._transformType=s||3===this._transformType?3:2),e},!0),pb("boxShadow","0px 0px 0px 0px #999",function(a,b,c,d,e,g){var h=-1!==(b+"").indexOf("inset")?" inset":"";return this.parseComplex(a.style,this.format(T(a,this.p,f,!1,this.dflt))+h,this.format(b)+h,e,g)},!0,!0),pb("borderRadius","0px",function(a,b,c,d,g){b=this.format(b);var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,i=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],j=a.style;for(s=parseFloat(a.offsetWidth),t=parseFloat(a.offsetHeight),k=b.split(" "),l=0;i.length>l;l++)this.p.indexOf("border")&&(i[l]=R(i[l])),o=n=T(a,i[l],f,!1,"0px"),-1!==o.indexOf(" ")&&(n=o.split(" "),o=n[0],n=n[1]),p=m=k[l],q=parseFloat(o),v=o.substr((q+"").length),w="="===p.charAt(1),w?(r=parseInt(p.charAt(0)+"1",10),p=p.substr(2),r*=parseFloat(p),u=p.substr((r+"").length-(0>r?1:0))||""):(r=parseFloat(p),u=p.substr((r+"").length)),""===u&&(u=e[c]||v),u!==v&&(x=Z(a,"borderLeft",q,v),y=Z(a,"borderTop",q,v),"%"===u?(o=100*(x/s)+"%",n=100*(y/t)+"%"):"em"===u?(z=Z(a,"borderLeft",1,"em"),o=x/z+"em",n=y/z+"em"):(o=x+"px",n=y+"px"),w&&(p=parseFloat(o)+r+u,m=parseFloat(n)+r+u)),g=mb(j,i[l],o+" "+n,p+" "+m,!1,"0px",g);return g},!0,!1,gb("0px 0px 0px 0px",!1,!0)),pb("backgroundPosition","0 0",function(a,b,c,d,e,g){var l,m,n,o,p,h="background-position",i=f||S(a,null),j=this.format((i?L?i.getPropertyValue(h+"-x")+" "+i.getPropertyValue(h+"-y"):i.getPropertyValue(h):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),k=this.format(b);if(-1!==j.indexOf("%")!=(-1!==k.indexOf("%"))){for(l=j.split(" "),m=k.split(" "),D.setAttribute("src",T(a,"backgroundImage").replace(t,"")),n=2;--n>-1;)j=l[n],o=-1!==j.indexOf("%"),o!==(-1!==m[n].indexOf("%"))&&(p=0===n?a.offsetWidth-D.width:a.offsetHeight-D.height,l[n]=o?parseFloat(j)/100*p+"px":100*(parseFloat(j)/p)+"%");j=l.join(" ")}return this.parseComplex(a.style,j,k,e,g)},!1,!1,$),pb("backgroundSize","0 0",null,!1,!1,$),pb("perspective","0px",null,!0),pb("perspectiveOrigin","50% 50%",null,!0),pb("transformStyle","preserve-3d",null,!0),pb("backfaceVisibility","visible",null,!0),pb("margin",null,hb("marginTop,marginRight,marginBottom,marginLeft")),pb("padding",null,hb("paddingTop,paddingRight,paddingBottom,paddingLeft")),pb("clip","rect(0px,0px,0px,0px)"),pb("textShadow","0px 0px 0px #999",null,!1,!0),pb("autoRound",null,function(a,b,c,d,e){return e}),pb("border","0px solid #000",function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(T(a,"borderTopWidth",f,!1,"0px")+" "+T(a,"borderTopStyle",f,!1,"solid")+" "+T(a,"borderTopColor",f,!1,"#000")),this.format(b),e,g)},!1,!0,function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(fb)||["#000"])[0]});var Ab=function(a){var e,b=this.t,c=b.filter,d=this.s+this.c*a>>0;100===d&&(-1===c.indexOf("atrix(")&&-1===c.indexOf("radient(")?(b.removeAttribute("filter"),e=!T(this.data,"filter")):(b.filter=c.replace(q,""),e=!0)),e||(this.xn1&&(b.filter=c=c||"alpha(opacity=100)"),-1===c.indexOf("opacity")?b.filter+=" alpha(opacity="+d+")":b.filter=c.replace(o,"opacity="+d))};pb("opacity,alpha,autoAlpha","1",function(a,b,c,d,e,g){var j,h=parseFloat(T(a,"opacity",f,!1,"1")),i=a.style;return b=parseFloat(b),"autoAlpha"===c&&(j=T(a,"visibility",f),1===h&&"hidden"===j&&0!==b&&(h=0),e=new lb(i,"visibility",0,0,e,-1,null,!1,0,0!==h?"visible":"hidden",0===b?"hidden":"visible"),e.xs0="visible",d._overwriteProps.push(e.n)),M?e=new lb(i,"opacity",h,b-h,e):(e=new lb(i,"opacity",100*h,100*(b-h),e),e.xn1="autoAlpha"===c?1:0,i.zoom=1,e.type=2,e.b="alpha(opacity="+e.s+")",e.e="alpha(opacity="+(e.s+e.c)+")",e.data=a,e.plugin=g,e.setRatio=Ab),e});var Bb=function(a){if(1===a||0===a){this.t.className=1===a?this.e:this.b;for(var b=this.data,c=this.t.style,d=c.removeProperty?"removeProperty":"removeAttribute";b;)b.v?c[b.p]=b.v:c[d](b.p.replace(r,"-$1").toLowerCase()),b=b._next}else this.t.className!==this.b&&(this.t.className=this.b)};for(pb("className",null,function(a,b,c,d,e,g,h){var k,l,i=a.className,j=a.style.cssText;return e=d._classNamePT=new lb(a,c,0,0,e,2),e.setRatio=Bb,e.b=i,e.e="="!==b.charAt(1)?b:"+"===b.charAt(0)?i+" "+b.substr(2):i.split(b.substr(2)).join(""),d._tween._duration&&(l=U(a,f,!0),a.className=e.e,k=V(a,l,U(a),h),a.className=i,e.data=k.firstMPT,a.style.cssText=j,e=e.xfirst=d.parse(a,k.difs,e,g)),e}),i="bezier,throwProps,physicsProps,physics2D".split(","),nb=i.length;nb--;)qb(i[nb]);return i=c.prototype,i._firstPT=null,i._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,G=b.autoRound,d=!1,e=b.suffixMap||c.suffixMap,f=S(a,""),g=this._overwriteProps;var j,k,l,m,n,o,q,r,s,i=a.style;if(H&&""===i.zIndex&&(j=T(a,"zIndex",f),("auto"===j||""===j)&&(i.zIndex=0)),"string"==typeof b&&(m=i.cssText,j=U(a,f),i.cssText=m+";"+b,j=V(a,j,U(a)).difs,!M&&p.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,i.cssText=m),this._firstPT=k=this.parse(a,b,null),this._transformType){for(s=3===this._transformType,sb?I&&(H=!0,""===i.zIndex&&(q=T(a,"zIndex",f),("auto"===q||""===q)&&(i.zIndex=0)),K&&(i.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(s?"visible":"hidden"))):i.zoom=1,l=k;l&&l._next;)l=l._next;r=new lb(a,"transform",0,0,null,2),this._linkCSSP(r,null,l),r.setRatio=s&&vb?yb:sb?zb:xb,r.data=this._transform||wb(a,f,!0),g.pop()}if(d){for(;k;){for(o=k._next,l=m;l&&l.pr>k.pr;)l=l._next;(k._prev=l?l._prev:n)?k._prev._next=k:m=k,(k._next=l)?l._prev=k:n=k,k=o}this._firstPT=m}return!0},i.parse=function(a,b,c,d){var i,j,k,l,m,n,o,p,q,r,g=a.style;for(i in b)n=b[i],j=h[i],j?c=j.parse(a,n,i,this,c,d,b):(m=T(a,i,f)+"",q="string"==typeof n,"color"===i||"fill"===i||"stroke"===i||-1!==i.indexOf("Color")||q&&!n.indexOf("rgb")?(q||(n=eb(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=mb(g,i,m,n,!0,"transparent",c,0,d)):!q||-1===n.indexOf(" ")&&-1===n.indexOf(",")?(k=parseFloat(m),o=k||0===k?m.substr((k+"").length):"",(""===m||"auto"===m)&&("width"===i||"height"===i?(k=Y(a,i,f),o="px"):(k="opacity"!==i?0:1,o="")),r=q&&"="===n.charAt(1),r?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.substr((l+"").length-(0>l?1:0))||""):(l=parseFloat(n),p=q?n.substr((l+"").length)||"":""),""===p&&(p=e[i]||o),n=l||0===l?(r?l+k:l)+p:b[i],o!==p&&""!==p&&(l||0===l)&&(k||0===k)&&(k=Z(a,i,k,o),"%"===p?(k/=Z(a,i,100,"%")/100,k>100&&(k=100)):"em"===p?k/=Z(a,i,1,"em"):(l=Z(a,i,l,p),p="px"),r&&(l||0===l)&&(n=l+k+p)),r&&(l+=k),!k&&0!==k||!l&&0!==l?n||"NaN"!=n+""&&null!=n?(c=new lb(g,i,l||k||0,0,c,-1,"css_"+i,!1,0,m,n),c.xs0="display"===i&&"none"===n?m:n):O("invalid "+i+" tween value. "):(c=new lb(g,i,k,l-k,c,0,"css_"+i,G!==!1&&("px"===p||"zIndex"===i),0,m,n),c.xs0=p)):c=mb(g,i,m,n,!0,null,c,0,d)),d&&c&&!c.plugin&&(c.plugin=d);return c},i.setRatio=function(a){var d,e,f,b=this._firstPT,c=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;b;){if(d=b.c*a+b.s,b.r?d=d>0?d+.5>>0:d-.5>>0:c>d&&d>-c&&(d=0),b.type)if(1===b.type)if(f=b.l,2===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2;else if(3===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3;else if(4===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4;else if(5===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4+b.xn4+b.xs5;else{for(e=b.xs0+d+b.xs1,f=1;b.l>f;f++)e+=b["xn"+f]+b["xs"+(f+1)];b.t[b.p]=e}else-1===b.type?b.t[b.p]=b.xs0:b.setRatio&&b.setRatio(a);else b.t[b.p]=d+b.xs0;b=b._next}else for(;b;)2!==b.type?b.t[b.p]=b.b:b.setRatio(a),b=b._next;else for(;b;)2!==b.type?b.t[b.p]=b.e:b.setRatio(a),b=b._next},i._enableTransforms=function(a){this._transformType=a||3===this._transformType?3:2},i._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next),a._next=b,a._prev=c),a},i._kill=function(b){var e,f,g,c=b,d=!1;if(b.css_autoAlpha||b.css_alpha){c={};for(f in b)c[f]=b[f];c.css_opacity=1,c.css_autoAlpha&&(c.css_visibility=1)}return b.css_className&&(e=this._classNamePT)&&(g=e.xfirst,g&&g._prev?this._linkCSSP(g._prev,e._next,g._prev._prev):g===this._firstPT&&(this._firstPT=null),e._next&&this._linkCSSP(e._next,e._next._next,g._prev),this._target._gsOverwrittenClassNamePT=this._linkCSSP(e,this._target._gsOverwrittenClassNamePT),this._classNamePT=null,d=!0),a.prototype._kill.call(this,c)||d},a.activate([c]),c},!0)}),window._gsDefine&&_gsQueue.pop()();
    (function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,n,r,a,o,l=function(t){var e,s=t.split("."),n=i;for(e=0;s.length>e;e++)n[s[e]]=n=n[s[e]]||{};return n},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},f=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},c=function(s,n,r,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=r;var o=[];this.check=function(h){for(var _,u,f,m,d=n.length,v=d;--d>-1;)(_=p[n[d]]||new c(n[d],[])).gsClass?(o[d]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&r)for(u=("com.greensock."+s).split("."),f=u.pop(),m=l(u.join("."))[f]=this.gsClass=r.apply(r,o),a&&(i[f]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return m}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=m)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new c(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var n,r,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(r=l[_],n=s?v("easing."+r,null,!0):h.easing[r]||{},a=u.length;--a>-1;)o=u[a],w[r+"."+o]=w[o+r]=n[o]=t.getRatio?t:t[o]||new t};for(r=y.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],n=s.length;--n>-1;)r=s[n]+",Power"+n,P(new y(null,null,1,n),r,"easeOut",!0),P(new y(null,null,2,n),r,"easeIn"+(0===n?",easeNone":"")),P(new y(null,null,3,n),r,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=b.prototype,r.addEventListener=function(t,e,i,s,n){n=n||0;var r,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)r=h[l],r.c===e&&r.s===i?h.splice(l,1):0===_&&n>r.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:n}),this!==a||o||a.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,n=this._listeners[t];if(n)for(e=n.length,i=this._eventTarget;--e>-1;)s=n[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var k=t.requestAnimationFrame,A=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(s=["ms","moz","webkit","o"],n=s.length;--n>-1&&!k;)k=t[s[n]+"RequestAnimationFrame"],A=t[s[n]+"CancelAnimationFrame"]||t[s[n]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,n,r,l,h=this,u=S(),m=e!==!1&&k,p=500,c=33,d=function(t){var e,a,o=S()-x;o>p&&(u+=o-c),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=r?.004:r-e),a=!0),t!==!0&&(n=s(d)),a&&h.dispatchEvent("tick")};b.call(h),h.time=h.frame=0,h.tick=function(){d(!0)},h.lagSmoothing=function(t,e){p=t||1/_,c=Math.min(e,p,0)},h.sleep=function(){null!=n&&(m&&A?A(n):clearTimeout(n),s=f,n=null,h===a&&(o=!1))},h.wake=function(){null!==n?h.sleep():h.frame>10&&(x=S()-p+5),s=0===i?f:m&&k?k:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),d(2)},h.fps=function(t){return arguments.length?(i=t,r=1/(i||60),l=this.time+r,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!n||5>h.frame)&&h.useRAF(!1)},1500)}),r=h.Ticker.prototype=new h.events.EventDispatcher,r.constructor=h.Ticker;var C=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?q:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=C.ticker=new h.Ticker,r=C.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var R=function(){o&&S()-x>2e3&&a.wake(),setTimeout(R,2e3)};R(),r.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[t];null==e?delete n[t]:(n[t]=e,n[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,n=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?s-t:t)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),O.length&&M())}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){C.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=D.prototype=new C,r.constructor=D,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,n=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;n;)s=n._next,(n._active||t>=n._startTime&&!n._paused)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)),n=s},r.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(C.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var n,r,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?Q[I.defaultOverwrite]:"number"==typeof l?l>>0:Q[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],n=0;a.length>n;n++)r=a[n],r?"string"!=typeof r?r.length&&r!==t&&r[0]&&(r[0]===t||r[0].nodeType&&r[0].style&&!r.nodeType)?(a.splice(n--,1),this._targets=a=a.concat(u(r))):(this._siblings[n]=$(r,this,!1),1===l&&this._siblings[n].length>1&&K(r,this,null,1,this._siblings[n])):(r=a[n--]=I.selector(r),"string"==typeof r&&a.splice(n+1,1)):a.splice(n--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&K(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)G[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!U[i]||U[i]&&U[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=I.prototype=new C,r.constructor=I,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=r._lazy=!1,I.version="1.13.1",I.defaultEase=r._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=!0,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var O=[],L={},N=I._internals={isArray:m,isSelector:E,lazyTweens:O},U=I._plugins={},F=N.tweenLookup={},j=0,G=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},q=C._rootFramesTimeline=new D,B=C._rootTimeline=new D,M=N.lazyRender=function(){var t=O.length;for(L={};--t>-1;)s=O[t],s&&s._lazy!==!1&&(s.render(s._lazy,!1,!0),s._lazy=!1);O.length=0};B._startTime=a.time,q._startTime=a.frame,B._active=q._active=!0,setTimeout(M,1),C._updateRoot=I.render=function(){var t,e,i;if(O.length&&M(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),q.render((a.frame-q._startTime)*q._timeScale,!1,!1),O.length&&M(),!(a.frame%120)){for(i in F){for(e=F[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete F[i]}if(i=B._first,(!i||i._paused)&&I.autoSleep&&!q._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",C._updateRoot);var $=function(t,e,i){var s,n,r=t._gsTweenID;if(F[r||(t._gsTweenID=r="t"+j++)]||(F[r]={target:t,tweens:[]}),e&&(s=F[r].tweens,s[n=s.length]=e,i))for(;--n>-1;)s[n]===e&&s.splice(n,1);return F[r].tweens},K=function(t,e,i,s,n){var r,a,o,l;if(1===s||s>=4){for(l=n.length,r=0;l>r;r++)if((o=n[r])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,f=[],m=0,p=0===e._duration;for(r=n.length;--r>-1;)(o=n[r])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||H(e,0,p),0===H(o,h,p)&&(f[m++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(f[m++]=o)));for(r=m;--r>-1;)o=f[r],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},H=function(t,e,i){for(var s=t._timeline,n=s._timeScale,r=t._startTime;s._timeline;){if(r+=s._startTime,n*=s._timeScale,s._paused)return-100;s=s._timeline}return r/=n,r>e?r-e:i&&r===e||!t._initted&&2*_>r-e?_:(r+=t.totalDuration()/t._timeScale/n)>e+_?0:r-e-_};r._init=function(){var t,e,i,s,n,r=this.vars,a=this._overwrittenProps,o=this._duration,l=!!r.immediateRender,h=r.ease;if(r.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),n={};for(s in r.startAt)n[s]=r.startAt[s];if(n.overwrite=!1,n.immediateRender=!0,n.lazy=l&&r.lazy!==!1,n.startAt=n.delay=null,this._startAt=I.to(this.target,0,n),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(r.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{i={};for(s in r)G[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&r.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,r.easeParams):w[h]||I.defaultEase:I.defaultEase,r.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,r.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,n){var r,a,o,l,h,_;if(null==e)return!1;L[e._gsTweenID]&&M(),this.vars.css||e.style&&e!==t&&e.nodeType&&U.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(r in this.vars){if(_=this.vars[r],G[r])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[r]=_=this._swapSelfInParams(_,this));else if(U[r]&&(l=new U[r])._onInitTween(e,this.vars[r],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:r,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[r]=h={_next:this._firstPT,t:e,p:r,f:"function"==typeof e[r],n:r,pg:!1,pr:0},h.s=h.f?e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(e[r]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return n&&this._kill(n,e)?this._initProps(e,i,s,n):this._overwrite>1&&this._firstPT&&s.length>1&&K(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,n)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),o)},r.render=function(t,e,i){var s,n,r,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,n="onComplete"),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_)&&h!==t&&(i=!0,h>_&&(n="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0&&h!==_)&&(n="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,f=this._easeType,m=this._easePower;(1===f||3===f&&u>=.5)&&(u=1-u),3===f&&(u*=2),1===m?u*=u:2===m?u*=u*u:3===m?u*=u*u*u:4===m&&(u*=u*u*u*u),this.ratio=1===f?1-u:2===f?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,O.push(this),this._lazy=t,void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||T))),r=this._firstPT;r;)r.f?r.t[r.p](r.c*this.ratio+r.s):r.t[r.p]=r.c*this.ratio+r.s,r=r._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||T)),n&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this.vars[n].apply(this.vars[n+"Scope"]||this,this.vars[n+"Params"]||T),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var i,s,n,r,a,o,l,h;if((m(e)||E(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(n in l)(r=a[n])&&(r.pg&&r.t._kill(l)&&(o=!0),r.pg&&0!==r.t._overwriteProps.length||(r._prev?r._prev._next=r._next:r===this._firstPT&&(this._firstPT=r._next),r._next&&(r._next._prev=r._prev),r._next=r._prev=null),delete a[n]),h&&(s[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=this._lazy=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=$(s[i],this,!0);else this._siblings=$(this.target,this,!0)}return C.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,n){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,n,r;if((m(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(r=s[i],n=i;--n>-1;)r===s[n]&&s.splice(i,1)}else for(s=$(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),n=s.length;--n>-1;)s[n]._kill(i,t)};var J=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=J.prototype},!0);if(r=J.prototype,J.version="1.10.1",J.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,n,r){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:n||e,r:r},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,n,r,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=n;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:r)?o._prev._next=o:n=o,(o._next=s)?s._prev=o:r=o,o=a}o=e._firstPT=n}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},J.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===J.API&&(U[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,n=t.overwriteProps,r={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){J.call(this,i,s),this._overwriteProps=n||[]},t.global===!0),o=a.prototype=new J(i);o.constructor=a,a.API=t.API;for(e in r)"function"==typeof t[e]&&(o[r[e]]=t[e]);return a.version=t.version,J.activate([a]),a},s=t._gsQueue){for(n=0;s.length>n;n++)s[n]();for(r in p)p[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}o=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");

    // Ease Pack
    var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();

    // TimeLite
    var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=n.isSelector,o=n.isArray,h=n.lazyTweens,l=n.lazyRender,_=[],u=_gsScope._gsDefine.globals,p=function(t){var e,i={};for(e in t)i[e]=t[e];return i},f=function(t,e,i,s){t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||_)},c=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=s.prototype=new e;return s.version="1.13.1",m.constructor=s,m.kill()._gc=!1,m.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},m.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},m.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},m.staggerTo=function(t,e,r,n,o,h,l,_){var u,f=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=c(t)),n=n||0,u=0;t.length>u;u++)r.startAt&&(r.startAt=p(r.startAt)),f.to(t[u],e,p(r),u*n);return this.add(f,o)},m.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},m.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},m.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},m.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},m.add=function(r,n,a,h){var l,_,u,p,f,c;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)o(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===a?l=p._startTime+p.totalDuration()/p._timeScale:"start"===a&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,c=f.rawTime()>r._startTime;f._timeline;)c&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},m.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},m._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},m.insert=m.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},m.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},m.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},m.addPause=function(t,e,i,s){return this.call(f,["{self}",e,i,s],this,t)},m.removeLabel=function(t){return delete this._labels[t],this},m.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},m._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},m.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(t,e){return this.play(t,e)},m.gotoAndStop=function(t,e){return this.pause(t,e)},m.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,u,p=this._dirty?this.totalDuration():this._totalDuration,f=this._time,c=this._startTime,m=this._timeScale,d=this._paused;if(t>=p?(this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=p+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==f&&this._first||i||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_)),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(h.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_))),o&&(this._gc||(c===this._startTime||m!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(n&&(h.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||_)))}},m._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},m.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},m.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},m._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},m.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},m._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},m.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},m._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},m.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},m.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},m.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");

    // Detect Mobile
    (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

    // Tap
    !function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i="clientX clientY screenX screenY pageX pageY".split(" "),j={count:0,event:0},k=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=i.length;g>f;f++)e[i[f]]=c[i[f]];return e},l=function(a){if(a.isTrigger)return!1;var c=j.event,d=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY),f=Math.max(d,e);return a.timeStamp-c.timeStamp<b.tap.TIME_DELTA&&f<b.tap.POSITION_DELTA&&(!c.touches||1===j.count)&&o.isTracking},m=function(a){if(!e)return!1;var c=Math.abs(a.pageX-e.pageX),d=Math.abs(a.pageY-e.pageY),f=Math.max(c,d);return Math.abs(a.timeStamp-e.timeStamp)<750&&f<b.tap.POSITION_DELTA},n=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=i.length;d>c;c++)a[i[c]]=b[i[c]]}a.timeStamp=Date.now?Date.now():+new Date},o={isEnabled:!1,isTracking:!1,enable:function(){o.isEnabled||(o.isEnabled=!0,c=b(a.body).on("touchstart"+f,o.onStart).on("mousedown"+f,o.onStart).on("click"+f,o.onClick))},disable:function(){o.isEnabled&&(o.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(n(a),(!b.tap.LEFT_BUTTON_ONLY||a.touches||1===a.which)&&(a.touches&&(j.count=a.touches.length),o.isTracking||(a.touches||!m(a))&&(o.isTracking=!0,j.event=a,a.touches?(e=a,c.on("touchend"+f+g,o.onEnd).on("touchcancel"+f+g,o.onCancel)):c.on("mouseup"+f+g,o.onEnd))))},onEnd:function(a){var c;a.isTrigger||(n(a),l(a)&&(c=k(h,a),d=c,b(j.event.target).trigger(c)),o.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),o.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(o.enable),b.tap={POSITION_DELTA:10,TIME_DELTA:400,LEFT_BUTTON_ONLY:!0}}(document,jQuery);

    //Swiper
    var Swiper=function(l,a){if(!document.body.outerHTML&&document.body.__defineGetter__){if(HTMLElement){var t=HTMLElement.prototype;if(t.__defineGetter__){t.__defineGetter__("outerHTML",function(){return new XMLSerializer().serializeToString(this)})}}}if(!window.getComputedStyle){window.getComputedStyle=function(i,j){this.el=i;this.getPropertyValue=function(ag){var p=/(\-([a-z]){1})/g;if(ag==="float"){ag="styleFloat"}if(p.test(ag)){ag=ag.replace(p,function(){return arguments[2].toUpperCase()})}return i.currentStyle[ag]?i.currentStyle[ag]:null};return this}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(ah,ai){for(var ag=(ai||0),p=this.length;ag<p;ag++){if(this[ag]===ah){return ag}}return -1}}if(!document.querySelectorAll){if(!window.jQuery){return}}function R(i,j){if(document.querySelectorAll){return(j||document).querySelectorAll(i)}else{return jQuery(i,j)}}if(typeof l==="undefined"){return}if(!(l.nodeType)){if(R(l).length===0){return}}var f=this;f.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0};f.positions={start:0,abs:0,diff:0,current:0};f.times={start:0,end:0};f.id=(new Date()).getTime();f.container=(l.nodeType)?l:R(l)[0];f.isTouched=false;f.isMoved=false;f.activeIndex=0;f.centerIndex=0;f.activeLoaderIndex=0;f.activeLoopIndex=0;f.previousIndex=null;f.velocity=0;f.snapGrid=[];f.slidesGrid=[];f.imagesToLoad=[];f.imagesLoaded=0;f.wrapperLeft=0;f.wrapperRight=0;f.wrapperTop=0;f.wrapperBottom=0;f.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>=0;var z,J,ae,r,b,d;var G={eventTarget:"wrapper",mode:"horizontal",touchRatio:1,speed:300,freeMode:false,freeModeFluid:false,momentumRatio:1,momentumBounce:true,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,slidesPerViewFit:true,simulateTouch:true,followFinger:true,shortSwipes:true,longSwipesRatio:0.5,moveStartThreshold:false,onlyExternal:false,createPagination:true,pagination:false,paginationElement:"span",paginationClickable:false,paginationAsRange:true,resistance:true,scrollContainer:false,preventLinks:true,preventLinksPropagation:false,noSwiping:false,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:false,mousewheelControl:false,mousewheelControlForceToAxis:false,useCSS3Transforms:true,autoplay:false,autoplayDisableOnInteraction:true,autoplayStopOnLast:false,loop:false,loopAdditionalSlides:0,roundLengths:false,calculateHeight:false,cssWidthAndHeight:false,updateOnImagesReady:true,releaseFormElements:true,watchActiveIndex:false,visibilityFullFit:false,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:false,queueStartCallbacks:false,queueEndCallbacks:false,autoResize:true,resizeReInit:false,DOMAnimation:true,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:false},swipeToPrev:true,swipeToNext:true,slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};a=a||{};for(var x in G){if(x in a&&typeof a[x]==="object"){for(var e in G[x]){if(!(e in a[x])){a[x][e]=G[x][e]}}}else{if(!(x in a)){a[x]=G[x]}}}f.params=a;if(a.scrollContainer){a.freeMode=true;a.freeModeFluid=true}if(a.loop){a.resistance="100%"}var D=a.mode==="horizontal";var v=["mousedown","mousemove","mouseup"];if(f.browser.ie10){v=["MSPointerDown","MSPointerMove","MSPointerUp"]}if(f.browser.ie11){v=["pointerdown","pointermove","pointerup"]}f.touchEvents={touchStart:f.support.touch||!a.simulateTouch?"touchstart":v[0],touchMove:f.support.touch||!a.simulateTouch?"touchmove":v[1],touchEnd:f.support.touch||!a.simulateTouch?"touchend":v[2]};for(var V=f.container.childNodes.length-1;V>=0;V--){if(f.container.childNodes[V].className){var s=f.container.childNodes[V].className.split(/\s+/);for(var S=0;S<s.length;S++){if(s[S]===a.wrapperClass){z=f.container.childNodes[V]}}}}f.wrapper=z;f._extendSwiperSlide=function(i){i.append=function(){if(a.loop){i.insertAfter(f.slides.length-f.loopedSlides)}else{f.wrapper.appendChild(i);f.reInit()}return i};i.prepend=function(){if(a.loop){f.wrapper.insertBefore(i,f.slides[f.loopedSlides]);f.removeLoopedSlides();f.calcSlides();f.createLoop()}else{f.wrapper.insertBefore(i,f.wrapper.firstChild)}f.reInit();return i};i.insertAfter=function(j){if(typeof j==="undefined"){return false}var p;if(a.loop){p=f.slides[j+1+f.loopedSlides];if(p){f.wrapper.insertBefore(i,p)}else{f.wrapper.appendChild(i)}f.removeLoopedSlides();f.calcSlides();f.createLoop()}else{p=f.slides[j+1];f.wrapper.insertBefore(i,p)}f.reInit();return i};i.clone=function(){return f._extendSwiperSlide(i.cloneNode(true))};i.remove=function(){f.wrapper.removeChild(i);f.reInit()};i.html=function(j){if(typeof j==="undefined"){return i.innerHTML}else{i.innerHTML=j;return i}};i.index=function(){var j;for(var p=f.slides.length-1;p>=0;p--){if(i===f.slides[p]){j=p}}return j};i.isActive=function(){if(i.index()===f.activeIndex){return true}else{return false}};if(!i.swiperSlideDataStorage){i.swiperSlideDataStorage={}}i.getData=function(j){return i.swiperSlideDataStorage[j]};i.setData=function(j,p){i.swiperSlideDataStorage[j]=p;return i};i.data=function(j,p){if(typeof p==="undefined"){return i.getAttribute("data-"+j)}else{i.setAttribute("data-"+j,p);return i}};i.getWidth=function(p,j){return f.h.getWidth(i,p,j)};i.getHeight=function(p,j){return f.h.getHeight(i,p,j)};i.getOffset=function(){return f.h.getOffset(i)};return i};f.calcSlides=function(ah){var aj=f.slides?f.slides.length:false;f.slides=[];f.displaySlides=[];for(var ai=0;ai<f.wrapper.childNodes.length;ai++){if(f.wrapper.childNodes[ai].className){var ak=f.wrapper.childNodes[ai].className;var p=ak.split(/\s+/);for(var ag=0;ag<p.length;ag++){if(p[ag]===a.slideClass){f.slides.push(f.wrapper.childNodes[ai])}}}}for(ai=f.slides.length-1;ai>=0;ai--){f._extendSwiperSlide(f.slides[ai])}if(aj===false){return}if(aj!==f.slides.length||ah){o();q();f.updateActiveSlide();if(f.params.pagination){f.createPagination()}f.callPlugins("numberOfSlidesChanged")}};f.createSlide=function(p,j,ag){j=j||f.params.slideClass;ag=ag||a.slideElement;var i=document.createElement(ag);i.innerHTML=p||"";i.className=j;return f._extendSwiperSlide(i)};f.appendSlide=function(j,i,p){if(!j){return}if(j.nodeType){return f._extendSwiperSlide(j).append()}else{return f.createSlide(j,i,p).append()}};f.prependSlide=function(j,i,p){if(!j){return}if(j.nodeType){return f._extendSwiperSlide(j).prepend()}else{return f.createSlide(j,i,p).prepend()}};f.insertSlideAfter=function(j,p,i,ag){if(typeof j==="undefined"){return false}if(p.nodeType){return f._extendSwiperSlide(p).insertAfter(j)}else{return f.createSlide(p,i,ag).insertAfter(j)}};f.removeSlide=function(i){if(f.slides[i]){if(a.loop){if(!f.slides[i+f.loopedSlides]){return false}f.slides[i+f.loopedSlides].remove();f.removeLoopedSlides();f.calcSlides();f.createLoop()}else{f.slides[i].remove()}return true}else{return false}};f.removeLastSlide=function(){if(f.slides.length>0){if(a.loop){f.slides[f.slides.length-1-f.loopedSlides].remove();f.removeLoopedSlides();f.calcSlides();f.createLoop()}else{f.slides[f.slides.length-1].remove()}return true}else{return false}};f.removeAllSlides=function(){var j=f.slides.length;for(var p=f.slides.length-1;p>=0;p--){f.slides[p].remove();if(p===j-1){f.setWrapperTranslate(0)}}};f.getSlide=function(i){return f.slides[i]};f.getLastSlide=function(){return f.slides[f.slides.length-1]};f.getFirstSlide=function(){return f.slides[0]};f.activeSlide=function(){return f.slides[f.activeIndex]};f.fireCallback=function(){var p=arguments[0];if(Object.prototype.toString.call(p)==="[object Array]"){for(var j=0;j<p.length;j++){if(typeof p[j]==="function"){p[j](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}}else{if(Object.prototype.toString.call(p)==="[object String]"){if(a["on"+p]){f.fireCallback(a["on"+p],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}else{p(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}};function B(i){if(Object.prototype.toString.apply(i)==="[object Array]"){return true}return false}f.addCallback=function(ag,i){var p=this,j;if(p.params["on"+ag]){if(B(this.params["on"+ag])){return this.params["on"+ag].push(i)}else{if(typeof this.params["on"+ag]==="function"){j=this.params["on"+ag];this.params["on"+ag]=[];this.params["on"+ag].push(j);return this.params["on"+ag].push(i)}}}else{this.params["on"+ag]=[];return this.params["on"+ag].push(i)}};f.removeCallbacks=function(i){if(f.params["on"+i]){f.params["on"+i]=null}};var A=[];for(var ac in f.plugins){if(a[ac]){var P=f.plugins[ac](f,a[ac]);if(P){A.push(P)}}}f.callPlugins=function(ag,j){if(!j){j={}}for(var p=0;p<A.length;p++){if(ag in A[p]){A[p][ag](j)}}};if((f.browser.ie10||f.browser.ie11)&&!a.onlyExternal){f.wrapper.classList.add("swiper-wp8-"+(D?"horizontal":"vertical"))}if(a.freeMode){f.container.className+=" swiper-free-mode"}f.initialized=false;f.init=function(aj,ai){var an=f.h.getWidth(f.container,false,a.roundLengths);var aA=f.h.getHeight(f.container,false,a.roundLengths);if(an===f.width&&aA===f.height&&!aj){return}f.width=an;f.height=aA;var ao,aq,ax,ak,au,az;var aw;d=D?an:aA;var ap=f.wrapper;if(aj){f.calcSlides(ai)}if(a.slidesPerView==="auto"){var al=0;var ag=0;if(a.slidesOffset>0){ap.style.paddingLeft="";ap.style.paddingRight="";ap.style.paddingTop="";ap.style.paddingBottom=""}ap.style.width="";ap.style.height="";if(a.offsetPxBefore>0){if(D){f.wrapperLeft=a.offsetPxBefore}else{f.wrapperTop=a.offsetPxBefore}}if(a.offsetPxAfter>0){if(D){f.wrapperRight=a.offsetPxAfter}else{f.wrapperBottom=a.offsetPxAfter}}if(a.centeredSlides){if(D){f.wrapperLeft=(d-this.slides[0].getWidth(true,a.roundLengths))/2;f.wrapperRight=(d-f.slides[f.slides.length-1].getWidth(true,a.roundLengths))/2}else{f.wrapperTop=(d-f.slides[0].getHeight(true,a.roundLengths))/2;f.wrapperBottom=(d-f.slides[f.slides.length-1].getHeight(true,a.roundLengths))/2}}if(D){if(f.wrapperLeft>=0){ap.style.paddingLeft=f.wrapperLeft+"px"}if(f.wrapperRight>=0){ap.style.paddingRight=f.wrapperRight+"px"}}else{if(f.wrapperTop>=0){ap.style.paddingTop=f.wrapperTop+"px"}if(f.wrapperBottom>=0){ap.style.paddingBottom=f.wrapperBottom+"px"}}az=0;var ay=0;f.snapGrid=[];f.slidesGrid=[];ax=0;for(aw=0;aw<f.slides.length;aw++){ao=f.slides[aw].getWidth(true,a.roundLengths);aq=f.slides[aw].getHeight(true,a.roundLengths);if(a.calculateHeight){ax=Math.max(ax,aq)}var at=D?ao:aq;if(a.centeredSlides){var p=aw===f.slides.length-1?0:f.slides[aw+1].getWidth(true,a.roundLengths);var ah=aw===f.slides.length-1?0:f.slides[aw+1].getHeight(true,a.roundLengths);var am=D?p:ah;if(at>d){if(a.slidesPerViewFit){f.snapGrid.push(az+f.wrapperLeft);f.snapGrid.push(az+at-d+f.wrapperLeft)}else{for(var av=0;av<=Math.floor(at/(d+f.wrapperLeft));av++){if(av===0){f.snapGrid.push(az+f.wrapperLeft)}else{f.snapGrid.push(az+f.wrapperLeft+d*av)}}}f.slidesGrid.push(az+f.wrapperLeft)}else{f.snapGrid.push(ay);f.slidesGrid.push(ay)}ay+=at/2+am/2}else{if(at>d){if(a.slidesPerViewFit){f.snapGrid.push(az);f.snapGrid.push(az+at-d)}else{if(d!==0){for(var ar=0;ar<=Math.floor(at/d);ar++){f.snapGrid.push(az+d*ar)}}else{f.snapGrid.push(az)}}}else{f.snapGrid.push(az)}f.slidesGrid.push(az)}az+=at;al+=ao;ag+=aq}if(a.calculateHeight){f.height=ax}if(D){ae=al+f.wrapperRight+f.wrapperLeft;if(!a.cssWidthAndHeight||a.cssWidthAndHeight==="height"){ap.style.width=(al)+"px"}if(!a.cssWidthAndHeight||a.cssWidthAndHeight==="width"){ap.style.height=(f.height)+"px"}}else{if(!a.cssWidthAndHeight||a.cssWidthAndHeight==="height"){ap.style.width=(f.width)+"px"}if(!a.cssWidthAndHeight||a.cssWidthAndHeight==="width"){ap.style.height=(ag)+"px"}ae=ag+f.wrapperTop+f.wrapperBottom}}else{if(a.scrollContainer){ap.style.width="";ap.style.height="";ak=f.slides[0].getWidth(true,a.roundLengths);au=f.slides[0].getHeight(true,a.roundLengths);ae=D?ak:au;ap.style.width=ak+"px";ap.style.height=au+"px";J=D?ak:au}else{if(a.calculateHeight){ax=0;au=0;if(!D){f.container.style.height=""}ap.style.height="";for(aw=0;aw<f.slides.length;aw++){f.slides[aw].style.height="";ax=Math.max(f.slides[aw].getHeight(true),ax);if(!D){au+=f.slides[aw].getHeight(true)}}aq=ax;f.height=aq;if(D){au=aq}else{d=aq;f.container.style.height=d+"px"}}else{aq=D?f.height:f.height/a.slidesPerView;if(a.roundLengths){aq=Math.ceil(aq)}au=D?f.height:f.slides.length*aq}ao=D?f.width/a.slidesPerView:f.width;if(a.roundLengths){ao=Math.ceil(ao)}ak=D?f.slides.length*ao:f.width;J=D?ao:aq;if(a.offsetSlidesBefore>0){if(D){f.wrapperLeft=J*a.offsetSlidesBefore}else{f.wrapperTop=J*a.offsetSlidesBefore}}if(a.offsetSlidesAfter>0){if(D){f.wrapperRight=J*a.offsetSlidesAfter}else{f.wrapperBottom=J*a.offsetSlidesAfter}}if(a.offsetPxBefore>0){if(D){f.wrapperLeft=a.offsetPxBefore}else{f.wrapperTop=a.offsetPxBefore}}if(a.offsetPxAfter>0){if(D){f.wrapperRight=a.offsetPxAfter}else{f.wrapperBottom=a.offsetPxAfter}}if(a.centeredSlides){if(D){f.wrapperLeft=(d-J)/2;f.wrapperRight=(d-J)/2}else{f.wrapperTop=(d-J)/2;f.wrapperBottom=(d-J)/2}}if(D){if(f.wrapperLeft>0){ap.style.paddingLeft=f.wrapperLeft+"px"}if(f.wrapperRight>0){ap.style.paddingRight=f.wrapperRight+"px"}}else{if(f.wrapperTop>0){ap.style.paddingTop=f.wrapperTop+"px"}if(f.wrapperBottom>0){ap.style.paddingBottom=f.wrapperBottom+"px"}}ae=D?ak+f.wrapperRight+f.wrapperLeft:au+f.wrapperTop+f.wrapperBottom;if(parseFloat(ak)>0&&(!a.cssWidthAndHeight||a.cssWidthAndHeight==="height")){ap.style.width=ak+"px"}if(parseFloat(au)>0&&(!a.cssWidthAndHeight||a.cssWidthAndHeight==="width")){ap.style.height=au+"px"}az=0;f.snapGrid=[];f.slidesGrid=[];for(aw=0;aw<f.slides.length;aw++){f.snapGrid.push(az);f.slidesGrid.push(az);az+=J;if(parseFloat(ao)>0&&(!a.cssWidthAndHeight||a.cssWidthAndHeight==="height")){f.slides[aw].style.width=ao+"px"}if(parseFloat(aq)>0&&(!a.cssWidthAndHeight||a.cssWidthAndHeight==="width")){f.slides[aw].style.height=aq+"px"}}}}if(!f.initialized){f.callPlugins("onFirstInit");if(a.onFirstInit){f.fireCallback(a.onFirstInit,f)}}else{f.callPlugins("onInit");if(a.onInit){f.fireCallback(a.onInit,f)}}f.initialized=true};f.reInit=function(i){f.init(true,i)};f.resizeFix=function(i){f.callPlugins("beforeResizeFix");f.init(a.resizeReInit||i);if(!a.freeMode){f.swipeTo((a.loop?f.activeLoopIndex:f.activeIndex),0,false);if(a.autoplay){if(f.support.transitions&&typeof K!=="undefined"){if(typeof K!=="undefined"){clearTimeout(K);K=undefined;f.startAutoplay()}}else{if(typeof X!=="undefined"){clearInterval(X);X=undefined;f.startAutoplay()}}}}else{if(f.getWrapperTranslate()<-ab()){f.setWrapperTransition(0);f.setWrapperTranslate(-ab())}}f.callPlugins("afterResizeFix")};function ab(){var i=(ae-d);if(a.freeMode){i=ae-d}if(a.slidesPerView>f.slides.length&&!a.centeredSlides){i=0}if(i<0){i=0}return i}function m(){var ai=f.h.addEventListener;var ah=a.eventTarget==="wrapper"?f.wrapper:f.container;if(!(f.browser.ie10||f.browser.ie11)){if(f.support.touch){ai(ah,"touchstart",U);ai(ah,"touchmove",aa);ai(ah,"touchend",N)}if(a.simulateTouch){ai(ah,"mousedown",U);ai(document,"mousemove",aa);ai(document,"mouseup",N)}}else{ai(ah,f.touchEvents.touchStart,U);ai(document,f.touchEvents.touchMove,aa);ai(document,f.touchEvents.touchEnd,N)}if(a.autoResize){ai(window,"resize",f.resizeFix)}q();f._wheelEvent=false;if(a.mousewheelControl){if(document.onmousewheel!==undefined){f._wheelEvent="mousewheel"}if(!f._wheelEvent){try{new WheelEvent("wheel");f._wheelEvent="wheel"}catch(ag){}}if(!f._wheelEvent){f._wheelEvent="DOMMouseScroll"}if(f._wheelEvent){ai(f.container,f._wheelEvent,c)}}function p(aj){var i=new Image();i.onload=function(){if(typeof f==="undefined"||f===null){return}if(f.imagesLoaded!==undefined){f.imagesLoaded++}if(f.imagesLoaded===f.imagesToLoad.length){f.reInit();if(a.onImagesReady){f.fireCallback(a.onImagesReady,f)}}};i.src=aj}if(a.keyboardControl){ai(document,"keydown",F)}if(a.updateOnImagesReady){f.imagesToLoad=R("img",f.container);for(var j=0;j<f.imagesToLoad.length;j++){p(f.imagesToLoad[j].getAttribute("src"))}}}f.destroy=function(ah){var p=f.h.removeEventListener;var ag=a.eventTarget==="wrapper"?f.wrapper:f.container;if(!(f.browser.ie10||f.browser.ie11)){if(f.support.touch){p(ag,"touchstart",U);p(ag,"touchmove",aa);p(ag,"touchend",N)}if(a.simulateTouch){p(ag,"mousedown",U);p(document,"mousemove",aa);p(document,"mouseup",N)}}else{p(ag,f.touchEvents.touchStart,U);p(document,f.touchEvents.touchMove,aa);p(document,f.touchEvents.touchEnd,N)}if(a.autoResize){p(window,"resize",f.resizeFix)}o();if(a.paginationClickable){C()}if(a.mousewheelControl&&f._wheelEvent){p(f.container,f._wheelEvent,c)}if(a.keyboardControl){p(document,"keydown",F)}if(a.autoplay){f.stopAutoplay()}if(ah){f.wrapper.removeAttribute("style");for(var j=0;j<f.slides.length;j++){f.slides[j].removeAttribute("style")}}f.callPlugins("onDestroy");if(window.jQuery&&window.jQuery(f.container).data("swiper")){window.jQuery(f.container).removeData("swiper")}if(window.Zepto&&window.Zepto(f.container).data("swiper")){window.Zepto(f.container).removeData("swiper")}f=null};function q(){var ah=f.h.addEventListener,ag;if(a.preventLinks){var j=R("a",f.container);for(ag=0;ag<j.length;ag++){ah(j[ag],"click",O)}}if(a.releaseFormElements){var p=R("input, textarea, select",f.container);for(ag=0;ag<p.length;ag++){ah(p[ag],f.touchEvents.touchStart,y,true);if(f.support.touch&&a.simulateTouch){ah(p[ag],"mousedown",y,true)}}}if(a.onSlideClick){for(ag=0;ag<f.slides.length;ag++){ah(f.slides[ag],"click",W)}}if(a.onSlideTouch){for(ag=0;ag<f.slides.length;ag++){ah(f.slides[ag],f.touchEvents.touchStart,k)}}}function o(){var ah=f.h.removeEventListener,ag;if(a.onSlideClick){for(ag=0;ag<f.slides.length;ag++){ah(f.slides[ag],"click",W)}}if(a.onSlideTouch){for(ag=0;ag<f.slides.length;ag++){ah(f.slides[ag],f.touchEvents.touchStart,k)}}if(a.releaseFormElements){var p=R("input, textarea, select",f.container);for(ag=0;ag<p.length;ag++){ah(p[ag],f.touchEvents.touchStart,y,true);if(f.support.touch&&a.simulateTouch){ah(p[ag],"mousedown",y,true)}}}if(a.preventLinks){var j=R("a",f.container);for(ag=0;ag<j.length;ag++){ah(j[ag],"click",O)}}}function F(am){var ak=am.keyCode||am.charCode;if(am.shiftKey||am.altKey||am.ctrlKey||am.metaKey){return}if(ak===37||ak===39||ak===38||ak===40){var an=false;var al=f.h.getOffset(f.container);var ai=f.h.windowScroll().left;var ag=f.h.windowScroll().top;var ah=f.h.windowWidth();var j=f.h.windowHeight();var p=[[al.left,al.top],[al.left+f.width,al.top],[al.left,al.top+f.height],[al.left+f.width,al.top+f.height]];for(var aj=0;aj<p.length;aj++){var ao=p[aj];if(ao[0]>=ai&&ao[0]<=ai+ah&&ao[1]>=ag&&ao[1]<=ag+j){an=true}}if(!an){return}}if(D){if(ak===37||ak===39){if(am.preventDefault){am.preventDefault()}else{am.returnValue=false}}if(ak===39){f.swipeNext()}if(ak===37){f.swipePrev()}}else{if(ak===38||ak===40){if(am.preventDefault){am.preventDefault()}else{am.returnValue=false}}if(ak===40){f.swipeNext()}if(ak===38){f.swipePrev()}}}f.disableKeyboardControl=function(){a.keyboardControl=false;f.h.removeEventListener(document,"keydown",F)};f.enableKeyboardControl=function(){a.keyboardControl=true;f.h.addEventListener(document,"keydown",F)};var T=(new Date()).getTime();function c(p){var j=f._wheelEvent;var ag=0;if(p.detail){ag=-p.detail}else{if(j==="mousewheel"){if(a.mousewheelControlForceToAxis){if(D){if(Math.abs(p.wheelDeltaX)>Math.abs(p.wheelDeltaY)){ag=p.wheelDeltaX}else{return}}else{if(Math.abs(p.wheelDeltaY)>Math.abs(p.wheelDeltaX)){ag=p.wheelDeltaY}else{return}}}else{ag=p.wheelDelta}}else{if(j==="DOMMouseScroll"){ag=-p.detail}else{if(j==="wheel"){if(a.mousewheelControlForceToAxis){if(D){if(Math.abs(p.deltaX)>Math.abs(p.deltaY)){ag=-p.deltaX}else{return}}else{if(Math.abs(p.deltaY)>Math.abs(p.deltaX)){ag=-p.deltaY}else{return}}}else{ag=Math.abs(p.deltaX)>Math.abs(p.deltaY)?-p.deltaX:-p.deltaY}}}}}if(!a.freeMode){if((new Date()).getTime()-T>60){if(ag<0){f.swipeNext()}else{f.swipePrev()}}T=(new Date()).getTime()}else{var i=f.getWrapperTranslate()+ag;if(i>0){i=0}if(i<-ab()){i=-ab()}f.setWrapperTransition(0);f.setWrapperTranslate(i);f.updateActiveSlide(i);if(i===0||i===-ab()){return}}if(a.autoplay){f.stopAutoplay(true)}if(p.preventDefault){p.preventDefault()}else{p.returnValue=false}return false}f.disableMousewheelControl=function(){if(!f._wheelEvent){return false}a.mousewheelControl=false;f.h.removeEventListener(f.container,f._wheelEvent,c);return true};f.enableMousewheelControl=function(){if(!f._wheelEvent){return false}a.mousewheelControl=true;f.h.addEventListener(f.container,f._wheelEvent,c);return true};if(a.grabCursor){var g=f.container.style;g.cursor="move";g.cursor="grab";g.cursor="-moz-grab";g.cursor="-webkit-grab"}f.allowSlideClick=true;function W(i){if(f.allowSlideClick){E(i);f.fireCallback(a.onSlideClick,f,i)}}function k(i){E(i);f.fireCallback(a.onSlideTouch,f,i)}function E(j){if(!j.currentTarget){var i=j.srcElement;do{if(i.className.indexOf(a.slideClass)>-1){break}i=i.parentNode}while(i);f.clickedSlide=i}else{f.clickedSlide=j.currentTarget}f.clickedSlideIndex=f.slides.indexOf(f.clickedSlide);f.clickedSlideLoopIndex=f.clickedSlideIndex-(f.loopedSlides||0)}f.allowLinks=true;function O(i){if(!f.allowLinks){if(i.preventDefault){i.preventDefault()}else{i.returnValue=false}if(a.preventLinksPropagation&&"stopPropagation" in i){i.stopPropagation()}return false}}function y(i){if(i.stopPropagation){i.stopPropagation()}else{i.returnValue=false}return false}var w=false;var L;var ad=true;function U(ag){if(a.preventLinks){f.allowLinks=true}if(f.isTouched||a.onlyExternal){return false}var ah=ag.target||ag.srcElement;if(document.activeElement){if(document.activeElement!==ah){document.activeElement.blur()}}var p=("input select textarea").split(" ");if(a.noSwiping&&(ah)&&I(ah)){return false}ad=false;f.isTouched=true;w=ag.type==="touchstart";if(!w&&"which" in ag&&ag.which===3){f.isTouched=false;return false}if(!w||ag.targetTouches.length===1){f.callPlugins("onTouchStartBegin");if(!w&&!f.isAndroid&&p.indexOf(ah.tagName.toLowerCase())<0){if(ag.preventDefault){ag.preventDefault()}else{ag.returnValue=false}}var j=w?ag.targetTouches[0].pageX:(ag.pageX||ag.clientX);var i=w?ag.targetTouches[0].pageY:(ag.pageY||ag.clientY);f.touches.startX=f.touches.currentX=j;f.touches.startY=f.touches.currentY=i;f.touches.start=f.touches.current=D?j:i;f.setWrapperTransition(0);f.positions.start=f.positions.current=f.getWrapperTranslate();f.setWrapperTranslate(f.positions.start);f.times.start=(new Date()).getTime();b=undefined;if(a.moveStartThreshold>0){L=false}if(a.onTouchStart){f.fireCallback(a.onTouchStart,f,ag)}f.callPlugins("onTouchStartEnd")}}var h,H;function aa(ah){if(!f.isTouched||a.onlyExternal){return}if(w&&ah.type==="mousemove"){return}var ag=w?ah.targetTouches[0].pageX:(ah.pageX||ah.clientX);var j=w?ah.targetTouches[0].pageY:(ah.pageY||ah.clientY);if(typeof b==="undefined"&&D){b=!!(b||Math.abs(j-f.touches.startY)>Math.abs(ag-f.touches.startX))}if(typeof b==="undefined"&&!D){b=!!(b||Math.abs(j-f.touches.startY)<Math.abs(ag-f.touches.startX))}if(b){f.isTouched=false;return}if(D){if((!a.swipeToNext&&ag<f.touches.startX)||((!a.swipeToPrev&&ag>f.touches.startX))){return}}else{if((!a.swipeToNext&&j<f.touches.startY)||((!a.swipeToPrev&&j>f.touches.startY))){return}}if(ah.assignedToSwiper){f.isTouched=false;return}ah.assignedToSwiper=true;if(a.preventLinks){f.allowLinks=false}if(a.onSlideClick){f.allowSlideClick=false}if(a.autoplay){f.stopAutoplay(true)}if(!w||ah.touches.length===1){if(!f.isMoved){f.callPlugins("onTouchMoveStart");if(a.loop){f.fixLoop();f.positions.start=f.getWrapperTranslate()}if(a.onTouchMoveStart){f.fireCallback(a.onTouchMoveStart,f)}}f.isMoved=true;if(ah.preventDefault){ah.preventDefault()}else{ah.returnValue=false}f.touches.current=D?ag:j;f.positions.current=(f.touches.current-f.touches.start)*a.touchRatio+f.positions.start;if(f.positions.current>0&&a.onResistanceBefore){f.fireCallback(a.onResistanceBefore,f,f.positions.current)}if(f.positions.current<-ab()&&a.onResistanceAfter){f.fireCallback(a.onResistanceAfter,f,Math.abs(f.positions.current+ab()))}if(a.resistance&&a.resistance!=="100%"){var p;if(f.positions.current>0){p=1-f.positions.current/d/2;if(p<0.5){f.positions.current=(d/2)}else{f.positions.current=f.positions.current*p}}if(f.positions.current<-ab()){var ai=(f.touches.current-f.touches.start)*a.touchRatio+(ab()+f.positions.start);p=(d+ai)/(d);var i=f.positions.current-ai*(1-p)/2;var aj=-ab()-d/2;if(i<aj||p<=0){f.positions.current=aj}else{f.positions.current=i}}}if(a.resistance&&a.resistance==="100%"){if(f.positions.current>0&&!(a.freeMode&&!a.freeModeFluid)){f.positions.current=0}if(f.positions.current<-ab()&&!(a.freeMode&&!a.freeModeFluid)){f.positions.current=-ab()}}if(!a.followFinger){return}if(!a.moveStartThreshold){f.setWrapperTranslate(f.positions.current)}else{if(Math.abs(f.touches.current-f.touches.start)>a.moveStartThreshold||L){if(!L){L=true;f.touches.start=f.touches.current;return}f.setWrapperTranslate(f.positions.current)}else{f.positions.current=f.positions.start}}if(a.freeMode||a.watchActiveIndex){f.updateActiveSlide(f.positions.current)}if(a.grabCursor){f.container.style.cursor="move";f.container.style.cursor="grabbing";f.container.style.cursor="-moz-grabbin";f.container.style.cursor="-webkit-grabbing"}if(!h){h=f.touches.current}if(!H){H=(new Date()).getTime()}f.velocity=(f.touches.current-h)/((new Date()).getTime()-H)/2;if(Math.abs(f.touches.current-h)<2){f.velocity=0}h=f.touches.current;H=(new Date()).getTime();f.callPlugins("onTouchMoveEnd");if(a.onTouchMove){f.fireCallback(a.onTouchMove,f,ah)}return false}}function N(p){if(b){f.swipeReset()}if(a.onlyExternal||!f.isTouched){return}f.isTouched=false;if(a.grabCursor){f.container.style.cursor="move";f.container.style.cursor="grab";f.container.style.cursor="-moz-grab";f.container.style.cursor="-webkit-grab"}if(!f.positions.current&&f.positions.current!==0){f.positions.current=f.positions.start}if(a.followFinger){f.setWrapperTranslate(f.positions.current)}f.times.end=(new Date()).getTime();f.touches.diff=f.touches.current-f.touches.start;f.touches.abs=Math.abs(f.touches.diff);f.positions.diff=f.positions.current-f.positions.start;f.positions.abs=Math.abs(f.positions.diff);var aq=f.positions.diff;var au=f.positions.abs;var j=f.times.end-f.times.start;if(au<5&&(j)<300&&f.allowLinks===false){if(!a.freeMode&&au!==0){f.swipeReset()}if(a.preventLinks){f.allowLinks=true}if(a.onSlideClick){f.allowSlideClick=true}}setTimeout(function(){if(typeof f==="undefined"||f===null){return}if(a.preventLinks){f.allowLinks=true}if(a.onSlideClick){f.allowSlideClick=true}},100);var am=ab();if(!f.isMoved&&a.freeMode){f.isMoved=false;if(a.onTouchEnd){f.fireCallback(a.onTouchEnd,f,p)}f.callPlugins("onTouchEnd");return}if(!f.isMoved||f.positions.current>0||f.positions.current<-am){f.swipeReset();if(a.onTouchEnd){f.fireCallback(a.onTouchEnd,f,p)}f.callPlugins("onTouchEnd");return}f.isMoved=false;if(a.freeMode){if(a.freeModeFluid){var an=1000*a.momentumRatio;var aj=f.velocity*an;var ai=f.positions.current+aj;var ah=false;var ao;var at=Math.abs(f.velocity)*20*a.momentumBounceRatio;if(ai<-am){if(a.momentumBounce&&f.support.transitions){if(ai+am<-at){ai=-am-at}ao=-am;ah=true;ad=true}else{ai=-am}}if(ai>0){if(a.momentumBounce&&f.support.transitions){if(ai>at){ai=at}ao=0;ah=true;ad=true}else{ai=0}}if(f.velocity!==0){an=Math.abs((ai-f.positions.current)/f.velocity)}f.setWrapperTranslate(ai);f.setWrapperTransition(an);if(a.momentumBounce&&ah){f.wrapperTransitionEnd(function(){if(!ad){return}if(a.onMomentumBounce){f.fireCallback(a.onMomentumBounce,f)}f.callPlugins("onMomentumBounce");f.setWrapperTranslate(ao);f.setWrapperTransition(300)})}f.updateActiveSlide(ai)}if(!a.freeModeFluid||j>=300){f.updateActiveSlide(f.positions.current)}if(a.onTouchEnd){f.fireCallback(a.onTouchEnd,f,p)}f.callPlugins("onTouchEnd");return}r=aq<0?"toNext":"toPrev";if(r==="toNext"&&(j<=300)){if(au<30||!a.shortSwipes){f.swipeReset()}else{f.swipeNext(true,true)}}if(r==="toPrev"&&(j<=300)){if(au<30||!a.shortSwipes){f.swipeReset()}else{f.swipePrev(true,true)}}var ar=0;if(a.slidesPerView==="auto"){var ag=Math.abs(f.getWrapperTranslate());var ap=0;var al;for(var ak=0;ak<f.slides.length;ak++){al=D?f.slides[ak].getWidth(true,a.roundLengths):f.slides[ak].getHeight(true,a.roundLengths);ap+=al;if(ap>ag){ar=al;break}}if(ar>d){ar=d}}else{ar=J*a.slidesPerView}if(r==="toNext"&&(j>300)){if(au>=ar*a.longSwipesRatio){f.swipeNext(true,true)}else{f.swipeReset()}}if(r==="toPrev"&&(j>300)){if(au>=ar*a.longSwipesRatio){f.swipePrev(true,true)}else{f.swipeReset()}}if(a.onTouchEnd){f.fireCallback(a.onTouchEnd,f,p)}f.callPlugins("onTouchEnd")}function I(j){var i=false;do{if(j.className.indexOf(a.noSwipingClass)>-1){i=true}j=j.parentElement}while(!i&&j.parentElement&&j.className.indexOf(a.wrapperClass)===-1);if(!i&&j.className.indexOf(a.wrapperClass)>-1&&j.className.indexOf(a.noSwipingClass)>-1){i=true}return i}function M(i,j){var p=document.createElement("div");var ag;p.innerHTML=j;ag=p.firstChild;ag.className+=" "+i;return ag.outerHTML}f.swipeNext=function(aj,p){if(typeof aj==="undefined"){aj=true}if(!p&&a.loop){f.fixLoop()}if(!p&&a.autoplay){f.stopAutoplay(true)}f.callPlugins("onSwipeNext");var ai=f.getWrapperTranslate().toFixed(2);var ah=ai;if(a.slidesPerView==="auto"){for(var ag=0;ag<f.snapGrid.length;ag++){if(-ai>=f.snapGrid[ag].toFixed(2)&&-ai<f.snapGrid[ag+1].toFixed(2)){ah=-f.snapGrid[ag+1];break}}}else{var j=J*a.slidesPerGroup;ah=-(Math.floor(Math.abs(ai)/Math.floor(j))*j+j)}if(ah<-ab()){ah=-ab()}if(ah===ai){return false}n(ah,"next",{runCallbacks:aj});return true};f.swipePrev=function(aj,p){if(typeof aj==="undefined"){aj=true}if(!p&&a.loop){f.fixLoop()}if(!p&&a.autoplay){f.stopAutoplay(true)}f.callPlugins("onSwipePrev");var ai=Math.ceil(f.getWrapperTranslate());var ah;if(a.slidesPerView==="auto"){ah=0;for(var ag=1;ag<f.snapGrid.length;ag++){if(-ai===f.snapGrid[ag]){ah=-f.snapGrid[ag-1];break}if(-ai>f.snapGrid[ag]&&-ai<f.snapGrid[ag+1]){ah=-f.snapGrid[ag];break}}}else{var j=J*a.slidesPerGroup;ah=-(Math.ceil(-ai/j)-1)*j}if(ah>0){ah=0}if(ah===ai){return false}n(ah,"prev",{runCallbacks:aj});return true};f.swipeReset=function(aj){if(typeof aj==="undefined"){aj=true}f.callPlugins("onSwipeReset");var ah=f.getWrapperTranslate();var j=J*a.slidesPerGroup;var ag;var ai=-ab();if(a.slidesPerView==="auto"){ag=0;for(var p=0;p<f.snapGrid.length;p++){if(-ah===f.snapGrid[p]){return}if(-ah>=f.snapGrid[p]&&-ah<f.snapGrid[p+1]){if(f.positions.diff>0){ag=-f.snapGrid[p+1]}else{ag=-f.snapGrid[p]}break}}if(-ah>=f.snapGrid[f.snapGrid.length-1]){ag=-f.snapGrid[f.snapGrid.length-1]}if(ah<=-ab()){ag=-ab()}}else{ag=ah<0?Math.round(ah/j)*j:0;if(ah<=-ab()){ag=-ab()}}if(a.scrollContainer){ag=ah<0?ah:0}if(ag<-ab()){ag=-ab()}if(a.scrollContainer&&(d>J)){ag=0}if(ag===ah){return false}n(ag,"reset",{runCallbacks:aj});return true};f.swipeTo=function(i,ag,ah){i=parseInt(i,10);f.callPlugins("onSwipeTo",{index:i,speed:ag});if(a.loop){i=i+f.loopedSlides}var p=f.getWrapperTranslate();if(i>(f.slides.length-1)||i<0){return}var j;if(a.slidesPerView==="auto"){j=-f.slidesGrid[i]}else{j=-i*J}if(j<-ab()){j=-ab()}if(j===p){return false}if(typeof ah==="undefined"){ah=true}n(j,"to",{index:i,speed:ag,runCallbacks:ah});return true};function n(ag,ah,am){var j=(ah==="to"&&am.speed>=0)?am.speed:a.speed;var aj=+new Date();function ai(){var an=+new Date();var ao=an-aj;p+=ak*ao/(1000/60);i=al==="toNext"?p>ag:p<ag;if(i){f.setWrapperTranslate(Math.ceil(p));f._DOMAnimating=true;window.setTimeout(function(){ai()},1000/60)}else{if(a.onSlideChangeEnd){if(ah==="to"){if(am.runCallbacks===true){f.fireCallback(a.onSlideChangeEnd,f,al)}}else{f.fireCallback(a.onSlideChangeEnd,f,al)}}f.setWrapperTranslate(ag);f._DOMAnimating=false}}if(f.support.transitions||!a.DOMAnimation){f.setWrapperTranslate(ag);f.setWrapperTransition(j)}else{var p=f.getWrapperTranslate();var ak=Math.ceil((ag-p)/j*(1000/60));var al=p>ag?"toNext":"toPrev";var i=al==="toNext"?p>ag:p<ag;if(f._DOMAnimating){return}ai()}f.updateActiveSlide(ag);if(a.onSlideNext&&ah==="next"&&am.runCallbacks===true){f.fireCallback(a.onSlideNext,f,ag)}if(a.onSlidePrev&&ah==="prev"&&am.runCallbacks===true){f.fireCallback(a.onSlidePrev,f,ag)}if(a.onSlideReset&&ah==="reset"&&am.runCallbacks===true){f.fireCallback(a.onSlideReset,f,ag)}if((ah==="next"||ah==="prev"||ah==="to")&&am.runCallbacks===true){af(ah)}}f._queueStartCallbacks=false;f._queueEndCallbacks=false;function af(i){f.callPlugins("onSlideChangeStart");if(a.onSlideChangeStart){if(a.queueStartCallbacks&&f.support.transitions){if(f._queueStartCallbacks){return}f._queueStartCallbacks=true;f.fireCallback(a.onSlideChangeStart,f,i);f.wrapperTransitionEnd(function(){f._queueStartCallbacks=false})}else{f.fireCallback(a.onSlideChangeStart,f,i)}}if(a.onSlideChangeEnd){if(f.support.transitions){if(a.queueEndCallbacks){if(f._queueEndCallbacks){return}f._queueEndCallbacks=true;f.wrapperTransitionEnd(function(j){f.fireCallback(a.onSlideChangeEnd,j,i)})}else{f.wrapperTransitionEnd(function(j){f.fireCallback(a.onSlideChangeEnd,j,i)})}}else{if(!a.DOMAnimation){setTimeout(function(){f.fireCallback(a.onSlideChangeEnd,f,i)},10)}}}}f.updateActiveSlide=function(aj){if(!f.initialized){return}if(f.slides.length===0){return}f.previousIndex=f.activeIndex;if(typeof aj==="undefined"){aj=f.getWrapperTranslate()}if(aj>0){aj=0}var ai;if(a.slidesPerView==="auto"){var am=0;f.activeIndex=f.slidesGrid.indexOf(-aj);if(f.activeIndex<0){for(ai=0;ai<f.slidesGrid.length-1;ai++){if(-aj>f.slidesGrid[ai]&&-aj<f.slidesGrid[ai+1]){break}}var ag=Math.abs(f.slidesGrid[ai]+aj);var p=Math.abs(f.slidesGrid[ai+1]+aj);if(ag<=p){f.activeIndex=ai}else{f.activeIndex=ai+1}}}else{f.activeIndex=Math[a.visibilityFullFit?"ceil":"round"](-aj/J)}if(f.activeIndex===f.slides.length){f.activeIndex=f.slides.length-1}if(f.activeIndex<0){f.activeIndex=0}if(!f.slides[f.activeIndex]){return}f.calcVisibleSlides(aj);if(f.support.classList){var ak;for(ai=0;ai<f.slides.length;ai++){ak=f.slides[ai];ak.classList.remove(a.slideActiveClass);if(f.visibleSlides.indexOf(ak)>=0){ak.classList.add(a.slideVisibleClass)}else{ak.classList.remove(a.slideVisibleClass)}}f.slides[f.activeIndex].classList.add(a.slideActiveClass)}else{var al=new RegExp("\\s*"+a.slideActiveClass);var j=new RegExp("\\s*"+a.slideVisibleClass);for(ai=0;ai<f.slides.length;ai++){f.slides[ai].className=f.slides[ai].className.replace(al,"").replace(j,"");if(f.visibleSlides.indexOf(f.slides[ai])>=0){f.slides[ai].className+=" "+a.slideVisibleClass}}f.slides[f.activeIndex].className+=" "+a.slideActiveClass}if(a.loop){var ah=f.loopedSlides;f.activeLoopIndex=f.activeIndex-ah;if(f.activeLoopIndex>=f.slides.length-ah*2){f.activeLoopIndex=f.slides.length-ah*2-f.activeLoopIndex}if(f.activeLoopIndex<0){f.activeLoopIndex=f.slides.length-ah*2+f.activeLoopIndex}if(f.activeLoopIndex<0){f.activeLoopIndex=0}}else{f.activeLoopIndex=f.activeIndex}if(a.pagination){f.updatePagination(aj)}};f.createPagination=function(p){if(a.paginationClickable&&f.paginationButtons){C()}f.paginationContainer=a.pagination.nodeType?a.pagination:R(a.pagination)[0];if(a.createPagination){var j="";var ai=f.slides.length;var ah=ai;if(a.loop){ah-=f.loopedSlides*2}for(var ag=0;ag<ah;ag++){j+="<"+a.paginationElement+' class="'+a.paginationElementClass+'"></'+a.paginationElement+">"}f.paginationContainer.innerHTML=j}f.paginationButtons=R("."+a.paginationElementClass,f.paginationContainer);if(!p){f.updatePagination()}f.callPlugins("onCreatePagination");if(a.paginationClickable){Y()}};function C(){var j=f.paginationButtons;if(j){for(var p=0;p<j.length;p++){f.h.removeEventListener(j[p],"click",u)}}}function Y(){var j=f.paginationButtons;if(j){for(var p=0;p<j.length;p++){f.h.addEventListener(j[p],"click",u)}}}function u(ai){var p;var ah=ai.target||ai.srcElement;var j=f.paginationButtons;for(var ag=0;ag<j.length;ag++){if(ah===j[ag]){p=ag}}if(a.autoplay){f.stopAutoplay(true)}f.swipeTo(p)}f.updatePagination=function(p){if(!a.pagination){return}if(f.slides.length<1){return}var ak=R("."+a.paginationActiveClass,f.paginationContainer);if(!ak){return}var ai=f.paginationButtons;if(ai.length===0){return}for(var aj=0;aj<ai.length;aj++){ai[aj].className=a.paginationElementClass}var am=a.loop?f.loopedSlides:0;if(a.paginationAsRange){if(!f.visibleSlides){f.calcVisibleSlides(p)}var ag=[];var ah;for(ah=0;ah<f.visibleSlides.length;ah++){var al=f.slides.indexOf(f.visibleSlides[ah])-am;if(a.loop&&al<0){al=f.slides.length-f.loopedSlides*2+al}if(a.loop&&al>=f.slides.length-f.loopedSlides*2){al=f.slides.length-f.loopedSlides*2-al;al=Math.abs(al)}ag.push(al)}for(ah=0;ah<ag.length;ah++){if(ai[ag[ah]]){ai[ag[ah]].className+=" "+a.paginationVisibleClass}}if(a.loop){if(ai[f.activeLoopIndex]!==undefined){ai[f.activeLoopIndex].className+=" "+a.paginationActiveClass}}else{if(ai[f.activeIndex]){ai[f.activeIndex].className+=" "+a.paginationActiveClass}}}else{if(a.loop){if(ai[f.activeLoopIndex]){ai[f.activeLoopIndex].className+=" "+a.paginationActiveClass+" "+a.paginationVisibleClass}}else{if(ai[f.activeIndex]){ai[f.activeIndex].className+=" "+a.paginationActiveClass+" "+a.paginationVisibleClass}}}};f.calcVisibleSlides=function(j){var ai=[];var ak=0,ah=0,aj=0;if(D&&f.wrapperLeft>0){j=j+f.wrapperLeft}if(!D&&f.wrapperTop>0){j=j+f.wrapperTop}for(var ag=0;ag<f.slides.length;ag++){ak+=ah;if(a.slidesPerView==="auto"){ah=D?f.h.getWidth(f.slides[ag],true,a.roundLengths):f.h.getHeight(f.slides[ag],true,a.roundLengths)}else{ah=J}aj=ak+ah;var p=false;if(a.visibilityFullFit){if(ak>=-j&&aj<=-j+d){p=true}if(ak<=-j&&aj>=-j+d){p=true}}else{if(aj>-j&&aj<=((-j+d))){p=true}if(ak>=-j&&ak<((-j+d))){p=true}if(ak<-j&&aj>((-j+d))){p=true}}if(p){ai.push(f.slides[ag])}}if(ai.length===0){ai=[f.slides[f.activeIndex]]}f.visibleSlides=ai};var K,X;f.startAutoplay=function(){if(f.support.transitions){if(typeof K!=="undefined"){return false}if(!a.autoplay){return}f.callPlugins("onAutoplayStart");if(a.onAutoplayStart){f.fireCallback(a.onAutoplayStart,f)}Z()}else{if(typeof X!=="undefined"){return false}if(!a.autoplay){return}f.callPlugins("onAutoplayStart");if(a.onAutoplayStart){f.fireCallback(a.onAutoplayStart,f)}X=setInterval(function(){if(a.loop){f.fixLoop();f.swipeNext(true,true)}else{if(!f.swipeNext(true,true)){if(!a.autoplayStopOnLast){f.swipeTo(0)}else{clearInterval(X);X=undefined}}}},a.autoplay)}};f.stopAutoplay=function(i){if(f.support.transitions){if(!K){return}if(K){clearTimeout(K)}K=undefined;if(i&&!a.autoplayDisableOnInteraction){f.wrapperTransitionEnd(function(){Z()})}f.callPlugins("onAutoplayStop");if(a.onAutoplayStop){f.fireCallback(a.onAutoplayStop,f)}}else{if(X){clearInterval(X)}X=undefined;f.callPlugins("onAutoplayStop");if(a.onAutoplayStop){f.fireCallback(a.onAutoplayStop,f)}}};function Z(){K=setTimeout(function(){if(a.loop){f.fixLoop();f.swipeNext(true,true)}else{if(!f.swipeNext(true,true)){if(!a.autoplayStopOnLast){f.swipeTo(0)}else{clearTimeout(K);K=undefined}}}f.wrapperTransitionEnd(function(){if(typeof K!=="undefined"){Z()}})},a.autoplay)}f.loopCreated=false;f.removeLoopedSlides=function(){if(f.loopCreated){for(var j=0;j<f.slides.length;j++){if(f.slides[j].getData("looped")===true){f.wrapper.removeChild(f.slides[j])}}}};f.createLoop=function(){if(f.slides.length===0){return}if(a.slidesPerView==="auto"){f.loopedSlides=a.loopedSlides||1}else{f.loopedSlides=a.slidesPerView+a.loopAdditionalSlides}if(f.loopedSlides>f.slides.length){f.loopedSlides=f.slides.length}var an="",ak="",aj;var ai="";var ao=f.slides.length;var ag=Math.floor(f.loopedSlides/ao);var am=f.loopedSlides%ao;for(aj=0;aj<(ag*ao);aj++){var ah=aj;if(aj>=ao){var al=Math.floor(aj/ao);ah=aj-(ao*al)}ai+=f.slides[ah].outerHTML}for(aj=0;aj<am;aj++){ak+=M(a.slideDuplicateClass,f.slides[aj].outerHTML)}for(aj=ao-am;aj<ao;aj++){an+=M(a.slideDuplicateClass,f.slides[aj].outerHTML)}var p=an+ai+z.innerHTML+ai+ak;z.innerHTML=p;f.loopCreated=true;f.calcSlides();for(aj=0;aj<f.slides.length;aj++){if(aj<f.loopedSlides||aj>=f.slides.length-f.loopedSlides){f.slides[aj].setData("looped",true)}}f.callPlugins("onCreateLoop")};f.fixLoop=function(){var i;if(f.activeIndex<f.loopedSlides){i=f.slides.length-f.loopedSlides*3+f.activeIndex;f.swipeTo(i,0,false)}else{if((a.slidesPerView==="auto"&&f.activeIndex>=f.loopedSlides*2)||(f.activeIndex>f.slides.length-a.slidesPerView*2)){i=-f.slides.length+f.activeIndex+f.loopedSlides;f.swipeTo(i,0,false)}}};f.loadSlides=function(){var ag="";f.activeLoaderIndex=0;var p=a.loader.slides;var ah=a.loader.loadAllSlides?p.length:a.slidesPerView*(1+a.loader.surroundGroups);for(var j=0;j<ah;j++){if(a.loader.slidesHTMLType==="outer"){ag+=p[j]}else{ag+="<"+a.slideElement+' class="'+a.slideClass+'" data-swiperindex="'+j+'">'+p[j]+"</"+a.slideElement+">"}}f.wrapper.innerHTML=ag;f.calcSlides(true);if(!a.loader.loadAllSlides){f.wrapperTransitionEnd(f.reloadSlides,true)}};f.reloadSlides=function(){var j=a.loader.slides;var am=parseInt(f.activeSlide().data("swiperindex"),10);if(am<0||am>j.length-1){return}f.activeLoaderIndex=am;var p=Math.max(0,am-a.slidesPerView*a.loader.surroundGroups);var ak=Math.min(am+a.slidesPerView*(1+a.loader.surroundGroups)-1,j.length-1);if(am>0){var ag=-J*(am-p);f.setWrapperTranslate(ag);f.setWrapperTransition(0)}var aj;if(a.loader.logic==="reload"){f.wrapper.innerHTML="";var an="";for(aj=p;aj<=ak;aj++){an+=a.loader.slidesHTMLType==="outer"?j[aj]:"<"+a.slideElement+' class="'+a.slideClass+'" data-swiperindex="'+aj+'">'+j[aj]+"</"+a.slideElement+">"}f.wrapper.innerHTML=an}else{var ah=1000;var ai=0;for(aj=0;aj<f.slides.length;aj++){var al=f.slides[aj].data("swiperindex");if(al<p||al>ak){f.wrapper.removeChild(f.slides[aj])}else{ah=Math.min(al,ah);ai=Math.max(al,ai)}}for(aj=p;aj<=ak;aj++){var ao;if(aj<ah){ao=document.createElement(a.slideElement);ao.className=a.slideClass;ao.setAttribute("data-swiperindex",aj);ao.innerHTML=j[aj];f.wrapper.insertBefore(ao,f.wrapper.firstChild)}if(aj>ai){ao=document.createElement(a.slideElement);ao.className=a.slideClass;ao.setAttribute("data-swiperindex",aj);ao.innerHTML=j[aj];f.wrapper.appendChild(ao)}}}f.reInit(true)};function Q(){f.calcSlides();if(a.loader.slides.length>0&&f.slides.length===0){f.loadSlides()}if(a.loop){f.createLoop()}f.init();m();if(a.pagination){f.createPagination(true)}if(a.loop||a.initialSlide>0){f.swipeTo(a.initialSlide,0,false)}else{f.updateActiveSlide(0)}if(a.autoplay){f.startAutoplay()}f.centerIndex=f.activeIndex;if(a.onSwiperCreated){f.fireCallback(a.onSwiperCreated,f)}f.callPlugins("onSwiperCreated")}Q()};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(h,f){var b=this,e=b.wrapper,d=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],c;function g(a){if(a.target!==e){return}h(b);if(b.params.queueEndCallbacks){b._queueEndCallbacks=false}if(!f){for(c=0;c<d.length;c++){b.h.removeEventListener(e,d[c],g)}}}if(h){for(c=0;c<d.length;c++){b.h.addEventListener(e,d[c],g)}}},getWrapperTranslate:function(e){var d=this.wrapper,a,c,f,b;if(typeof e==="undefined"){e=this.params.mode==="horizontal"?"x":"y"}if(this.support.transforms&&this.params.useCSS3Transforms){f=window.getComputedStyle(d,null);if(window.WebKitCSSMatrix){b=new WebKitCSSMatrix(f.webkitTransform==="none"?"":f.webkitTransform)}else{b=f.MozTransform||f.OTransform||f.MsTransform||f.msTransform||f.transform||f.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,");a=b.toString().split(",")}if(e==="x"){if(window.WebKitCSSMatrix){c=b.m41}else{if(a.length===16){c=parseFloat(a[12])}else{c=parseFloat(a[4])}}}if(e==="y"){if(window.WebKitCSSMatrix){c=b.m42}else{if(a.length===16){c=parseFloat(a[13])}else{c=parseFloat(a[5])}}}}else{if(e==="x"){c=parseFloat(d.style.left,10)||0}if(e==="y"){c=parseFloat(d.style.top,10)||0}}return c||0},setWrapperTranslate:function(a,f,e){var d=this.wrapper.style,b={x:0,y:0,z:0},c;if(arguments.length===3){b.x=a;b.y=f;b.z=e}else{if(typeof f==="undefined"){f=this.params.mode==="horizontal"?"x":"y"}b[f]=a}if(this.support.transforms&&this.params.useCSS3Transforms){c=this.support.transforms3d?"translate3d("+b.x+"px, "+b.y+"px, "+b.z+"px)":"translate("+b.x+"px, "+b.y+"px)";d.webkitTransform=d.MsTransform=d.msTransform=d.MozTransform=d.OTransform=d.transform=c}else{d.left=b.x+"px";d.top=b.y+"px"}this.callPlugins("onSetWrapperTransform",b);if(this.params.onSetWrapperTransform){this.fireCallback(this.params.onSetWrapperTransform,this,b)}},setWrapperTransition:function(a){var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=(a/1000)+"s";this.callPlugins("onSetWrapperTransition",{duration:a});if(this.params.onSetWrapperTransition){this.fireCallback(this.params.onSetWrapperTransition,this,a)}},h:{getWidth:function(e,c,a){var d=window.getComputedStyle(e,null).getPropertyValue("width");var b=parseFloat(d);if(isNaN(b)||d.indexOf("%")>0||b<0){b=e.offsetWidth-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-right"))}if(c){b+=parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-right"))}if(a){return Math.ceil(b)}else{return b}},getHeight:function(d,c,b){if(c){return d.offsetHeight}var a=window.getComputedStyle(d,null).getPropertyValue("height");var e=parseFloat(a);if(isNaN(e)||a.indexOf("%")>0||e<0){e=d.offsetHeight-parseFloat(window.getComputedStyle(d,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(d,null).getPropertyValue("padding-bottom"))}if(c){e+=parseFloat(window.getComputedStyle(d,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(d,null).getPropertyValue("padding-bottom"))}if(b){return Math.ceil(e)}else{return e}},getOffset:function(b){var c=b.getBoundingClientRect();var a=document.body;var g=b.clientTop||a.clientTop||0;var f=b.clientLeft||a.clientLeft||0;var d=window.pageYOffset||b.scrollTop;var e=window.pageXOffset||b.scrollLeft;if(document.documentElement&&!window.pageYOffset){d=document.documentElement.scrollTop;e=document.documentElement.scrollLeft}return{top:c.top+d-g,left:c.left+e-f}},windowWidth:function(){if(window.innerWidth){return window.innerWidth}else{if(document.documentElement&&document.documentElement.clientWidth){return document.documentElement.clientWidth}}},windowHeight:function(){if(window.innerHeight){return window.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){return document.documentElement.clientHeight}}},windowScroll:function(){if(typeof pageYOffset!=="undefined"){return{left:window.pageXOffset,top:window.pageYOffset}}else{if(document.documentElement){return{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}}}},addEventListener:function(b,c,d,a){if(typeof a==="undefined"){a=false}if(b.addEventListener){b.addEventListener(c,d,a)}else{if(b.attachEvent){b.attachEvent("on"+c,d)}}},removeEventListener:function(b,c,d,a){if(typeof a==="undefined"){a=false}if(b.removeEventListener){b.removeEventListener(c,d,a)}else{if(b.detachEvent){b.detachEvent("on"+c,d)}}}},setTransform:function(b,a){var c=b.style;c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=a},setTranslate:function(b,d){var c=b.style;var e={x:d.x||0,y:d.y||0,z:d.z||0};var a=this.support.transforms3d?"translate3d("+(e.x)+"px,"+(e.y)+"px,"+(e.z)+"px)":"translate("+(e.x)+"px,"+(e.y)+"px)";c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=a;if(!this.support.transforms){c.left=e.x+"px";c.top=e.y+"px"}},setTransition:function(a,b){var c=a.style;c.webkitTransitionDuration=c.MsTransitionDuration=c.msTransitionDuration=c.MozTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms"},support:{touch:(window.Modernizr&&Modernizr.touch===true)||(function(){return !!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch)})(),transforms3d:(window.Modernizr&&Modernizr.csstransforms3d===true)||(function(){var a=document.createElement("div").style;return("webkitPerspective" in a||"MozPerspective" in a||"OPerspective" in a||"MsPerspective" in a||"perspective" in a)})(),transforms:(window.Modernizr&&Modernizr.csstransforms===true)||(function(){var a=document.createElement("div").style;return("transform" in a||"WebkitTransform" in a||"MozTransform" in a||"msTransform" in a||"MsTransform" in a||"OTransform" in a)})(),transitions:(window.Modernizr&&Modernizr.csstransitions===true)||(function(){var a=document.createElement("div").style;return("transition" in a||"WebkitTransition" in a||"MozTransition" in a||"msTransition" in a||"MsTransition" in a||"OTransition" in a)})(),classList:(function(){var a=document.createElement("div");return"classList" in a})()},browser:{ie8:(function(){var c=-1;if(navigator.appName==="Microsoft Internet Explorer"){var a=navigator.userAgent;var b=new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);if(b.exec(a)!==null){c=parseFloat(RegExp.$1)}}return c!==-1&&c<9})(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}};if(window.jQuery||window.Zepto){(function(a){a.fn.swiper=function(c){var b;this.each(function(d){var f=a(this);var e=new Swiper(f[0],c);if(!d){b=e}f.data("swiper",e)});return b}})(window.jQuery||window.Zepto)}if(typeof(module)!=="undefined"){module.exports=Swiper}if(typeof define==="function"&&define.amd){define([],function(){return Swiper})};

$(document).ready(function() {
	
	var Content = "";
		Content += '<div id="cnTL"></div>';
		Content += '<div id="cnTR" align="right"></div>';
		Content += '<div id="cnBL"></div>';
		Content += '<div id="cnBR" align="right"></div>';


		Content += '<div id="cnNotificationCenter" align="center">';
		Content += 	   '<div class="swiper-container cnMainContainer">';
		Content += 		 '<div class="swiper-wrapper">';
		Content += 		 '</div>';
		Content += 		'</div>';
		Content += 		'<div class="cnEmtpySlide" align="center">'+ cnEmptyMessage +'</div>';
		Content += 	   '<div class="cnNcCloseContainer"><br><div class="cnNcCloseCenter"></div></div>';
		Content += 	'</div>';


	$("body").append(Content);

	$("body").on('tap', '.cnNotification', function() {
		$(this).removeAttr('mouseover');

		if( $(this).attr('data-closeclick') == "true" ){
			CloseCrystalSmallBox( $(this) );
		}

	});

	$("body").on('mouseenter', '.cnNotification', function() {
		$(this).attr('mouseover', 'true');
	});

	$("body").on('mouseleave', '.cnNotification', function() {
		$(this).removeAttr('mouseover');
	});


	NcSwiper = $('.cnMainContainer').swiper({ //.swiper-container
		mode:'vertical',
		calculateHeight: true,
		loop: false,
		slidesPerView: 'auto',
		freeMode: true,
		mousewheelControl: true,
	});



	$("body").on('tap', '.cnCallCenterClickeable', function() {
		
		$.CrystalShowPanel();
		// $.CrystalNotificationPanel();
		// var $Nc = $("#cnNotificationCenter");

		// 	$Nc.css("top","-50px").show();

		// var tl = new TimelineLite();
		//     tl.to( $Nc, 0.3, { autoAlpha:1 } )
		//       .to( $Nc, 1, { top: 0, ease:Bounce.easeOut }, "-=0.3" );

		// NcSwiper.reInit();

	});




	// Close Notification center
	$("body").on("tap",".cnNcCloseContainer",function(){

		var $Nc = $("#cnNotificationCenter");

		var tl = new TimelineLite();
		    tl.to( $Nc, 0.3, { autoAlpha:0 } )
		      .to( $Nc, 1, { top: -200 }, "-=0.3" );
	});

	var esIE = CustomIECheck();
	var ieFix = "tap";
	if (esIE) {
		ieFix = "click";
	};

	$("body").on(ieFix, '.cnNcCloseButton', function() {
		
		var Closes = $(this).attr("data-close");
		console.log( Closes );

		for (var i = NcSwiper.slides.length-1; i >= 0; i--) {

			var Slide = NcSwiper.getSlide(i).html();

			// Check if is title container
			if( Slide.indexOf("data-title") > 0 ){
				
				if( Slide.indexOf('data-title="'+ Closes +'"') >0 ){
					NcSwiper.removeSlide(i);
				}
				
			}else if( Slide.indexOf("data-child") >= 0 ){
				//Destroy if is that child

				if( Slide.indexOf('data-child="'+ Closes +'"') >0 ){
					NcSwiper.removeSlide(i);
				}

			}
			
		} // End For

		NcSwiper.reInit();
		CheckSlides();
	});


});


$.CrystalShowPanel = function(){

	var $Nc = $("#cnNotificationCenter");

		$Nc.css("top","-50px").show();

	var tl = new TimelineLite();
	    tl.to( $Nc, 0.3, { autoAlpha:1 } )
	      .to( $Nc, 1, { top: 0, ease:Bounce.easeOut }, "-=0.3" );

	NcSwiper.reInit();
}



$.CrystalNotification = function(settings,callback){

	settings = $.extend({
			position: 0,
			width: 300,
        	title: undefined,
        	content: "",
        	image: undefined,
        	sound: true,
        	panelbutton: true,
        	closebutton: true,
        	smallcloseclick: true,
        	timeout: undefined,
        	addtopanel: true,
        	soundpath: "static/sound"
        }, settings);

	cn +=1;

	PlaySound(settings.soundpath);

	if( settings.addtopanel ){
	    $.CrystalNotificationPanel({
			title: settings.title,
			image: settings.image,
			content: settings.content,
			show: false,
		});
    }


    if ($.browser.mobile) {

    	if( settings.position== 1 ){
    		settings.position = 2;
    	}else if(settings.position == 3){
    		settings.position = 4;
    	}

    };


	var ID = "cnID"+ cn;
	var Content = "";


	$(".cnTopNotification").each(function(){
	    	CloseMainCrystalBox($(this));
	 });


	// Big center notification
	if( settings.position == 0 ){

		

		Content += "<div id='"+ ID +"' class='cnTopNotification' align='center'>";
		if ( settings.closebutton ) {
			Content += "<span class='cnCloseIcon' data-crystal='#"+ ID +"'>X</span>";
		};

		Content += "<table>";
		Content += "<tr>";

		if (settings.image != undefined ) {
			Content += "<td>";
			Content += "<img src='"+ settings.image +"' class='cnMainIcon'>";
			Content += "</td>";
		};
		Content += "<td>";

		if ( settings.title != undefined ) {
			Content += "<span class='cnTitle'>";
			Content += settings.title;
			Content += "</span>";
		};

		Content += "<span class='cnContent'>";
		Content += settings.content;
		Content += "</span>";
		Content += "</td>";

		if ( settings.closebutton ) {
			Content += "<td class='cnCloseSection'></td>";
		};

		Content += "</tr>";
		Content += "</table>";

		if( settings.panelbutton ){
			Content += "<div class='cnCallCenterClickeable' data-crystal='#"+ ID +"'><div class='cnCallCenterWhiteBar'></div></div>";
		}

		Content += "</div>";

	}else{
		// Want another position
		Content += "<div id='"+ ID +"' class='cnNotification'>";
		Content += "<table>";
		Content += "<tr>";

		if( settings.image != undefined ){
			Content += "<td>";
			Content += "<img src='"+ settings.image +"' class='cnMainIcon'>";
			Content += "</td>";
		}
		Content += "<td>";

		if ( settings.title != undefined) {
			Content += "<span class='cnTitle'>";
			Content += settings.title;
			Content += "</span>";
		};

		Content += "<span class='cnContent'>";
		Content += settings.content;
		Content += "</span>";
		Content += "</td>";
		Content += "</tr>";
		Content += "</table>";
		Content += "</div>";
	}


	inAnimation(ID, settings.position, Content);

	if (settings.position != 0) {
		$Crystal.css("max-width", settings.width + "px");
	};

	$Crystal.attr('data-closeclick', settings.smallcloseclick);


	// Timeout autoclose
	if ( settings.timeout != undefined ) {
		setTimeout(function() {

			if (typeof callback == "function"){   
                  if(callback)callback("timeoutReach");
            } 

			CloseCrystalSmallBox( $("#" + ID ) );


		}, settings.timeout);
	};

	//Call Callback 
	if ( settings.smallcloseclick === true && settings.position != 0) {
		
		$Crystal.bind('tap', function() {
			
			if (typeof callback == "function"){   
		          if(callback)callback("close_click");
		    } 
		});
	};

	if( settings.position == 0 ){
		$Crystal.find(".cnCloseIcon").bind("tap",function(){

			if (typeof callback == "function"){   
		          if(callback)callback("close_click");
		    }

		    $(this).unbind('tap');
		    var parentID = $(this).attr('data-crystal');
		    var $Crystal = $(parentID);

		    CloseMainCrystalBox($Crystal);

		});

		$Crystal.find(".cnCallCenterClickeable").bind("tap",function(){

			if (typeof callback == "function"){   
		          if(callback)callback("close_click");
		    }

		    $(this).unbind('tap');
		    var parentID = $(this).attr('data-crystal');
		    var $Crystal = $(parentID);

		    CloseMainCrystalBox($Crystal);

		});


		
	}

}

	/**
	 * In animation of Crystal Box
	 * @param  {ID} Crystal ID
	 * @param  {integer} Position
	 * @param  {string} Crystal Content
	 */
	function inAnimation(ID, Position, Content){

		var tl = new TimelineLite();
		switch(Position){
			case 0:
				$("body").append(Content);
				$Crystal = $("#"+ ID);
				tl.to( $Crystal, 0.5, { autoAlpha:1 } )
				  .to( $Crystal, 0.5, { top: 0, ease: Power3.easeOut }, "-=0.4" );
			break;
			case 1:
				$("#cnTL").append(Content);
				$Crystal = $("#"+ ID);
				$Crystal.css("right","50px");

				tl.to( $Crystal, 0.5, { autoAlpha:1 } )
				  .to( $Crystal, 1.0, { right:0, ease:Bounce.easeOut }, "-=0.5");
			break;
			case 2:
				$("#cnTR").append(Content);
				$Crystal = $("#"+ ID);
				$Crystal.css("left","50px");
				tl.to( $Crystal, 0.5, { autoAlpha:1 } )
				  .to( $Crystal, 1.0, { left:0, ease:Bounce.easeOut }, "-=0.5");
			break;
			case 3:
				$("#cnBL").prepend(Content);
				$Crystal = $("#"+ ID);
				$Crystal.css("right","50px");
				tl.to( $Crystal, 0.5, { autoAlpha:1 } )
				  .to( $Crystal, 1.0, { right:0, ease:Bounce.easeOut }, "-=0.5");
			break;
			case 4:
				$("#cnBR").prepend(Content);
				$Crystal = $("#"+ ID);
				$Crystal.css("left","50px");
				tl.to( $Crystal, 0.5, { autoAlpha:1 } )
				  .to( $Crystal, 1.0, { left:0, ease:Bounce.easeOut }, "-=0.5");
			break;
		}
	}


	function CloseMainCrystalBox ($Crystal) {
		
		var tl = new TimelineLite();

		tl.to( $Crystal, 0.3, { autoAlpha:0 } )
		  .to( $Crystal, 0.5, { top: -70}, "-=0.3" );

	}

	/**
	 * Crystal Smallbox Close animation
	 * @param {$Crystal}
	 */
	function CloseCrystalSmallBox ($Crystal) {
		
		var isMouseOver = $Crystal.attr('mouseover');

		if( isMouseOver == "true" ){
			$Crystal.bind("mouseleave",function(){
				$(this).removeAttr('mouseover');
				CloseCrystalSmallBox($(this));
			});

		}else{

			var tl = new TimelineLite();
			tl.to( $Crystal, 0.3, { autoAlpha:0 } )
			  .to( $Crystal, 0.2, { marginTop:0, marginBottom:0, padding:0 })
			  .to( $Crystal, 1.0, { height:0, ease:Bounce.easeOut, onComplete:DestroyCrystalSmallBox, onCompleteParams:$Crystal }, "-=0.2");
		}
	}



	function CheckSlides(hide){

		if( hide == true ){
			$(".cnEmtpySlide").hide();
		}else{

			if (NcSwiper.slides.length>0) {
				$(".cnEmtpySlide").hide();
			}else{
				$(".cnEmtpySlide").fadeIn(300);
			}
			
		}

	}


	$.CrystalNotificationPanel = function(settings,callback){


		settings = $.extend({
	        	title: "Information",
	        	image: undefined,
	        	content: "",
	        	show: true,
	        	showpanel: false,
	        }, settings);


		if( settings.showpanel ){
			settings.show = true;
		}

		var $Nc = $("#cnNotificationCenter");

		if (settings.show) {
			
			$Nc.css("top","-50px").show();

			var tl = new TimelineLite();
			    tl.to( $Nc, 0.3, { autoAlpha:1 } )
			      .to( $Nc, 1, { top: 0, ease:Bounce.easeOut }, "-=0.3" );

			NcSwiper.reInit();

		};

		CheckSlides();
		if( settings.showpanel ){
			return false;
		}



		var ExistTitle = false;
		$(".cnNcTitle").each(function(){

			var Title = $(this).find("span");

			if (Title.text() === settings.title ) {
				ExistTitle = true;
				return false;
			};
		});

		CheckSlides(true);
		// Notification Center Title
		if (ExistTitle === false ) {
			
			var Content = "";

			Content += 	'<div class="cnNcCloseIcon" data-title="'+ settings.title +'">';
			Content += 	'<span class="cnNcCloseButton" data-close="'+ settings.title +'">X</span>';
			Content += 	'</div>';

			if (settings.image != undefined) {

				Content += 	'<div>';
				Content += 	'<img class="cnNcIcon" src="'+ settings.image +'">';
				Content += 	'</div>';
				
			};

			Content += 	'<div class="cnNcTitle">';
			Content += 	'<span>'+ settings.title +'</span>';
			Content += 	'</div>';


			//NcSwiper
			var newSlide = NcSwiper.createSlide(Content);
			newSlide.append();

			// Create the content
			Content  =  "";
			Content +=  '<div class="cnNcContent" data-child="'+ settings.title +'">';
			Content +=  settings.content;
			Content +=  '</div>';

			var newSlide = NcSwiper.createSlide(Content);
			newSlide.append();

		}else{
			// This means the Title Exists. 
			// So we need to create a child
			
			Content  =  '<div class="cnNcContent" data-child="'+ settings.title +'">';
			Content +=  settings.content;
			Content +=  '</div>';


			for (var i = 0; i < NcSwiper.slides.length; i++) {
				var Slide = NcSwiper.getSlide(i).html();

				// Check if is title container
				if( Slide.indexOf("data-title")>0 ){

					var Title = Slide.substr( Slide.indexOf('"cnNcTitle"')+18 );
						Title = Title.substr( 0, Title.indexOf("<") );
					
					if( Slide.indexOf('data-title="'+ settings.title +'"') >0 ){

						NcSwiper.insertSlideAfter(i, Content);

					}
					
				}
				
			} // End For

		}



		


		NcSwiper.reInit();


	}

	function DestroyCrystalSmallBox($Crystal) {
		$Crystal.remove();
	}

	$.CNNukeNotificationCenter = function(){

		NcSwiper.removeAllSlides();
		CheckSlides(true);
	}

	$.CNCloseAllCrystals = function(){

		// This closes the Top ones
		$(".cnTopNotification").each(function(){
		    	CloseMainCrystalBox($(this));
		 });

		$(".cnNotification").each(function(){

			$(this).removeAttr('mouseover');
			CloseCrystalSmallBox( $(this) );

		});

	}


	function PlaySound(Path){
        var audioElement = document.createElement('audio');
        if (navigator.userAgent.match('Firefox/'))
            audioElement.setAttribute('src', Path + '/crystal.ogg');
        else
            audioElement.setAttribute('src', Path + '/crystal.mp3');
        

        $.get();
        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        audioElement.pause();
        audioElement.play();
    }




})(jQuery);

// Show Notification Panel
function ShowCrystalNotificationPanel(){
	
	$.CrystalShowPanel();

}




function NukeAllTheNotifications(){
	$.CNNukeNotificationCenter();
}

function CloseAllCrystals(){
	$.CNCloseAllCrystals();
}

function CustomIECheck() {

    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        // return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        return true;
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        // return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        return true;
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       // return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
       return true;
    }

    // other browser
    return false;
}
