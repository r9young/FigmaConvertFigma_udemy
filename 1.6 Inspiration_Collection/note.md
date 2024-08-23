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

