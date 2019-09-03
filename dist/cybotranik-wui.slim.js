function CybotranikWUI(){}CybotranikWUI.prototype.Default={Color:{White:"white",Lighter:"#B2E2B1",Light:"#B0E1AD",Primary:"#8FD38B",Dark:"#6CBF67",Darker:"#1C401C",Black:"#384238",Link:"#991E41",LinkO:"#002900",Info:"#000000",Success:"#000000",Warning:"#000000",Danger:"#000000"},Font:{Family:'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',Family_Print:'SFMono- Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',Size:1,Weight:300,Factor:18},Margin:{All:.5,Bottom:.5,Top:.5,Left:.5,Right:.5},Padding:{All:.5,Bottom:.5,Top:.5,Left:.5,Right:.5},Border:{All:.2,Bottom:.2,Top:.2,Left:.2,Right:.2},Line:{Height:1.6}};CybotranikWUI.prototype.setThemeDefault=function(configuration){this.Default.Color=configuration.Color};CybotranikWUI.prototype.currentBrowser=function(){var userAgent=navigator.userAgent,compatibility,userAgentMatch=userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(userAgentMatch[1])){compatibility=/\brv[ :]+(\d+)/g.exec(userAgent)||[];return"IE "+(compatibility[1]||"")}if(userAgentMatch[1]==="Chrome"){compatibility=userAgent.match(/\b(OPR|Edge?)\/(\d+)/);if(compatibility!==null)return compatibility.slice(1).join(" ").replace("OPR","Opera").replace("Edg ","Edge ")}userAgentMatch=userAgentMatch[2]?[userAgentMatch[1],userAgentMatch[2]]:[navigator.appName,navigator.appVersion,"-?"];if((compatibility=userAgent.match(/version\/(\d+)/i))!=null)userAgentMatch.splice(1,1,compatibility[1]);return userAgentMatch.join(" ")};CybotranikWUI.prototype.createProperty=function(property,value){return property+" : "+value};CybotranikWUI.prototype.createStyle=function(selector,args){if(args.length===0)return"";var syntaxs=selector+"{";for(var i=0;i<args.length;i++){var arg=args[i];syntaxs+=arg+";"}syntaxs+="}";return syntaxs};CybotranikWUI.prototype.documentAppendCss=function(syntax){var element=document.createElement("style");element.setAttribute("type","text/css");switch(this.currentBrowser()){case"MSIE 5":element.styleSheet.cssText=syntax;break;case"MSIE 7":element.styleSheet.cssText=syntax;break;case"MSIE 8":element.styleSheet.cssText=syntax;break;case"MSIE 9":element.innerText=syntax;break;case"MSIE 10":element.innerText=syntax;break;case"IE 11":element.innerText=syntax;break;case"Chrome 76":element.innerText=syntax;break;case"Edge 18":element.innerText=syntax;break;case"Firefox 68":element.innerText=syntax;break;default:element.innerText=syntax}document.getElementsByTagName("head")[0].appendChild(element)};CybotranikWUI.prototype.documentAppendCssArray=function(array){var syntaxs="";for(var i=0;i<array.length;i++){if(array[i]!=="")syntaxs+=array[i]}this.documentAppendCss(syntaxs)};CybotranikWUI.prototype.compatibleSize=function(value){var result=value;var factor=this.Default.Font.Factor;switch(this.currentBrowser()){case"MSIE 5":result=factor*1.15*value+"px";break;case"MSIE 7":result=factor*1.11*value+"px";break;case"MSIE 8":result=factor*1*value+"px";break;case"MSIE 9":result=factor*1*value+"px";break;case"Edge 18":result=factor*1.1*value+"px";break;case"Firefox 68":result=factor*1.03*value+"px";break;default:result=factor*1*value+"px"}return result};CybotranikWUI.prototype.HtmlElements=""+"address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,main,nav,section"+",blockquote,dd,div,dl,dt,figcaption,figure,hr,li,ol,p,pre,ul"+",a,abbr,b,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rb,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr"+",area,audio,img,track,video"+",embed,iframe,noembed,object,param,picture,source"+",del,ins"+",caption,col,colgroup,table,tbody,td,tfoot,th,thead,tr"+",button,datalist,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea"+",details,dialog,summary"+",shadow,template";CybotranikWUI.prototype.createElementArray=function(){var array=this.HtmlElements.split(",");for(var index=0;index<array.length;index++){var element=array[index];document.createElement(element)}};CybotranikWUI.prototype.Defaults=function(){return[this.createStyle("*",[this.createProperty("zoom",1)]),this.createStyle("*, ::after, ::before",[this.createProperty("box-sizing","border-box")]),this.createStyle("*, ::after",[]),this.createStyle("html",[]),this.createStyle("body",[this.createProperty("margin",0),this.createProperty("padding",0),this.createProperty("text-align","left"),this.createProperty("font-family",this.Default.Font.Family),this.createProperty("font-size",this.compatibleSize(this.Default.Font.Size)),this.createProperty("font-weight",this.Default.Font.Weight),this.createProperty("line-height",this.Default.Line.Height),this.createProperty("background-color",this.Default.Color.White),this.createProperty("color",this.Default.Color.Black)]),this.createStyle("address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,main,nav,section",[this.createProperty("margin-top",this.compatibleSize(0)),this.createProperty("margin-bottom",this.compatibleSize(0)),this.createProperty("margin-left",this.compatibleSize(0)),this.createProperty("margin-right",this.compatibleSize(0)),this.createProperty("padding-top",this.compatibleSize(0)),this.createProperty("padding-bottom",this.compatibleSize(0)),this.createProperty("padding-left",this.compatibleSize(0)),this.createProperty("padding-right",this.compatibleSize(0)),this.createProperty("display","block"),this.createProperty("border","solid "+this.compatibleSize(this.Default.Border.All)+" transparent")]),this.createStyle("blockquote,dd,div,dl,dt,figcaption,figure,hr,li,ol,p,pre,ul",[this.createProperty("margin-top",this.compatibleSize(0)),this.createProperty("margin-bottom",this.compatibleSize(0)),this.createProperty("margin-left",this.compatibleSize(0)),this.createProperty("margin-right",this.compatibleSize(0)),this.createProperty("padding-top",this.compatibleSize(0)),this.createProperty("padding-bottom",this.compatibleSize(0)),this.createProperty("padding-left",this.compatibleSize(0)),this.createProperty("padding-right",this.compatibleSize(0)),this.createProperty("display","block")]),this.createStyle("a,abbr,b,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rb,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr",[this.createProperty("display","inline"),this.createProperty("zoom","1")]),this.createStyle("area,audio,canvas,img,track,video",[this.createProperty("display","inline-block")]),this.createStyle("embed,iframe,noembed,object,param,picture,source",[]),this.createStyle("del,ins",[]),this.createStyle("caption,col,colgroup,table,tbody,td,tfoot,th,thead,tr",[]),this.createStyle("button,datalist,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea",[]),this.createStyle("details,dialog,summary",[]),this.createStyle("shadow,template",[]),this.createStyle("a",[this.createProperty("text-decoration","none"),this.createProperty("color",this.Default.Color.Link)]),this.createStyle('[is="article-page"]',[this.createProperty("background-color",this.Default.Color.Lighter)]),this.createStyle('[is="article-page"] > [is="article-header"]',[this.createProperty("text-align","center")]),this.createStyle('[is="article-page"] > [is="article-section"]',[this.createProperty("padding",this.compatibleSize(this.Default.Padding.All)),this.createProperty("margin",this.compatibleSize(this.Default.Margin.All)),this.createProperty("background-color",this.Default.Color.White)]),this.createStyle('[is="article-section"]',[this.createProperty("background-color",this.Default.Color.White)]),this.createStyle('[is="article-app"]',[this.createProperty("border-style","dotted"),this.createProperty("border-width","2px"),this.createProperty("border-color",this.Default.Color.Lighter)]),this.createStyle('[is="weather-forecast"] [is="article-section"]',[this.createProperty("border-bottom-style","dotted"),this.createProperty("border-bottom-width","1px"),this.createProperty("border-bottom-color",this.Default.Color.Darker)]),this.createStyle('[is="weather-forecast"] [is="article-section"] meter',[this.createProperty("float","right")]),this.createStyle('[is="aside-box"]',[this.createProperty("width","40%"),this.createProperty("float","right")]),this.createStyle("aside",[this.createProperty("box-shadow","inset 10px 0 5px -5px"+this.Default.Color.Lighter),this.createProperty("padding-left",this.compatibleSize(this.Default.Padding.Left)),this.createProperty("margin-left",this.compatibleSize(this.Default.Margin.Left)),this.createProperty("border-left-style","inset"),this.createProperty("border-left-width","1px"),this.createProperty("border-left-color",this.Default.Color.Lighter),this.createProperty("font-style","italic"),this.createProperty("color",this.Default.Color.Darker)]),this.createStyle("aside > p",[this.createProperty("margin",this.compatibleSize(this.Default.Margin.All))]),this.createStyle(".container",[this.createProperty("width","100%"),this.createProperty("margin-right","auto"),this.createProperty("margin-left","auto")]),this.createStyle(".row",[this.createProperty("width","100%")]),this.createStyle(".col-2",[this.createProperty("width","20%")]),this.createStyle(".col-8",[this.createProperty("width","80%")]),this.createStyle(".col-2,.col-8",[this.createProperty("float","left")]),this.createStyle("body",[this.createProperty("background-color",this.Default.Color.Light)]),this.createStyle('[is="aside-nav"]',[this.createProperty("color",this.Default.Color.Dark)]),this.createStyle('[is="aside-nav"] nav',[this.createProperty("position","fixed")]),this.createStyle('[is="aside-nav"] a',[this.createProperty("color",this.Default.Color.LinkO)]),this.createStyle('[is="aside-nav"] ul',[this.createProperty("list-style-type","disc")]),this.createStyle('[is="aside-nav"] li',[this.createProperty("margin-left",this.compatibleSize(this.Default.Margin.Left))])]};var cybotranik=new CybotranikWUI;cybotranik.createElementArray();var Swatch={Color:{White:"white",Lighter:"#A8E27B",Light:"#7DBF49",Primary:"#60A828",Dark:"#458812",Darker:"#2B6300",Black:"#384238",Link:"#991E41",LinkO:"#002900"}};cybotranik.setThemeDefault(Swatch);cybotranik.documentAppendCssArray(cybotranik.Defaults());