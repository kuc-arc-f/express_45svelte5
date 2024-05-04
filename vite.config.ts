import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [svelte()], 
      define: {
        "process.env.NODE_ENV": '"production"',
      },      
      build: {
        lib: {
          entry: [
            './src/main.ts',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [svelte()]
    }
  }
})
