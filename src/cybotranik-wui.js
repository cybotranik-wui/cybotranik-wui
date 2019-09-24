/**
 * @package CybotranikWUI
 * @abstract Website html User Interface.
 * @since 2019
 * @author Azmi SAHIN
 * @copyright azmisahin.com
 * @license https://github.com/cybotranik-wui/cybotranik-wui/blob/master/LICENSE
 * */
function CybotranikWUI() { }

/**
 * Default Configuration
 * 
 * @returns {Theme} Plugin css styles
 * */
CybotranikWUI.prototype.Default = {
  /**
   * It should comply with accessibility standards when determining color.
   * https://www.w3.org/TR/WCAG/#contrast-minimum
   * https://webaim.org/resources/linkcontrastchecker
   * https://webaim.org/resources/contrastchecker/
   */
  Color: {
    Background: '#f1f1f1'
    , Foregound: '#3a3838'
    , Link: '#03a9f4'
    , Border: '#03a9f4'
    , Shadow: '#03a9f4'
    , Mark: '#ffeb3b'
    , Code: '#ff5722'
    , Page: '#ffffff'
    , Menu: '#02567E'
    , Document: '#f7f3f3'
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
 * @param {string} configuration Theme Configuration
 */
CybotranikWUI.prototype.Theme = function (configuration) {

  this.Default = Object.merge(this.Default, configuration)

  this.documentAppendCssArray('theme', wui.DefaultTheme())
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
 * by default it will be at the bottom of the title.
 * Append string css syntax
 *
 * @param {string} syntax type style name
 * @param {string} syntax css syntax
 */
CybotranikWUI.prototype.documentAppendCss = function (type, syntax) {

  var element = document.createElement('style')
  element.setAttribute('type', 'text/css')
  element.id = 'cybotranik-wui-' + type

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
  if (document.getElementById(element.id) === null) {
    'First loading'
  } else {
    var e = document.getElementById(element.id)
    e.parentNode.removeChild(e)
  }

  // by default it will be at the bottom of the title.
  document.getElementsByTagName('head')[0].appendChild(element)
}

/**
 * Inserts the current syntax array into the css document.
 */
CybotranikWUI.prototype.documentAppendCssArray = function (type, array) {

  var syntaxs = ''

  for (var x = 0; x < array.length; x++) {
    var item = array[x]
    var selectors = Object.keys(item)
    var css = ''
    for (var s = 0; s < selectors.length; s++) {
      var key = selectors[s]
      var property = item[key]

      css += key + '{'
      var properties = Object.keys(property)
      for (var p = 0; p < properties.length; p++) {

        var pKey = properties[p]
        var pVal = property[pKey]
        css += pKey + ':' + pVal + ';'
      }
      css += '}'
      // Only found in the property area.
      if (properties.length != 0) {
        syntaxs += css
      }
    }
  }

  this.documentAppendCss(type, syntaxs)
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
    self.documentAppendCssArray('base', wui.Base())
  }

  window.onresize = function () {
    /**
     * Add Default Item Array to Current Document
     */
    self.documentAppendCssArray('base', wui.Base())
  }
}

/**
 * Base Style Syntax Array
 * @returns {array} All css styles
 * */
CybotranikWUI.prototype.Base = function () {

  var result = []

  /**
   * Global
   */
  result.push({
    '*': {
      'box-sizing': 'border-box'
      , 'margin-top': this.compatibleSize(0)
      , 'margin-bottom': this.compatibleSize(0)
      , 'padding-top': this.compatibleSize(0)
      , 'padding-bottom': this.compatibleSize(0)
    }
  })

  /**
   * Section
   */
  result.push({
    'body,article,section,nav,aside,hgroup,h1,h2,h3,h4,h5,h6,header,footer': {
      'display': 'block'
    }
  })


  result.push({
    'body': {
      'margin': 0
      , 'padding': 0
      , 'text-align': 'left'
      , 'font-family': this.Default.Font.Family
      , 'font-size': this.compatibleSize(this.Default.Font.Size)
      , 'font-weight': this.Default.Font.Weight
      , 'line-height': this.Default.Line.Height
    }
  })

  result.push({
    'aside': {
      'margin-left': this.compatibleSize(this.Default.Margin.Left)
      , 'padding-left': this.compatibleSize(this.Default.Padding.Left)
    }
  })

  /**
   * Grouping Content
   */
  // result.push({
  //   [this.HtmlElements.groupingContent]: {

  //   }
  // })

  result.push({
    'p': {
      // 'margin': this.compatibleSize(this.Default.Margin.All)
    }
  })

  /**
  * Text Level Semantics
  */
  // result.push({
  //   [this.HtmlElements.textLevelSemantics]: {
  //     'display': 'inline'
  //     , 'zoom': 1
  //   }
  // })

  result.push({
    'a': {
      'text-decoration': 'none'
      , 'zoom': 1
    }
  })

  /**
   * Edits
   */
  // result.push({
  //   [this.HtmlElements.edits]: {
  //     'display': 'inline-block'
  //   }
  // })

  /**
   * Embedded content
   */
  // result.push({
  //   [this.HtmlElements.embeddedContent]: {
  //   }
  // })

  result.push({
    'img': {
      'width': '100%'
    }
  })

  result.push({
    'img-avatar': {
      'width': '48px'
      , 'border-radius': '50px'
      , 'float': 'right'
    }
  })

  /**
   * Media Elements
   */
  // result.push({
  //   [this.HtmlElements.mediaElements]: {
  //     'display': 'inline-block'
  //   }
  // })

  /**
   * Tabular Data
   */
  // result.push({
  //   [this.HtmlElements.mediaElements]: {
  //   }
  // })

  /**
   * Forms
   */
  // result.push({
  //   [this.HtmlElements.forms]: {
  //   }
  // })

  /**
   * Interactive Elements
   */
  // result.push({
  //   [this.HtmlElements.interactiveElements]: {
  //   }
  // })

  /**
   * Web Components
   */
  // result.push({
  //   [this.HtmlElements.webComponents]: {
  //   }
  // })

  result.push({
    '[is="html-tag"]:before': {
      'content': '"<"'
    }
  })

  result.push({
    '[is="html-tag"]:after': {
      'content': '">"'
    }
  })

  result.push({
    '[is="article-page"] > [is="article-header"]': {
      'text-align': 'center'
    }
  })

  result.push({
    '[is="article-page"] > [is="article-section"]': {
      'margin': this.compatibleSize(this.Default.Margin.All)
      , 'padding': this.compatibleSize(this.Default.Padding.All)
    }
  })

  result.push({
    '[is="weather-forecast"] [is="article-section"] meter': {
      'float': 'right'
    }
  })

  result.push({
    '[is="aside-box"]': {
      'width': '40%'
      , 'float': 'right%'
    }
  })

  result.push({
    '[is="aside-nav"] ul': {
      'list-style-type': 'disc'
    }
  })

  result.push({
    '[is="aside-nav"] li': {
      'margin-left': this.compatibleSize(this.Default.Margin.Left)
    }
  })

  result.push({
    '[is="header-group"]': {
      'text-align': 'right'
    }
  })

  result.push({
    '[is="horizontal-menu"]': {
      'list-style': 'none'
      , 'display': 'inline-block'
      , 'position': 'relative'
      , 'padding-left': 0
    }
  })

  result.push({
    '[is="horizontal-menu"] > li': {
      'float': 'left'
    }
  })

  result.push({
    '[is="horizontal-menu"] > li > a': {
      'padding': this.compatibleSize(this.Default.Padding.All)
    }
  })

  result.push({
    '.aside-toogle': {
      'display': 'block'
    }
  })

  /**
   * Grid
   */
  result.push({
    '.block, .bar, .box': {
      'margin': '0 auto'
      , 'position': 'reletive'
      , 'width': '100%'
      , 'max-width': '100%'
      , 'float': 'left'
    }
  })

  result.push({
    '.container': {
      'margin': '0 auto'
      , 'position': 'reletive'
      , 'width': '100%'
    }
  })

  result.push({
    '.row': {
      'width': '100%'
    }
  })

  result.push({
    '.width-5,.width-10,.width-11,.width-12,.width-14,.width-15,.width-16,.width-20,.width-25,.width-30,.width-33,.width-35,.width-40,.width-45,.width-50,.width-55,.width-60,.width-65,.width-70,.width-75,.width-80,.width-85,.width-90,.width-95,.width-100': {
      'width': '99.18%'
      , 'margin': '0.41%'
      , 'float': 'left'
    }
  })

  result.push({
    '.clear-marjin .width-5, .clear-marjin .width-10, .clear-marjin .width-11, .clear-marjin .width-12, .clear-marjin .width-14, .clear-marjin .width-15, .clear-marjin .width-16, .clear-marjin .width-20, .clear-marjin .width-25,.clear-marjin .width-30, .clear-marjin .width-33, .clear-marjin .width-35, .clear-marjin .width-40, .clear-marjin .width-45, .clear-marjin .width-50,.clear-marjin .width-55, .clear-marjin .width-60, .clear-marjin .width-65, .clear-marjin .width-70, .clear-marjin .width-75, .clear-marjin .width-80, .clear-marjin .width-85, .clear-marjin .width-90, .clear-marjin .width-95, .clear-marjin .width-100': {
      'width': '100%'
      , 'margin': 0
      , 'float': 'left'
    }
  })

  if (this.currentDocument().Width > 768) {

    // Maximum 20 part 
    result.push({ '.width-5': { 'width': '4.18%' } })
    result.push({ '.clear-marjin .width-5': { 'width': '5%' } })
    // Maximum 10 part 
    result.push({ '.width-10': { 'width': '9.18%' } })
    result.push({ '.clear-marjin .width-10': { 'width': '10%' } })
    // Maximum 9 part 
    result.push({ '.width-11': { 'width': '10.29%' } })
    result.push({ '.clear-marjin .width-11': { 'width': '11%' } })
    // Maximum 8 part 
    result.push({ '.width-12': { 'width': '11.68%' } })
    result.push({ '.clear-marjin .width-12': { 'width': '12%' } })
    // Maximum 6 part 
    result.push({ '.width-16': { 'width': '15.84%' } })
    result.push({ '.clear-marjin .width-16': { 'width': '16%' } })
    // Maximum 6 part 
    result.push({ '.width-15': { 'width': '14.18%' } })
    result.push({ '.clear-marjin .width-15': { 'width': '15%' } })
    // Maximum 7 part 
    result.push({ '.width-14': { 'width': '13.68%' } })
    result.push({ '.clear-marjin .width-14': { 'width': '14%' } })
    // Maximum 5 part 
    result.push({ '.width-20': { 'width': '19.18%' } })
    result.push({ '.clear-marjin .width-20': { 'width': '20%' } })
    // Maximum 4 part 
    result.push({ '.width-25': { 'width': '24.18%' } })
    result.push({ '.clear-marjin .width-25': { 'width': '25%' } })
    // Maximum 3 part 
    result.push({ '.width-30': { 'width': '32.51%' } })
    result.push({ '.clear-marjin .width-30': { 'width': '30%' } })
    // Maximum 3 part 
    result.push({ '.width-35': { 'width': '34.18%' } })
    result.push({ '.clear-marjin .width-35': { 'width': '35%' } })
    // Maximum 2 part 
    result.push({ '.width-40': { 'width': '39.18%' } })
    result.push({ '.clear-marjin .width-40': { 'width': '40%' } })
    // Maximum 2 part 
    result.push({ '.width-45': { 'width': '44.18%' } })
    result.push({ '.clear-marjin .width-45': { 'width': '45%' } })
    // Maximum 2 part 
    result.push({ '.width-50': { 'width': '49.18%' } })
    result.push({ '.clear-marjin .width-50': { 'width': '50%' } })
    // Maximum 1 part 
    result.push({ '.width-55': { 'width': '54.18%' } })
    result.push({ '.clear-marjin .width-55': { 'width': '55%' } })
    // Maximum 1 part 
    result.push({ '.width-60': { 'width': '59.18%' } })
    result.push({ '.clear-marjin .width-60': { 'width': '60%' } })
    // Maximum 1 part 
    result.push({ '.width-65': { 'width': '64.18%' } })
    result.push({ '.clear-marjin .width-65': { 'width': '65%' } })
    // Maximum 1 part 
    result.push({ '.width-70': { 'width': '69.18%' } })
    result.push({ '.clear-marjin .width-70': { 'width': '70%' } })
    // Maximum 1 part 
    result.push({ '.width-75': { 'width': '74.18%' } })
    result.push({ '.clear-marjin .width-75': { 'width': '75%' } })
    // Maximum 1 part 
    result.push({ '.width-80': { 'width': '79.18%' } })
    result.push({ '.clear-marjin .width-80': { 'width': '80%' } })
    // Maximum 1 part 
    result.push({ '.width-85': { 'width': '84.18%' } })
    result.push({ '.clear-marjin .width-85': { 'width': '85%' } })
    // Maximum 1 part 
    result.push({ '.width-90': { 'width': '89.18%' } })
    result.push({ '.clear-marjin .width-90': { 'width': '90%' } })
    // Maximum 1 part 
    result.push({ '.width-95': { 'width': '94.18%' } })
    result.push({ '.clear-marjin .width-95': { 'width': '95%' } })
    // Maximum 1 part 
    result.push({ '.width-100': { 'width': '99.18%' } })
    result.push({ '.clear-marjin .width-100': { 'width': '100%' } })

    /** Web Component */
    result.push({
      '.aside-toogle': {
        'display': 'none'
      }
    })
  }

  result.push({ '.align-center': { 'text-align': 'center' } })
  result.push({ '.align-left': { 'text-align': 'left' } })
  result.push({ '.align-right': { 'text-align': 'right' } })
  result.push({ '.align-justify': { 'text-align': 'justify' } })

  // Return Array List
  return result
}

/**
 * Default Theme Style Syntax Array
 * @returns {array} All css styles
 * */
CybotranikWUI.prototype.DefaultTheme = function () {

  var result = []

  /* Theme */
  result.push({
    'body': {
      'background-color': this.Default.Color.Background
      , 'color': this.Default.Color.Foregound
    }
  })

  result.push({
    'aside': {
      'border-left-style': 'inset'
      , 'border-left-width': '1px'
      , 'font-style': 'italic'
      , 'border-left-color': this.Default.Color.Border
      , 'box-shadow': 'inset 0px 0 0px  ' + this.Default.Color.Shadow
    }
  })

  result.push({
    'a': {
      'color': this.Default.Color.Link
    }
  })

  result.push({
    'code': {
      'color': this.Default.Color.Code
    }
  })

  result.push({
    'dfn': {
      'margin-left': '1%'
      , 'margin-right': '1%'
      , 'padding-left': '1%'
      , 'padding-right': '1%'
      , 'background-color': this.Default.Color.Mark
    }
  })

  /**
   * Web Components
   */
  result.push({
    '[is="article-page"]': {
      'background-color': this.Default.Color.Page
    }
  })

  result.push({
    '[is="article-app"]': {
      'background-color': this.Default.Color.Document
      , 'padding': '1%;'
      , 'border': 'dotted 1px ' + this.Default.Color.Border
    }
  })

  result.push({
    '[is="weather-forecast"] [is="article-section"]': {
      'border-bottom-style': 'dotted'
      , 'border-bottom-width': '1px'
      , 'border-bottom-color': this.Default.Color.Border
    }
  })

  result.push({
    '[is="aside-nav"] a': {
      'color': this.Default.Color.Link
    }
  })

  result.push({
    '[is="horizontal-menu"] > li > a': {
      'color': this.Default.Color.Menu
    }
  })
  result.push({
    '[is="horizontal-menu"]  > li > a:hover': {
      'border-bottom-color': this.Default.Color.Border
    }
  })

  /**Test */
  result.push({
    '[is="article-page"] > [is="article-header"]': {
      'padding': '5%'
      , 'background': '#575757'
      , 'color': '#FFFFFF'
    }
  })

  // Return Array List
  return result
}

/**
 * Initalize Cybotranik WUI
 */
var wui = new CybotranikWUI()

/**
 * Add HTML tag Array to Current Document
 */
wui.createElementArray()

/**
 * Web User Interface starting
 */
wui.start()