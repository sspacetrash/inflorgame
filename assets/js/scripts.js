/* 
 * Rellax.js
 * Copyright (c) 2016 Moe Amaya (@moeamaya)
 * MIT license
 */

!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.Rellax=t()}("undefined"!=typeof window?window:global,(function(){var e=function(t,o){var n=Object.create(e.prototype),r=0,i=0,a=0,l=0,s=[],p=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},c=null,m=!1;try{var u=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}catch(e){}var f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,w=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t,o=["Webkit","Moz","ms"];for(t in o)if(void 0!==e.style[o[t]+"Transform"])return o[t]+"Transform"}return"transform"}();if(n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(e){n.options[e]=o[e]})),o&&o.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach((function(n){"number"!=typeof n&&(o=!1),null!==e&&n<e&&(t=!1),e=n})),t&&o)return}n.options.breakpoints=[576,768,1201]}(),t||(t=".rellax"),0<(u="string"==typeof t?document.querySelectorAll(t):[t]).length){if(n.elems=u,n.options.wrapper&&!n.options.wrapper.nodeType){if(!(u=document.querySelector(n.options.wrapper)))return;n.options.wrapper=u}var x,v=function(){for(var e=0;e<s.length;e++)n.elems[e].style.cssText=s[e].style;for(s=[],i=window.innerHeight,l=window.innerWidth,e=n.options.breakpoints,x=l<e[0]?"xs":l>=e[0]&&l<e[1]?"sm":l>=e[1]&&l<e[2]?"md":"lg",h(),e=0;e<n.elems.length;e++){var t=void 0,o=n.elems[e],r=o.getAttribute("data-rellax-percentage"),a=o.getAttribute("data-rellax-speed"),d=o.getAttribute("data-rellax-xs-speed"),c=o.getAttribute("data-rellax-mobile-speed"),m=o.getAttribute("data-rellax-tablet-speed"),u=o.getAttribute("data-rellax-desktop-speed"),f=o.getAttribute("data-rellax-vertical-speed"),w=o.getAttribute("data-rellax-horizontal-speed"),g=o.getAttribute("data-rellax-vertical-scroll-axis"),z=o.getAttribute("data-rellax-horizontal-scroll-axis"),E=o.getAttribute("data-rellax-zindex")||0,T=o.getAttribute("data-rellax-min"),L=o.getAttribute("data-rellax-max"),S=o.getAttribute("data-rellax-min-x"),O=o.getAttribute("data-rellax-max-x"),Y=o.getAttribute("data-rellax-min-y"),k=o.getAttribute("data-rellax-max-y"),X=!0;d||c||m||u?t={xs:d,sm:c,md:m,lg:u}:X=!1,d=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n.options.relativeToWrapper&&(d=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var W=n.options.vertical&&(r||n.options.center)?d:0,q=n.options.horizontal&&(r||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0;d=W+o.getBoundingClientRect().top,c=o.clientHeight||o.offsetHeight||o.scrollHeight,m=q+o.getBoundingClientRect().left,u=o.clientWidth||o.offsetWidth||o.scrollWidth,W=r||(W-d+i)/(c+i),r=r||(q-m+l)/(u+l),n.options.center&&(W=r=.5),t=X&&null!==t[x]?Number(t[x]):a||n.options.speed,f=f||n.options.verticalSpeed,w=w||n.options.horizontalSpeed,g=g||n.options.verticalScrollAxis,z=z||n.options.horizontalScrollAxis,a=b(r,W,t,f,w),o=o.style.cssText,X="",(r=/transform\s*:/i.exec(o))&&(X=(r=(X=o.slice(r.index)).indexOf(";"))?" "+X.slice(11,r).replace(/\s/g,""):" "+X.slice(11).replace(/\s/g,"")),s.push({baseX:a.x,baseY:a.y,top:d,left:m,height:c,width:u,speed:t,verticalSpeed:f,horizontalSpeed:w,verticalScrollAxis:g,horizontalScrollAxis:z,style:o,transform:X,zindex:E,min:T,max:L,minX:S,maxX:O,minY:Y,maxY:k})}A(),p&&(window.addEventListener("resize",v),p=!1,y())},h=function(){var e=r,t=a;return r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper&&(r=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-n.options.wrapper.offsetTop),!!(e!=r&&n.options.vertical||t!=a&&n.options.horizontal)},b=function(e,t,o,r,i){var a={};return e=100*(i||o)*(1-e),t=100*(r||o)*(1-t),a.x=n.options.round?Math.round(e):Math.round(100*e)/100,a.y=n.options.round?Math.round(t):Math.round(100*t)/100,a},g=function(){window.removeEventListener("resize",g),window.removeEventListener("orientationchange",g),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",g),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",g),c=d(y)},y=function(){h()&&!1===p?(A(),c=d(y)):(c=null,window.addEventListener("resize",g),window.addEventListener("orientationchange",g),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",g,!!m&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",g,!!m&&{passive:!0}))},A=function(){for(var e,t=0;t<n.elems.length;t++){var o=s[t].verticalScrollAxis.toLowerCase(),p=s[t].horizontalScrollAxis.toLowerCase();e=-1!=o.indexOf("x")?r:0,o=-1!=o.indexOf("y")?r:0;var d=-1!=p.indexOf("x")?a:0;p=-1!=p.indexOf("y")?a:0,p=(e=b((e+d-s[t].left+l)/(s[t].width+l),(o+p-s[t].top+i)/(s[t].height+i),s[t].speed,s[t].verticalSpeed,s[t].horizontalSpeed)).y-s[t].baseY,o=e.x-s[t].baseX,null!==s[t].min&&(n.options.vertical&&!n.options.horizontal&&(p=p<=s[t].min?s[t].min:p),n.options.horizontal&&!n.options.vertical&&(o=o<=s[t].min?s[t].min:o)),null!=s[t].minY&&(p=p<=s[t].minY?s[t].minY:p),null!=s[t].minX&&(o=o<=s[t].minX?s[t].minX:o),null!==s[t].max&&(n.options.vertical&&!n.options.horizontal&&(p=p>=s[t].max?s[t].max:p),n.options.horizontal&&!n.options.vertical&&(o=o>=s[t].max?s[t].max:o)),null!=s[t].maxY&&(p=p>=s[t].maxY?s[t].maxY:p),null!=s[t].maxX&&(o=o>=s[t].maxX?s[t].maxX:o),n.elems[t].style[w]="translate3d("+(n.options.horizontal?o:"0")+"px,"+(n.options.vertical?p:"0")+"px,"+s[t].zindex+"px) "+s[t].transform}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=s[e].style;p||(window.removeEventListener("resize",v),p=!0),f(c),c=null},v(),n.refresh=v,n}};return e}));

/* Media Queries */

function mediaQuery() {
  if (window.matchMedia("(min-width: 768px)").matches === true) {
    document.documentElement.classList.add("parallax-enabled");
    startParallax();
  }
  // else 
  //   document.documentElement.classList.remove("parallax-enabled")
}
mediaQuery();
// window.onresize = mediaQuery;

function startParallax() {
  document.querySelectorAll("[data-parallax]").forEach((elem) => {
    Rellax(elem, {
      speed: elem.getAttribute("data-parallax") * 2,
      center: true,
      wrapper: null,
      round: false,
      vertical: true,
      horizontal: false
    });
  });
}

/* Video Modal */

let modal = document.querySelector('.video'),
    video = modal.querySelector("video"),
    open = document.querySelector("#summary button"),
    close = modal.querySelector("button");

open.addEventListener("click", function() {
  modal.showModal();
  video.play();
}, false);

close.addEventListener("click", function() {
  modal.close();
  video.pause();
}, false);