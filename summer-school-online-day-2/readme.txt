CSS Selectors and Types Used in Profile Card Project

1. Universal Selector (*)
   - Selector: *
   - Description: Applies styles to all HTML elements. 
   - Used to reset default margin and padding for a consistent look across browsers.
   - Example: 
     * {
       margin: 0;
       padding: 0;
     }

2. Type Selectors (Element Selectors)
   - Selectors: body, h1, h3, p, ul, li, a
   - Description: These target specific HTML elements by name.
   - Example:
     body {
       background-color: #dfdfdf;
     }

3. Class Selectors
   - Selectors: .card, .avatar
   - Description: Targets elements with a specific class name.
   - Used for styling reusable components like the card and image.
   - Example:
     .card {
       background-color: #fff;
     }

4. Descendant Selectors
   - Selector: ul li a
   - Description: Selects <a> elements that are inside <li> which are inside <ul>.
   - Helps apply specific styles only in certain parts of the document.
   - Example:
     ul li a {
       color: #1d4ed8;
     }

5. Pseudo-class Selector
   - Selector: .card:hover and a:hover
   - Description: Applies styles when the user hovers over the card or a link.
   - Used to add interactive effects.
   - Example:
     .card:hover {
       transform: translateY(-8px);
     }

6. Attribute Selector (not used here)
   - Note: These selectors target elements based on attributes like [href], [type="text"].
   - Not used in this project, but commonly used for form styling.

7. Box Model Usage
   - Properties used: margin, padding, border-radius, box-shadow
   - These control spacing, rounding, and shadow effects on elements.

8. Flexbox
   - Used to center and align items inside the body and card.
   - Properties used: display: flex, justify-content, align-items, flex-direction

9. Responsive Unit
   - Units like px, rem used for spacing and font sizes.
   - Fixed width: 320px for card.
   - Could be improved using % or media queries for full responsiveness.

10. Transition
   - Adds smooth effects on hover for transform and box-shadow.
   - Example:
     transition: transform 0.3s ease;

Summary:
This project used a mix of basic selectors like type, class, and universal selectors.
It also included more advanced concepts like descendant and pseudo-class selectors,
with layout techniques like Flexbox and CSS transitions to improve interactivity and style.
