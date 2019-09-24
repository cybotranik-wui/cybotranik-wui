## How do I start

Add cybotranik library to the `<head>` tag of your page.

Use CDN 

```HTML
    <!-- Cybotranik WUI CDN-->
    <script src="https://unpkg.com/cybotranik-wui"></script>
```
or

Use library

[Download](https://github.com/cybotranik-wui/cybotranik-wui/archive/master.zip) the cybotranik project and use one of the distribution files.

```HTML
    <!-- Cybotranik WUI Library -->
    <script src="dist/cybotranik-wui.min.js"></script>
```

See examples grouped by functions.

* [Sections](sections.md)
* [Grouping Content](grouping-content.md)
* [Text Level Semantics](text-level-semantics.md)
* [Edits](edits.md)
* [Embedded content](embedded-content.md)
* [Media Elements](media-elements.md)
* [Tabular Data](tabular-data.md)
* [Forms](forms.md)
* [Interactive elements](interactive-elements.md)
* [Web Components](web-components.md)


### To use the default WUI `Theme`.

```HTML
<script>
    wui.Theme()
</script>
```

### To `configuration` the default theme.

```HTML
<script>
    var configuration = {
      Color: {
        Background: '#222831'
        , Foreground: '#00DAE6'
        , Link: '#03a9f4'
      }
    }

    wui.Theme(configuration)
    
</script>
```

### All `configuration`

```HTML
<script>

var configuration = {
      Color: {
          Background: '#222831'
          , Foreground: '#00DAE6'
          , Link: '#03a9f4'
          , Main: '#ffffff'
          , Menu: '#02567E'
          , Article: '#f7f3f3'
          , Border: '#03a9f4'
          , Shadow: '#03a9f4'
          , Mark: '#ffeb3b'
          , Code: '#ff5722'
      }
      , Font: {
          Family: 'sans-serif'
          , Family_Print: 'monospace'
          , Size: 1
          , Weight: 300
          , Factor: 18
      }
      , Margin: {
          All: 0.2
          , Bottom: 0.2
          , Top: 0.2
          , Left: 0.2
          , Right: 0.2
      }
      , Padding: {
          All: 0.2
          , Bottom: 0.2
          , Top: 0.2
          , Left: 0.2
          , Right: 0.2
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
</script>
```