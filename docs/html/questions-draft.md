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
  <link rel="canonical" href="http://blockscoped.io/contributers/jane-smith" />
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

<h2>Star Wars Characters</h2>

<dl>
  <dt>Luke Skywalker</dt>
  <dd>Luke is the twin brother of Rebellion leader Princess Leia Organa of Alderaan, a friend and brother-in-law of smuggler Han Solo, an apprentice to Jedi Masters Obi-Wan "Ben" Kenobi and Yoda, the son of fallen Jedi Anakin Skywalker (Darth Vader) and Queen of Naboo/Republic Senator Padmé Amidala and maternal uncle of Ben Solo / Kylo Ren.</dd>

  <dt>Han Solo</dt>
  <dd>Han is the captain of the Millennium Falcon, along with his Wookiee co-pilot Chewbacca, whereby both pilots became involved in the Rebel Alliance's struggle against the Galactic Empire.</dd>

  <dt>Rey</dt>
  <dd>Rey is a scavenger who was left behind on the planet Jakku when she was a child, and later becomes involved with the Resistance's conflict with the First Order when her solitary life is interrupted by BB-8, the droid of ace Resistance pilot Poe Dameron, and a runaway Stormtrooper named Finn.</dd>
</dl>

```