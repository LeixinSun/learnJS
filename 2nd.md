**JavaScript**
-
Manipulate DOM
- change content, structure and style

Handling EVENTS
- button clicks
- mouse movement

How does it work?
-
the brower will load html/css and download js spataneously

Then the event will be triggered through js.!

JS in Web
-
- Enhance **UX**
  - validate form data
  - create interactive forms
  - provide real-time feedback
- Dynamic Web content
  - Load new content
  - refresh not the entire page 
- Animation and visual effects
  - create
  - aesthetics
- Web app

### Inline JavaScript

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
<h1>Introduction to Javascript</h1>
    <script>
        // Your JavaScript code goes here
    </script>
</body>
</html>
```

### External JavaScript

- Put code in separate .js file
- Link to HTML file

---

**Step 1: Create separate .js file**

```javascript
// script.js

// Your javascript code here
function sayHello() {
    alert("Hello, World!");
}
```

**Step 2: Include a \<script\> tag with the src attribute**

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Introduction to Javascript</h1>
    <script src="script.js"></script>
</body>
</html>
```