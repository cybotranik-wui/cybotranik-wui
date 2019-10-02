/**
 * @package CybotranikWUI-Helper
 * @abstract Website html User Interface.
 * @since 2019
 * @author Azmi SAHIN
 * @copyright azmisahin.com
 * @license https://github.com/cybotranik-wui/cybotranik-wui/blob/master/LICENSE
 * */

/**
* The Array.isArray() method determines whether the passed value is an Array.
*/
Array.isArray = function (arg) {
  return Object.prototype.toString.call(arg) === '[object Array]'
}

/**
 * The forEach() method executes a provided function once for each array element.
 */
Array.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback.apply(this, [this[i], i, this])
  }
}

/**
 * The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
 */
Object.keys = (function () {

  var hasOwnProperty = Object.prototype.hasOwnProperty,
    hasDontEnumBug = !({ toString: null }).propertyIsEnumerable.call('toString'),
    dontEnums = [
      'toString',
      'toLocaleString',
      'valueOf',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'constructor'
    ],
    dontEnumsLength = dontEnums.length

  return function (obj) {
    if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
      throw new TypeError('Object.keys called on non-object')
    }

    var result = [], prop, i

    for (prop in obj) {
      if (hasOwnProperty.call(obj, prop)) {
        result.push(prop)
      }
    }

    if (hasDontEnumBug) {
      for (i = 0; i < dontEnumsLength; i++) {
        if (hasOwnProperty.call(obj, dontEnums[i])) {
          result.push(dontEnums[i])
        }
      }
    }
    return result
  }
}())

/**
 * Two object item merge
 * @returns {array} merged object
 */
Object.merge = function (target, source, optionsArgument) {

  function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object'

    return nonNullObject
      && Object.prototype.toString.call(val) !== '[object RegExp]'
      && Object.prototype.toString.call(val) !== '[object Date]'
  }

  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
  }

  function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true
    return (clone && isMergeableObject(value)) ? Object.merge(emptyTarget(value), value, optionsArgument) : value
  }

  function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice()
    source.forEach(function (e, i) {
      if (typeof destination[i] === 'undefined') {
        destination[i] = cloneIfNecessary(e, optionsArgument)
      } else if (isMergeableObject(e)) {
        destination[i] = Object.merge(target[i], e, optionsArgument)
      } else if (target.indexOf(e) === -1) {
        destination.push(cloneIfNecessary(e, optionsArgument))
      }
    })
    return destination
  }

  function mergeObject(target, source, optionsArgument) {
    var destination = {}
    if (isMergeableObject(target)) {
      Object.keys(target).forEach(function (key) {
        destination[key] = cloneIfNecessary(target[key], optionsArgument)
      })
    }
    Object.keys(source).forEach(function (key) {
      if (!isMergeableObject(source[key]) || !target[key]) {
        destination[key] = cloneIfNecessary(source[key], optionsArgument)
      } else {
        destination[key] = Object.merge(target[key], source[key], optionsArgument)
      }
    })
    return destination
  }

  // Merge Configuration
  var array = Array.isArray(source)
  var options = optionsArgument || { arrayMerge: defaultArrayMerge }
  var arrayMerge = options.arrayMerge || defaultArrayMerge

  if (array) {
    return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
  } else {
    return mergeObject(target, source, optionsArgument)
  }
}

/**
 * meter element correction for old browsers.
 */

// eslint-disable-next-line no-unused-vars
function meter() {
  var tag = 'meter'
  var symbol = 'value'
  var elements = document.getElementsByTagName(tag)
  for (var index = 0; index < elements.length; index++) {
    var element = elements[index]
    var value, inner
    value = element.attributes.getNamedItem(symbol) === null ? value : element.attributes.getNamedItem(symbol).value
    inner = element.innerHTML
    var percent = value * 100
    var bar = '<div class="meter" value="' + value + '" style=" width: ' + percent + '%;">' + inner + '</div>'
    elements[index].innerHTML = bar
  }
}