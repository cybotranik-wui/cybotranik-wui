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
    Primary: '#00d1b2'
    , White: '#ffffff'
    , Black: '#0a0a0a'
    , Light: '#f5f5f5'
    , Dark: '#363636'
    , Link: '#3273dc'
    , Info: '#209cee'
    , Success: '#23d160'
    , Warning: '#ffdd57'
    , Danger: '#ff3860'
  }
  , Font: {
    Family: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif'
    , Family_Print: 'SFMono- Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    , Size: 1
    , Weight: 300
    , Factor: 18
  }
  , Margin: {
    All: 1
    , Bottom: 1
    , Top: 1
    , Left: 1
    , Right: 1
  }
  , Padding: {
    All: 1
    , Bottom: 1
    , Top: 1
    , Left: 1
    , Right: 1
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
    case 'Firefox 68': result = (factor * 1.15) * value + 'px'; break
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
    this.createStyle('is="css-shema"',
      [
        /* Positioning */
        this.createProperty('Positioning', 'relative')
        , this.createProperty('top', 0)
        , this.createProperty('right', 0)
        , this.createProperty('bottom', 0)
        , this.createProperty('left', 0)
        , this.createProperty('z-index', 1)

        /* Display */
        , this.createProperty('display', 'block')
        , this.createProperty('float', 'left')
        , this.createProperty('width', "auto")
        , this.createProperty('height', "auto")

        /* Typography */
        , this.createProperty('line-height', this.Default.Line.Height)
        , this.createProperty('color', this.Default.Color.Dark)
        , this.createProperty('text-align', 'center')

        /* Theme */
        , this.createProperty('background-color', this.Default.Color.Light)
        , this.createProperty('border-left-style', 'dashed')
        , this.createProperty('border-left-width', this.compatibleSize(1))
        , this.createProperty('border-left-color', this.Default.Color.Danger)
      ]
    )

    , this.createStyle('*',
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
        this.createProperty('clear', 'both')
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

    , this.createStyle('[is="doc-page"]',
      [
        /* Positioning */
        this.createProperty('margin', this.compatibleSize(this.Default.Margin.All))
        , this.createProperty('padding', this.compatibleSize(this.Default.Padding.All))
        /* Theme */
        , this.createProperty('background-color', '#f9f9f9')
        , this.createProperty('color', '#607D8B')

      ]
    )

    , this.createStyle('[is="doc-page"] > header',
      [
        /* Typography */
        this.createProperty('text-align', 'center')

        /* Theme */
        , this.createProperty('background-color', '#efefef')
        , this.createProperty('border-bottom-style', 'solid')
        , this.createProperty('border-bottom-width', this.compatibleSize(0.1))
        , this.createProperty('border-bottom-color', this.Default.Color.Light)
      ]
    )

    , this.createStyle('[is="doc-page"] > [role="main"]',
      [
        this.createProperty('background-color', 'white')
      ]
    )

    , this.createStyle('[is="doc-example"]',
      [
        /* Positioning */
        this.createProperty('padding', this.compatibleSize(this.Default.Padding.All))

        /* Typography */
        , this.createProperty('text-align', 'left')

      ]
    )

    , this.createStyle('[is="doc-example"] > header',
      [
        /* Theme */
        this.createProperty('border-bottom-style', 'solid')
        , this.createProperty('border-bottom-width', '1px')
        , this.createProperty('border-bottom-color', '#607D8B')

      ]
    )

    , this.createStyle('[is="weather-forecast"] > header',
      [
        this.createProperty('border-left-style', 'dotted')
        , this.createProperty('border-left-width', '1px')
        , this.createProperty('border-left-color', '#607D8B')
      ]
    )

    , this.createStyle('[is="weather-day"]',
      [
        this.createProperty('border-bottom-style', 'dotted')
        , this.createProperty('border-bottom-width', '1px')
        , this.createProperty('border-bottom-color', '#607D8B')
      ]
    )

    , this.createStyle('[is="weather-day"] meter',
      [
        /* Positioning */
        this.createProperty('float', 'right')
      ]
    )

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
 * Add Default Item Array to Current Document
 */
cybotranik.documentAppendCssArray(cybotranik.Defaults())