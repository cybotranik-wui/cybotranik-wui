/**
 * @package CybotranikWUI-Component
 * @abstract Website html User Interface.
 * @since 2019
 * @author Azmi SAHIN
 * @copyright azmisahin.com
 * @license https://github.com/cybotranik-wui/cybotranik-wui/blob/master/LICENSE
 * */

var store

(function Component() {

  function getBlocks(block, symbol, repeat, item) {
    var first = block.children[0]
    var collection = block.attributes.getNamedItem(symbol) === null ? null : block.attributes.getNamedItem(symbol).value
    var each = block.attributes.getNamedItem(repeat) === null ? null : block.attributes.getNamedItem(repeat).value
    item = first.attributes.getNamedItem(item) === null ? item : first.attributes.getNamedItem(item).value
    return {
      tag: block,
      first: first,
      collection: collection,
      repeat: each,
      item: item
    }
  }

  function render(tag, collection, repeat, item) {
    console.log(repeat)
    console.log(item)
    var first = tag.children[0]
    tag.innerHTML = ''
    for (var index = 0; index < collection.length; index++) {
      var value = collection[index]

      var typ = typeof value

      if (typ === "string") {
        value
      }
      if (typ === "object") {
        value = value[item]
      }

      appendBlock(tag, first, value)
    }
  }
  function appendBlock(parent, base, value) {
    var clonedBlock = base.cloneNode(true)
    clonedBlock.innerHTML = value
    parent.appendChild(clonedBlock)
  }

  function run(blocks, storeData) {
    var dataKeys = Object.keys(storeData)
    var collecionName = blocks.collection
    var tag = blocks.tag
    var repeat = blocks.repeat
    var item = blocks.item

    for (var index = 0; index < dataKeys.length; index++) {
      var propName = dataKeys[index]
      if (propName === collecionName) {
        render(tag, storeData[propName], repeat, item)
      }
    }
  }

  function watch(tag, symbol, repeat, item) {
    var elements = document.getElementsByTagName(tag)
    for (var index = 0; index < elements.length; index++) {
      var block = elements[index]
      var blocks = getBlocks(block, symbol, repeat, item)
      run(blocks, DATA)
    }
  }

  var DATA
  function StoreHandler() { }
  StoreHandler.prototype.setData = function (data) {
    DATA = data

    /**
     * @example
     * 
     * 
      <body>
          <ol>
              <loop for="todos" each="do">
                  <li item="Name"></li>
              </loop>
          </ol>
          <script>store.setData({ todos: ['clone', 'build', 'use'] })</script>
      </body>
     */
    watch('loop', 'for', 'each', 'item')
  }
  StoreHandler.prototype.init = function () {
    document.createElement('loop')
  }
  store = new StoreHandler
  store.init()
})()
