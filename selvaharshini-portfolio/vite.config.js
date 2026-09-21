import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change `base` to '/<your-repo-name>/' if deploying to GitHub Pages
// under https://<username>.github.io/<repo-name>/
export default defineConfig({
  plugins: [react()],
  base: './',
})
