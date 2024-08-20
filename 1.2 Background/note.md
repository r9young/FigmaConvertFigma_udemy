## Background


```html

<!-- background image -->
<div class="relative flex items-center justify-center min-h-screen bg-cover bg-center" style="background-image: url('./src/assets/Mask_Group.jpg');">
    <div class="bg-black/30 absolute inset-0 h-full w-full">teest</div>
</div>

```

-----

### `relative` & `absolute`

### `flex item-center`

```html

<div class="flex items-center ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>

```

<div style="display: flex; align-items: center; background-color: #f0f0f0; padding: 1rem;">
    <div style="padding-top: 1rem; padding-bottom: 1rem; background-color: #ff6b6b; color: white; text-align: center; margin-right: 1rem;">py-4</div>
    <div style="padding-top: 3rem; padding-bottom: 3rem; background-color: #4ecdc4; color: white; text-align: center; margin-right: 1rem;">py-12</div>
    <div style="padding-top: 2rem; padding-bottom: 2rem; background-color: #1a535c; color: white; text-align: center;">py-8</div>
</div>

### `justify-center`

Use justify-center to justify items along the center of the container’s main axis:

<div style="display: flex; justify-content: center; background-color: #f0f0f0; padding: 1rem;">
    <div style="background-color: #ff6b6b; color: white; text-align: center; padding: 1rem; margin-right: 1rem;">01</div>
    <div style="background-color: #4ecdc4; color: white; text-align: center; padding: 1rem; margin-right: 1rem;">02</div>
    <div style="background-color: #1a535c; color: white; text-align: center; padding: 1rem;">03</div>
</div>

### `justify-end`

Use justify-end to justify items against the end of the container’s main axis:

<div style="display: flex; justify-content: end; background-color: #f0f0f0; padding: 1rem;">
    <div style="background-color: #ff6b6b; color: white; text-align: center; padding: 1rem; margin-right: 1rem;">01</div>
    <div style="background-color: #4ecdc4; color: white; text-align: center; padding: 1rem; margin-right: 1rem;">02</div>
    <div style="background-color: #1a535c; color: white; text-align: center; padding: 1rem;">03</div>
</div>

### `min-h-screen`

min-h-screen	min-height: 100vh;

<div style="
    min-height: 100vh; 
    background-color: #3b82f6; 
    display: flex; 
    align-items: center; 
    justify-content: center;">
    <h1 style="color: #ffffff; font-size: 1.875rem;">Hello, World!</h1>
</div>

### `bg-cover` & `bg-center`

`bg-center` is in background position

`bg-cover`  is in background size

<div style="background-image: url('https://th.bing.com/th?id=ORMS.1e2bb5e83fe2e1e3be082cfa22d6c311&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=2&p=0'); background-size: cover; background-position: center; height: 300px;">
    <!-- Content here -->
</div>

<br>

`bg-bottom` is in background position

<div style="background-image: url('https://th.bing.com/th?id=ORMS.1e2bb5e83fe2e1e3be082cfa22d6c311&pid=Wdp&w=612&h=328&qlt=90&c=1&rs=1&dpr=2&p=0'); background-size: cover; background-position: bottom left; height: 300px;">
    <!-- Content here -->
</div>

-----