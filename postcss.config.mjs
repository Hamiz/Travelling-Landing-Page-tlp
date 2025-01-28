// postcss.config.mjs
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),   // Add tailwindcss as a plugin
    autoprefixer(),  // Add autoprefixer as a plugin
  ],
};
