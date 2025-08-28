# JavaScript DOM & Events

## 1. Selectors

* **getElementById:** one element by ID.
* **getElementsByClassName:** all elements by class.
* **querySelector:** first element by CSS selector.
* **querySelectorAll:** all elements by CSS selector.

## 2. Create/Insert Element

```javascript
const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);
```

## 3. Event Bubbling

Event moves from the target element up through parent elements.

## 4. Event Delegation

Attach a single listener to a parent; handle events on children using `event.target`.

```javascript
parent.addEventListener("click", e => {
  if(e.target.tagName === "LI") alert(e.target.innerText);
});
```

## 5. preventDefault() vs stopPropagation()

* **preventDefault():** stops default browser action.
* **stopPropagation():** stops event from bubbling up.
