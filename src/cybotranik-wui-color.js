/**
 * @package CybotranikWUI-Color
 * @abstract Website html User Interface.
 * @since 2019
 * @author Azmi SAHIN
 * @copyright azmisahin.com
 * @license https://github.com/cybotranik-wui/cybotranik-wui/blob/master/LICENSE
 * */


// eslint-disable-next-line no-unused-vars
function Color(primaryColor) {

  var backgroundColor = ''
  var foregroundColor = ''
  var linkColor = ''
  var borderColor = ''
  var shadowColor = ''

  function hexStringToRGBData(hexString) {
    let r = 0, g = 0, b = 0

    // 3 digits
    if (hexString.length == 4) {
      r = '0x' + hexString[1] + hexString[1]
      g = '0x' + hexString[2] + hexString[2]
      b = '0x' + hexString[3] + hexString[3]

      // 6 digits
    } else if (hexString.length == 7) {
      r = '0x' + hexString[1] + hexString[2]
      g = '0x' + hexString[3] + hexString[4]
      b = '0x' + hexString[5] + hexString[6]
    }
    return { Red: r, Green: g, Blue: b }

  }

  function RGBToHSLData(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255
    g /= 255
    b /= 255

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0

    // Calculate hue
    // No difference
    if (delta == 0)
      h = 0
    // Red is max
    else if (cmax == r)
      h = ((g - b) / delta) % 6
    // Green is max
    else if (cmax == g)
      h = (b - r) / delta + 2
    // Blue is max
    else
      h = (r - g) / delta + 4

    h = Math.round(h * 60)

    // Make negative hues positive behind 360°
    if (h < 0)
      h += 360

    // Calculate lightness
    l = (cmax + cmin) / 2

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)

    return { Hue: h, Saturation: s, Lightness: l }
  }

  function HSLToHex(h, s, l) {
    s /= 100
    l /= 100

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16)
    g = Math.round((g + m) * 255).toString(16)
    b = Math.round((b + m) * 255).toString(16)

    // Prepend 0s, if necessary
    if (r.length == 1)
      r = '0' + r
    if (g.length == 1)
      g = '0' + g
    if (b.length == 1)
      b = '0' + b

    return '#' + r + g + b
  }

  function getContrastColor(hexString) {

    var backgroundColor = hexString

    var rgbData = hexStringToRGBData(hexString)

    var invertData = rgbData

    var ratio = 0

    var limit = 150

    for (var iteration = 1; iteration < limit; iteration++) {

      invertData.Red = 255 - rgbData.Red
      invertData.Green = 255 - rgbData.Green
      invertData.Blue = 255 - rgbData.Blue

      var hslData = RGBToHSLData(invertData.Red, invertData.Green, invertData.Blue)
      if (hslData.Lightness > 50) {

        hslData.Saturation = hslData.Lightness - iteration

      } else {

        hslData.Saturation = hslData.Lightness + iteration

      }
      if (hslData.Lightness > 100 || hslData.Lightness < 0)
        break

      hexString = HSLToHex(hslData.Hue, hslData.Saturation, hslData.Lightness)
      var foregroundColor = hexString
      ratio = contrastRatio(foregroundColor, backgroundColor)
      console.log('ratio : ' + ratio + ' data: ' + hslData.Lightness + ' iteration : ' + iteration)
      if (ratio > 8)
        break
    }

    return hexString
  }

  function luminance(rgb) {
    // convert RGB to sRGB
    var sRGB = [rgb.Red, rgb.Green, rgb.Blue].map(function (value) {
      value /= 255
      return (value <= 0.03928) ? (value / 12.92) : Math.pow(((value + 0.055) / 1.055), 2.4)
    })
    // calculate luminance
    return (sRGB[0] * 0.2126) + (sRGB[1] * 0.7152) + (sRGB[2] * 0.0722)
  }

  function contrastRatio(foreground, background) {

    var foregroundRGB = hexStringToRGBData(foreground)
    var backgroundRGB = hexStringToRGBData(background)

    var foregroundLuminance = luminance(foregroundRGB)
    var backgroundLuminance = luminance(backgroundRGB)

    return (Math.round(((Math.max(foregroundLuminance, backgroundLuminance) + 0.05) / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05)) * 100) / 100)
  }

  backgroundColor = primaryColor

  foregroundColor = getContrastColor(primaryColor)

  linkColor = getContrastColor(foregroundColor)

  return {
    BackgroundColor: backgroundColor
    , ForegroundColor: foregroundColor
    , LinkColor: linkColor
    , BorderColor: borderColor
    , ShadowColor: shadowColor
  }
}