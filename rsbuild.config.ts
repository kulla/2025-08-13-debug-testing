import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  html: {
    title: 'Debug Testing',
  },
  output: {
    assetPrefix: '/2025-08-13-debug-testing/',
  },
  plugins: [pluginReact()],
})
