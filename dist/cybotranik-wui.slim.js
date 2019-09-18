function CybotranikWUI(){}CybotranikWUI.prototype.Default={Color:{White:"white",Lighter:"#A8E27B",Light:"#7DBF49",Primary:"#60A828",Dark:"#458812",Darker:"#2B6300",Black:"#384238",Link:"#991E41",LinkO:"#002900",Code:"purple",Info:"#000000",Success:"#000000",Warning:"#000000",Danger:"#000000"},Font:{Family:'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',Family_Print:'SFMono- Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',Size:1,Weight:300,Factor:18},Margin:{All:.5,Bottom:.5,Top:.5,Left:.5,Right:.5},Padding:{All:.5,Bottom:.5,Top:.5,Left:.5,Right:.5},Border:{All:.2,Bottom:.2,Top:.2,Left:.2,Right:.2},Line:{Height:1.6}};if(!Object.keys){Object.keys=function(){var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!{toString:null}.propertyIsEnumerable.call("toString"),dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;return function(obj){if(typeof obj!=="function"&&(typeof obj!=="object"||obj===null)){throw new TypeError("Object.keys called on non-object")}var result=[],prop,i;for(prop in obj){if(hasOwnProperty.call(obj,prop)){result.push(prop)}}if(hasDontEnumBug){for(i=0;i<dontEnumsLength;i++){if(hasOwnProperty.call(obj,dontEnums[i])){result.push(dontEnums[i])}}}return result}}()}if(typeof Object.assign!="function"){Object.assign=function(target,varArgs){"use strict";if(target==null){throw new TypeError("Cannot convert undefined or null to object")}var to=Object(target);for(var index=1;index<arguments.length;index++){var nextSource=arguments[index];if(nextSource!=null){for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey]=nextSource[nextKey]}}}}return to}}CybotranikWUI.prototype.Theme=function(configuration){var userConfiguration=Object.assign({},this.Default,configuration);this.Default=userConfiguration;this.documentAppendCssArray("theme",wui.DefaultTheme())};CybotranikWUI.prototype.currentBrowser=function(){var userAgent=navigator.userAgent,compatibility,userAgentMatch=userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(userAgentMatch[1])){compatibility=/\brv[ :]+(\d+)/g.exec(userAgent)||[];return"IE "+(compatibility[1]||"")}if(userAgentMatch[1]==="Chrome"){compatibility=userAgent.match(/\b(OPR|Edge?)\/(\d+)/);if(compatibility!==null)return compatibility.slice(1).join(" ").replace("OPR","Opera").replace("Edg ","Edge ")}userAgentMatch=userAgentMatch[2]?[userAgentMatch[1],userAgentMatch[2]]:[navigator.appName,navigator.appVersion,"-?"];if((compatibility=userAgent.match(/version\/(\d+)/i))!=null)userAgentMatch.splice(1,1,compatibility[1]);return userAgentMatch.join(" ")};CybotranikWUI.prototype.currentDocument=function(){var result={Width:document.body.clientWidth};return result};CybotranikWUI.prototype.documentAppendCss=function(type,syntax){var element=document.createElement("style");element.setAttribute("type","text/css");element.id="cybotranik-wui-"+type;switch(this.currentBrowser()){case"MSIE 5":element.styleSheet.cssText=syntax;break;case"MSIE 7":element.styleSheet.cssText=syntax;break;case"MSIE 8":element.styleSheet.cssText=syntax;break;case"MSIE 9":element.innerText=syntax;break;case"MSIE 10":element.innerText=syntax;break;case"IE 11":element.innerText=syntax;break;case"Chrome 76":element.innerText=syntax;break;case"Edge 18":element.innerText=syntax;break;case"Firefox 68":element.innerText=syntax;break;default:element.innerText=syntax}if(document.getElementById(element.id)===null){"First loading"}else{var e=document.getElementById(element.id);e.parentNode.removeChild(e)}document.getElementsByTagName("head")[0].appendChild(element)};CybotranikWUI.prototype.documentAppendCssArray=function(type,array){var syntaxs="";for(var x=0;x<array.length;x++){var item=array[x];var selectors=Object.keys(item);var css="";for(var s=0;s<selectors.length;s++){var key=selectors[s];var property=item[key];css+=key+"{";var properties=Object.keys(property);for(var p=0;p<properties.length;p++){var pKey=properties[p];var pVal=property[pKey];css+=pKey+":"+pVal+";"}css+="}";if(properties.length!=0){syntaxs+=css}}}this.documentAppendCss(type,syntaxs)};CybotranikWUI.prototype.compatibleSize=function(value){var result=value;var factor=this.Default.Font.Factor;switch(this.currentBrowser()){case"MSIE 5":result=factor*1.15*value+"px";break;case"MSIE 7":result=factor*1.11*value+"px";break;case"MSIE 8":result=factor*1*value+"px";break;case"MSIE 9":result=factor*1*value+"px";break;case"Edge 18":result=factor*1.1*value+"px";break;case"Firefox 68":result=factor*1.03*value+"px";break;default:result=factor*1*value+"px"}return result};CybotranikWUI.prototype.HtmlElements={sections:"body,article,section,nav,aside,hgroup,h1,h2,h3,h4,h5,h6,header,footer",groupingContent:"p,address,hr,pre,blockquote,ol,ul,li,dl,dt,dd,figure,figcaption,main,div",textLevelSemantics:"a,em,strong,small,s,cite,q,dfn,abbr,ruby,rb,rt,rtc,rp,data,time,code,var,samp,kbd,sub,sup,i,b,u,mark,bdi,bdo,span,br,wbr",edits:"ins,del",embeddedContent:"picture,source,img,iframe,embed,object,param,video,audio,track",mediaElements:"map,area",tabularData:"table,caption,colgroup,col,tbody,thead,tfoot,tr,td,th",forms:"form,label,input,button,select,datalist,optgroup,option,textarea,output,progress,meter,fieldset,legend",interactiveElements:"details,summary,dialog",webComponents:"accordion,alert,animation,background,badge,breadcrumb,card,comment,counter,cover,collapse,dropdown,feed,list,lightbox,marker,modal,navbar,notification,page,pop,segment,slider,slideshow,spinner,tab"};CybotranikWUI.prototype.createElementArray=function(){var dictionary="";var el=Object.keys(this.HtmlElements);for(var i=0;i<el.length;i++){var key=el[i];var val=this.HtmlElements[key];if(i===0){dictionary+=val}else{dictionary+=","+val}}var array=dictionary.split(",");for(var index=0;index<array.length;index++){var element=array[index];document.createElement(element)}};CybotranikWUI.prototype.start=function(){var self=this;window.onload=function(){self.documentAppendCssArray("base",wui.Base())};window.onresize=function(){self.documentAppendCssArray("base",wui.Base())}};CybotranikWUI.prototype.Base=function(){var result=[];result.push({"*":{"box-sizing":"border-box","margin-top":this.compatibleSize(0),"margin-bottom":this.compatibleSize(0),"padding-top":this.compatibleSize(0),"padding-bottom":this.compatibleSize(0)}});result.push({"body,article,section,nav,aside,hgroup,h1,h2,h3,h4,h5,h6,header,footer":{display:"block"}});result.push({body:{margin:0,padding:0,"text-align":"left","font-family":this.Default.Font.Family,"font-size":this.compatibleSize(this.Default.Font.Size),"font-weight":this.Default.Font.Weight,"line-height":this.Default.Line.Height}});result.push({aside:{"margin-left":this.compatibleSize(this.Default.Margin.Left),"padding-left":this.compatibleSize(this.Default.Padding.Left)}});result.push({p:{}});result.push({a:{"text-decoration":"none",zoom:1}});result.push({img:{width:"100%"}});result.push({"img-avatar":{width:"48px","border-radius":"50px",float:"right"}});result.push({'[is="html-tag"]:before':{content:'"<"'}});result.push({'[is="html-tag"]:after':{content:'">"'}});result.push({'[is="article-page"] > [is="article-header"]':{"text-align":"center"}});result.push({'[is="article-page"] > [is="article-section"]':{margin:this.compatibleSize(this.Default.Margin.All),padding:this.compatibleSize(this.Default.Padding.All)}});result.push({'[is="weather-forecast"] [is="article-section"] meter':{float:"right"}});result.push({'[is="aside-box"]':{width:"40%",float:"right%"}});result.push({'[is="aside-nav"] ul':{"list-style-type":"disc"}});result.push({'[is="aside-nav"] li':{"margin-left":this.compatibleSize(this.Default.Margin.Left)}});result.push({'[is="header-group"]':{"text-align":"right"}});result.push({'[is="horizontal-menu"]':{"list-style":"none",display:"inline-block",position:"relative","padding-left":0}});result.push({'[is="horizontal-menu"] > li':{float:"left"}});result.push({'[is="horizontal-menu"] > li > a':{padding:this.compatibleSize(this.Default.Padding.All)}});result.push({".aside-toogle":{display:"block"}});result.push({".block, .bar, .box":{margin:"0 auto",position:"reletive",width:"100%","max-width":"100%",float:"left"}});result.push({".container":{margin:"0 auto",position:"reletive",width:"100%"}});result.push({".row":{width:"100%"}});result.push({".width-5,.width-10,.width-11,.width-12,.width-14,.width-15,.width-16,.width-20,.width-25,.width-30,.width-33,.width-35,.width-40,.width-45,.width-50,.width-55,.width-60,.width-65,.width-70,.width-75,.width-80,.width-85,.width-90,.width-95,.width-100":{width:"99.18%",margin:"0.41%",float:"left"}});result.push({".clear-marjin .width-5, .clear-marjin .width-10, .clear-marjin .width-11, .clear-marjin .width-12, .clear-marjin .width-14, .clear-marjin .width-15, .clear-marjin .width-16, .clear-marjin .width-20, .clear-marjin .width-25,.clear-marjin .width-30, .clear-marjin .width-33, .clear-marjin .width-35, .clear-marjin .width-40, .clear-marjin .width-45, .clear-marjin .width-50,.clear-marjin .width-55, .clear-marjin .width-60, .clear-marjin .width-65, .clear-marjin .width-70, .clear-marjin .width-75, .clear-marjin .width-80, .clear-marjin .width-85, .clear-marjin .width-90, .clear-marjin .width-95, .clear-marjin .width-100":{width:"100%",margin:0,float:"left"}});if(this.currentDocument().Width>768){result.push({".width-5":{width:"4.18%"}});result.push({".clear-marjin .width-5":{width:"5%"}});result.push({".width-10":{width:"9.18%"}});result.push({".clear-marjin .width-10":{width:"10%"}});result.push({".width-11":{width:"10.29%"}});result.push({".clear-marjin .width-11":{width:"11%"}});result.push({".width-12":{width:"11.68%"}});result.push({".clear-marjin .width-12":{width:"12%"}});result.push({".width-16":{width:"15.84%"}});result.push({".clear-marjin .width-16":{width:"16%"}});result.push({".width-15":{width:"14.18%"}});result.push({".clear-marjin .width-15":{width:"15%"}});result.push({".width-14":{width:"13.68%"}});result.push({".clear-marjin .width-14":{width:"14%"}});result.push({".width-20":{width:"19.18%"}});result.push({".clear-marjin .width-20":{width:"20%"}});result.push({".width-25":{width:"24.18%"}});result.push({".clear-marjin .width-25":{width:"25%"}});result.push({".width-30":{width:"32.51%"}});result.push({".clear-marjin .width-30":{width:"30%"}});result.push({".width-35":{width:"34.18%"}});result.push({".clear-marjin .width-35":{width:"35%"}});result.push({".width-40":{width:"39.18%"}});result.push({".clear-marjin .width-40":{width:"40%"}});result.push({".width-45":{width:"44.18%"}});result.push({".clear-marjin .width-45":{width:"45%"}});result.push({".width-50":{width:"49.18%"}});result.push({".clear-marjin .width-50":{width:"50%"}});result.push({".width-55":{width:"54.18%"}});result.push({".clear-marjin .width-55":{width:"55%"}});result.push({".width-60":{width:"59.18%"}});result.push({".clear-marjin .width-60":{width:"60%"}});result.push({".width-65":{width:"64.18%"}});result.push({".clear-marjin .width-65":{width:"65%"}});result.push({".width-70":{width:"69.18%"}});result.push({".clear-marjin .width-70":{width:"70%"}});result.push({".width-75":{width:"74.18%"}});result.push({".clear-marjin .width-75":{width:"75%"}});result.push({".width-80":{width:"79.18%"}});result.push({".clear-marjin .width-80":{width:"80%"}});result.push({".width-85":{width:"84.18%"}});result.push({".clear-marjin .width-85":{width:"85%"}});result.push({".width-90":{width:"89.18%"}});result.push({".clear-marjin .width-90":{width:"90%"}});result.push({".width-95":{width:"94.18%"}});result.push({".clear-marjin .width-95":{width:"95%"}});result.push({".width-100":{width:"99.18%"}});result.push({".clear-marjin .width-100":{width:"100%"}});result.push({".aside-toogle":{display:"none"}})}result.push({".align-center":{"text-align":"center"}});result.push({".align-left":{"text-align":"left"}});result.push({".align-right":{"text-align":"right"}});result.push({".align-justify":{"text-align":"justify"}});return result};CybotranikWUI.prototype.DefaultTheme=function(){var result=[];result.push({body:{"background-color":this.Default.Color.Light,color:this.Default.Color.Black}});result.push({aside:{"border-left-style":"inset","border-left-width":"1px","font-style":"italic","border-left-color":"this.Default.Color.Lighter",color:this.Default.Color.Darker,"box-shadow":"inset 10px 0 5px -5px"+this.Default.Color.Lighter}});result.push({a:{color:this.Default.Color.Link}});result.push({code:{color:this.Default.Color.Code}});result.push({dfn:{"margin-left":"1%","margin-right":"1%","padding-left":"1%","padding-right":"1%","background-color":this.Default.Color.Lighter}});result.push({'[is="article-page"]':{"background-color":this.Default.Color.Lighter}});result.push({'[is="article-page"] > [is="article-section"]':{"background-color":this.Default.Color.White}});result.push({'[is="article-section"]':{"background-color":this.Default.Color.White}});result.push({'[is="article-app"]':{"border-style":"dotted","border-width":"2px","border-color":this.Default.Color.Lighter}});result.push({'[is="weather-forecast"] [is="article-section"]':{"border-bottom-style":"dotted","border-bottom-width":"1px","border-bottom-color":this.Default.Color.Darker}});result.push({'[is="aside-nav"]':{color:this.Default.Color.Dark}});result.push({'[is="aside-nav"] a':{color:this.Default.Color.LinkO}});result.push({"nav > ul > li > a:hover":{"border-bottom-color":this.Default.Color.Link,"border-bottom-style":"solid","border-bottom-width":"1px",color:this.Default.Color.Darker}});return result};var wui=new CybotranikWUI;wui.createElementArray();wui.start();