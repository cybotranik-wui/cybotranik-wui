## How do I start

Add cybotranik library to the `<head>` tag of your page.

Use CDN 

```HTML
    <!-- Cybotranik WUI CDN-->
    <script src="https://unpkg.com/cybotranik-wui"></script>
```
or

Use library

Download this project and use one of the distribution files.

### `wui` to start.

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
    var configuration = { Color.Link = 'red'}

    wui.Theme(configuration)
    
</script>
```

### All `configuration`

```HTML
<script>

var configuration  = {

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
    , Lighter: '#A8E27B'

    /**
     * Light
     * <---
     * Swatch2
     */
    , Light: '#7DBF49'

    /**
     * Primary
     *      -
     * Swatch0
     */
    , Primary: '#60A828'

    /**
     * Dark
     *            --->
     * Swatch3
     */
    , Dark: '#458812'

    /* 
     * Darker ( Foreground ) Ratio 8:1
     * https://webaim.org/resources/contrastchecker/  
     * Swatch4
     */
    , Darker: '#2B6300'

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
    , Code: 'purple'

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
</script>
```