## What does CSS stand for?

> Cascading Style Sheets

https://developer.mozilla.org/en-US/docs/Web/CSS

## What is *Specificity* and how is it determined?

> *Specificity* is how a browser decides which CSS property values are the relevant and are applied to an element.

*Specificity* is determined by the number of each selector type in the matching selector. When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element.

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

## When multiple declaration apply to an element, which one is used?

> The last declaration found.

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

## Rank the following selector types specificity value (least specific to most specific):

- Style attribute (inline style)
- Type selector
- Class selector
- ID selector

1. Style attribute (inline style)
2. ID selector
3. Class selector
4. Type selector

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

## What is an `at-rule` and provide an example.

> An `at-rule` is a CSS rule that tells CSS how to behave. For example:

`@media` tells the CSS to apply a specific style sheet based on the result of a media query.

```css

@media screen and (min-width: 900px) {
  .card {
    padding: 1rem 3rem;
  }
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/@media

## What does the `::placeholder` keyword refer to?

`::placeholder` is a *pseudoelement* for the placeholder text of a form.

```html

<input placeholder="Username">

```

```css

input::placeholder {
  color: blue;
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder

## How might you target an anchor element that is being pressed by a user?

The `:active` pseudo-class can target an element that is being *activated* or pressed by a user.

```css
a:active {
  color: blue;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/:active

## Which link pseudo-classes can override `:active` when the specificity is the same?

`:link`
`:hover`
`:visited`

## What does the `:first` pseudo-class do?

Selects the first page of a printed document.

https://developer.mozilla.org/en-US/docs/Web/CSS/:first

## Given the HTML below, how might you target only the paragraph with 'Luke Skywalker'?

```html

<div>
  <p>Luke Skywalker</p>
  <p>Darth Vadar</p>
</div>
<div>
  <div>Yoda</div>
  <p>Obi-wan</p>
</div>

```

```css

p:first-child {
  color: blue;
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child