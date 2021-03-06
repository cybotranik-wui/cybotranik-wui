# Sections

Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.

## `<article>`

The HTML `<article>` element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry.

```HTML
<article is="article-page">
    <header is="article-header">
        <h1>Cybotranik</h1>
    </header>
    <section is="article-section" id="content-sectioning">
        <figure>
            <img src="../../docs/media/favicon.png" alt="Cybotranik WUI">
        </figure>
    </section>
</article>
```

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

```HTML
<article is="article-page">
    <header is="article-header">
        <h1>Content sectioning</h1>
    </header>
    <section is="article-section">
        <header is="section-header">
            <h2>address</h2>
        </header>
        <p is="section-description">The HTML element indicates that the enclosed HTML provides contact
            information
            for a person or
            people, or
            for an organization</p>
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
    </section>
</article>
```

## `<section>`

The HTML `<section>` element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document. Typically, but not always, sections have a heading.

```HTML
<div is="article-app">
    <section is="article-section">
        <header is="section-header">
            <h5>Exchange</h5>
        </header>
        <p is="section-description">If you were to buy a shoe, you would have to give a sack
            of apples to the person who made the shoes.</p>
    </section>
    <section is="article-section">
        <header is="section-header">
            <h5>Problem</h5>
        </header>
        <p is="section-description">The shoemaker couldn't buy sacks of apples for every
            shoe he made.</p>
    </section>
    <section is="article-section">
        <header is="section-header">
            <h5>Swap</h5>
        </header>
        <p is="section-description">Instead we needed to use another vehicle to swap.</p>
    </section>
    <section is="article-section">
        <header is="section-header">
            <h5>Money</h5>
        </header>
        <p is="section-description">Nowadays, we have electronic currencies that guarantee
            the power of exchange.</p>
    </section>
</div>
```

## `<nav>`

The HTML `<nav>` element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.

```HTML
<nav is="header-nav">
    <ul is="horizontal-menu">
        <li><a href="#address">address</a></li>
        <li><a href="#article">article</a></li>
        <li><a href="#aside">aside</a></li>
        <li><a href="#footer">footer</a></li>
        <li><a href="#header">header</a></li>
        <li><a href="#hgroup">hgroup</a></li>
        <li><a href="#main">main</a></li>
        <li><a href="#nav">nav</a></li>
        <li><a href="#section">section</a></li>
    </ul>
</nav>
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

## `<hgroup>`

The HTML `<hgroup>` element represents a multi-level heading for a section of a document. It groups a set of h1 – h6 elements.

```HTML
<div is="article-app">
    <hgroup is="header-group">
        <h3>Mathematics</h3>
        <h5>Arf invariant</h5>
    </hgroup>
    <p>In mathematics, the Arf invariant of a nonsingular quadratic form over a field of
        characteristic 2 was defined by Turkish mathematician Cahit Arf when he started the
        systematic study of quadratic forms over arbitrary fields of characteristic 2.</p>
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

## `<footer>`

The HTML `<footer>` element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.

```HTML
<div is="article-app">
    <footer>
        <p>copyright @ 2019 | Cybotranik WUI</p>
    </footer>
</div>
```