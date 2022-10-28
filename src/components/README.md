# Base Components

## TitleText

Every page has its own title, requiring the same level of attention on a constant background colour.

### Styling

- Bold font to achieve distinct level of attention.

### API

- color: Coupled with theme colours
- variant: Flexible sizing, so emptier pages can have a larger font size
- align: Flexible alignment, so emptier pages can have centralized font and form page can have left alignment

## BodyText

Every page has body text; this may be a line or a paragraph

### API

- color: Since this component was used on pages as well as components, the color prop provides flexibility for different backgrounds and different attentions to detail
- variant: Same reasoning as above
- align: Same reasoning as above

## Buttons

Buttons were used on every page, with varying levels of functionality, sizes and fontsizes. Button text is also independent of typography, which can look inconsistent. Buttons were used for re-routing, handling form data and redirecting user to another domain. The website is simple enough to utilize the primary color for contrast.

### Styling

- fontWeight: Add level of attention
- height & width: Customized size as the default sizes looked small against large amounts of whitespace. This is responsive as well
- fontSize: To adapt to different amount of text and for different screens

### API

- variant: Fixed button style
- disableElevation: Remove shadow
- type: null || "submit"
- disabled: For form submissions
- color: "primary", coupled with theme colour
- onClick: callback or fn
- fontSize: "small" || null, to reduce font size when there is a lot of text
- href: "http:...", for redirects to another domain

## Text Field

### Styling

- 

## Considerations

- Fontweight for title can be implemented in theme to collapse TitleText and BodyText into single Typography component
- Responsive Typography has a minimum font size of 16, we can consider adding another typography component for any font size smaller than that (not sure if this is recommended)
- Custom button sizes to cater for varying amounts of font (this is to keep min font size at 16) - MUI already has prebuilt sizes which we can adjust in the theme
- Component level styling to match theme typography or making buttons a high level components
- Text colours can be defined in theme
- Make Text Field occupy full width on mobile screens (so that fonts don't need to be so small)
