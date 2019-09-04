# Content sectioning

Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.

## `<adress>`

The HTML `<address>` element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.

```HTML
<article is="section-content">
    <header is="article-header">
        <h3>Example</h3>
    </header>
    <div is="article-app">
        <address is="web-address">
            Visit <a href="https://cybotranik-wui.github.io"> cybotranik-wui.github.io</a><br>
            If you see any bugs, please <a href="mailto:Jack@cybotranik-wui.github.io"> contact
                webmaster</a>.<br>
            Contact: <a href="mailto:jack@cybotranik-wui.github.io">Jack JACKSON</a>.<br>
            Phone: <a href="tel:+11234567890">(123) 456-7890</a>
        </address>
    </div>
</article>
```

## `<article>`

The HTML `<article>` element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry.

```HTML
<article is="weather-forecast">
    <header is="article-header">
        <h3>Antalya, Turkey Day Weather</h3>
    </header>
    <section is="article-section">
        <time datetime="2019-08-30">Agust 30</time>
        <meter min="-40" max="50" low="10" high="30" optimum="20" value="32">32
            degrees</meter>
        <h4>Sunny</h4>
    </section>
    <section is="article-section">
        <time datetime="2019-08-31">Agust 31</time>
        <meter min="-50" max="50" low="10" high="30" optimum="20" value="30">30
            degrees</meter>
        <h4>Sunny</h4>
    </section>
    <section is="article-section">
        <time datetime="2019-09-01">September 01</time>
        <meter min="-50" max="50" low="10" high="30" optimum="20" value="28">28
            degrees</meter>
        <h4>Sunny</h4>
    </section>
    <section is="article-section">
        <time datetime="2019-09-02">September 02</time>
        <meter min="-50" max="50" low="10" high="30" optimum="20" value="26">26
            degrees</meter>
        <h4>Sunny</h4>
    </section>
    <section is="article-section">
        <time datetime="2019-09-03">September 03</time>
        <meter min="-50" max="50" low="10" high="30" optimum="20" value="24">24
            degrees</meter>
        <h4>Sunny</h4>
    </section>
</article>
```

## `<aside>`

The HTML `<aside>` element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.

```HTML
<div is="article-app">
    <aside is="aside-box">
        Turkish Delight is a traditional Turkish dessert prepared with water, sugar and
        starch.
    </aside>
    <p>The texture of the delight should be elastic, should be able to take its original
        shape after pressing with the finger, and feel soft and slippery in the mouth.</p>
</div>
```

## `<footer>`

The HTML `<footer>` element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.

```HTML
<div is="article-app">
    <footer>
        <p>copyright @ 2019 | Cybotranik WUI</p>
    </footer>
</div>
```

## `<header>`

The HTML `<header>` element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.

```HTML
<div is="article-app">
    <header is="section-header">
        <h6>Content sectioning Header Example</h6>
        <h5>Content sectioning Header Example</h5>
        <h4>Content sectioning Header Example</h4>
        <h3>Content sectioning Header Example</h3>
        <h2>Content sectioning Header Example</h2>
        <h1>Content sectioning Header Example</h1>
    </header>
</div>
```
## `<hgroup>`

The HTML `<hgroup>` element represents a multi-level heading for a section of a document. It groups a set of h1 – h6 elements.

```HTML
<div is="article-app">
    <hgroup is="header-group">
        <h3>Mathematics</h1>
            <h5>Arf invariant</h2>
    </hgroup>
    <p>In mathematics, the Arf invariant of a nonsingular quadratic form over a field of
        characteristic 2 was defined by Turkish mathematician Cahit Arf when he started the
        systematic study of quadratic forms over arbitrary fields of characteristic 2.</p>
</div>
```