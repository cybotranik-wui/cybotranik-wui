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
CybotranikWUI.prototype.HtmlElements = ''

  // Content sectioning
  + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,main,nav,section'

  // Text content
  + ',blockquote,dd,div,dl,dt,figcaption,figure,hr,li,ol,p,pre,ul'

  // Inline text semantics
  + ',a,abbr,b,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rb,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr'

  // Image and multimedia
  + ',area,audio,img,track,video'

  // Embedded content
  + ',embed,iframe,noembed,object,param,picture,source'

  // Demarcating edits
  + ',del,ins'

  // Table content
  + ',caption,col,colgroup,table,tbody,td,tfoot,th,thead,tr'

  // Forms
  + ',button,datalist,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea'

  // Interactive elements
  + ',details,dialog,summary'

  // Web Components
  + ',shadow,template'

/**
 * Document Add current HTML Elements array
 */
CybotranikWUI.prototype.createElementArray = function () {

  var array = this.HtmlElements.split(',')

  for (var index = 0; index < array.length; index++) {
    var element = array[index]
    document.createElement(element)
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
        this.createProperty('zoom', 1)
      ]
    )

    , this.createStyle('*, ::after, ::before',
      [
        this.createProperty('box-sizing', 'border-box')
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

    /**
     * Content sectioning
     */
    , this.createStyle('address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,main,nav,section',
      [
        /* Positioning */
        this.createProperty('margin-top', this.compatibleSize(0))
        , this.createProperty('margin-bottom', this.compatibleSize(0))
        , this.createProperty('margin-left', this.compatibleSize(0))
        , this.createProperty('margin-right', this.compatibleSize(0))
        , this.createProperty('padding-top', this.compatibleSize(0))
        , this.createProperty('padding-bottom', this.compatibleSize(0))
        , this.createProperty('padding-left', this.compatibleSize(0))
        , this.createProperty('padding-right', this.compatibleSize(0))

        /* Display */
        , this.createProperty('display', 'block')

        /* Theme */
        , this.createProperty('border', 'solid ' + this.compatibleSize(this.Default.Border.All) + ' transparent')
      ]
    )

    /**
     * Text content
     */
    , this.createStyle('blockquote,dd,div,dl,dt,figcaption,figure,hr,li,ol,p,pre,ul',
      [
        /* Positioning */
        this.createProperty('margin-top', this.compatibleSize(0))
        , this.createProperty('margin-bottom', this.compatibleSize(0))
        , this.createProperty('margin-left', this.compatibleSize(0))
        , this.createProperty('margin-right', this.compatibleSize(0))
        , this.createProperty('padding-top', this.compatibleSize(0))
        , this.createProperty('padding-bottom', this.compatibleSize(0))
        , this.createProperty('padding-left', this.compatibleSize(0))
        , this.createProperty('padding-right', this.compatibleSize(0))

        /* Display */
        , this.createProperty('display', 'block')
      ]
    )

    /**
     * Inline text semantics
     */
    , this.createStyle('a,abbr,b,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rb,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr',
      [
        /* Display */
        this.createProperty('display', 'inline')
        , this.createProperty('zoom', '1')
      ]
    )

    /**
     * Image and multimedia
     */
    , this.createStyle('area,audio,canvas,img,track,video',
      [
        /* Display */
        this.createProperty('display', 'inline-block')
      ]
    )

    /**
     * Embedded content
     */
    , this.createStyle('embed,iframe,noembed,object,param,picture,source',
      [

      ]
    )

    /**
     * Demarcating edits
     */
    , this.createStyle('del,ins',
      [

      ]
    )

    /**
     * Table content
     */
    , this.createStyle('caption,col,colgroup,table,tbody,td,tfoot,th,thead,tr',
      [

      ]
    )

    /**
     * Forms
     */
    , this.createStyle('button,datalist,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea',
      [

      ]
    )

    /**
     * Interactive elements
     */
    , this.createStyle('details,dialog,summary',
      [

      ]
    )

    /**
     * Web Components
     */
    , this.createStyle('shadow,template',
      [

      ]
    )

    , this.createStyle('a',
      [
        /* Typography */
        this.createProperty('text-decoration', 'none')
        /* Theme */
        , this.createProperty('color', this.Default.Color.Link)
      ]
    )
    , this.createStyle('[is="article-page"]',
      [
        /* Theme */
        this.createProperty('background-color', this.Default.Color.Lighter)
      ]
    )
    , this.createStyle('[is="article-page"] > [is="article-header"]',
      [
        /*  */
        this.createProperty('text-align', 'center')

      ]
    )
    , this.createStyle('[is="article-page"] > [is="article-section"]',
      [
        /* Positioning */
        this.createProperty('padding', this.compatibleSize(this.Default.Padding.All))
        , this.createProperty('margin', this.compatibleSize(this.Default.Margin.All))
        /* Theme */
        , this.createProperty('background-color', this.Default.Color.White)
      ]
    )

    , this.createStyle('[is="article-section"]',
      [
        /* Theme */
        this.createProperty('background-color', this.Default.Color.White)
      ]
    )

    , this.createStyle('[is="article-app"]',
      [
        /* Theme */
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
        /* Positioning */
        this.createProperty('float', 'right')
      ]
    )

    , this.createStyle('[is="aside-box"]',
      [
        /* Positioning */
        this.createProperty('width', '40%')
        , this.createProperty('float', 'right')
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
    , this.createStyle('aside > p',
      [
        /* Positioning */
        this.createProperty('margin', this.compatibleSize(this.Default.Margin.All))
      ]
    )

    , this.createStyle('.container', [
      this.createProperty('width', '100%')
      , this.createProperty('margin-right', 'auto')
      , this.createProperty('margin-left', 'auto')
    ])
    , this.createStyle('.row', [this.createProperty('width', '100%')])
    , this.createStyle('.col-1', [this.createProperty('width', '10%')])
    , this.createStyle('.col-2', [this.createProperty('width', '20%')])
    , this.createStyle('.col-3', [this.createProperty('width', '30%')])
    , this.createStyle('.col-4', [this.createProperty('width', '40%')])
    , this.createStyle('.col-5', [this.createProperty('width', '50%')])
    , this.createStyle('.col-6', [this.createProperty('width', '60%')])
    , this.createStyle('.col-7', [this.createProperty('width', '70%')])
    , this.createStyle('.col-8', [this.createProperty('width', '80%')])
    , this.createStyle('.col-9', [this.createProperty('width', '90%')])
    , this.createStyle('.col-10', [this.createProperty('width', '100%')])
    , this.createStyle('.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10', [this.createProperty('float', 'left')])
    , this.createStyle('img', [this.createProperty('width', '100%')])
    , this.createStyle('body', [
      this.createProperty('background-color', this.Default.Color.Light)
    ])

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
  }
}

/**
 * Purple Theme Configuration
 */
cybotranik.setThemeDefault(Swatch)


/**
 * Add Default Item Array to Current Document
 */
cybotranik.documentAppendCssArray(cybotranik.Defaults())