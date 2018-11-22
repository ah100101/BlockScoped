## Why might does a `#` specify when set on an `anchor` tag's `href` attribute

> it specifies an internal target within the current document

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

## What are two ways of linking an `anchor` tag to the top of the current document

> `href=#top`
> `href=#`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

## What other protols work on an `anchor` tag's `href` attribute?

> file:
> ftp:
> mailto:

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

## On an `anchor` tag, what are some reasons for setting the `rel` attribute to `alternate`?

> A `rel` attribute value on an `anchor` tag can specify and alternative page or document. For example, it may link to a mobile page, another language of the page, or a PDF document with the same content.

https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types

## Why would you set the `rel` attribute to `canonical` on a `<link>` tag?

> Setting a link tag with the `rel` attribute set to `canonical` specifies that the tags `href` value is the preferred document for search engines to help prevent duplicate content issues.

For example, Jane Doe may have two contributor pages on a site. One page has her maiden name and another has her married name, Jane Smith. If on `http://blockscoped.com/contributors/jane-doe` it may make sense to add the following link to the `head`.

```html

<head>
  <link rel="canonical" href="http://blockscoped.io/contributors/jane-smith" />
</head>

```

https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types

## What does setting `target="_blank"` on an `anchor` tag do when it is clicked?

For example:

```html

<a href="https://blockscoped.io" ></a>

```

> Clicking an `anchor` tag with `target` set to `_blank` will load the URL into a new browsing context when clicked. This can be either a tab or new window.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

## What is the syntax for a phone link?

```html

<a href="tel:+15555555555">1-555-555-5555</a>

```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Creating_a_phone_link

## What is the `<aside>` tag used for?

> Aside content is not directly related to a page's main content. Examples of these are call-out boxes and sidebars

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside

## True or False. You can set `margin` on a `<br />` tag.

> True, but this may be considered bad practice since line-height is more appropriate for this purpose.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br#Styling_with_CSS

## Why shouldn't you use `<br />` tags for creating paragraphs?

> Accessibilty. Screen readers may not announce the content that is between consecutive `<br />` tags. 

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br#Accessibility_concerns

## What should the `form` attribute on a `<button>` be set to?

> The ID of the form it's on.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

## A `<button>` that displays an icon instead of text should also...?

> "still have button text provided". This should be done to keep the button accessible since only having an icon makes the button difficult for screen readers to parse. Providing button text keeps the button accessible and the text can be hidden through other means.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Icon_buttons

## True or False. A `<canvas>` element is just as accessible as other html elements.

> False. Canvas elements do not expose content as thoroughly as HTML.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#Accessibility_concerns

## What is a `<dl>` element and what is an example use?

> `<dl>` stands for Description List which is useful for displaying key value pairs, like a dictionary.

Example:

```html

<p>Star Wars Characters</p>

<dl>
  <dt>Luke Skywalker</dt>
  <dd>Luke is the twin brother of Rebellion leader Princess Leia Organa of Alderaan, a friend and brother-in-law of smuggler Han Solo, an apprentice to Jedi Masters Obi-Wan "Ben" Kenobi and Yoda, the son of fallen Jedi Anakin Skywalker (Darth Vader) and Queen of Naboo/Republic Senator Padmé Amidala and maternal uncle of Ben Solo / Kylo Ren.</dd>

  <dt>Han Solo</dt>
  <dd>Han is the captain of the Millennium Falcon, along with his Wookiee co-pilot Chewbacca, whereby both pilots became involved in the Rebel Alliance's struggle against the Galactic Empire.</dd>

  <dt>Rey</dt>
  <dd>Rey is a scavenger who was left behind on the planet Jakku when she was a child, and later becomes involved with the Resistance's conflict with the First Order when her solitary life is interrupted by BB-8, the droid of ace Resistance pilot Poe Dameron, and a runaway Stormtrooper named Finn.</dd>
</dl>

```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl

## What will setting `disabled` to `true` on a `<fieldset>` element do?

> If `disabled` is set to true, `<fieldset>` element values will not be submitted with the associated form. Controls can't be modified and won't receive browse, click, or focus events.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset

## What is a *Sectioning Root*? Provide an example.

> A *Sectioning Root* is an element that has its own outline. HTML elements that are also *Sectioning Roots* include:
- `<body>`
- `<blockquote>`
- `<details>`
- `<fieldset>`
- `<figure>`
- `<td>`

https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Sectioning_root

## What elements can be used to embed content?

- `<audio>`
- `<canvas>`
- `<embed>`
- `<iframe>`
- `<img>`
- `<math>`
- `<object>`
- `<svg>`
- `<video>`

https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Embedded_content

## What is the highest section heading?

> `<h6>`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements

## What's a problem that may come from skipping a heading in your content?

For example:

```html

<h1>level 1</h1>
<h2>Level 2</h2>
<h4>Level 4</h4>

```

> Screen readers can jump from heading to heading which may create an issue for accessibility.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#Navigation

## What are the elements allowed within the `<head>` element?

- `<title>`
- `<base>`
- `<link>`
- `<style>`
- `<meta>`
- `<script>`
- `<noscript>`
- `<template>`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head

## What does the `<hr>` element stand for and do?

> `<hr>` means *Horizontal Rule* and performs a break between paragraph elements.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr

## What is the default `xmlns` value on `<html>` elements?

> "http://www.w3.org/1999/xhtml"

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html

## True or False. Each instance of an `<iframe>` on a page has its own session history.

> True

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe

## What is an accessibility enhancement for an `<img>` element?

> The alt tag should be provided a concise description of the image, not a single word file name of the image.

For example:

```html

<img src="luke-skywalker.jpg" alt="Luke Skywalker stands on his home planet of Tatooine">

```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Accessibility_concerns

## What input elements can't use the `required` attribute?

- `<color>`
- `<submit>`
- `<button>`
- `<hidden>`
- `<image>`
- `<range>`
- `<reset>`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

## What does setting the `tabindex`attribute to `-1` on an input element do?

> Setting the `tabindex` to `-1` will prevent the input field from being focusable via keyboard.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

## What parent elements can an `<li>` be present within?

- Unordered list (`<ul>`)
- Ordered list (`<ol>`)
- Menu (`<menu>`)

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li

## What does the `<noscript>` element do?

> The `<noscript>` contains HTML that will be displayed if a script type is unsupported or if scripts are turned off.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript

## What parent elements can an `<option>` be present within?

- `<select>`
- `<optgroup>`
- `<datalist>`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option

## What are *Block Level* elements?

> *Block Level* elements are elements that occupy the entire space of its parent.

https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

