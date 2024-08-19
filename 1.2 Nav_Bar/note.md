## Installation Tailwind

### General Steps

npm install -D tailwindcss
npx tailwindcss init

edit tailwind.config.js


Add the Tailwind to src/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;


npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

As a result:

src/css/input.css
src/css/output.css


----


### What is the difference between  content: ["./src/**/*."] and content: ["*."]?


#### Difference:
- **`./src/**/*.{html,js}`** scans all `.html` and `.js` files within the `src` directory and any subdirectories.
- **`*.{html,js}`** scans only `.html` and `.js` files in the root directory, excluding any files in subdirectories. 

The choice between the two depends on where your HTML and JavaScript files are located in your project structure.



## How to use configuration?

### Content

### Theme

### Plugins

### Presets

### Prefix

### Important

### Seperator

