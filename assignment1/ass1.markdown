# Assignment 1

## Part 1

Remove the contents of the `data` variable and load it from a separate `.json` file. Don't copy and paste; instead, make note of the element structure, and rewrite the JSON yourself from scratch.

Note: Check your console for a CORS warning. It may come up if you serve these files directly from the filesystem rather than a webserver.

## Part 2

Move all remaining javascript to a `.js` file.

Take note of the structure of the list items, including tags, attributes (especially classes and ids). Delete `loadListData(` and recreate it from your notes.

## Part 3

Move all CSS to a `.css` file.

Style the list

1. Give it a zebra effect, alternating background colors
2. When a checkbox is selected, its containing `li` should change border color to red
3. If one or more checkbox is selected, the unselected containing `li` elements should change border color to green. But if none are selected, all `li` elements should go back to their original border color.


## Part 4

Implement `deleteAction(`. *After asking for confirmation from the user*, delete any selected elements with a fading effect. If no elements are selected, berate the user for being stupid.
