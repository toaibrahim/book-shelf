module.exports = {
  // ... other configurations
  
  plugins: [require("daisyui")],
  
  // DaisyUI configuration block
  daisyui: {
    // Set 'light' as the default theme
    themes: ["light", "dark"], // You can keep 'dark' available, but 'light' is the first/default
    
    // Ensure the theme is applied to the root element 
    // (This is often 'body', but can be the html tag depending on setup)
    // You can set the data-theme attribute on the <html> element
    darkTheme: "dark", // name of one of the themes in `themes`
    theme: "light", // This should make 'light' the default
  },
};