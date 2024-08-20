## Nav Bar


### Nav Framework

#### `shadow-md`

**Ref**: Effect/boxshadow

**Effect**: applies a medium-sized box shadow to an element

Use the shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, or shadow-2xl utilities to apply different sized outer box shadows to an element.


<nav style="padding-top: 1.25rem; padding-bottom: 1.25rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);">
</nav>


#### `w-9/12`

**ref**: size/wide

 <div style="display: flex; background-color: lightgray; padding: 20px;">
    <div style="width: 75%; background-color: lightblue; padding: 20px; text-align: center;">
        w-9/12 (75%)
    </div>
</div>

------

#### `mx-auto`

**Ref**: Layout/Container

**Effect**: center a container

The `mx-auto` utility class in Tailwind CSS is used to center an element horizontally within its container. Here's a breakdown of what it does:

- **`m`** stands for margin.
- **`x`** refers to the horizontal axis, meaning it applies to both the left and right margins.
- **`auto`** is the value that centers the element by automatically adjusting the left and right margins.

#### When to Use `w-9/12 mx-auto`:
- **Centering block elements:** `mx-auto` is typically used on block-level elements (like `<div>`, `<img>`, etc.) that have a defined width. By setting the left and right margins to `auto`, the element is centered within its parent container.


<div style="width: 75%; margin-left: auto; margin-right: auto;  background-color: lightgray; padding: 20px;">
    <p style="background-color: lightblue; padding: 20px;text-align: center;">w-9/12 (75%)</p>
</div>



#### `flex justify-around` & `flex space-between`


#### Flexbox justify-around Example

Use `justify-around` to justify items along the container’s main axis such that there is an equal amount of space on each side of each item:


<div style="display: flex; justify-content: space-between; border: 1px solid black; padding: 10px;">
  <div style="background-color: lightblue; padding: 10px;">Item 1</div>
  <div style="background-color: lightgreen; padding: 10px;">Item 2</div>
  <div style="background-color: lightcoral; padding: 10px;">Item 3</div>
</div>

#### Flexbox Space Around Example

`flex space-between`

Use justify-between to justify items along the container’s main axis such that there is an equal amount of space between each item:

<div style="display: flex; justify-content: space-around; border: 1px solid black; padding: 10px;">
  <div style="background-color: lightblue; padding: 10px;">Item 1</div>
  <div style="background-color: lightgreen; padding: 10px;">Item 2</div>
  <div style="background-color: lightcoral; padding: 10px;">Item 3</div>
</div>

------

## ul & li

#### `flex gap-6 text-sm`

**`flex`** 

**flex**: Makes the `<ul>` a flex container, and its child elements (the `<li>` items) will be displayed in a row (horizontally) by default.

horizontal = in a row

**`gap-6`**

Use the gap-* utilities to change the gap between both rows and columns in grid and flexbox layouts.


<ul style="display: flex; gap: 24px; font-size: 0.875rem;">
    <li class="cursor-pointer hover:text-blue-800"><a href="#">Home</a></li>
    <li class="cursor-pointer hover:text-blue-800"><a href="#">Service</a></li>
    <li class="cursor-pointer hover:text-blue-800"><a href="#">Doctors</a></li>
    <li class="cursor-pointer hover:text-blue-800"><a href="#">Products</a></li>
    <li class="cursor-pointer hover:text-blue-800"><a href="#">Gallery</a></li>
</ul>


#### `cursor-pointer`

#### `hover: text-blue-800`


