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
CybotranikWUI.prototype.Size = function (value) {

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