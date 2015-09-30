message
=========

At this point there’s no proper name, but herewith is a JavaScript function, complete with CSS, which will allow you to display a message on the screen without using `alert()`.

The issues with `alert()` which prompted this function are:

- alert is blocking; this can be a Good Thing, but it can also be a problem when you’re displaying multiple messages, especially in a repetition
- some testing enviroments don’t support alert

You may notice that the function and corresponding files are called “say”. When I think of a better name, this will, of course, change.

I thought of calling it “Alert” (with a capital “A”), but that’s probably too subtle.

Features
--------

- The function is self-initializing on first calling it
- The message can be dragged & resized
- The message can be closed
- The message can be styled using CSS

Usage
-----

###Download the Files

Well, obviously. The files you need for now are:

- `say.js`
- `say.css`

###Include the Files

```html
<script type="text/javascript" src="say.js"></script>
<link rel="stylesheet" type="text/css" href="say.css">
```

Don’t forget to include the appropriate folders.

###Startup Script:

You don’t need one, as the function initialises itself on first usage. You might try this:

```js
window.onload=init;
function init() {
	say('Hello');
}
```

To Do
-----

The following are on the list:

- Think of a better name
- Tidy up the code
- Find a better way of including the required CSS
- This includes removing the `id`
- Speaking of which allow your own `id` for the message
- Fix up storage of settings

