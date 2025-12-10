# CSS Mastery

**Reference Links**:

- [CSS](https://www.w3schools.com/html/)
- [SCSS/SASS](https://www.w3schools.com/sass/default.php)
- [FlexBox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

## Goals

**CSS in HTML**:

- Inline CSS
    + Placement: Applied directly to individual HTML elements using the style attribute within the opening tag of the element.
    + Scope: Affects only the specific HTML element it is applied to.
    + Example: <p style="color: blue; font-size: 16px;">This text is styled inline.</p>
    + Use Case: Quick, localized styling for specific elements, often used for testing or minor adjustments.

- Internal CSS
    + Placement: Defined within a <style> tag placed inside the <head> section of an HTML document.
    + Scope: Applied to all elements within that specific HTML document.
    + Example: 
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                h1 {
                    color: green;
                }
                p {
                    font-family: Arial, sans-serif;
                }
            </style>
        </head>
        <body>
            <h1>Internal CSS Example</h1>
            <p>This paragraph is styled with internal CSS.</p>
        </body>
        </html>
    + Use Case: Styling a single HTML page with a consistent look and feel, without affecting other pages.
    
- External CSS
    + Placement: Stored in a separate .css file and linked to HTML documents using the <link> taf within the <head> section.
    + Scope: Can be linked to multiple HTML documents, applying styles across an entire website.
    + Example: 
        <!-- In your HTML file -->
        <head>
            <link rel="stylesheet" type="text/css" href="styles.css">
        </head>

        /* In your styles.css file */
        body {
            background-color: lightgray;
        }
        h2 {
            color: purple;
        }  
    + Use Case: Managing styles for large websites, promoting reusability, and separating design from content for easier maintenance.

**Priority in CSS**: here is a breakdown of the priority, from highest to lowest:
- !important:  When the !important keyword is appended to a CSS declaration, it overrides all other styling rules for that specific property on that element, regardless of specificity.
- Inline styles: Styles applied directly to an HTML element using the style attribute have the highest specificity and override all other styles, except for those marked with !important. 
    <h1 style="color: red;">This heading is red.<h1>
- ID Selectors (#ID): Selectors targeting elements by their unique id attribute have higher specificity than class, attribute, or element selectors.
    <div id="idName">This is an example.</div>
        #idName {
        color: blue;
    }
- Class Selectors (.Class), Attribute Selectors ([attribute]), and Pseudo-classes (:hover): These selectors have a medium level of specificity, ranking below ID selectors but above element selectors.
    <div class="className">This is an example.</div>
        .myClass {
            font-size: 18px;
        }
        [type="text"] {
            border: 1px solid gray;
        }
        a:hover {
            text-decoration: underline;
        }
- Tag Name (Element) Selectors (tag) and Pseudo-elements (::before): These selectors have the lowest specificity among specific selectors, targeting elements based on their HTML tag name or specific parts of an element.
    p {
        line-height: 1.5;
    }
    ::before {
        content: "Prefix: ";
    }
- Universal Selector (*): The universal selector targets all elements but has no effect on specificity.
    * {
        margin: 0;
        padding: 0;
    }
- Inherited Values: Properties that are not explicitly set on an element can inherit values from their parent elements. This is the lowest priority in the cascade.

**Variable in CSS**:

- Global variable: are declared within the :root pseudo-class, which represents the highest-level element in the document tree (the <html> element). Variables defined here are accessible and can be used throughout the entire document, regardless of where they are called.
    :root {
        --primary-color: #007bff;
        --base-font-size: 16px;
    }

    body {
        color: var(--primary-color);
        font-size: var(--base-font-size);
    }
- Local variable: are declared within a specific CSS selector, limiting their scope to that particular element and its descendants.
    .card {
        --card-bg-color: #f8f9fa;
        --card-padding: 20px;
        background-color: var(--card-bg-color);
        padding: var(--card-padding);
    }

    .card h2 {
        color: var(--primary-color); /* Accessing a global variable */
    }
- Key differences:
    + Scope: Global variables are accessible everywhere, local variables are restricted to their declared selector and its children.
    + Declaration: Global variables are typically declared in :root, local variables are declared within specific selectors.
    + Use Case: Global variables are suitable for site-wide consistency, local variables are for component-specific styling.
    + Overriding: Local variabels can override global variables os the same within their scrope, adhering to the CSS cascade.

**CSS Units**:

- **Relative**: `%`, `em`, `rem`, `vw`, `vh`, `dvh`, `svh`, ...
- **Absolute**: `px`, `pt`, ... (are bot recommended for use on screen, because screen sizes vary so much.)

**CSS Margin**
**CSS Padding**
**CSS Border** border: border-width border-style border-color|initial|inherit;
    h1 {
        border: 5px solid red;
    }
**CSS Box Sizing** box-sizing: content-box|border-box|initial|inherit;
**CSS Background** background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
    body {
        background: lightblue url("img_tree.gif") no-repeat fixed center;
    }

**CSS Functions**:

# Color Functions 
- `rgb()`: defines colors using the Red, Green, Blue color model. Each component is a value from 0 to 255 (or 0% to 100%).
    color: rgb(255, 0, 0); /* Bright red */
- `rgba()`: similar to rgb(), but includes an Alpha channel for opacity. The alpha value ranges from 0 (fully transparent) to 1 (fully opaque).
    background-color: rgba(0, 0, 255, 0.5); /* Semi-transparent blue */
- `hsl`: defines colors using Hue, Saturation, and Lightness. Hue is an angle on the color wheel (0-360 degrees), Saturation and Lightness are percentages.
    color: hsl(120, 100%, 50%); /* Pure green */
- `oklch()`: a modern color function based on the Oklab color space, offering improved perceptual uniformity and a wider gamut of colors compared to older models like HSL. It uses L (lightness), C (chroma), and H (hue).
    color: oklch(70% 0.15 150); /* A perceptually uniform greenish-blue */
# Utility Functions
- `var()`: retrieves the value of a custom CSS property (CSS variable). This allows for reusable and dynamic styling.
    :root {
        --main-color: #3498db;
    }
    .element {
        color: var(--main-color);
    }
- `calc()`: performs mathematical calculations within CSS property values. It supports addition, subtraction, multiplication and division.
    width: calc(100% - 20px);
    font-size: calc(1em + 0.5vw);
- `attr()`: retrieves the value of an HTML attribute of the element. Primarily used with the content property for generated content.
    a::after {
        content: attr(href);
    }
# Gradient Functions
- `linear-gradient()`: creates a CSS image that transitions smoothly between two or more specified colors along a straight line.
    .element {
        background-image: linear-gradient(to right, red, blue); /* A gradient from red on the left to blue on the right */
    }
- ...

**CSS Pseudo Classes**:

- `:root`: 
- `:hover`
- `:active`: applies when the user is holding down the mouse on the element.
- `:first-child`: applies to the first element in the same sibling group.
- `:last-child`: applies to the last element in the same group.
- `:focus`: triggers when the element has focus (click or tab on input).
- `:focus-within`: applies to the parent when the child element has focus.
- `:checked`: selected state of radio/checkbox.
- `:disabled`: input element is disabled.
- `:nth-child(n)`: selects element based on index/order.
- `:not(selector)`: selects elements not matching the selector.
- `:valid / :invalid`: form validation state (input value is valid/invalid).
- `:visited`: link that has been visited.
- `:link`: link that has not been visited yet.
- `:required`: input is required.

**CSS Pseudo Elements**:

- `::before`
- `::after`
- `::first-letter`
- `::first-line`
- `::selection`: styles the text when it is selected/highlighted by the user.
- ...

**CSS Positions**: CSS positioning is about controlling the placement of elements within a web page.

- `Static`: This is default.
- `Relative`
- `Absolute`
- `Fixed`: stays in the same place even when scrolling.
- `Sticky`: toggles between a relative and fixed position, depending on the scroll position. Becomes fixed once it crosses a defined scroll threshold.

**CSS Flex Box**:

- Flex container
- Flex items
- Main axis - Cross axis
- Main start - Main end
- Cross start - Cross end
- ...

 + `justify-content`: align items on main axis.
 + `align-items`: align items on cross axis.
 + `align-content`: align wrapped rows/columns
 + `flex-wrap`: allow items to break into multiple rows.
 + `gap`: spacing between items.
 + `flex-grow`: item expands to fill space.
 + `flex-shrink`: item shrinks when space is limited.
 + `flex-basic`: default size of item before space distribution.

**