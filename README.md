# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## a. getElementById(’id’)

Selects a specific element by using its id and working with it further

## b. getElementsByClassName(’class-name)

Selects the elements of same class name and it returns HTML collection and it is live/updatable with DOM

## c. querySelector(  )

Selects first appeared element with the given CSS selector, returns that specific element

## d. querySelectorAll(  )
Returns Node-list, give all the elements of same CSS selector


# 2. How do you create and insert a new element into the DOM?
## Create Element

Create element can be done using **.createElement()**  property

```javascript
document.createElement('div');
```

## Inserting New Element in DOM
Inserting one element into other, 
```JavaScript
.appendChild(element-name)
```
inserting or changing inner text,
```javascript
element.innerText = " "
```

# 3. What is Event Bubbling? And how does it work?

When event bubbling happens, where the event is used, it will considered as child and it moves upward to the parent elements in DOM tree

# 4. What is Event Delegation in JavaScript? Why is it useful?
Using
```javascript
.addEventListener('type', function(){ })
```
in multiple elements inside a parent element, use The event listener in the parent element it will be applied to its child elements, it can be handled using the bubbling method.

# 5. What is the difference between preventDefault() and stopPropagation() methods?
## preventDefault()
Stops default browser behaviour like reloading page

## stopPropagation()
Stops the event bubbling. 
If it is applied to an element, its child elements will run but further parent element will not run