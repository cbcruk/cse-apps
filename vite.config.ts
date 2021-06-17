import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mix, { vercelAdapter } from 'vite-plugin-mix'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'

export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [
    vue(),
    mix({
      handler: './handler.ts',
      adapter: vercelAdapter()
    }),
    WindiCSS(),
    ViteComponents({
      extensions: ['vue'],
      globalComponentsDeclaration: true
    })
  ]
})
