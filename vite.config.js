import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),tailwindcss(),{
      name: 'force-full-reload',
      handleHotUpdate({ server }) {
        // Send a signal to the browser to do a full refresh
        server.ws.send({ type: 'full-reload' });
        // Return an empty array to stop the default HMR behavior
        return [];
      }
    }
  ],
})
