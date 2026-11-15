# PixelPioneers - CSC 216 Lab 2 Website

**Tagline:** Turning Ideas into Digital Reality.

**Live Website:** https://stanleybrandon606-glitch.github.io/team-website/

## Team Members

| Name             | Registration Number | GitHub Username          | Role      |
| ---------------- | ------------------- | ------------------------ | --------- |
| Stanley Brandon  | COM/3488/26         | stanleybrandon606-glitch | Partner A |
| Maxwell Emmanuel | COM/3478/26         | maxwelemmanuel46-prog    | Partner B |

## Task Allocation

| Activity                           | Responsible Person           |
| ---------------------------------- | ---------------------------- |
| Part 0: Project setup              | Stanley Brandon (Partner A)  |
| Part 1: HTML home page             | Maxwell Emmanuel (Partner B) |
| Part 2: Projects and contact pages | Stanley Brandon (Partner A)  |
| Part 3: CSS                        | Maxwell Emmanuel (Partner B) |
| Part 4: JavaScript                 | Stanley Brandon (Partner A)  |
| Part 5: Personalisation            | Both partners                |
| Part 6: Testing and deployment     | Both partners                |

## Personalisation

- **Our colours:** A customised purple-based theme with light and dark modes.
- **Projects added:** Eight projects, including two original projects.
- **Additional features:** A Mobile Development category and filter.
- **Extension challenge completed:** E3 - Live project search by title and description, working together with category filters.

## Reflection

### 1. What is the difference between using a `<button>` and a clickable `<div>`?

A `<button>` has built-in keyboard support and is recognised by screen readers as an interactive element. A clickable `<div>` does not have these features automatically. This makes buttons more accessible because users can activate them using Enter or Space without additional JavaScript.

### 2. What happens if `defer` is removed from a script tag?

Without `defer`, the browser may stop parsing the HTML while downloading and executing the JavaScript. The script might run before the HTML elements are fully loaded, causing errors when trying to access elements that do not yet exist.

### 3. Why is using `innerHTML` with user input risky?

Using `innerHTML` with user input can introduce malicious HTML or JavaScript into a webpage, resulting in Cross-Site Scripting (XSS) attacks. Using `textContent` is safer because it treats input as plain text.

### 4. Why should form validation also be performed on the server?

JavaScript validation can be bypassed by disabling JavaScript or sending requests directly to a server. Server-side validation provides an additional layer of security and ensures that submitted information is checked before being processed or stored.

### 5. What is an origin, and how does it affect localStorage?

An origin consists of a webpage's protocol, hostname and port. Pages running under the same origin can share localStorage. However, pages opened using `file://` and those running through a local server have different origins, so their stored theme preferences may differ.

### 6. What is one disadvantage of duplicating HTML across multiple pages?

Duplicating elements such as navigation bars and footers means that changes must be made separately on every page. This can lead to inconsistencies and extra work. Reusable components or shared templates can reduce duplication and make maintenance easier.
