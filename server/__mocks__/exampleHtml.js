module.exports = exampleHTML = `

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"422ee85b58","applicationID":"219570","transactionName":"dwkKQRENWV9SERxGB1UUB11MC1tXUhs=","queueTime":0,"applicationTime":804,"agent":""}</script>
<script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"422ee85b58",applicationID:"219570"};window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var i=n[t]={exports:{}};e[t][0].call(i.exports,function(n){var i=e[t][1][n];return r(i||n)},i,i.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,t){function r(){}function i(e,n,t){return function(){return o(e,[u.now()].concat(c(arguments)),n?null:this,t),n?void 0:this}}var o=e("handle"),a=e(5),c=e(6),f=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(e,n){s[n]=i(p+n,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,i="function"==typeof n;return o(l+"tracer",[u.now(),e,t],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return n.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],t),e}finally{f.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=i(l+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){var t=e.getEntries();t.forEach(function(e){"first-paint"===e.name?d("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&d("timing",["fcp",Math.floor(e.startTime)])})}function i(e,n){var t=e.getEntries();t.length>0&&d("lcp",[t[t.length-1]])}function o(e){e.getEntries().forEach(function(e){e.hadRecentInput||d("cls",[e])})}function a(e){if(e instanceof m&&!g){var n=Math.round(e.timeStamp),t={type:e.type};n<=p.now()?t.fid=p.now()-n:n>p.offset&&n<=Date.now()?(n-=p.offset,t.fid=p.now()-n):n=p.now(),g=!0,d("timing",["fi",n,t])}}function c(e){d("pageHide",[p.now(),e])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var f,u,s,d=e("handle"),p=e("loader"),l=e(4),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,y=["click","keydown","mousedown","pointerdown","touchstart"];y.forEach(function(e){document.addEventListener(e,a,!1)})}l(c)}},{}],3:[function(e,n,t){function r(e,n){if(!i)return!1;if(e!==i)return!1;if(!n)return!0;if(!o)return!1;for(var t=o.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}n.exports={agent:i,version:o,match:r}},{}],4:[function(e,n,t){function r(e){function n(){e(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,n,!1)}n.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],5:[function(e,n,t){function r(e,n){var t=[],r="",o=0;for(r in e)i.call(e,r)&&(t[o]=n(r,e[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],6:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,i=t-n||0,o=Array(i<0?0:i);++r<i;)o[r]=e[n+r];return o}n.exports=r},{}],7:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function i(e){function n(e){return e&&e instanceof r?e:e?f(e,c,o):o()}function t(t,r,i,o){if(!p.aborted||o){e&&e(t,r,i);for(var a=n(i),c=v(t),f=c.length,u=0;u<f;u++)c[u].apply(a,r);var d=s[w[t]];return d&&d.push([b,t,r,a]),a}}function l(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return d[e]=d[e]||i(t)}function y(e,n){u(e,function(e,t){n=n||"feature",w[t]=n,n in s||(s[n]=[])})}var h={},w={},b={on:l,addEventListener:l,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:y,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(p.aborted=!0,s=p.backlog={})}var c="nr@context",f=e("gos"),u=e(5),s={},d={},p=n.exports=i();p.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(i.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[n]=r,r}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){i.buffer([e],r),i.emit(e,n,t)}var i=e("ee").get("handle");n.exports=r,r.ee=i},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=E.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();u(w,function(n,t){e[n]||(e[n]=t)});var t=a();f("mark",["onload",t+E.offset],null,"api"),f("timing",["load",t]);var r=l.createElement("script");r.src="https://"+e.agent,n.parentNode.insertBefore(r,n)}}function i(){"complete"===l.readyState&&o()}function o(){f("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(c=Math.max((new Date).getTime(),c))-E.offset}var c=(new Date).getTime(),f=e("handle"),u=e(5),s=e("ee"),d=e(3),p=window,l=p.document,m="addEventListener",v="attachEvent",g=p.XMLHttpRequest,y=g&&g.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:g,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var h=""+location,w={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1177.min.js"},b=g&&y&&y[m]&&!/CriOS/.test(navigator.userAgent),E=n.exports={offset:c,now:a,origin:h,features:{},xhrWrappable:b,userAgent:d};e(1),e(2),l[m]?(l[m]("DOMContentLoaded",o,!1),p[m]("load",r,!1)):(l[v]("onreadystatechange",i),p[v]("onload",r)),f("mark",["firstbyte",c],null,"api");var x=0,O=e(7)},{}],"wrap-function":[function(e,n,t){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(6),a="nr@original",c=Object.prototype.hasOwnProperty,f=!1;n.exports=function(e,n){function t(e,n,t,i){function nrWrapper(){var r,a,c,f;try{a=this,r=o(arguments),c="function"==typeof t?t(r,a):t||{}}catch(u){p([u,"",[r,a,i],c])}s(n+"start",[r,a,i],c);try{return f=e.apply(a,r)}catch(d){throw s(n+"err",[r,a,d],c),d}finally{s(n+"end",[r,a,f],c)}}return r(e)?e:(n||(n=""),nrWrapper[a]=e,d(e,nrWrapper),nrWrapper)}function u(e,n,i,o){i||(i="");var a,c,f,u="-"===i.charAt(0);for(f=0;f<n.length;f++)c=n[f],a=e[c],r(a)||(e[c]=t(a,u?c+i:i,o,c))}function s(t,r,i){if(!f||n){var o=f;f=!0;try{e.emit(t,r,i,n)}catch(a){p([a,t,r,i])}f=o}}function d(e,n){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(e);return t.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){return e[t]=n,n}})}),n}catch(r){p([r])}for(var i in e)c.call(e,i)&&(n[i]=e[i]);return n}function p(n){try{e.emit("internal-error",n)}catch(t){}}return e||(e=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script>
    <meta name="apple-mobile-web-app-title" content="Jisho">
    <meta name="theme-color" content="#47DB27">
    <link href="/opensearch.xml" rel='search' title='Jisho' type='application/opensearchdescription+xml'>
    <link rel="icon" href="https://assets.jisho.org/assets/touch-icon-017b99ca4bfd11363a97f66cc4c00b1667613a05e38d08d858aa5e2a35dce055.png">
    <link rel="apple-touch-icon" href="https://assets.jisho.org/assets/touch-icon-017b99ca4bfd11363a97f66cc4c00b1667613a05e38d08d858aa5e2a35dce055.png">
    <script>

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);

</script>

<script>

  Modernizr.addTest('speech', function(){
    return Modernizr.prefixed('speechRecognition', window);
  });

  Modernizr.addTest('AudioContext', function(){
    return Modernizr.prefixed('AudioContext', window);
  });

  Modernizr.addTest('getUserMedia', function(){
    return Modernizr.prefixed('getUserMedia', navigator);
  });

</script>

    <link rel="stylesheet" media="screen" href="https://assets.jisho.org/assets/application-2d26ebf11b7af6a3b98a02d73cbbed47a670985f49ac3a4e4ec6f282ab909cea.css" />
    <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="bP0Fp3MJHIPbda9T4OCWQf/TMwk3Ud+OPyUDh8e3CTexpt7W/Lmd9Bp7aYj2D1ZINr/ba1nE3H8oQV1PcqjjGw==" />
    
      <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63389-12', 'jisho.org');
  ga('send', 'pageview');

</script>

    <link rel="shortcut icon" type="image/x-icon" href="https://assets.jisho.org/assets/favicon-062c4a0240e1e6d72c38aa524742c2d558ee6234497d91dd6b75a182ea823d65.ico" />
    <title>#common #words - Jisho.org</title>
    <meta name="Description" content="Japanese dictionary search results for #common #words.">
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jisho" />
      <meta name="twitter:title" content="Japanese dictionary search for &quot;#common #words&quot;" />
      <meta name="twitter:description" content="21079 words found. See the full details ..." />
    <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
    <script>
      var googletag = googletag || {};
      googletag.cmd = googletag.cmd || [];
    </script>
    <script>
      googletag.cmd.push(function() {
        googletag.defineSlot('\/1910472\/search_right_half', [ 300.0 ,  150.0 ], 'div-gpt-ad-1528340241998-0').addService(googletag.pubads());
        googletag.defineSlot('\/1910472\/search_right_full', [ 300.0 ,  250.0 ], 'div-gpt-ad-1528340390859-0').addService(googletag.pubads());
        googletag.defineSlot('\/1910472\/search_bottom_leaderboard', [ 728.0 ,  90.0 ], 'div-gpt-ad-1528340463374-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
      });
    </script>
  </head>
  <body class=" highlight_keyword highlight_common_readings highlight_common_representations production">
    
<header class="row collapse">
  <div class="small-4 columns">
    <h1 class="logo"><a href="/">Jisho</a></h1>
  </div>
  <div class="small-8 columns">
    <nav class="nav-main_navigation">
  <ul class="links">
    <li><a href="/forum">Forum</a></li>
    <li><a href="/about">About</a></li>
    <li>
      <div id="login_link">
          <a href="/auth/auth0">Log in / Sign up</a>
      </div>
    </li>
  </ul>
</nav>

  </div>
</header>

    <div class="row collapse">
      <div class="large-12 columns">
        <form class="search" data-live="false" id="search" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />  <div id="input_methods" class="input_methods">
    <div class="input_method_button disable-mobile-hover-background" id="handwriting_button">
      <svg viewBox="0 0 30 30" class="icon tablet-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#tablet"></use>
</svg>

      <h4>Draw</h4>
    </div>
    <div class="input_method_button disable-mobile-hover-background" id="radical_button">
      <svg viewBox="0 0 30 30" class="icon radical-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#radical"></use>
</svg>

      <h4>Radicals</h4>
    </div>
    <div class="input_method_button disable-mobile-hover-background" id="speech_button">
      <svg viewBox="0 0 30 30" class="icon speech-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#speech"></use>
</svg>

      <h4>Voice</h4>
    </div>
  </div>
  <div class="overlay">
    <div id="search_main" class="main">
      <div class="inner">
        <div id="advanced_button" class="search_type">
          <span class="text" id="search_dropdown_text">Words</span>
          <span class="carat">▾</span>
        </div>
        <button type="submit" class="submit icon" tabindex="2">
          <svg viewBox="0 0 30 30" class="icon search-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#search"></use>
</svg>

        </button>
        <a class="search-form_clear-button_js search-form_clear-button icon" accesskey="1" tabindex="3">
          <svg viewBox="0 0 30 30" class="icon clear-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#clear"></use>
</svg>

        </a>

        <div class="text_input">
          <div class="hidden range"></div>
          <input
            type="text"
            class="keyword japanese_gothic"
            name="keyword"
            id="keyword"
            value="#common #words"
            tabindex="1"
            lang="ja"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            placeholder="English, Japanese, Romaji, words or text"
            data-autoload="true"
            data-effective-keyword="actual"
          />
        </div>
      </div>
      <div id="search_sub" class="sub">
        <div id="radical_area" class="area radical">
  <div class="results_wrapper">
  <div class="results">
    <div class="list">
      <div class="instructions">
        <div class="vertical-bottom">
          <div class="vertical-bottom-inner">
            
    <div class="arrow">▾</div>
    <div class="text">
      Find kanji by their parts. Click on
      <svg viewBox="0 0 30 30" class="icon reset-icon inline">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#reset"></use>
</svg>

      to reset radicals.
    </div>

          </div>
        </div>
      </div>
    </div>
    <div class="show_more">More</div>
    <div class="show_less link">Less</div>
  </div>
  <div class="scroll_indicator show-for-small-only"></div>
</div>
  <!-- <p>
  Click on the parts that are in the kanji you are looking for. You can click on them again to de-select them.
  <input type="button" value="Reset" id="reset_button" onclick='Radicals.reset()' />
</p> -->

<ul class="radical_table clearfix" lang="ja">
  <li class="reset_icon_list_item">
    <svg viewBox="0 0 30 30" class="icon reset-icon reset_radicals" title="Reset selection">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#reset"></use>
</svg>

  </li>
  <li class="number">1</li>
  <li class="radical" data-radical="1">一</li>
  <li class="radical" data-radical="2">｜</li>
  <li class="radical" data-radical="3">丶</li>
  <li class="radical" data-radical="4">ノ</li>
  <li class="radical" data-radical="5">乙</li>
  <li class="radical" data-radical="6">亅</li>
  <li class="number">2</li>
  <li class="radical" data-radical="7">二</li>
  <li class="radical" data-radical="8">亠</li>
  <li class="radical" data-radical="9">人</li>
  <li class="radical radical-image radical-10" data-radical="10" data-radk="化">⺅</li>
  <li class="radical radical-image radical-11" data-radical="11" data-radk="个">𠆢</li>
  <li class="radical" data-radical="12">儿</li>
  <li class="radical" data-radical="13">入</li>
  <li class="radical" data-radical="14">ハ</li>
  <li class="radical radical-image radical-15" data-radical="15" data-radk="并">丷</li>
  <li class="radical" data-radical="16">冂</li>
  <li class="radical" data-radical="17">冖</li>
  <li class="radical" data-radical="18">冫</li>
  <li class="radical" data-radical="19">几</li>
  <li class="radical" data-radical="20">凵</li>
  <li class="radical" data-radical="21">刀</li>
  <li class="radical radical-image radical-22" data-radical="22" data-radk="刈">⺉</li>
  <li class="radical" data-radical="23">力</li>
  <li class="radical" data-radical="24">勹</li>
  <li class="radical" data-radical="25">匕</li>
  <li class="radical" data-radical="26">匚</li>
  <li class="radical" data-radical="27">十</li>
  <li class="radical" data-radical="28">卜</li>
  <li class="radical" data-radical="29">卩</li>
  <li class="radical" data-radical="30">厂</li>
  <li class="radical" data-radical="31">厶</li>
  <li class="radical" data-radical="32">又</li>
  <li class="radical" data-radical="33">マ</li>
  <li class="radical" data-radical="34">九</li>
  <li class="radical" data-radical="35">ユ</li>
  <li class="radical" data-radical="36">乃</li>
  <li class="radical" data-radical="360" data-radk="乞">𠂉</li>
  <li class="number">3</li>
  <li class="radical radical-image radical-37" data-radical="37" data-radk="込">⻌</li>
  <li class="radical" data-radical="38">口</li>
  <li class="radical" data-radical="39">囗</li>
  <li class="radical" data-radical="40">土</li>
  <li class="radical" data-radical="41">士</li>
  <li class="radical" data-radical="42">夂</li>
  <li class="radical" data-radical="43">夕</li>
  <li class="radical" data-radical="44">大</li>
  <li class="radical" data-radical="45">女</li>
  <li class="radical" data-radical="46">子</li>
  <li class="radical" data-radical="47">宀</li>
  <li class="radical" data-radical="48">寸</li>
  <li class="radical" data-radical="49">小</li>
  <li class="radical radical-image radical-50" data-radical="50" data-radk="尚">⺌</li>
  <li class="radical" data-radical="51">尢</li>
  <li class="radical" data-radical="52">尸</li>
  <li class="radical" data-radical="53">屮</li>
  <li class="radical" data-radical="54">山</li>
  <li class="radical" data-radical="55">川</li>
  <li class="radical" data-radical="56">巛</li>
  <li class="radical" data-radical="57">工</li>
  <li class="radical" data-radical="58">已</li>
  <li class="radical" data-radical="59">巾</li>
  <li class="radical" data-radical="60">干</li>
  <li class="radical" data-radical="61">幺</li>
  <li class="radical" data-radical="62">广</li>
  <li class="radical" data-radical="63">廴</li>
  <li class="radical" data-radical="64">廾</li>
  <li class="radical" data-radical="65">弋</li>
  <li class="radical" data-radical="66">弓</li>
  <li class="radical" data-radical="67">ヨ</li>
  <li class="radical" data-radical="68">彑</li>
  <li class="radical" data-radical="69">彡</li>
  <li class="radical" data-radical="70">彳</li>
  <li class="radical radical-image radical-71" data-radical="71" data-radk="忙">⺖</li>
  <li class="radical radical-image radical-72" data-radical="72" data-radk="扎">⺘</li>
  <li class="radical radical-image radical-73" data-radical="73" data-radk="汁">⺡</li>
  <li class="radical radical-image radical-74" data-radical="74" data-radk="犯">⺨</li>
  <li class="radical radical-image radical-75" data-radical="75" data-radk="艾">⺾</li>
  <li class="radical radical-image radical-76" data-radical="76" data-radk="邦">⻏</li>
  <li class="radical radical-image radical-77" data-radical="77" data-radk="阡">⻖</li>
  <li class="radical" data-radical="78">也</li>
  <li class="radical" data-radical="79">亡</li>
  <li class="radical" data-radical="80">及</li>
  <li class="radical" data-radical="81">久</li>
  <li class="number">4</li>
  <li class="radical radical-image radical-82" data-radical="82" data-radk="老">⺹</li>
  <li class="radical" data-radical="83">心</li>
  <li class="radical" data-radical="84">戈</li>
  <li class="radical" data-radical="85">戸</li>
  <li class="radical" data-radical="86">手</li>
  <li class="radical" data-radical="87">支</li>
  <li class="radical" data-radical="88">攵</li>
  <li class="radical" data-radical="89">文</li>
  <li class="radical" data-radical="90">斗</li>
  <li class="radical" data-radical="91">斤</li>
  <li class="radical" data-radical="92">方</li>
  <li class="radical" data-radical="93">无</li>
  <li class="radical" data-radical="94">日</li>
  <li class="radical" data-radical="95">曰</li>
  <li class="radical" data-radical="96">月</li>
  <li class="radical" data-radical="97">木</li>
  <li class="radical" data-radical="98">欠</li>
  <li class="radical" data-radical="99">止</li>
  <li class="radical" data-radical="100">歹</li>
  <li class="radical" data-radical="101">殳</li>
  <li class="radical" data-radical="102">比</li>
  <li class="radical" data-radical="103">毛</li>
  <li class="radical" data-radical="104">氏</li>
  <li class="radical" data-radical="105">气</li>
  <li class="radical" data-radical="106">水</li>
  <li class="radical" data-radical="107">火</li>
  <li class="radical radical-image radical-108" data-radical="108" data-radk="杰">⺣</li>
  <li class="radical" data-radical="109">爪</li>
  <li class="radical" data-radical="110">父</li>
  <li class="radical" data-radical="111">爻</li>
  <li class="radical" data-radical="112">爿</li>
  <li class="radical" data-radical="113">片</li>
  <li class="radical" data-radical="114">牛</li>
  <li class="radical" data-radical="115">犬</li>
  <li class="radical radical-image radical-116" data-radical="116" data-radk="礼">⺭</li>
  <li class="radical" data-radical="117">王</li>
  <li class="radical" data-radical="118">元</li>
  <li class="radical" data-radical="119">井</li>
  <li class="radical" data-radical="120">勿</li>
  <li class="radical" data-radical="121">尤</li>
  <li class="radical" data-radical="122">五</li>
  <li class="radical" data-radical="123">屯</li>
  <li class="radical" data-radical="124">巴</li>
  <li class="radical" data-radical="125">毋</li>
  <li class="number">5</li>
  <li class="radical" data-radical="126">玄</li>
  <li class="radical" data-radical="127">瓦</li>
  <li class="radical" data-radical="128">甘</li>
  <li class="radical" data-radical="129">生</li>
  <li class="radical" data-radical="130">用</li>
  <li class="radical" data-radical="131">田</li>
  <li class="radical" data-radical="132">疋</li>
  <li class="radical radical-image radical-133" data-radical="133" data-radk="疔">疒</li>
  <li class="radical" data-radical="134">癶</li>
  <li class="radical" data-radical="135">白</li>
  <li class="radical" data-radical="136">皮</li>
  <li class="radical" data-radical="137">皿</li>
  <li class="radical" data-radical="138">目</li>
  <li class="radical" data-radical="139">矛</li>
  <li class="radical" data-radical="140">矢</li>
  <li class="radical" data-radical="141">石</li>
  <li class="radical" data-radical="142">示</li>
  <li class="radical radical-image radical-143" data-radical="143" data-radk="禹">禸</li>
  <li class="radical" data-radical="144">禾</li>
  <li class="radical" data-radical="145">穴</li>
  <li class="radical" data-radical="146">立</li>
  <li class="radical radical-image radical-147" data-radical="147" data-radk="初">⻂</li>
  <li class="radical" data-radical="148">世</li>
  <li class="radical" data-radical="149">巨</li>
  <li class="radical" data-radical="150">冊</li>
  <li class="radical" data-radical="151">母</li>
  <li class="radical radical-image radical-152" data-radical="152" data-radk="買">⺲</li>
  <li class="radical" data-radical="153">牙</li>
  <li class="number">6</li>
  <li class="radical" data-radical="154">瓜</li>
  <li class="radical" data-radical="155">竹</li>
  <li class="radical" data-radical="156">米</li>
  <li class="radical" data-radical="157">糸</li>
  <li class="radical" data-radical="158">缶</li>
  <li class="radical" data-radical="159">羊</li>
  <li class="radical" data-radical="160">羽</li>
  <li class="radical" data-radical="161">而</li>
  <li class="radical" data-radical="162">耒</li>
  <li class="radical" data-radical="163">耳</li>
  <li class="radical" data-radical="164">聿</li>
  <li class="radical" data-radical="165">肉</li>
  <li class="radical" data-radical="166">自</li>
  <li class="radical" data-radical="167">至</li>
  <li class="radical" data-radical="168">臼</li>
  <li class="radical" data-radical="169">舌</li>
  <li class="radical" data-radical="170">舟</li>
  <li class="radical" data-radical="171">艮</li>
  <li class="radical" data-radical="172">色</li>
  <li class="radical" data-radical="173">虍</li>
  <li class="radical" data-radical="174">虫</li>
  <li class="radical" data-radical="175">血</li>
  <li class="radical" data-radical="176">行</li>
  <li class="radical" data-radical="177">衣</li>
  <li class="radical" data-radical="178">西</li>
  <li class="number">7</li>
  <li class="radical" data-radical="179">臣</li>
  <li class="radical" data-radical="180">見</li>
  <li class="radical" data-radical="181">角</li>
  <li class="radical" data-radical="182">言</li>
  <li class="radical" data-radical="183">谷</li>
  <li class="radical" data-radical="184">豆</li>
  <li class="radical" data-radical="185">豕</li>
  <li class="radical" data-radical="186">豸</li>
  <li class="radical" data-radical="187">貝</li>
  <li class="radical" data-radical="188">赤</li>
  <li class="radical" data-radical="189">走</li>
  <li class="radical" data-radical="190">足</li>
  <li class="radical" data-radical="191">身</li>
  <li class="radical" data-radical="192">車</li>
  <li class="radical" data-radical="193">辛</li>
  <li class="radical" data-radical="194">辰</li>
  <li class="radical" data-radical="195">酉</li>
  <li class="radical" data-radical="196">釆</li>
  <li class="radical" data-radical="197">里</li>
  <li class="radical" data-radical="198">舛</li>
  <li class="radical" data-radical="199">麦</li>
  <li class="number">8</li>
  <li class="radical" data-radical="200">金</li>
  <li class="radical" data-radical="201">長</li>
  <li class="radical" data-radical="202">門</li>
  <li class="radical" data-radical="203">隶</li>
  <li class="radical" data-radical="204">隹</li>
  <li class="radical" data-radical="205">雨</li>
  <li class="radical" data-radical="206">青</li>
  <li class="radical" data-radical="207">非</li>
  <li class="radical" data-radical="208">奄</li>
  <li class="radical" data-radical="209">岡</li>
  <li class="radical" data-radical="210">免</li>
  <li class="radical" data-radical="211">斉</li>
  <li class="number">9</li>
  <li class="radical" data-radical="212">面</li>
  <li class="radical" data-radical="213">革</li>
  <li class="radical" data-radical="214">韭</li>
  <li class="radical" data-radical="215">音</li>
  <li class="radical" data-radical="216">頁</li>
  <li class="radical" data-radical="217">風</li>
  <li class="radical" data-radical="218">飛</li>
  <li class="radical" data-radical="219">食</li>
  <li class="radical" data-radical="220">首</li>
  <li class="radical" data-radical="221">香</li>
  <li class="radical" data-radical="222">品</li>
  <li class="number">10</li>
  <li class="radical" data-radical="223">馬</li>
  <li class="radical" data-radical="224">骨</li>
  <li class="radical" data-radical="225">高</li>
  <li class="radical" data-radical="226">髟</li>
  <li class="radical" data-radical="227">鬥</li>
  <li class="radical" data-radical="228">鬯</li>
  <li class="radical" data-radical="229">鬲</li>
  <li class="radical" data-radical="230">鬼</li>
  <li class="radical" data-radical="231">竜</li>
  <li class="radical" data-radical="232">韋</li>
  <li class="number">11</li>
  <li class="radical" data-radical="233">魚</li>
  <li class="radical" data-radical="234">鳥</li>
  <li class="radical" data-radical="235">鹵</li>
  <li class="radical" data-radical="236">鹿</li>
  <li class="radical" data-radical="237">麻</li>
  <li class="radical" data-radical="238">亀</li>
  <li class="radical radical-image radical-239" data-radical="239" data-radk="滴">啇</li>
  <li class="radical" data-radical="240">黄</li>
  <li class="radical" data-radical="241">黒</li>
  <li class="number">12</li>
  <li class="radical" data-radical="242">黍</li>
  <li class="radical" data-radical="243">黹</li>
  <li class="radical" data-radical="244">無</li>
  <li class="radical" data-radical="245">歯</li>
  <li class="number">13</li>
  <li class="radical" data-radical="246">黽</li>
  <li class="radical" data-radical="247">鼎</li>
  <li class="radical" data-radical="248">鼓</li>
  <li class="radical" data-radical="249">鼠</li>
  <li class="number">14</li>
  <li class="radical" data-radical="250">鼻</li>
  <li class="radical" data-radical="251">齊</li>
  <li class="number">17</li>
  <li class="radical" data-radical="252">龠</li>
</ul>

</div>

        <div id="handwriting_area" class="area handwriting" data-url="/handwriting">
  <div class="results_wrapper">
  <div class="results">
    <div class="list">
      <div class="instructions">
        <div class="vertical-bottom">
          <div class="vertical-bottom-inner">
            
    <div class="arrow">▾</div>
    <div class="text">Input kanji by handwriting. Just start drawing!</div>

          </div>
        </div>
      </div>
    </div>
    <div class="show_more">More</div>
    <div class="show_less link">Less</div>
  </div>
  <div class="scroll_indicator show-for-small-only"></div>
</div>
  <div class="inputs">
    <div class="panel disablePanZoomInIE">
  <canvas width="310" height="275"></canvas>
  <svg viewBox="0 0 30 30" class="icon pencil-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#pencil"></use>
</svg>

  <div class="buttons">
    <button type="button" class="tiny reset button">Clear</button>
    <button type="button" class="tiny back button">Back</button>
  </div>
</div>

    <div class="panel disablePanZoomInIE">
  <canvas width="310" height="275"></canvas>
  <svg viewBox="0 0 30 30" class="icon pencil-icon ">
  <use xlink:href="https://jisho.org/assets/icons-ab7975eb6f8bb532f99ba2d769be43c5431dec4c0e4d220df7367f1d954d9424.svg#pencil"></use>
</svg>

  <div class="buttons">
    <button type="button" class="tiny reset button">Clear</button>
    <button type="button" class="tiny back button">Back</button>
  </div>
</div>

  </div>
</div>

        <div id="speech_area" class="area speech">

  <div class="speech_results"></div>

  <div class="explanation">
    <div class="arrow">▴</div>
    <div class="text">
      Speak! You can use words like "back", "clear", "stop", "input", or "search".  At any time say "Japanese" to switch to Japanese (requires permissions again).
    </div>
  </div>

  <div class="buttons">
    <button class="tiny english">English</button>
    <button class="tiny japanese">Japanese</button>
  </div>
</div>

        <div id="advanced_area" class="hidden area advanced">
  <div class="filters">
  <ul class="button-group radius" data-filter-group="type">
    <li><a accesskey="a" class=" filter small button" data-filter="type-all" href="//jisho.org/search/%20%23common">All</a></li>
    <li><a accesskey="w" class=" filter small button" data-filter="words" href="//jisho.org/search/%20%23common">Words</a></li>
    <li><a accesskey="k" class=" filter small button" data-filter="kanji" href="//jisho.org/search/%20%23common">Kanji</a></li>
    <li><a accesskey="s" class=" filter small button" data-filter="sentences" href="//jisho.org/search/%20%23common">Sentences</a></li>
    <li><a accesskey="n" class=" filter small button" data-filter="names" href="//jisho.org/search/%20%23common">Names</a></li>
  </ul>
    <ul class="button-group radius" data-filter-group="pos">
      <li><a class=" filter small button" data-filter="pos-all" href="//jisho.org/search/%20%23common">All</a></li>
      <li><a class=" filter small button" data-filter="noun" href="//jisho.org/search/%20%23common">Nouns</a></li>
      <li><a class=" filter small button" data-filter="verb" href="//jisho.org/search/%20%23common">Verbs</a></li>
      <li><a class=" filter small button" data-filter="adjective" href="//jisho.org/search/%20%23common">Adjectives</a></li>
      <li><a class=" filter small button" data-filter="particle" href="//jisho.org/search/%20%23common">Particles</a></li>
      <li><a class=" filter small button" data-filter="counter" href="//jisho.org/search/%20%23common">Counters</a></li>
    </ul>
    <ul class="button-group radius" data-filter-group="level">
      <li><a class=" filter small button" data-filter="level-all" href="//jisho.org/search/%20%23common">All</a></li>
        <li><a class=" filter small button" data-filter="common" href="//jisho.org/search/%20%23common">Common</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n1" href="//jisho.org/search/%20%23common">JLPT N1</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n2" href="//jisho.org/search/%20%23common">JLPT N2</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n3" href="//jisho.org/search/%20%23common">JLPT N3</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n4" href="//jisho.org/search/%20%23common">JLPT N4</a></li>
      <li><a class=" filter small button" data-filter="jlpt-n5" href="//jisho.org/search/%20%23common">JLPT N5</a></li>
    </ul>
  <p>
    Read the <a href="//jisho.org/docs">advanced search options documentation</a> for a full list of available search options.
  </p>
</div>

</div>

      </div>
    </div>
  </div>

</form>
      </div>
    </div>
    <div id="inflection_modal" class="reveal-modal small" data-reveal>
      <div class="modal_content"></div>
      <a class="close-reveal-modal">&#215;</a>
    </div>
    <div id="page_container" class="row">
      <div class="large-12 columns">
        
        

<div id="main_results">
  <div id="result_area">




  </div>

  <div class="row">




      <div id="primary" class="large-8 columns">


          <div class="concepts">
              <h4>Words<span class="result_count"> — 21079 found</span></h4>
            

<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">ゆき</span>
      </span>
      <span class="text">
        雪
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 7</a></span> <audio id="audio_雪:ゆき"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/01dbcee7e1493d0dc321cbfb49684146.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/01dbcee7e1493d0dc321cbfb49684146.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_雪:ゆき">Play audio</a> <a href="#" data-reveal-id="links_coll_51859b91d5dda7295401205c" data-reveal="true" class="concept_light-status_link">Show 8 collocations</a> <div id="links_coll_51859b91d5dda7295401205c" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E9%9B%AA%E3%82%92%E4%B8%B8%E3%82%81%E3%82%8B%20%23words">雪を丸める - to make a snowball</a></li><li><a href="/search/%E9%9B%AA%E3%81%A8%E5%A2%A8%20%23words">雪と墨 - snow and ink (esp. used as an example of diametric opposites, like night and day)</a></li><li><a href="/search/%E9%9B%AA%E3%81%AB%E7%99%BD%E9%B7%BA%20%23words">雪に白鷺 - something indistinguishable or indistinct (like an egret in the snow)</a></li><li><a href="/search/%E9%9B%AA%E3%81%AE%E6%9E%9C%E3%81%A6%20%23words">雪の果て - last snows</a></li><li><a href="/search/%E9%9B%AA%E3%82%92%E6%AC%BA%E3%81%8F%20%23words">雪を欺く - to be as white as snow</a></li><li><a href="/search/%E6%98%A5%E3%81%AE%E9%9B%AA%20%23words">春の雪 - spring snow (usu. large snowflakes)</a></li><li><a href="/search/%E6%9D%BE%E3%81%AE%E9%9B%AA%20%23words">松の雪 - snow on pine branches</a></li><li><a href="/search/%E9%A0%AD%E3%81%AE%E9%9B%AA%20%23words">頭の雪 - white hair</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859b91d5dda7295401205c" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859b91d5dda7295401205c" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E9%9B%AA%20%23sentences">Sentence search for 雪</a></li><li><a href="/search/%E3%82%86%E3%81%8D%20%23sentences">Sentence search for ゆき</a></li><li><a href="//jisho.org/search/%E9%9B%AA%20%23kanji">Kanji details for 雪</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1386500&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">snow</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Snow</span><span>&#8203;</span><span class="meaning-abstract">Snow is a form of precipitation in the form of crystallin...<a href="//jisho.org/word/%E9%9B%AA"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E9%9B%AA">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">やま</span>
      </span>
      <span class="text">
        山
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 1</a></span> <audio id="audio_山:やま"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/db351538f54e1b4ba3df59b639c8e340.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/db351538f54e1b4ba3df59b639c8e340.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_山:やま">Play audio</a> <a href="#" data-reveal-id="links_coll_51859afdd5dda7295400e084" data-reveal="true" class="concept_light-status_link">Show 9 collocations</a> <div id="links_coll_51859afdd5dda7295400e084" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E5%B1%B1%E3%81%8C%E5%BD%93%E3%81%9F%E3%82%8B%20%23words">山が当たる - to accurately guess what subjects will turn up on a test</a></li><li><a href="/search/%E5%B1%B1%E3%81%8C%E8%A6%8B%E3%81%88%E3%82%8B%20%23words">山が見える - The end is in sight</a></li><li><a href="/search/%E5%B1%B1%E3%82%92%E3%81%AA%E3%81%99%20%23words">山をなす - to pile up</a></li><li><a href="/search/%E5%B1%B1%E3%82%92%E5%BC%B5%E3%82%8B%20%23words">山を張る - to speculate</a></li><li><a href="/search/%E5%B1%B1%E3%82%92%E6%8E%9B%E3%81%91%E3%82%8B%20%23words">山を掛ける - to speculate</a></li><li><a href="/search/%E5%B1%B1%E3%82%92%E8%B6%8A%E3%81%99%20%23words">山を越す - to surmount a difficulty</a></li><li><a href="/search/%E5%B1%B1%E3%81%AE%E3%82%88%E3%81%86%20%23words">山のよう - plentiful</a></li><li><a href="/search/%E9%96%A2%E3%81%AE%E5%B1%B1%20%23words">関の山 - the most one can do</a></li><li><a href="/search/%E6%98%A5%E3%81%AE%E5%B1%B1%20%23words">春の山 - misty mountain with blossoming buds and flowers as it appears in spring</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859afdd5dda7295400e084" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859afdd5dda7295400e084" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E5%B1%B1%20%23sentences">Sentence search for 山</a></li><li><a href="/search/%E3%82%84%E3%81%BE%20%23sentences">Sentence search for やま</a></li><li><a href="//jisho.org/search/%E5%B1%B1%20%23kanji">Kanji details for 山</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1302680&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun, Counter</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">mountain; hill</span><span>&#8203;</span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja">「<li class="clearfix"><span class="unlinked">わたし</span></li><li class="clearfix"><span class="unlinked">は</span></li><li class="clearfix"><span class="furigana">もり</span><span class="unlinked">森</span></li><li class="clearfix"><span class="unlinked">の</span></li><li class="clearfix"><span class="furigana">なか</span><span class="unlinked">中</span></li><li class="clearfix"><span class="unlinked">に</span></li><li class="clearfix"><span class="furigana">はい</span><span class="unlinked">入って</span></li>、<li class="clearfix"><span class="furigana">やま</span><span class="unlinked"><span class="hit">山</span></span></li><li class="clearfix"><span class="unlinked">に</span></li><li class="clearfix"><span class="furigana">かけあ</span><span class="unlinked">駆け上がった</span></li><li class="clearfix"><span class="unlinked">こと</span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="furigana">こうかい</span><span class="unlinked">後悔</span></li><li class="clearfix"><span class="unlinked">していない</span></li>。」<li class="clearfix"><span class="unlinked">と</span></li><li class="clearfix"><span class="furigana">おとうと</span><span class="unlinked">弟</span></li><li class="clearfix"><span class="unlinked">は</span></li><li class="clearfix"><span class="furigana">こた</span><span class="unlinked">答えた</span></li>。<li class="english" lang="en">"I do not regret having gone into the forest and up the mountain," replied the younger brother.</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">mine (e.g. coal mine)</span><span>&#8203;</span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">それ</span></li><li class="clearfix"><span class="unlinked">は</span></li><li class="clearfix"><span class="furigana">おかね</span><span class="unlinked">お金</span></li><li class="clearfix"><span class="unlinked">の</span></li><li class="clearfix"><span class="furigana">やま</span><span class="unlinked"><span class="hit">山</span></span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="unlinked">かき集める</span></li><li class="clearfix"><span class="unlinked">ために</span></li><li class="clearfix"><span class="furigana">もち</span><span class="unlinked">用いられた</span></li>。<li class="english" lang="en">It was used for raking together heaps of money.</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">3. </span><span class="meaning-meaning">heap; pile</span><span>&#8203;</span></div></div><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">4. </span><span class="meaning-meaning">crown (of a hat); thread (of a screw); tread (of a tire); protruding part of an object; high part</span><span>&#8203;</span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">うまく</span></li><li class="clearfix"><span class="unlinked">あの</span></li><li class="clearfix"><span class="furigana">せんせい</span><span class="unlinked">先生</span></li><li class="clearfix"><span class="unlinked">の</span></li><li class="clearfix"><span class="unlinked">やま</span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="furigana">あ</span><span class="unlinked">当てた</span></li><li class="clearfix"><span class="unlinked">わね</span></li>。<li class="english" lang="en">You've sure got the teacher's number.</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">5. </span><span class="meaning-meaning">climax; peak; critical point</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">6. </span><span class="meaning-meaning">guess; speculation; gamble</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">7. </span><span class="meaning-meaning">criminal case; crime</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">used by police, crime reporters, etc.</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">8. </span><span class="meaning-meaning">mountain climbing; mountaineering</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">9. </span><span class="meaning-meaning">festival float (esp. one mounted with a decorative halberd)</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-see_also">See also <a href="/search/%E5%B1%B1%E9%89%BE">山鉾</a></span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">10. </span><span class="meaning-meaning">wall; wall tile</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Mahjong term</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">11. </span><span class="meaning-meaning">temple; temple grounds</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Archaism</span></span></div></div><div class="meaning-tags">Noun - used as a prefix</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">12. </span><span class="meaning-meaning">wild</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">13. </span><span class="meaning-meaning">Mountain</span><span>&#8203;</span><span class="meaning-abstract">Error: image is invalid or non-existent A mountain is a l...<a href="//jisho.org/word/%E5%B1%B1"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E5%B1%B1">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">まど</span>
      </span>
      <span class="text">
        窓
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 33</a></span> <audio id="audio_窓:まど"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/273c3555a3983089b3c1a43ab171aec7.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/273c3555a3983089b3c1a43ab171aec7.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_窓:まど">Play audio</a> <a href="#" data-reveal-id="links_coll_51859babd5dda72954012bc0" data-reveal="true" class="concept_light-status_link">Show 2 collocations</a> <div id="links_coll_51859babd5dda72954012bc0" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E7%AA%93%E3%81%AE%E6%A1%9F%20%23words">窓の桟 - window frame</a></li><li><a href="/search/%E7%A4%BE%E4%BC%9A%E3%81%AE%E7%AA%93%20%23words">社会の窓 - trouser zipper (mainly for males)</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859babd5dda72954012bc0" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859babd5dda72954012bc0" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E7%AA%93%20%23sentences">Sentence search for 窓</a></li><li><a href="/search/%E3%81%BE%E3%81%A9%20%23sentences">Sentence search for まど</a></li><li><a href="/search/%E7%AA%97%20%23sentences">Sentence search for 窗</a></li><li><a href="/search/%E7%89%96%20%23sentences">Sentence search for 牖</a></li><li><a href="//jisho.org/search/%E7%AA%93%20%23kanji">Kanji details for 窓</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1401400&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">window</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Window</span><span>&#8203;</span><span class="meaning-abstract">A window is a transparent or translucent opening in a wal...<a href="//jisho.org/word/%E7%AA%93"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">窗 【まど】</span>、<span class="break-unit">牖 【まど】</span></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E7%AA%93">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">どう</span><span class="kanji-2-up kanji">ぶつ</span>
      </span>
      <span class="text">
        動物
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 12</a></span> <audio id="audio_動物:どうぶつ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/9e9b3e0342d90f30c13ad5ce34444a2c.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/9e9b3e0342d90f30c13ad5ce34444a2c.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_動物:どうぶつ">Play audio</a> <a href="#" data-reveal-id="links_coll_51859c03d5dda729540151ba" data-reveal="true" class="concept_light-status_link">Show 1 collocation</a> <div id="links_coll_51859c03d5dda729540151ba" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E5%8B%95%E7%89%A9%E3%81%AE%E6%A8%A9%E5%88%A9%20%23words">動物の権利 - animal rights</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859c03d5dda729540151ba" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859c03d5dda729540151ba" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E5%8B%95%E7%89%A9%20%23sentences">Sentence search for 動物</a></li><li><a href="/search/%E3%81%A9%E3%81%86%E3%81%B6%E3%81%A4%20%23sentences">Sentence search for どうぶつ</a></li><li><a href="//jisho.org/search/%E5%8B%95%E7%89%A9%20%23kanji">Kanji details for 動 and 物</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1451470&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">animal</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Animal</span><span>&#8203;</span><span class="meaning-abstract">Animals are a major group of multicellular, eukaryotic or...<a href="//jisho.org/word/%E5%8B%95%E7%89%A9"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E5%8B%95%E7%89%A9">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">よる</span>
      </span>
      <span class="text">
        夜
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 6</a></span> <audio id="audio_夜:よる"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/456aca2d5fa57d944bcb37ff7a44f138.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/456aca2d5fa57d944bcb37ff7a44f138.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_夜:よる">Play audio</a> <a href="#" data-reveal-id="links_coll_51859c97d5dda72954019246" data-reveal="true" class="concept_light-status_link">Show 5 collocations</a> <div id="links_coll_51859c97d5dda72954019246" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E5%A4%9C%E3%81%8C%E6%98%8E%E3%81%91%E3%82%8B%20%23words">夜が明ける - dawn breaks</a></li><li><a href="/search/%E5%A4%9C%E3%82%92%E5%BE%B9%E3%81%99%E3%82%8B%20%23words">夜を徹する - to stay up all night</a></li><li><a href="/search/%E5%A4%9C%E3%82%92%E6%98%8E%E3%81%8B%E3%81%99%20%23words">夜を明かす - to intentionally pass the night without sleeping until morning</a></li><li><a href="/search/%E5%A4%9C%E3%81%AE%E3%81%97%E3%81%98%E3%81%BE%20%23words">夜のしじま - stillness of night</a></li><li><a href="/search/%E5%A4%9C%E3%81%AE%E5%BA%95%20%23words">夜の底 - dark of the night</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859c97d5dda72954019246" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859c97d5dda72954019246" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E5%A4%9C%20%23sentences">Sentence search for 夜</a></li><li><a href="/search/%E3%82%88%E3%82%8B%20%23sentences">Sentence search for よる</a></li><li><a href="/search/%E3%82%88%20%23sentences">Sentence search for よ</a></li><li><a href="//jisho.org/search/%E5%A4%9C%20%23kanji">Kanji details for 夜</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1536350&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">evening; night</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">dinner</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-restriction">Only applies to よる</span></span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">3. </span><span class="meaning-meaning">Night</span><span>&#8203;</span><span class="meaning-abstract">Night or nighttime is the period of time between the suns...<a href="//jisho.org/word/%E5%A4%9C"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">夜 【よ】</span></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E5%A4%9C">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-3-up kanji">りょう</span><span class="kanji-1-up kanji">り</span>
      </span>
      <span class="text">
        料理
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 14</a></span> <audio id="audio_料理:りょうり"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/c4044c5792fd676c9840440b24d474bb.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/c4044c5792fd676c9840440b24d474bb.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_料理:りょうり">Play audio</a> <a class="concept_light-status_link" data-dropdown="links_drop_51859cb7d5dda72954019ff6" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859cb7d5dda72954019ff6" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E6%96%99%E7%90%86%20%23sentences">Sentence search for 料理</a></li><li><a href="/search/%E3%82%8A%E3%82%87%E3%81%86%E3%82%8A%20%23sentences">Sentence search for りょうり</a></li><li><a href="//jisho.org/search/%E6%96%99%E7%90%86%20%23kanji">Kanji details for 料 and 理</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1554310&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun, Suru verb</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">cooking; cookery; cuisine</span><span>&#8203;</span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">これらの</span></li><li class="clearfix"><span class="unlinked">りんご</span></li><li class="clearfix"><span class="unlinked">は</span></li><li class="clearfix"><span class="furigana">りょうり</span><span class="unlinked"><span class="hit">料理</span></span></li><li class="clearfix"><span class="furigana">よう</span><span class="unlinked">用</span></li><li class="clearfix"><span class="unlinked">に</span></li><li class="clearfix"><span class="unlinked">もってこい</span></li><li class="clearfix"><span class="unlinked">だ</span></li>。<li class="english" lang="en">These apples are good cookers.</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">dealing with something; handling; administration; management</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">nuance of doing it easily</span></span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="furigana">よ</span><span class="unlinked">良い</span></li><li class="clearfix"><span class="furigana">ところ</span><span class="unlinked">所</span></li>：<li class="clearfix"><span class="furigana">さまざま</span><span class="unlinked">様々な</span></li><li class="clearfix"><span class="unlinked">コンボ</span></li><li class="clearfix"><span class="unlinked">で</span></li><li class="clearfix"><span class="furigana">じゆう</span><span class="unlinked">自由に</span></li><li class="clearfix"><span class="furigana">てき</span><span class="unlinked">敵</span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="furigana">りょうり</span><span class="unlinked"><span class="hit">料理</span></span></li><li class="clearfix"><span class="unlinked">する</span></li><li class="clearfix"><span class="furigana">たの</span><span class="unlinked">楽し</span></li><li class="clearfix"><span class="unlinked">さ</span></li>。<li class="english" lang="en">Good points: The pleasure of disposing of enemies with a variety of combos.</li></ul></div></span></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">3. </span><span class="meaning-meaning">Cuisine</span><span>&#8203;</span><span class="meaning-abstract">Cuisine (from French cuisine, &quot;cooking; culinary art; kit...<a href="//jisho.org/word/%E6%96%99%E7%90%86"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E6%96%99%E7%90%86">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">なつ</span>
      </span>
      <span class="text">
        夏
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 7</a></span> <audio id="audio_夏:なつ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/241fb8db94baee095d4377da4cb4e93d.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/241fb8db94baee095d4377da4cb4e93d.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_夏:なつ">Play audio</a> <a href="#" data-reveal-id="links_coll_51859a3bd5dda72954008c02" data-reveal="true" class="concept_light-status_link">Show 1 collocation</a> <div id="links_coll_51859a3bd5dda72954008c02" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E5%A4%8F%E3%81%AE%E6%9C%88%20%23words">夏の月 - the (cool) summer moon</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859a3bd5dda72954008c02" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859a3bd5dda72954008c02" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E5%A4%8F%20%23sentences">Sentence search for 夏</a></li><li><a href="/search/%E3%81%AA%E3%81%A4%20%23sentences">Sentence search for なつ</a></li><li><a href="//jisho.org/search/%E5%A4%8F%20%23kanji">Kanji details for 夏</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1191320&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Adverbial noun, Temporal noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">summer</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Summer</span><span>&#8203;</span><span class="meaning-abstract">Summer is the warmest of the four temperate seasons, betw...<a href="//jisho.org/word/%E5%A4%8F"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E5%A4%8F">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">しん</span><span class="kanji-2-up kanji">ぶん</span>
      </span>
      <span class="text">
        新聞
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 10</a></span> <audio id="audio_新聞:しんぶん"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/9f066928909c95f5ec8ea416513e63fc.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/9f066928909c95f5ec8ea416513e63fc.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_新聞:しんぶん">Play audio</a> <a href="#" data-reveal-id="links_coll_51859b66d5dda72954010e20" data-reveal="true" class="concept_light-status_link">Show 1 collocation</a> <div id="links_coll_51859b66d5dda72954010e20" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E6%96%B0%E8%81%9E%E3%81%AB%E8%BC%89%E3%82%8B%20%23words">新聞に載る - to appear in the newspaper</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859b66d5dda72954010e20" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859b66d5dda72954010e20" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E6%96%B0%E8%81%9E%20%23sentences">Sentence search for 新聞</a></li><li><a href="/search/%E3%81%97%E3%82%93%E3%81%B6%E3%82%93%20%23sentences">Sentence search for しんぶん</a></li><li><a href="//jisho.org/search/%E6%96%B0%E8%81%9E%20%23kanji">Kanji details for 新 and 聞</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1362360&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">newspaper</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Newspaper</span><span>&#8203;</span><span class="meaning-abstract">A newspaper is a scheduled publication containing news of...<a href="//jisho.org/word/%E6%96%B0%E8%81%9E"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E6%96%B0%E8%81%9E">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">こう</span><span class="kanji-2-up kanji">えん</span>
      </span>
      <span class="text">
        公園
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 16</a></span> <audio id="audio_公園:こうえん"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/d7a8ee326eb724584776335b3c298b5a.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/d7a8ee326eb724584776335b3c298b5a.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_公園:こうえん">Play audio</a> <a class="concept_light-status_link" data-dropdown="links_drop_51859acad5dda7295400ca2a" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859acad5dda7295400ca2a" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E5%85%AC%E5%9C%92%20%23sentences">Sentence search for 公園</a></li><li><a href="/search/%E3%81%93%E3%81%86%E3%81%88%E3%82%93%20%23sentences">Sentence search for こうえん</a></li><li><a href="//jisho.org/search/%E5%85%AC%E5%9C%92%20%23kanji">Kanji details for 公 and 園</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1273270&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">(public) park</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Park</span><span>&#8203;</span><span class="meaning-abstract">A park is a protected area, in its natural or semi-natura...<a href="//jisho.org/word/%E5%85%AC%E5%9C%92"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E5%85%AC%E5%9C%92">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-1-up kanji">い</span><span class="kanji-1-up kanji">み</span>
      </span>
      <span class="text">
        意味
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 11</a></span> <audio id="audio_意味:いみ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/7eb9eeeba34f454d0b5b0a4847d255c6.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/7eb9eeeba34f454d0b5b0a4847d255c6.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_意味:いみ">Play audio</a> <a href="#" data-reveal-id="links_coll_518599ffd5dda729540071ea" data-reveal="true" class="concept_light-status_link">Show 7 collocations</a> <div id="links_coll_518599ffd5dda729540071ea" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E6%84%8F%E5%91%B3%E3%81%8C%E3%81%82%E3%82%8B%20%23words">意味がある - to have meaning</a></li><li><a href="/search/%E6%84%8F%E5%91%B3%E3%81%8C%E3%81%AA%E3%81%84%20%23words">意味がない - useless</a></li><li><a href="/search/%E6%84%8F%E5%91%B3%E3%81%8C%E9%80%9A%E3%81%98%E3%82%8B%20%23words">意味が通じる - to be comprehensible</a></li><li><a href="/search/%E6%84%8F%E5%91%B3%E3%81%8C%E9%80%9A%E3%82%8B%20%23words">意味が通る - to be comprehensible</a></li><li><a href="/search/%E6%84%8F%E5%91%B3%E3%82%92%E3%81%AA%E3%81%99%20%23words">意味をなす - to make sense</a></li><li><a href="/search/%E6%84%8F%E5%91%B3%E3%82%92%E5%8F%96%E3%82%8B%20%23words">意味を取る - to follow the sense</a></li><li><a href="/search/%E6%84%8F%E5%91%B3%E3%82%92%E6%8D%89%E3%81%88%E3%82%8B%20%23words">意味を捉える - to grasp the meaning</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_518599ffd5dda729540071ea" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_518599ffd5dda729540071ea" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E6%84%8F%E5%91%B3%20%23sentences">Sentence search for 意味</a></li><li><a href="/search/%E3%81%84%E3%81%BF%20%23sentences">Sentence search for いみ</a></li><li><a href="//jisho.org/search/%E6%84%8F%E5%91%B3%20%23kanji">Kanji details for 意 and 味</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1156800&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun, Suru verb</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">meaning; significance; sense</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Meaning (linguistics)</span><span>&#8203;</span><span class="meaning-abstract">In linguistics, meaning is what the source or sender expr...<a href="//jisho.org/word/%E6%84%8F%E5%91%B3"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E6%84%8F%E5%91%B3">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-1-up kanji">じ</span><span class="kanji-2-up kanji">てん</span><span class="kanji-2-up kanji">しゃ</span>
      </span>
      <span class="text">
        自転車
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 10</a></span> <audio id="audio_自転車:じてんしゃ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/af271c4883d4abca6a461cc2bf726bc4.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/af271c4883d4abca6a461cc2bf726bc4.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_自転車:じてんしゃ">Play audio</a> <a href="#" data-reveal-id="links_coll_51859b18d5dda7295400ec7c" data-reveal="true" class="concept_light-status_link">Show 1 collocation</a> <div id="links_coll_51859b18d5dda7295400ec7c" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E8%87%AA%E8%BB%A2%E8%BB%8A%E3%82%92%E6%BC%95%E3%81%90%20%23words">自転車を漕ぐ - to pedal a bike</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859b18d5dda7295400ec7c" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859b18d5dda7295400ec7c" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E8%87%AA%E8%BB%A2%E8%BB%8A%20%23sentences">Sentence search for 自転車</a></li><li><a href="/search/%E3%81%98%E3%81%A6%E3%82%93%E3%81%97%E3%82%83%20%23sentences">Sentence search for じてんしゃ</a></li><li><a href="/search/%E3%81%98%E3%81%A7%E3%82%93%E3%81%97%E3%82%83%20%23sentences">Sentence search for じでんしゃ</a></li><li><a href="//jisho.org/search/%E8%87%AA%E8%BB%A2%E8%BB%8A%20%23kanji">Kanji details for 自, 転 and 車</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1318290&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">bicycle; bike</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Bicycle</span><span>&#8203;</span><span class="meaning-abstract">A bicycle, often called a bike (and sometimes referred to...<a href="//jisho.org/word/%E8%87%AA%E8%BB%A2%E8%BB%8A"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">自転車 【じでんしゃ】</span></span></div></div><div class="meaning-tags">Notes</div><div class="meaning-wrapper"><div class="meaning-definition meaning-representation_notes zero-padding"><span class="">じでんしゃ: Irregular kana usage.</span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E8%87%AA%E8%BB%A2%E8%BB%8A">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">あし</span>
      </span>
      <span class="text">
        足
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 4</a></span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 45</a></span> <audio id="audio_足:あし"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/2dddca8ed183c321841764350efedef5.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/2dddca8ed183c321841764350efedef5.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_足:あし">Play audio</a> <a href="#" data-reveal-id="links_coll_51859bb0d5dda72954012e3c" data-reveal="true" class="concept_light-status_link">Show 22 collocations</a> <div id="links_coll_51859bb0d5dda72954012e3c" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E8%84%9A%E3%81%8C%E3%81%82%E3%82%8B%20%23words">脚がある - to have legs</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E3%81%99%E3%81%8F%E3%82%80%20%23words">足がすくむ - to freeze (from fear)</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E4%BB%98%E3%81%8F%20%23words">足が付く - to be traced</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E3%81%A4%E3%82%8B%20%23words">足がつる - to have one&#39;s leg cramp</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E5%87%BA%E3%82%8B%20%23words">足が出る - to exceed the budget</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E5%90%91%E3%81%8F%20%23words">足が向く - to head towards</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E6%97%A9%E3%81%84%20%23words">足が早い - to be fast at walking and running</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E9%80%94%E7%B5%B6%E3%81%88%E3%82%8B%20%23words">足が途絶える - there being suddenly no visitors (customers)</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E9%81%85%E3%81%84%20%23words">足が遅い - to be slow-footed</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E9%81%A0%E3%81%AE%E3%81%8F%20%23words">足が遠のく - to visit less often</a></li><li><a href="/search/%E8%B6%B3%E3%81%8C%E9%87%8D%E3%81%84%20%23words">足が重い - one&#39;s legs being leaden (through tiredness, etc.)</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E3%81%99%E3%81%8F%E3%81%86%20%23words">足をすくう - to trip someone up</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E4%BC%B8%E3%81%B0%E3%81%99%20%23words">足を伸ばす - to (relax and) stretch one&#39;s legs out</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E3%81%B2%E3%81%8D%E3%81%9A%E3%82%8B%20%23words">足をひきずる - to limp</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E5%BC%95%E3%81%A3%E5%BC%B5%E3%82%8B%20%23words">足を引っ張る - to hold back others from achieving success</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E5%B4%A9%E3%81%99%20%23words">足を崩す - to sit cross-legged</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E6%B4%97%E3%81%86%20%23words">足を洗う - to quit (a shady business)</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E6%BB%91%E3%82%89%E3%81%99%20%23words">足を滑らす - to lose one&#39;s footing</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E6%BB%91%E3%82%89%E3%81%9B%E3%82%8B%20%23words">足を滑らせる - to lose one&#39;s footing</a></li><li><a href="/search/%E8%84%9A%E3%82%92%E7%B5%84%E3%82%80%20%23words">脚を組む - to cross one&#39;s legs</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E9%80%9F%E3%82%81%E3%82%8B%20%23words">足を速める - to quicken one&#39;s pace (steps)</a></li><li><a href="/search/%E8%B6%B3%E3%82%92%E9%81%8B%E3%81%B6%20%23words">足を運ぶ - to go</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859bb0d5dda72954012e3c" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859bb0d5dda72954012e3c" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E8%B6%B3%20%23sentences">Sentence search for 足</a></li><li><a href="/search/%E3%81%82%E3%81%97%20%23sentences">Sentence search for あし</a></li><li><a href="/search/%E8%84%9A%20%23sentences">Sentence search for 脚</a></li><li><a href="/search/%E8%82%A2%20%23sentences">Sentence search for 肢</a></li><li><a href="//jisho.org/search/%E8%B6%B3%20%23kanji">Kanji details for 足</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1404630&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">foot; paw; arm (of an octopus, squid, etc.)</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">esp. 足</span></span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">また</span></li><li class="clearfix"><span class="furigana">あし</span><span class="unlinked"><span class="hit">足</span></span></li><li class="clearfix"><span class="unlinked">が</span></li><li class="clearfix"><span class="unlinked">しびれた</span></li>。<li class="english" lang="en">My foot's asleep again!</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">leg</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">esp. 脚,肢</span></span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">ん</span></li>～、<li class="clearfix"><span class="unlinked">イマイチ</span></li><li class="clearfix"><span class="unlinked">なんだ</span></li><li class="clearfix"><span class="unlinked">よ</span></li><li class="clearfix"><span class="unlinked">ねえ</span></li>。<li class="clearfix"><span class="unlinked">この</span></li><li class="clearfix"><span class="furigana">あし</span><span class="unlinked">脚</span></li><li class="clearfix"><span class="unlinked">の</span></li><li class="clearfix"><span class="unlinked">あたり</span></li><li class="clearfix"><span class="unlinked">の</span></li><li class="clearfix"><span class="furigana">せん</span><span class="unlinked">線</span></li><li class="clearfix"><span class="unlinked">とか</span></li><li class="clearfix"><span class="unlinked">さぁ</span></li>。<li class="clearfix"><span class="unlinked">なんとかなんない</span></li><li class="clearfix"><span class="unlinked">の</span></li>？<li class="english" lang="en">This drawing is less than great. He needs to do something with the line here at the back of the leg.</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">3. </span><span class="meaning-meaning">gait</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">4. </span><span class="meaning-meaning">pace</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">5. </span><span class="meaning-meaning">bottom structural component (i.e. radical) of a kanji</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">usu. 脚</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">6. </span><span class="meaning-meaning">means of transportation</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-restriction">Only applies to 足</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">7. </span><span class="meaning-meaning">money; coin</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Archaism</span>, <span class="sense-tag tag-see_also">See also <a href="/search/%E3%81%8A%E8%B6%B3">お足</a></span></span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">8. </span><span class="meaning-meaning">Foot</span><span>&#8203;</span><span class="meaning-abstract">The foot (plural feet) is an anatomical structure found i...<a href="//jisho.org/word/%E8%B6%B3"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">脚 【あし】</span>、<span class="break-unit">肢 【あし】</span></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E8%B6%B3">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">でん</span><span class="kanji-2-up kanji">しゃ</span>
      </span>
      <span class="text">
        電車
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 8</a></span> <audio id="audio_電車:でんしゃ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/1f16699f941afd47d86cb87cbdf2f2d6.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/1f16699f941afd47d86cb87cbdf2f2d6.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_電車:でんしゃ">Play audio</a> <a class="concept_light-status_link" data-dropdown="links_drop_51859bf5d5dda72954014bc6" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859bf5d5dda72954014bc6" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E9%9B%BB%E8%BB%8A%20%23sentences">Sentence search for 電車</a></li><li><a href="/search/%E3%81%A7%E3%82%93%E3%81%97%E3%82%83%20%23sentences">Sentence search for でんしゃ</a></li><li><a href="//jisho.org/search/%E9%9B%BB%E8%BB%8A%20%23kanji">Kanji details for 電 and 車</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1443530&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">train; electric train</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Electric multiple unit</span><span>&#8203;</span><span class="meaning-abstract">An electric multiple unit or EMU is a multiple unit train...<a href="//jisho.org/word/%E9%9B%BB%E8%BB%8A"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E9%9B%BB%E8%BB%8A">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">さん</span><span class="kanji-1-up kanji">ぽ</span>
      </span>
      <span class="text">
        散歩
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 31</a></span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 33</a></span> <audio id="audio_散歩:さんぽ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/1e1fdd499cd3c969fcd2cb5957ae6d69.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/1e1fdd499cd3c969fcd2cb5957ae6d69.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_散歩:さんぽ">Play audio</a> <a class="concept_light-status_link" data-dropdown="links_drop_51859afed5dda7295400e13e" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859afed5dda7295400e13e" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E6%95%A3%E6%AD%A9%20%23sentences">Sentence search for 散歩</a></li><li><a href="/search/%E3%81%95%E3%82%93%E3%81%BD%20%23sentences">Sentence search for さんぽ</a></li><li><a href="//jisho.org/search/%E6%95%A3%E6%AD%A9%20%23kanji">Kanji details for 散 and 歩</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1303620&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun, Suru verb</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">walk; stroll</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Strolling</span><span>&#8203;</span><span class="meaning-abstract">Strolling is walking along or through at a leisurely pace...<a href="//jisho.org/word/%E6%95%A3%E6%AD%A9"> Read more</a></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E6%95%A3%E6%AD%A9">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">こえ</span>
      </span>
      <span class="text">
        声
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 5</a></span> <audio id="audio_声:こえ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/72a411978257c16a2a65c9a51732e9dc.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/72a411978257c16a2a65c9a51732e9dc.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_声:こえ">Play audio</a> <a href="#" data-reveal-id="links_coll_51859b86d5dda72954011bd6" data-reveal="true" class="concept_light-status_link">Show 13 collocations</a> <div id="links_coll_51859b86d5dda72954011bd6" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E5%A3%B0%E3%81%8C%E3%81%8B%E3%81%99%E3%82%8C%E3%82%8B%20%23words">声がかすれる - to become hoarse</a></li><li><a href="/search/%E5%A3%B0%E3%81%8C%E6%9E%AF%E3%82%8C%E3%82%8B%20%23words">声が枯れる - to become hoarse</a></li><li><a href="/search/%E5%A3%B0%E3%82%92%E3%81%8B%E3%81%91%E3%82%8B%20%23words">声をかける - to greet</a></li><li><a href="/search/%E5%A3%B0%E3%82%92%E4%B8%8A%E3%81%92%E3%82%8B%20%23words">声を上げる - to raise one&#39;s voice</a></li><li><a href="/search/%E5%A3%B0%E3%82%92%E5%87%BA%E3%81%99%20%23words">声を出す - to speak</a></li><li><a href="/search/%E5%A3%B0%E3%82%92%E5%8A%B1%E3%81%BE%E3%81%99%20%23words">声を励ます - to raise one&#39;s voice</a></li><li><a href="/search/%E5%A3%B0%E3%82%92%E5%91%91%E3%82%80%20%23words">声を呑む - to gulp in astonishment</a></li><li><a href="/search/%E5%A3%B0%E3%82%92%E5%B0%96%E3%82%89%E3%81%99%20%23words">声を尖らす - to speak sharply</a></li><li><a href="/search/%E5%A3%B0%E3%82%92%E5%BC%B5%E3%82%8A%E4%B8%8A%E3%81%92%E3%82%8B%20%23words">声を張り上げる - to raise one&#39;s voice</a></li><li><a href="/search/%E5%A3%B0%E3%82%92%E6%AE%BA%E3%81%99%20%23words">声を殺す - to muffle one&#39;s voice</a></li><li><a href="/search/%E5%A3%B0%E3%82%92%E7%AB%8B%E3%81%A6%E3%82%8B%20%23words">声を立てる - to let out a cry</a></li><li><a href="/search/%E5%A3%B0%E3%81%AB%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%20%23words">声にならない - soundless</a></li><li><a href="/search/%E5%A4%A9%E3%81%AE%E5%A3%B0%20%23words">天の声 - heavenly voice</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859b86d5dda72954011bd6" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859b86d5dda72954011bd6" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E5%A3%B0%20%23sentences">Sentence search for 声</a></li><li><a href="/search/%E3%81%93%E3%81%88%20%23sentences">Sentence search for こえ</a></li><li><a href="/search/%E8%81%B2%20%23sentences">Sentence search for 聲</a></li><li><a href="//jisho.org/search/%E5%A3%B0%20%23kanji">Kanji details for 声</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1380440&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">voice</span><span>&#8203;</span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">あなた</span></li><li class="clearfix"><span class="unlinked">の</span></li><li class="clearfix"><span class="furigana">こえ</span><span class="unlinked"><span class="hit">声</span></span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="furigana">き</span><span class="unlinked">聞いて</span></li><li class="clearfix"><span class="furigana">うれ</span><span class="unlinked">嬉しい</span></li>。<li class="english" lang="en">I am happy to hear your voice.</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">singing (of a bird); chirping (of an insect); hoot</span><span>&#8203;</span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="furigana">にほんじん</span><span class="unlinked">日本人</span></li><li class="clearfix"><span class="unlinked">は</span></li><li class="clearfix"><span class="furigana">とり</span><span class="unlinked">鳥</span></li><li class="clearfix"><span class="unlinked">や</span></li><li class="clearfix"><span class="furigana">むし</span><span class="unlinked">虫</span></li><li class="clearfix"><span class="unlinked">の</span></li><li class="clearfix"><span class="furigana">こえ</span><span class="unlinked"><span class="hit">声</span></span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="furigana">たの</span><span class="unlinked">楽しむ</span></li>。<li class="english" lang="en">The Japanese enjoy the songs of birds and insects.</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">3. </span><span class="meaning-meaning">voice; opinion (as expressed in words); view; wish; attitude; will</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">4. </span><span class="meaning-meaning">sound</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">5. </span><span class="meaning-meaning">sense (of something&#39;s arrival); feeling</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-info">usu. as ～の声を聞く</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">6. </span><span class="meaning-meaning">voice; voiced sound</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">linguistics terminology</span></span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">7. </span><span class="meaning-meaning">Human voice</span><span>&#8203;</span><span class="meaning-abstract">The human voice consists of sound made by a human being u...<a href="//jisho.org/word/%E5%A3%B0"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">聲 【こえ】</span></span></div></div><div class="meaning-tags">Notes</div><div class="meaning-wrapper"><div class="meaning-definition meaning-representation_notes zero-padding"><span class="">聲: Out-dated kanji.</span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E5%A3%B0">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">あさ</span>
      </span>
      <span class="text">
        朝
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 8</a></span> <audio id="audio_朝:あさ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/8fcb8f6c769bb7abba34f6e245b7e376.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/8fcb8f6c769bb7abba34f6e245b7e376.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_朝:あさ">Play audio</a> <a href="#" data-reveal-id="links_coll_51859bdad5dda72954014032" data-reveal="true" class="concept_light-status_link">Show 1 collocation</a> <div id="links_coll_51859bdad5dda72954014032" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E6%9C%9D%E3%81%AE%E9%9C%B2%20%23words">朝の露 - morning dew</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859bdad5dda72954014032" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859bdad5dda72954014032" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E6%9C%9D%20%23sentences">Sentence search for 朝</a></li><li><a href="/search/%E3%81%82%E3%81%95%20%23sentences">Sentence search for あさ</a></li><li><a href="/search/%E3%81%82%E3%81%97%E3%81%9F%20%23sentences">Sentence search for あした</a></li><li><a href="/search/%E6%99%A8%20%23sentences">Sentence search for 晨</a></li><li><a href="//jisho.org/search/%E6%9C%9D%20%23kanji">Kanji details for 朝</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1428280&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">morning</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">breakfast</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-restriction">Only applies to あさ</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">3. </span><span class="meaning-meaning">next morning</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Archaism</span>, <span class="sense-tag tag-restriction">Only applies to 朝</span>, <span class="sense-tag tag-restriction">Only applies to あした</span></span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">4. </span><span class="meaning-meaning">Morning</span><span>&#8203;</span><span class="meaning-abstract">The word morning originally referred to the sunrise but t...<a href="//jisho.org/word/%E6%9C%9D"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">朝 【あした】</span>、<span class="break-unit">晨 【あした】</span></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E6%9C%9D">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">うた</span>
      </span>
      <span class="text">
        歌
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 10</a></span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 60</a></span> <audio id="audio_歌:うた"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/eb7087b95faf154df3eea228e2665f52.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/eb7087b95faf154df3eea228e2665f52.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_歌:うた">Play audio</a> <a class="concept_light-status_link" data-dropdown="links_drop_51859a3ed5dda72954008d74" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859a3ed5dda72954008d74" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E6%AD%8C%20%23sentences">Sentence search for 歌</a></li><li><a href="/search/%E3%81%86%E3%81%9F%20%23sentences">Sentence search for うた</a></li><li><a href="/search/%E5%94%84%20%23sentences">Sentence search for 唄</a></li><li><a href="/search/%E8%A9%A9%20%23sentences">Sentence search for 詩</a></li><li><a href="//jisho.org/search/%E6%AD%8C%20%23kanji">Kanji details for 歌</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1193180&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">song</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-restriction">Only applies to 歌</span>, <span class="sense-tag tag-restriction">Only applies to 唄</span>, <span class="sense-tag tag-info">唄 is primarily used for shamisen songs</span></span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">この</span></li><li class="clearfix"><span class="furigana">うた</span><span class="unlinked"><span class="hit">歌</span></span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="furigana">き</span><span class="unlinked">聞く</span></li><li class="clearfix"><span class="unlinked">と</span></li><li class="clearfix"><span class="furigana">わたし</span><span class="unlinked">私</span></li><li class="clearfix"><span class="unlinked">は</span></li><li class="clearfix"><span class="unlinked">いつも</span></li>、<li class="clearfix"><span class="furigana">がくせいじだい</span><span class="unlinked">学生時代</span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="furigana">おもいだ</span><span class="unlinked">思い出す</span></li>。<li class="english" lang="en">Whenever I hear this song, I am reminded of my school days.</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">classical Japanese poetry (esp. tanka)</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-restriction">Only applies to 歌</span>, <span class="sense-tag tag-see_also">See also <a href="/search/%E7%9F%AD%E6%AD%8C">短歌</a></span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">3. </span><span class="meaning-meaning">modern poetry</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-restriction">Only applies to 歌</span>, <span class="sense-tag tag-restriction">Only applies to 詩</span></span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">4. </span><span class="meaning-meaning">Song</span><span>&#8203;</span><span class="meaning-abstract">In music, a song is a composition for voice or voices, pe...<a href="//jisho.org/word/%E6%AD%8C"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">唄 【うた】</span>、<span class="break-unit">詩 【うた】</span></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E6%AD%8C">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">くつ</span>
      </span>
      <span class="text">
        靴
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 27</a></span> <audio id="audio_靴:くつ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/994b82549121d712d1ef592f27d74d99.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/994b82549121d712d1ef592f27d74d99.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_靴:くつ">Play audio</a> <a href="#" data-reveal-id="links_coll_51859a9bd5dda7295400b5f8" data-reveal="true" class="concept_light-status_link">Show 3 collocations</a> <div id="links_coll_51859a9bd5dda7295400b5f8" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E9%9D%B4%E3%82%92%E6%8F%83%E3%81%88%E3%82%8B%20%23words">靴を揃える - to arrange (one&#39;s) shoes (e.g. in a genkan)</a></li><li><a href="/search/%E9%9D%B4%E3%82%92%E7%A3%A8%E3%81%8F%20%23words">靴を磨く - to polish one&#39;s shoes</a></li><li><a href="/search/%E6%B2%93%E3%81%A8%E3%81%97%E3%81%A6%20%23words">沓として - no information</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859a9bd5dda7295400b5f8" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859a9bd5dda7295400b5f8" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E9%9D%B4%20%23sentences">Sentence search for 靴</a></li><li><a href="/search/%E3%81%8F%E3%81%A4%20%23sentences">Sentence search for くつ</a></li><li><a href="/search/%E6%B2%93%20%23sentences">Sentence search for 沓</a></li><li><a href="/search/%E5%B1%A5%20%23sentences">Sentence search for 履</a></li><li><a href="/search/%E9%9E%8B%20%23sentences">Sentence search for 鞋</a></li><li><a href="//jisho.org/search/%E9%9D%B4%20%23kanji">Kanji details for 靴</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1246700&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">shoe; shoes; boots; footwear; footgear</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Shoe</span><span>&#8203;</span><span class="meaning-abstract">A shoe is an item of footwear intended to protect and com...<a href="//jisho.org/word/%E9%9D%B4"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">沓 【くつ】</span>、<span class="break-unit">履 【くつ】</span>、<span class="break-unit">鞋 【くつ】</span></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E9%9D%B4">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-2-up kanji">はこ</span>
      </span>
      <span class="text">
        箱
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 16</a></span> <audio id="audio_箱:はこ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/1f5a4259709fe0d6786b0f007e7d908d.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/1f5a4259709fe0d6786b0f007e7d908d.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_箱:はこ">Play audio</a> <a class="concept_light-status_link" data-dropdown="links_drop_51859cefd5dda7295401b6fc" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859cefd5dda7295401b6fc" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E7%AE%B1%20%23sentences">Sentence search for 箱</a></li><li><a href="/search/%E3%81%AF%E3%81%93%20%23sentences">Sentence search for はこ</a></li><li><a href="/search/%E5%87%BD%20%23sentences">Sentence search for 函</a></li><li><a href="/search/%E5%8C%A3%20%23sentences">Sentence search for 匣</a></li><li><a href="/search/%E7%AD%A5%20%23sentences">Sentence search for 筥</a></li><li><a href="/search/%E7%AD%90%20%23sentences">Sentence search for 筐</a></li><li><a href="/search/%E5%87%BE%20%23sentences">Sentence search for 凾</a></li><li><a href="/search/%E3%83%8F%E3%82%B3%20%23sentences">Sentence search for ハコ</a></li><li><a href="//jisho.org/search/%E7%AE%B1%20%23kanji">Kanji details for 箱</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1585650&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">box; case; chest; package; pack; crate</span><span>&#8203;</span></div><span class="sentences zero-padding"><div class="sentence"><ul class="japanese japanese_gothic clearfix" lang="ja"><li class="clearfix"><span class="unlinked">その</span></li><li class="clearfix"><span class="furigana">とって</span><span class="unlinked">取っ手</span></li><li class="clearfix"><span class="unlinked">を</span></li><li class="clearfix"><span class="furigana">みぎ</span><span class="unlinked">右</span></li><li class="clearfix"><span class="unlinked">に</span></li><li class="clearfix"><span class="unlinked">ねじる</span></li><li class="clearfix"><span class="unlinked">と</span></li><li class="clearfix"><span class="furigana">はこ</span><span class="unlinked"><span class="hit">箱</span></span></li><li class="clearfix"><span class="unlinked">は</span></li><li class="clearfix"><span class="furigana">あ</span><span class="unlinked">開きます</span></li>。<li class="english" lang="en">Twist that knob to the right and the box will open.</li></ul></div></span></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">car (of a train, etc.)</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">3. </span><span class="meaning-meaning">shamisen case; shamisen</span><span>&#8203;</span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">4. </span><span class="meaning-meaning">public building; community building</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Colloquialism</span>, <span class="sense-tag tag-see_also">See also <a href="/search/%E7%AE%B1%E7%89%A9">箱物</a></span>, <span class="sense-tag tag-info">often written as ハコ</span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">5. </span><span class="meaning-meaning">man who carries a geisha&#39;s shamisen</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Archaism</span>, <span class="sense-tag tag-see_also">See also <a href="/search/%E7%AE%B1%E5%B1%8B">箱屋</a></span></span></div></div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">6. </span><span class="meaning-meaning">receptacle for human waste; feces (faeces)</span><span>&#8203;</span><span class="supplemental_info"><span class="sense-tag tag-tag">Archaism</span></span></div></div><div class="meaning-tags">Suffix, Counter</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">7. </span><span class="meaning-meaning">counter for boxes (or boxed objects)</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">8. </span><span class="meaning-meaning">Box</span><span>&#8203;</span><span class="meaning-abstract">Box describes a variety of containers and receptacles for...<a href="//jisho.org/word/%E7%AE%B1"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">函 【はこ】</span>、<span class="break-unit">匣 【はこ】</span>、<span class="break-unit">筥 【はこ】</span>、<span class="break-unit">筐 【はこ】</span>、<span class="break-unit">凾 【はこ】</span>、<span class="break-unit">ハコ</span></span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E7%AE%B1">Details ▸</a>
</div>



<div class="concept_light clearfix">
  <div class="concept_light-wrapper  columns zero-padding">
    <div class="concept_light-readings japanese japanese_gothic" lang="ja">
      <div class="concept_light-representation">      <span class="furigana">
        <span class="kanji-3-up kanji">つくえ</span>
      </span>
      <span class="text">
        机
      </span>
</div>
    </div>

      <div class="concept_light-status">
        <span class="concept_light-tag concept_light-common success label">Common word</span> <span class="concept_light-tag label">JLPT N5</span> <span class="concept_light-tag label"><a href='http://wanikani.com/'>Wanikani level 32</a></span> <audio id="audio_机:つくえ"><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio/8d46e7a4ecb1c1ceed87512e6f75178a.mp3" type="audio/mpeg"></source><source src="//d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/8d46e7a4ecb1c1ceed87512e6f75178a.ogg" type="audio/ogg"></source></audio><a class="concept_audio concept_light-status_link" data-id="audio_机:つくえ">Play audio</a> <a href="#" data-reveal-id="links_coll_51859a6dd5dda7295400a1d6" data-reveal="true" class="concept_light-status_link">Show 4 collocations</a> <div id="links_coll_51859a6dd5dda7295400a1d6" class="reveal-modal small" data-reveal="true"><ul class="no-bullet"><li><a href="/search/%E6%A1%88%E3%82%92%E7%AB%8B%E3%81%A6%E3%82%8B%20%23words">案を立てる - to draft a proposal</a></li><li><a href="/search/%E6%A1%88%E3%81%AE%E5%AE%9A%20%23words">案の定 - just as one thought</a></li><li><a href="/search/%E6%9C%BA%E3%81%AB%E5%90%91%E3%81%8B%E3%81%86%20%23words">机に向かう - to sit at a desk (to study)</a></li><li><a href="/search/%E4%B8%80%E4%BA%BA%E3%81%AB%E3%81%A4%E3%81%8D%20%23words">一人につき - per capita</a></li></ul></div> <a class="concept_light-status_link" data-dropdown="links_drop_51859a6dd5dda7295400a1d6" data-options="is_hover:true; hover_timeout:300" href="#">Links</a><ul class="f-dropdown" id="links_drop_51859a6dd5dda7295400a1d6" data-dropdown-content="data-dropdown-content"><li><a href="/search/%E6%9C%BA%20%23sentences">Sentence search for 机</a></li><li><a href="/search/%E3%81%A4%E3%81%8F%E3%81%88%20%23sentences">Sentence search for つくえ</a></li><li><a href="/search/%E6%A1%88%20%23sentences">Sentence search for 案</a></li><li><a href="/search/%E3%81%A4%E3%81%8D%20%23sentences">Sentence search for つき</a></li><li><a href="//jisho.org/search/%E6%9C%BA%20%23kanji">Kanji details for 机</a></li><li><a href="http://www.edrdg.org/jmdictdb/cgi-bin/edform.py?svc=jmdict&amp;sid=&amp;q=1220210&amp;a=2">Edit in JMdict</a></li></ul>
      </div>
  </div>


  <div class="concept_light-meanings medium-9 columns">
    <div class='meanings-wrapper'><div class="meaning-tags">Noun</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">1. </span><span class="meaning-meaning">desk</span><span>&#8203;</span></div></div><div class="meaning-tags">Wikipedia definition</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-definition-section_divider">2. </span><span class="meaning-meaning">Desk</span><span>&#8203;</span><span class="meaning-abstract">A desk is a piece of furniture and a type of table often ...<a href="//jisho.org/word/%E6%9C%BA"> Read more</a></span></div></div><div class="meaning-tags">Other forms</div><div class="meaning-wrapper"><div class="meaning-definition zero-padding"><span class="meaning-meaning"><span class="break-unit">案 【つくえ】</span>、<span class="break-unit">机 【つき】</span></span></div></div><div class="meaning-tags">Notes</div><div class="meaning-wrapper"><div class="meaning-definition meaning-representation_notes zero-padding"><span class="">案: Out-dated kanji. つき: Out-dated or obsolete kana usage.</span></div></div></div>
  </div>


    <a class="light-details_link" href="//jisho.org/word/%E6%9C%BA">Details ▸</a>
</div>


            


  <a class="more" href="//jisho.org/search/%23common%20%23words?page=4">More <span class='accesskey'>W</span>ords &gt;</a>

          </div>
      </div>

    <div id="secondary" class="large-4 columns search-secondary_column">


        



        

        
<aside id="other_dictionaries">
  <h4>Other Dictionaries</h4>
  <p class="minor-text">You can also try these fine sites.</p>
  <ul class="no-bullet">
      <li><a href="http://eow.alc.co.jp/search?q=%23common+%23words&amp;ref=sa">Search ALC for #common #words</a></li>
      <li><a href="http://dictionary.goo.ne.jp/srch/all/%23common+%23words/m0u/">Search Goo Jisho for #common #words</a></li>
      <li><a href="https://www.google.com/search?q=%23common+%23words">Search Google.com for #common #words</a></li>
      <li><a href="https://www.google.jp/search?q=%23common+%23words">Search Google.jp for #common #words</a></li>
      <li><a href="https://kotobank.jp/gs/?q=%23common+%23words">Search Kotobank for #common #words</a></li>
      <li><a href="https://www.sanseido.biz/User/Dic/Index.aspx?DORDER=&amp;DailyEJ=checkbox&amp;DailyJE=checkbox&amp;DailyJJ=checkbox&amp;TWords=%23common+%23words&amp;st=0">Search Sanseido for #common #words</a></li>
      <li><a href="https://www.weblio.jp/content/%23common+%23words">Search Weblio for #common #words</a></li>
  </ul>
</aside>

</div>
  </div>
</div>

      </div>
    </div>

      <footer class="clearfix">
  <div class="ornament">
  </div>

    

  <div class="row">
    <div class="small-12 columns">
      <p>
        Jisho.org is lovingly crafted by <a href="//jisho.org/about">Kim, Miwa and Andrew</a>.
        You can reach us at
        Facebook <a href="https://www.facebook.com/Jisho.org">fb.com/jisho.org</a>, Twitter <a href="https://twitter.com/jisho">@jisho</a> or e-mail <a href="mailto:jisho.org@gmail.com">jisho.org@gmail.com</a>. Before you contact us, please read our list of <a href="//jisho.org/faq">frequently asked questions</a>. Please note that we read all messages we get, but it can take a long time for us to reply as Jisho is a side project and we do not have very much time to devote to it.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="small-12 large-4 columns">
      <p>
        This site uses the <a href="http://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project">JMdict</a>, <a href="http://www.edrdg.org/wiki/index.php/KANJIDIC_Project">Kanjidic2</a>, <a href="http://www.edrdg.org/enamdict/enamdict_doc.html">JMnedict</a> and <a href="http://www.edrdg.org/krad/kradinf.html">Radkfile</a> dictionary files. These files are the property of the <a href="http://www.edrdg.org/"> Electronic Dictionary Research and Development Group</a>, and are used in conformance with the Group's <a href="http://www.edrdg.org/edrdg/licence.html">licence</a>.
      </p>
      <p>
        Example sentences come from the <a href="http://tatoeba.org/">Tatoeba</a> project and are licensed under <a href="http://creativecommons.org/licenses/by/2.0/fr/">Creative Commons CC-BY</a>.
      </p>
      <p>
        Audio files are graciously provided by <a href="http://www.tofugu.com">Tofugu’s</a> excellent kanji learning site <a href="http://www.wanikani.com">WaniKani</a>.
      </p>
    </div>
    <div class="small-12 large-4 columns">
      <p>
        The SKIP (System of Kanji Indexing by Patterns) system for ordering kanji was developed by Jack Halpern (Kanji Dictionary Publishing Society at <a href="http://www.kanji.org/">http://www.kanji.org/</a>), and is used with his permission. The license is <a href="http://www.kanji.org/kanji/dictionaries/skip_permission.htm">Creative Commons Attribution-ShareAlike 4.0 International</a>.
      </p>
    </div>
    <div class="small-12 large-4 columns">
      <p>
        Kanji stroke diagrams are based on data from <a href="http://kanjivg.tagaini.net" title="Welcome - KanjiVG">KanjiVG</a>, which is copyright &copy; 2009-2012 Ulrich Apel and released under the <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0</a> license.
      </p>
      <p>
        Wikipedia data comes from the <a href="http://wiki.dbpedia.org/about">DBpedia</a> project and is dual licensed under <a href="http://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">Creative Commons Attribution-ShareAlike 3.0</a> and <a href="http://en.wikipedia.org/wiki/Wikipedia:Text_of_the_GNU_Free_Documentation_License">GNU Free Documentation License</a>.
      </p>
      <p>
        JLPT data comes from <a href="http://www.tanos.co.uk/contact/">Jonathan Waller‘s</a> <a href="http://www.tanos.co.uk/jlpt/">JLPT Resources</a> page.
      </p>
    </div>
  </div>

</footer>

    <script type="text/javascript" charset="utf-8">
    var currentUser = null;

</script>

<script src="https://assets.jisho.org/assets/application-9ab28e7a78c804192e8d19908c33c7a552b7feb75521d96246d26e5d33cc8aac.js"></script>

  <style type="text/css" media="screen">
    .debug { display: none; }
  </style>



    <script>

  (function() {

   Namespace('Jisho.KeyEvents', {});
     var body = $(document.body);

     function applyBodyClass(keyEvent, on) {
       body.toggleClass(getClassForEvent(keyEvent), on !== (keyEvent.type == 'display'));
     }

     function getClassForEvent(keyEvent) {
       return (keyEvent.type == 'display' ? 'hide' : 'highlight') + '_' + keyEvent.name;
     }

     body.keydown(function(e) {
       var events = Jisho.KeyEvents[e.which];
       if(events) {
         events.each(function(keyEvent) {
           if(keyEvent.active) return;
           keyEvent.active = true;
           if(keyEvent.phase == 'toggle') {
             body.toggleClass(getClassForEvent(keyEvent));
           } else {
             applyBodyClass(keyEvent, true);
           }
         });
       }
     });

     body.keyup(function(e) {
       var events = Jisho.KeyEvents[e.which];
       if(events) {
         events.each(function(keyEvent) {
           keyEvent.active = false;
           if(keyEvent.phase !== 'toggle') {
             applyBodyClass(keyEvent, false);
           }
         });
       }
     });


  })();

</script>

    <div id="loginHelpDialog" class="reveal-modal" data-reveal aria-labelledby="Login" aria-hidden="true" role="dialog">
  <div class="row">
    <div class="login_help_dialog-new_user columns small-12 medium-6">
      <h3>New to Jisho?</h3>

      <a href="javascript:void(0)" class="js-login-help-sign-up">Click here to sign up!</a>
    </div>

    <div class="login_help_dialog-existing_user columns small-12 medium-6">
      <h3>Have an account?</h3>

      <p>We recently switched to a new login system. Please enter the email you registered with and follow the instructions.</p>

      <form class="js-login-help-log-in" method="get" accept-charset="utf-8">
        <p><input type="text" name="email" /></p>
        <p><input type="submit" value="Log in" class="button"></p>
      </form>
    </div>
  </div>

  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

  </body>
</html>
`;
