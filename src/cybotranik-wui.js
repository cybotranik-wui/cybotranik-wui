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
  var factor = 14

  switch (this.currentBrowser()) {
  case 'MSIE 5': result = (factor * 1.05) * value + 'px'; break
  case 'MSIE 7': result = (factor * 1.05) * value + 'px'; break
  case 'MSIE 8': result = (factor * 1.05) * value + 'px'; break
  case 'MSIE 9': result = (factor * 1.05) * value + 'px'; break

    // rem compatible.
  case 'MSIE 10': result = value + 'rem'; break
  case 'MSIE 11': result = value + 'rem'; break
  case 'Chrome 76': result = value + 'rem'; break

  case 'Edge 18': result = (factor * 1.05) * value + 'px'; break
  case 'Firefox 68': result = (factor * 1.05) * value + 'px'; break

    // rem compatible default.
  default: result = value + 'rem'
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
 * Default Configuration
 * 
 * @returns {Theme} Plugin css styles
 * */
CybotranikWUI.prototype.Default = {
  Color: {
    Primary: 'black'
    , White: 'white'
    , Black: 'black'
    , Light: 'gray'
    , Dark: 'darkgrey'
    , Link: 'blue'
    , Info: 'cyan'
    , Success: 'green'
    , Warning: 'yellow'
    , Danger: 'red'
  }
  , Font: {
    Family: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif'
    , Family_Print: 'SFMono- Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    , Size: 1
    , Weight: 400
  }
  , Margin: {
    All: 0
    , Bottom: 0
    , Top: 0
    , Left: 0
    , Right: 0
  }
  , Padding: {
    All: 0
    , Bottom: 0
    , Top: 0
    , Left: 0
    , Right: 0
  }
  , Border: {
    All: 0
    , Bottom: 0
    , Top: 0
    , Left: 0
    , Right: 0
  }
  , Line: { Height: 1.5 }

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
        this.createProperty('clear', 'both')
      ]
    )

    , this.createStyle('html',
      [

      ]
    )

    , this.createStyle('body',
      [
        this.createProperty('font-family', this.Default.Font.Family)
        , this.createProperty('font-size', this.compatibleSize(this.Default.Font.Size))
        , this.createProperty('font-weight', this.Default.Font.Weight)
        , this.createProperty('line-height', this.Default.Line.Height)

        , this.createProperty('margin', 0)
        , this.createProperty('padding', 0)
        , this.createProperty('text-align', 'left')
      ]
    )

    /**
     * Content sectioning
     */
    , this.createStyle('address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,main,nav,section',
      [
        this.createProperty('display', 'block')
        , this.createProperty('margin-top', this.compatibleSize(this.Default.Margin.Top))
        , this.createProperty('margin-bottom', this.compatibleSize(this.Default.Margin.Bottom))
        , this.createProperty('margin-left', this.compatibleSize(this.Default.Margin.Left))
        , this.createProperty('margin-right', this.compatibleSize(this.Default.Margin.Right))
        , this.createProperty('padding-top', this.compatibleSize(this.Default.Padding.Top))
        , this.createProperty('padding-bottom', this.compatibleSize(this.Default.Padding.Bottom))
        , this.createProperty('padding-left', this.compatibleSize(this.Default.Padding.Left))
        , this.createProperty('padding-right', this.compatibleSize(this.Default.Padding.Right))
        , this.createProperty('border', 'solid ' + this.compatibleSize(this.Default.Border.All) + ' transparent')
      ]
    )

    /**
     * Text content
     */
    , this.createStyle('blockquote,dd,div,dl,dt,figcaption,figure,hr,li,ol,p,pre,ul',
      [
        this.createProperty('display', 'block')
        , this.createProperty('margin-top', this.compatibleSize(this.Default.Margin.Top))
        , this.createProperty('margin-bottom', this.compatibleSize(this.Default.Margin.Bottom))
        , this.createProperty('margin-left', this.compatibleSize(this.Default.Margin.Left))
        , this.createProperty('margin-right', this.compatibleSize(this.Default.Margin.Right))
        , this.createProperty('padding-top', this.compatibleSize(this.Default.Padding.Top))
        , this.createProperty('padding-bottom', this.compatibleSize(this.Default.Padding.Bottom))
        , this.createProperty('padding-left', this.compatibleSize(this.Default.Padding.Left))
        , this.createProperty('padding-right', this.compatibleSize(this.Default.Padding.Right))
      ]
    )

    /**
     * Inline text semantics
     */
    , this.createStyle('a,abbr,b,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rb,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr',
      [
        this.createProperty('display', 'inline')
        , this.createProperty('zoom', '1')
      ]
    )

    /**
     * Image and multimedia
     */
    , this.createStyle('area,audio,canvas,img,track,video',
      [
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

    /*
     * Content sectioning
     * __________________________________________________
     * */

    // address
    , this.createStyle('address',
      [

      ]
    )

    // article
    , this.createStyle('article',
      [

      ]
    )

    // aside
    , this.createStyle('aside',
      [

      ]
    )

    // footer
    , this.createStyle('footer',
      [

      ]
    )

    , this.createStyle('header',
      [

      ]
    )

    , this.createStyle('h1, h2, h3, h4, h5, h6',
      [
        this.createProperty('font-weight', 500)
      ]
    )

    , this.createStyle('h1',
      [
        this.createProperty('font-size', this.compatibleSize(2.5))
      ]
    )

    , this.createStyle('h2',
      [
        this.createProperty('font-size', this.compatibleSize(2))
      ]
    )

    , this.createStyle('h3',
      [
        this.createProperty('font-size', this.compatibleSize(1.75))
      ]
    )

    , this.createStyle('h4',
      [
        this.createProperty('font-size', this.compatibleSize(1.5))
      ]
    )

    , this.createStyle('h5',
      [
        this.createProperty('font-size', this.compatibleSize(1.25))
      ]
    )

    , this.createStyle('h6',
      [
        this.createProperty('font-size', this.compatibleSize(1))
      ]
    )

    , this.createStyle('hgroup',
      [

      ]
    )

    , this.createStyle('main',
      [

      ]
    )

    , this.createStyle('nav',
      [

      ]
    )

    , this.createStyle('section',
      [

      ]
    )

    /*
     * Text content
     * __________________________________________________
     * */


    , this.createStyle('blockquote',
      [

      ]
    )

    , this.createStyle('dd',
      [

      ]
    )

    , this.createStyle('div',
      [

      ]
    )

    , this.createStyle('dl',
      [

      ]
    )

    , this.createStyle('dt',
      [

      ]
    )

    , this.createStyle('figcaption',
      [

      ]
    )

    , this.createStyle('figure',
      [

      ]
    )

    , this.createStyle('hr',
      [

      ]
    )

    , this.createStyle('li',
      [

      ]
    )

    , this.createStyle('[role="menuitem"]',
      [
        this.createProperty('display', 'inline')
        , this.createProperty('padding-top', this.compatibleSize(0.25))
        , this.createProperty('padding-bottom', this.compatibleSize(0.25))
        , this.createProperty('padding-left', this.compatibleSize(0.5))
        , this.createProperty('padding-right', this.compatibleSize(0.5))
      ]
    )

    , this.createStyle('[role="menu"]',
      [
        this.createProperty('display', 'block')
      ]
    )

    , this.createStyle('ol',
      [

      ]
    )

    , this.createStyle('p',
      [
        this.createProperty('font-size', this.compatibleSize(1.25))
        , this.createProperty('font-weight', 300)
      ]
    )

    , this.createStyle('pre',
      [
        this.createProperty('white-space', 'pre-line')
      ]
    )

    , this.createStyle('ul',
      [

      ]
    )

    /*
    * Inline text semantics
    * __________________________________________________
    * */
    , this.createStyle('a',
      [
        this.createProperty('text-decoration', 'none')
      ]
    )

    , this.createStyle('abbr',
      [

      ]
    )

    , this.createStyle('b',
      [

      ]
    )

    , this.createStyle('bdi',
      [

      ]
    )

    , this.createStyle('bdo',
      [

      ]
    )

    , this.createStyle('br',
      [

      ]
    )

    , this.createStyle('cite',
      [

      ]
    )

    , this.createStyle('code',
      [

      ]
    )

    , this.createStyle('data',
      [

      ]
    )

    , this.createStyle('dfn',
      [

      ]
    )

    , this.createStyle('em',
      [

      ]
    )

    , this.createStyle('i',
      [

      ]
    )

    , this.createStyle('kbd',
      [

      ]
    )

    , this.createStyle('mark',
      [

      ]
    )

    , this.createStyle('mark',
      [

      ]
    )

    , this.createStyle('q',
      [

      ]
    )

    , this.createStyle('rb',
      [

      ]
    )

    , this.createStyle('rp',
      [

      ]
    )

    , this.createStyle('rt',
      [

      ]
    )

    , this.createStyle('rtc',
      [

      ]
    )

    , this.createStyle('ruby',
      [

      ]
    )

    , this.createStyle('s',
      [

      ]
    )

    , this.createStyle('samp',
      [

      ]
    )

    , this.createStyle('small',
      [

      ]
    )

    , this.createStyle('span',
      [

      ]
    )

    , this.createStyle('strong',
      [

      ]
    )

    , this.createStyle('sub',
      [

      ]
    )

    , this.createStyle('sup',
      [

      ]
    )

    , this.createStyle('time',
      [

      ]
    )

    , this.createStyle('u',
      [

      ]
    )

    , this.createStyle('var',
      [

      ]
    )

    , this.createStyle('wbr',
      [

      ]
    )

    /*
    * Image and multimedia
    * __________________________________________________
    * */

    , this.createStyle('area',
      [

      ]
    )

    , this.createStyle('audio',
      [

      ]
    )

    , this.createStyle('img',
      [

      ]
    )

    , this.createStyle('track',
      [

      ]
    )

    // video
    , this.createStyle('video',
      [

      ]
    )

    /*
    * Embedded content
    * __________________________________________________
    * */

    , this.createStyle('embed',
      [

      ]
    )

    , this.createStyle('iframe',
      [

      ]
    )

    /*
    * Demarcating edits
    * __________________________________________________
    * */
    , this.createStyle('del',
      [

      ]
    )

    , this.createStyle('ins',
      [

      ]
    )

    /*
    * Table content
    * __________________________________________________
    * */
    , this.createStyle('caption',
      [

      ]
    )

    , this.createStyle('col',
      [

      ]
    )

    , this.createStyle('colgroup',
      [

      ]
    )

    , this.createStyle('table',
      [

      ]
    )

    , this.createStyle('tbody',
      [

      ]
    )

    , this.createStyle('td',
      [

      ]
    )

    , this.createStyle('tfoot',
      [

      ]
    )

    , this.createStyle('th',
      [

      ]
    )

    , this.createStyle('thead',
      [

      ]
    )

    , this.createStyle('tr',
      [

      ]
    )

    /*
    * Forms
    * __________________________________________________
    * */
    , this.createStyle('button',
      [

      ]
    )

    , this.createStyle('datalist',
      [

      ]
    )

    , this.createStyle('form',
      [

      ]
    )

    , this.createStyle('input',
      [

      ]
    )

    , this.createStyle('label',
      [

      ]
    )

    , this.createStyle('legend',
      [

      ]
    )

    , this.createStyle('meter',
      [

      ]
    )

    , this.createStyle('optgroup',
      [

      ]
    )

    , this.createStyle('option',
      [

      ]
    )

    , this.createStyle('output',
      [

      ]
    )

    , this.createStyle('progress',
      [

      ]
    )

    , this.createStyle('select',
      [

      ]
    )

    , this.createStyle('textarea',
      [

      ]
    )

    /*
    * Interactive elements
    * __________________________________________________
    * */
    , this.createStyle('details',
      [
        this.createProperty('cursor', 'pointer')

      ]
    )

    , this.createStyle('dialog',
      [

      ]
    )

    , this.createStyle('summary',
      [

      ]
    )

    /*
    * Web Components
    * __________________________________________________
    * */

    , this.createStyle('shadow',
      [

      ]
    )

    , this.createStyle('template',
      [

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