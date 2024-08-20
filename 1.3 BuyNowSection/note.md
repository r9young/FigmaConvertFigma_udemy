## Buy Now Section

```html

<div class="bg-[#DFE9F4] max-w-lg rounded-md p-8 space-y-4 shadow-lg mr-20 p-[45px]">
    <p class="font-montserrat font-semibold text-gray-600">New Arrival</p>
    <p class="font-montserrat font-bold text-5xl text-[#054C73]">Discover Our New Colletion</p>
    <p class="font-montserrat text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <button class="py-3 px-6 round-full bg-[#054C73] text-white text-sm font-semibold uppercase rounded-[50px]">
        Buy Now
    </button>
</div>

```


### Size (setting width)

`max-w-lg`

**size**: Setting the maximum width

max-w-xs	max-width: 20rem; /* 320px */

<div style="max-width: 20rem; background-color: #ff6b6b; color: white; padding: 1rem; margin-bottom: 1rem;">
    This div has a max-width of 20rem (320px).
</div>

max-w-sm	max-width: 24rem; /* 384px */

<div style="max-width: 24rem; background-color: #4ecdc4; color: white; padding: 1rem; margin-bottom: 1rem;">
    This div has a max-width of 24rem (384px).
</div>

max-w-md	max-width: 28rem; /* 448px */

<div style="max-width: 28rem; background-color: #1a535c; color: white; padding: 1rem;">
    This div has a max-width of 28rem (448px).
</div>

<br>

-----

`rounded-md`

Border Radius

-----

`space-y-4` & `space-y-2`

`space-y-4`

 <div style="display: flex;">
        <div style="margin-right: 1rem; background-color: #ff6b6b; color: white; padding: 1rem; text-align: center;">01</div>
        <div style="margin-right: 1rem; background-color: #4ecdc4; color: white; padding: 1rem; text-align: center;">02</div>
        <div style="background-color: #1a535c; color: white; padding: 1rem; text-align: center;">03</div>
</div>

<br>

`space-y-2`
<div style="display: flex;">
    <div style="margin-right: 0.5rem; background-color: #ff6b6b; color: white; padding: 1rem; text-align: center;">01</div>
    <div style="margin-right: 0.5rem; background-color: #4ecdc4; color: white; padding: 1rem; text-align: center;">02</div>
    <div style="background-color: #1a535c; color: white; padding: 1rem; text-align: center;">03</div>
</div>

-----

`shadow-lg`

`mr-20`

```html

<div class="relative flex items-center justify-end min-h-screen bg-cover bg-center z-10" style="background-image: url('./src/assets/Mask_Group.jpg');">
    <div class="bg-black/30 absolute inset-0 h-full w-full -z-10"></div>
    <!-- inner submit window -->
    <div class="bg-[#DFE9F4] max-w-lg rounded-md p-8 space-y-4 shadow-lg mr-20 p-[45px]">
</div>

```

so mr-20 is relative to bg-center

- **`justify-end`** aligns the inner submit window to the far right.
- **`mr-20`** then moves this right-aligned `div` 5rem to the left, creating some space between the submit window and the right edge of the parent container.

This combination ensures that the submit window is aligned toward the right but not completely flush with the edge—it has a margin of 5rem to the left, giving it a more balanced and visually appealing position.


<div style="display: flex; justify-content: end; background-color: #f0f0f0; padding: 1rem;">
    <div style="background-color: #ff6b6b; color: white; text-align: center; padding: 1rem; margin-right: 1rem;">01</div>
    <div style="background-color: #4ecdc4; color: white; text-align: center; padding: 1rem; margin-right: 1rem;">02</div>
    <div style="background-color: #1a535c; color: white; text-align: center; padding: 1rem;">03</div>
</div>

<br>

`justify-end` + `mr-20`

<div style="display: flex; justify-content: end; background-color: #f0f0f0; padding: 1rem; margin-right: 20rem;">
    <div style="background-color: #ff6b6b; color: white; text-align: center; padding: 1rem; margin-right: 1rem;">01</div>
    <div style="background-color: #4ecdc4; color: white; text-align: center; padding: 1rem; margin-right: 1rem;">02</div>
    <div style="background-color: #1a535c; color: white; text-align: center; padding: 1rem;">03</div>
</div>

-----

### Title


### button