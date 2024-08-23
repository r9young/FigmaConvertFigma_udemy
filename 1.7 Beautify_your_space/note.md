# Inspiration_Collection

## Relative vs Abosolute Path


You're almost correct, but let me clarify:

1. **Relative Path:**

   - If you are referencing a file from the same directory level as your `index.html` (which is inside `Inspiration_Collection`), you should use the relative path:
   
     ```html
     <img src="src/assets/MaskGroup1.png" alt="">
     ```
   
   - You can also explicitly indicate that it's a relative path starting from the current directory with `./`:
   
     ```html
     <img src="./src/assets/MaskGroup1.png" alt="">
     ```
   
   Both of these will work the same way in this context because they point to the file relative to the location of your `index.html`.

2. **Absolute Path:**

   - An absolute path in the context of a web project usually starts from the root of the website, not your local file system. If you use `/src/assets/MaskGroup1.png`, it assumes `src` is located at the root of the website.
   
     ```html
     <img src="/src/assets/MaskGroup1.png" alt="">
     ```

   This is useful if your project structure is deployed on a server and you want to reference files starting from the root of your web server.

### Which to Use?

- **Use the relative path** (`src/assets/MaskGroup1.png` or `./src/assets/MaskGroup1.png`) if you are working locally and want the path to be relative to your `index.html`.

- **Use the absolute path** (`/src/assets/MaskGroup1.png`) if you know the image will always be in the same location relative to the root of your deployed website, regardless of where your HTML files are located.

----

## Why the following elements are arranged vertically?

```html

 <div class="text-center mb-12">
    <p class="text-2xl font-bold">Inspiration collection</p>
    <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

```

<p> elements are block-level elements, so they naturally stack vertically. 

----

`py-16`

padding-top: 4rem; /* 64px */
padding-bottom: 4rem; /* 64px */

----

`w-9/12` & `mx-auto`

<div class="w-9/12 mx-auto">

Combined Effect:
The div will take up 75% of the width of its parent container (w-9/12).
It will be centered horizontally within its parent container because of the mx-auto class, which automatically adjusts the left and right margins.

----

`grid` & `grid-cols-3` & `gap-10`


Use the gap-x-* and gap-y-* utilities to change the gap between columns and rows independently.

`overflow-hidden`

```html

<div class="h-94 w-34 overflow-hidden rounded-tl-3xl mt-16">
    <img src="your-image.jpg" alt="Example Image">
</div>

```
What Does overflow: hidden; Do?

Hides Overflowing Content: When you set overflow: hidden; on an element, any content that extends beyond the boundaries of that element will be hidden. The content will still be there, but it will not be visible or accessible to the user.


When you use a div with the class overflow-hidden in combination with specific dimensions (h-94 and w-34), it means that any content inside this div, such as an image, that exceeds these dimensions will be clipped and not visible outside the div's boundaries.

`round-`