/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    presets: [
      require('./my-preset')
    ],
    theme: {
      extend: {
        fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    plugins: [],
  }
}

