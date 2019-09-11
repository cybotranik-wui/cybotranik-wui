/* eslint-disable indent */
/**
 * Cybotranik WUI
 *
 * Website html User Interface.
 *
 * @author Azmi SAHIN
 * @since 2019
 * */
function CybotranikWUI() { }

/**
 * Default Configuration
 * 
 * @returns {Theme} Plugin css styles
 * */
CybotranikWUI.prototype.Default = {
  Color: {
    /**
     * Default White ( Foreground ) Ratio 8:1
     * https://webaim.org/resources/contrastchecker/
     */
    White: 'white'

    /* 
     * Lighter ( Background ) Ratio 8:1
     * https://webaim.org/resources/contrastchecker/ 
     * Swatch1 
     */
    , Lighter: '#B2E2B1'

    /**
     * Light
     * <---
     * Swatch2
     */
    , Light: '#B0E1AD'

    /**
     * Primary
     *      -
     * Swatch0
     */
    , Primary: '#8FD38B'

    /**
     * Dark
     *            --->
     * Swatch3
     */
    , Dark: '#6CBF67'

    /* 
     * Darker ( Foreground ) Ratio 8:1
     * https://webaim.org/resources/contrastchecker/  
     * Swatch4
     */
    , Darker: '#1C401C'

    /**
     * Default Black ( Background ) Ratio 8:1
     * https://webaim.org/resources/contrastchecker/
     */
    , Black: '#384238'

    /**
     * Link Contrast Checker
     * https://www.w3.org/TR/WCAG/#contrast-minimum
     * https://webaim.org/resources/linkcontrastchecker/?fcolor=000000&bcolor=FFFFFF&lcolor=2F6F2F
     */
    , Link: '#991E41'
    , LinkO: '#002900'
    , Code : 'purple'

    /** */
    , Info: '#000000'
    , Success: '#000000'
    , Warning: '#000000'
    , Danger: '#000000'
  }
  , Font: {
    Family: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif'
    , Family_Print: 'SFMono- Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    , Size: 1
    , Weight: 300
    , Factor: 18
  }
  , Margin: {
    All: 0.5
    , Bottom: 0.5
    , Top: 0.5
    , Left: 0.5
    , Right: 0.5
  }
  , Padding: {
    All: 0.5
    , Bottom: 0.5
    , Top: 0.5
    , Left: 0.5
    , Right: 0.5
  }
  , Border: {
    All: 0.2
    , Bottom: 0.2
    , Top: 0.2
    , Left: 0.2
    , Right: 0.2
  }
  , Line: { Height: 1.6 }

}

/**
 * Theme Configuration
 */
CybotranikWUI.prototype.setThemeDefault = function (configuration) {
  this.Default.Color = configuration.Color
}

/**
 * Navigator Compatibility Frendly Name and Version
 * 
 * @returns {string} Navigator Name and Version
 */
CybotranikWUI.prototype.currentBrowser = function () {

  var userAgent =
    navigator.userAgent
    , compatibility
    , userAgentMatch = userAgent
      .match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []

  // IE Test
  if (/trident/i.test(userAgentMatch[1])) {

    // Compatibility
    compatibility = /\brv[ :]+(\d+)/g.exec(userAgent) || []

    // Compatibility Short Name
    return 'IE ' + (compatibility[1] || '')
  }

  // Chrome Test
  if (userAgentMatch[1] === 'Chrome') {

    // Compatibility
    compatibility = userAgent.match(/\b(OPR|Edge?)\/(\d+)/)

    if (compatibility !== null)
      return compatibility
        .slice(1).join(' ')
        .replace('OPR', 'Opera')
        .replace('Edg ', 'Edge ')
  }

  // Compatibility Short Name
  userAgentMatch = userAgentMatch[2] ? [userAgentMatch[1]
    , userAgentMatch[2]] : [navigator.appName, navigator.appVersion, '-?']

  // Finaly
  if ((compatibility = userAgent.match(/version\/(\d+)/i)) != null)
    userAgentMatch.splice(1, 1, compatibility[1])

  // Return
  return userAgentMatch.join(' ')

}
/**
 * Document Information
 */
CybotranikWUI.prototype.currentDocument = function () {

  var result = {
    Width: document.body.clientWidth
  }

  return result
}

/**
 * CSS Property string generate syntax
 * 
 * @param {string} property Element Property
 * @param {string} value Element Value
 * @returns {string} String Proeprty
 */
CybotranikWUI.prototype.createProperty = function (property, value) {

  return property + ' : ' + value
}

/**
 * CSS style block generate syntax
 * 
 * @param {string} selector Selector name
 * @param {array} args Element Array
 * @param {float} value Element value
 * @returns {string} Style Syntax
 */
CybotranikWUI.prototype.createStyle = function (selector, args) {

  // No added blank property
  if (args.length === 0) return ''

  var syntaxs = selector + '{'

  for (var i = 0; i < args.length; i++) {
    var arg = args[i]
    syntaxs += arg + ';'
  }

  syntaxs += '}'

  return syntaxs
}

/**
 * by default it will be at the bottom of the title.
 * Append string css syntax
 *  
 * @param {string} syntax css syntax
 */
CybotranikWUI.prototype.documentAppendCss = function (syntax) {

  var element = document.createElement('style')
  element.setAttribute('type', 'text/css')
  element.id = 'cybotranik-wui'

  switch (this.currentBrowser()) {
    // Old Property
    case 'MSIE 5': element.styleSheet.cssText = syntax; break
    case 'MSIE 7': element.styleSheet.cssText = syntax; break
    case 'MSIE 8': element.styleSheet.cssText = syntax; break

    // New Property
    case 'MSIE 9': element.innerText = syntax; break
    case 'MSIE 10': element.innerText = syntax; break
    case 'IE 11': element.innerText = syntax; break
    case 'Chrome 76': element.innerText = syntax; break
    case 'Edge 18': element.innerText = syntax; break
    case 'Firefox 68': element.innerText = syntax; break
    default: element.innerText = syntax
  }

  // removing previous element. Performance problem.
  document.getElementById(element.id) === null ? 'First loading' : document.getElementById(element.id).remove()

  // by default it will be at the bottom of the title.
  document.getElementsByTagName('head')[0].appendChild(element)
}

/**
 * Inserts the current syntax array into the css document.
 */
CybotranikWUI.prototype.documentAppendCssArray = function (array) {

  var syntaxs = ''
  // syntaxs builder
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== '')
      syntaxs += array[i]
  }

  this.documentAppendCss(syntaxs)
}

/**
 * Rem value to Rem Value 
 * If old navigator return pixel value
 * @param {float} value Size
 * @returns {float} Compatible Size
 */
CybotranikWUI.prototype.compatibleSize = function (value) {

  var result = value
  var factor = this.Default.Font.Factor

  switch (this.currentBrowser()) {
    case 'MSIE 5': result = (factor * 1.15) * value + 'px'; break
    case 'MSIE 7': result = (factor * 1.110) * value + 'px'; break
    case 'MSIE 8': result = (factor * 1) * value + 'px'; break
    case 'MSIE 9': result = (factor * 1) * value + 'px'; break
    case 'Edge 18': result = (factor * 1.10) * value + 'px'; break
    case 'Firefox 68': result = (factor * 1.03) * value + 'px'; break
    // rem compatible.
    // case 'MSIE 10': result = value + 'rem'; break
    // case 'MSIE 11': result = value + 'rem'; break
    // case 'Chrome 76': result = value + 'rem'; brea

    // rem compatible default.
    // default: result = value + 'rem'
    // px compatible default.
    default: result = (factor * 1) * value + 'px'
  }

  return result
}

/**
 * HTML 5 element, html element and custom element tags
 * 
 */
CybotranikWUI.prototype.HtmlElements = {


  // Sections
  sections: 'body,article,section,nav,aside,hgroup,h1,h2,h3,h4,h5,h6,header,footer'

  // Grouping Content
  , groupingContent: 'p,address,hr,pre,blockquote,ol,ul,li,dl,dt,dd,figure,figcaption,main,div'

  // Text Level Semantics
  , textLevelSemantics: 'a,em,strong,small,s,cite,q,dfn,abbr,ruby,rb,rt,rtc,rp,data,time,code,var,samp,kbd,sub,sup,i,b,u,mark,bdi,bdo,span,br,wbr'

  // Edits
  , edits: 'ins,del'

  // Embedded content
  , embeddedContent: 'picture,source,img,iframe,embed,object,param,video,audio,track'

  // Media Elements
  , mediaElements: 'map,area'

  // Tabular Data
  , tabularData: 'table,caption,colgroup,col,tbody,thead,tfoot,tr,td,th'

  // Forms
  , forms: 'form,label,input,button,select,datalist,optgroup,option,textarea,output,progress,meter,fieldset,legend'

  // Interactive elements
  , interactiveElements: 'details,summary,dialog'

  // Web Components
  , webComponents: 'accordion,alert,animation,background,badge,breadcrumb,card,comment,counter,cover,collapse,dropdown,feed,list,lightbox,marker,modal,navbar,notification,page,pop,segment,slider,slideshow,spinner,tab'
}

/**
 * Document Add current HTML Elements array
 */
CybotranikWUI.prototype.createElementArray = function () {

  var dictionary = ''
  var el = Object.keys(this.HtmlElements)

  for (var i = 0; i < el.length; i++) {

    var key = el[i]
    var val = this.HtmlElements[key]

    if (i === 0) {
      dictionary += val
    } else {
      dictionary += ',' + val
    }
  }

  var array = dictionary.split(',')

  for (var index = 0; index < array.length; index++) {
    var element = array[index]
    document.createElement(element)
  }
}

/**
 * Onload Event and Start
 */
CybotranikWUI.prototype.start = function () {
  var self = this
  window.onload = function () {
    /**
     * Add Default Item Array to Current Document
     */
    self.documentAppendCssArray(cybotranik.Defaults())
  }

  window.onresize = function () {
    /**
     * Add Default Item Array to Current Document
     */
    self.documentAppendCssArray(cybotranik.Defaults())
  }
}
/**
 * Default Style Syntax Array
 * @returns {array} All css styles
 * */
CybotranikWUI.prototype.Defaults = function () {

  return [

    this.createStyle('*',
      [
        /* Positioning */
        this.createProperty('margin-top', this.compatibleSize(0))
        , this.createProperty('margin-bottom', this.compatibleSize(0))
        // , this.createProperty('margin-left', this.compatibleSize(0))
        // , this.createProperty('margin-right', this.compatibleSize(0))
        , this.createProperty('padding-top', this.compatibleSize(0))
        , this.createProperty('padding-bottom', this.compatibleSize(0))
        // , this.createProperty('padding-left', this.compatibleSize(0))
        // , this.createProperty('padding-right', this.compatibleSize(0))

        // this.createProperty('zoom', 1)
        /* Theme */
        , this.createProperty('border', 'solid ' + this.compatibleSize(0.001) + ' transparent')

      ]
    )

    /**
     * Section
     */
    , this.createStyle(this.HtmlElements.sections,
      [
      ]
    )

    /**
     * Grouping Content
     */
    , this.createStyle(this.HtmlElements.groupingContent,
      [
      ]
    )

    /**
     * Text Level Semantics
     */
    , this.createStyle(this.HtmlElements.textLevelSemantics,
      [
        /* Display */
        this.createProperty('display', 'inline')
        , this.createProperty('zoom', '1')
      ]
    )

    /**
     * Edits
     */
    , this.createStyle(this.HtmlElements.edits,
      [
        /* Display */
        this.createProperty('display', 'inline-block')
      ]
    )

    /**
     * Embedded content
     */
    , this.createStyle(this.HtmlElements.embeddedContent,
      [

      ]
    )

    /**
     * Media Elements
     */
    , this.createStyle(this.HtmlElements.mediaElements,
      [
        /* Display */
        this.createProperty('display', 'inline-block')
      ]
    )

    /**
     * Tabular Data
     */
    , this.createStyle(this.HtmlElements.tabularData,
      [

      ]
    )

    /**
     * Forms
     */
    , this.createStyle(this.HtmlElements.forms,
      [

      ]
    )

    /**
     * Interactive Elements
     */
    , this.createStyle(this.HtmlElements.interactiveElements,
      [

      ]
    )

    /**
     * Web Components
     */
    , this.createStyle(this.HtmlElements.webComponents,
      [

      ]
    )

    , this.createStyle('*, ::after, ::before',
      [
        // this.createProperty('box-sizing', 'border-box')
      ]
    )

    , this.createStyle('*, ::after',
      [
        // this.createProperty('clear', 'both')
      ]
    )

    , this.createStyle('html',
      [

      ]
    )

    // container, row, width, height, margin, padding, align
    , this.createStyle('.container', [
      this.createProperty('width', '100%')
      , this.createProperty('margin-right', 'auto')
      , this.createProperty('margin-left', 'auto')
    ])

    , this.createStyle('.row', [this.createProperty('width', '100%')])

    , this.createStyle('.width-10', [this.createProperty('width', '10%')])
    , this.createStyle('.width-20', [this.createProperty('width', '20%')])
    , this.createStyle('.width-30', [this.createProperty('width', '30%')])
    , this.createStyle('.width-40', [this.createProperty('width', '40%')])
    , this.createStyle('.width-50', [this.createProperty('width', '50%')])
    , this.createStyle('.width-60', [this.createProperty('width', '60%')])
    , this.createStyle('.width-70', [this.createProperty('width', '70%')])
    , this.createStyle('.width-80', [this.createProperty('width', '80%')])
    , this.createStyle('.width-90', [this.createProperty('width', '90%')])
    , this.createStyle('.width-100', [this.createProperty('width', '100%')])
    , this.createStyle('.width-10, .width-20, .width-30, .width-40, .width-50, .width-60, .width-70, .width-80, .width-90, .width-100', [this.createProperty('float', 'left')])

    , this.createStyle('.width-80', [
      this.currentDocument().Width < 1000 ? this.createProperty('width', '100%') : this.createProperty('display', 'block')
    ])

    , this.createStyle('.height-50', [this.createProperty('max-height', '50px')])
    , this.createStyle('.height-100', [this.createProperty('max-height', '100px')])
    , this.createStyle('.height-150', [this.createProperty('max-height', '150px')])
    , this.createStyle('.height-200', [this.createProperty('max-height', '200px')])
    , this.createStyle('.height-250', [this.createProperty('max-height', '250px')])
    , this.createStyle('.height-300', [this.createProperty('max-height', '300px')])
    , this.createStyle('.height-350', [this.createProperty('max-height', '350px')])
    , this.createStyle('.height-400', [this.createProperty('max-height', '400px')])
    , this.createStyle('.height-450', [this.createProperty('max-height', '450px')])
    , this.createStyle('.height-500', [this.createProperty('max-height', '500px')])

    , this.createStyle('.margin-1', [this.createProperty('margin', '1%')])
    , this.createStyle('.margin-2', [this.createProperty('margin', '2%')])
    , this.createStyle('.margin-3', [this.createProperty('margin', '3%')])
    , this.createStyle('.margin-4', [this.createProperty('margin', '4%')])
    , this.createStyle('.margin-5', [this.createProperty('margin', '5%')])
    , this.createStyle('.margin-6', [this.createProperty('margin', '6%')])
    , this.createStyle('.margin-7', [this.createProperty('margin', '7%')])
    , this.createStyle('.margin-8', [this.createProperty('margin', '8%')])
    , this.createStyle('.margin-9', [this.createProperty('margin', '9%')])
    , this.createStyle('.margin-10', [this.createProperty('margin', '10%')])

    , this.createStyle('.padding-1', [this.createProperty('padding', '1%')])
    , this.createStyle('.padding-2', [this.createProperty('padding', '2%')])
    , this.createStyle('.padding-3', [this.createProperty('padding', '3%')])
    , this.createStyle('.padding-4', [this.createProperty('padding', '4%')])
    , this.createStyle('.padding-5', [this.createProperty('padding', '5%')])
    , this.createStyle('.padding-6', [this.createProperty('padding', '6%')])
    , this.createStyle('.padding-7', [this.createProperty('padding', '7%')])
    , this.createStyle('.padding-8', [this.createProperty('padding', '8%')])
    , this.createStyle('.padding-9', [this.createProperty('padding', '9%')])
    , this.createStyle('.padding-10', [this.createProperty('padding', '10%')])

    , this.createStyle('.align-center', [this.createProperty('text-align', 'center')])
    , this.createStyle('.align-left', [this.createProperty('text-align', 'left')])
    , this.createStyle('.align-right', [this.createProperty('text-align', 'right')])
    , this.createStyle('.align-justify', [this.createProperty('text-align', 'justify')])

    // Sections 'body,article,section,nav,aside,hgroup,h1,h2,h3,h4,h5,h6,header,footer'

    , this.createStyle('body',
      [
        /* Positioning */
        this.createProperty('margin', 0)
        , this.createProperty('padding', 0)

        /* Display */
        , this.createProperty('text-align', 'left')

        /* Typography */
        , this.createProperty('font-family', this.Default.Font.Family)
        , this.createProperty('font-size', this.compatibleSize(this.Default.Font.Size))
        , this.createProperty('font-weight', this.Default.Font.Weight)
        , this.createProperty('line-height', this.Default.Line.Height)

        /* Theme */
        , this.createProperty('background-color', this.Default.Color.White)
        , this.createProperty('color', this.Default.Color.Black)

      ]
    )

    , this.createStyle('aside',
      [
        this.createProperty('box-shadow', 'inset 10px 0 5px -5px' + this.Default.Color.Lighter)
        , this.createProperty('padding-left', this.compatibleSize(this.Default.Padding.Left))
        , this.createProperty('margin-left', this.compatibleSize(this.Default.Margin.Left))
        , this.createProperty('border-left-style', 'inset')
        , this.createProperty('border-left-width', '1px')
        , this.createProperty('border-left-color', this.Default.Color.Lighter)
        , this.createProperty('font-style', 'italic')
        , this.createProperty('color', this.Default.Color.Darker)
      ]
    )

    // Grouping Content 'p,address,hr,pre,blockquote,ol,ul,li,dl,dt,dd,figure,figcaption,main,div'
    , this.createStyle('p',
      [
        /* Positioning */
        this.createProperty('margin', this.compatibleSize(this.Default.Margin.All))
      ]
    )

    // Text Level Semantics 'a,em,strong,small,s,cite,q,dfn,abbr,ruby,rb,rt,rtc,rp,data,time,code,var,samp,kbd,sub,sup,i,b,u,mark,bdi,bdo,span,br,wbr'
    , this.createStyle('a',
      [
        /* Typography */
        this.createProperty('text-decoration', 'none')
        /* Theme */
        , this.createProperty('color', this.Default.Color.Link)
      ]
    )

    , this.createStyle('code',
      [
        this.createProperty('color', this.Default.Color.Code)
      ]
    )

    , this.createStyle('[is="html-tag"]:before',
      [
        this.createProperty('content', '"<"')
      ]
    )

    , this.createStyle('[is="html-tag"]:after',
      [
        this.createProperty('content', '">"')
      ]
    )

    // Edits 'ins,del'

    // Embedded content 'picture,source,img,iframe,embed,object,param,video,audio,track'
    , this.createStyle('img', [this.createProperty('width', '100%')])

    // Media Elements 'map,area'

    // Tabular Data 'table,caption,colgroup,col,tbody,thead,tfoot,tr,td,th'

    // Forms 'form,label,input,button,select,datalist,optgroup,option,textarea,output,progress,meter,fieldset,legend'

    // Interactive elements  'details,summary,dialog'

    // Web Components 'accordion,alert,animation,background,badge,breadcrumb,card,comment,counter,cover,collapse,dropdown,feed,list,lightbox,marker,modal,navbar,notification,page,pop,segment,slider,slideshow,spinner,tab'

    , this.createStyle('[is="article-page"]',
      [
        this.createProperty('background-color', this.Default.Color.Lighter)
      ]
    )

    , this.createStyle('[is="article-page"] > [is="article-header"]',
      [
        this.createProperty('text-align', 'center')
      ]
    )

    , this.createStyle('[is="article-page"] > [is="article-section"]',
      [
        this.createProperty('padding', this.compatibleSize(this.Default.Padding.All))
        , this.createProperty('margin', this.compatibleSize(this.Default.Margin.All))
        , this.createProperty('background-color', this.Default.Color.White)
      ]
    )

    , this.createStyle('[is="article-section"]',
      [
        this.createProperty('background-color', this.Default.Color.White)
      ]
    )

    , this.createStyle('[is="article-app"]',
      [
        this.createProperty('border-style', 'dotted')
        , this.createProperty('border-width', '2px')
        , this.createProperty('border-color', this.Default.Color.Lighter)
      ]
    )

    , this.createStyle('[is="weather-forecast"] [is="article-section"]',
      [
        this.createProperty('border-bottom-style', 'dotted')
        , this.createProperty('border-bottom-width', '1px')
        , this.createProperty('border-bottom-color', this.Default.Color.Darker)
      ]
    )

    , this.createStyle('[is="weather-forecast"] [is="article-section"] meter',
      [
        this.createProperty('float', 'right')
      ]
    )

    , this.createStyle('[is="aside-box"]',
      [
        this.createProperty('width', '40%')
        , this.createProperty('float', 'right')
      ]
    )

    , this.createStyle('[is="aside-nav"]', [
      this.createProperty('color', this.Default.Color.Dark)
    ])

    , this.createStyle('[is="aside-nav"] a', [
      this.createProperty('color', this.Default.Color.LinkO)
    ])

    , this.createStyle('[is="aside-nav"] ul', [
      this.createProperty('list-style-type', 'disc')
    ])

    , this.createStyle('[is="aside-nav"] li', [
      this.createProperty('margin-left', this.compatibleSize(this.Default.Margin.Left))

    ])

    , this.createStyle('[is="header-group"]', [
      this.createProperty('text-align', 'right')

    ])

    , this.createStyle('[is="header-nav"]', [

    ])

    , this.createStyle('[is="horizontal-menu"]', [
      this.createProperty('list-style', 'none')
      , this.createProperty('display', 'inline-block')
      , this.createProperty('position', 'relative')
      , this.createProperty('padding-left', 0)
    ])

    , this.createStyle('[is="horizontal-menu"] > li', [
      this.createProperty('float', 'left')
    ])

    , this.createStyle('[is="horizontal-menu"] > li > a', [
      this.createProperty('padding', this.compatibleSize(this.Default.Padding.All))
    ])

    , this.createStyle('nav > ul > li > a:hover', [
      this.createProperty('border-bottom-color', this.Default.Color.Link)
      , this.createProperty('border-bottom-style', 'solid')
      , this.createProperty('border-bottom-width', '1px')
      , this.createProperty('color', this.Default.Color.Darker)
    ])

    , this.createStyle('.aside-toogle', [
      this.currentDocument().Width < 1000 ? this.createProperty('display', 'none') : this.createProperty('display', 'block')
    ])
  ]
}

/**
 * Initalize Cybotranik WUI
 */
var cybotranik = new CybotranikWUI()

/**
 * Add HTML tag Array to Current Document
 */
cybotranik.createElementArray()

/**
 * Color Swatch
 * 
 * https://www.w3.org/TR/WCAG/#contrast-minimum
 * https://webaim.org/resources/contrastchecker/
 */
var Swatch = {
  Color: {
    White: 'white'
    , Lighter: '#A8E27B'
    , Light: '#7DBF49'
    , Primary: '#60A828'
    , Dark: '#458812'
    , Darker: '#2B6300'
    , Black: '#384238'
    , Link: '#991E41'
    , LinkO: '#002900'
    , Code: 'purple'
  }
}

/**
 * Purple Theme Configuration
 */
cybotranik.setThemeDefault(Swatch)

/**
 * Cybotranik Loading
 */
cybotranik.start()