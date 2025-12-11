# Responsive Web Design

**Reference Links**:

- [HTML Responsive](https://www.w3schools.com/html/html_responsive.asp)
- [CSS3 Media Queries](https://www.w3schools.com/css/css3_mediaqueries.asp)
- [Responsive Units](https://zellwk.com/blog/media-query-units/)

# HTML Resoonsive
- Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones).
- Adding the following <meta> tag to create a responsive website
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

# CSS3 Media Queries
- CSS media queries allow you to apply styles based on the characteristics of a device or the environment displaying the web page.
CSS media queries are essential for creating responsive web pages.
The CSS `@media` rule is used to add media queries to your style sheet.
- Media Query Syntax
    @media [not] media-type and (media-feature: value) and (media-feature: value) {
        /* CSS rules to apply */
    }
 Meaning of the `not` and `and` keywords:
 + `not`: This optional keyword inverts the meaning of the entire media query.
 + `and`: This keyword combines a media-type and one or more media-features.
- `CSS Media Types`:
    + `all`: Used for all media type devices.
    + `print`: Used for print preview mode.
    + `screen`: Used for computer screens, tablets, and smart-phones.
- `CSS Media Features`: some commonly used media features
    + `max-height`
    + `min-height`
    + `height`
    + `max-width`
    + `min-width`
    + `width`
    + `orientation`: orientation of the viewport (landscape or portrait)
    + `resolution`: screen resolution
    + `prefers-color-scheme`: user's preferred color scheme (light or dark)
- Examples:
    @media screen and (min-width: 480px) {
        body {
            backfround-color: lightgreen;
        }
    }

    @media screen and (min-width: 480px) and (max-width: 768px) {
        body {
            backfround-color: lightgreen;
        }
    }

# Responsive Units
Use `em` media queries
