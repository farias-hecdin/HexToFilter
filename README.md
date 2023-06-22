# HexToFilter

Add a beautiful color to your monochrome SVG icons using CSS.

## Description

HexToFilter is a website that converts hexadecimal colors to the CSS property `filter`. This means that if you have a black icon, you can easily color it blue using the `filter` property.

The utility of this website is that you can color your monochrome icons by adding a new color to them using CSS.

To use HexToFilter you only need to enter a hexadecimal color (for example: #00a4d6), click on the 'convert' button and finally copy the result to paste it into your CSS style sheet.

It is worth mentioning that this converter only returns one color, so it may not be useful if you want to add gradients to your icons.

## FAQs

### Are there any limitations on the colors I can convert?

Currently, HexToFilter has some limitations regarding the colors it can convert:

* It can only convert 6-digit hexadecimal colors, such as `#0000ff` and short 3-digit RGB colors, such as `#ff0`.
* It does not support alpha-channel colors, such as #0000ff00.
* Cannot convert HSL colors, RGB colors or color names such as "blue". Only accepts hexadecimal color input.
* The returned CSS filter property will only work in modern browsers that support the `filter` property.

### Why doesn't the icon change to the chosen color?

For HexToFilter to work properly, the initial color of the icon must be black. If your icon is not black, you can prepend `brightness(0%) saturation(100%)` to your filter property to convert the icon set to black.

And if the web site doesn't work correctly, it's probably because you're using an outdated version of your browser.

## License

HexToFilter is licensed under the MIT license. See the LICENSE file for more information.
