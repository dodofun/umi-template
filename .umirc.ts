import { defineConfig } from 'umi';
import { routes } from './src/routes'

export default defineConfig({
  title: 'Umi',
  base: '/',
  publicPath: './',
  runtimePublicPath: true,
  outputPath: 'dist',
  hash: true,
  history: {
    type: 'browser', // browser
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
});
