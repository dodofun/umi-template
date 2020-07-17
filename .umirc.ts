import { defineConfig } from 'umi';
import { routes } from './src/routes';
import chainWebpack from './config/chainWebpack.config';
import { proDefine } from './config/define/pro.env';
import { devDefine } from './config/define/dev.env';
import { commomDefine } from './config/define/common.env';
import proxy from './config/proxy';
const app = require('./package.json');

// @ts-ignore
const PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

const { NODE_ENV } = process.env;

let defineParams;

if (PROD) {
  defineParams = proDefine;
} else {
  defineParams = devDefine;
}

export default defineConfig({
  mountElementId: 'root',
  alias: {},
  title: 'Umi',
  base: '/',
  publicPath: './',
  runtimePublicPath: true,
  outputPath: 'dist',
  hash: true,
  history: {
    type: 'browser', // hash
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  proxy,
  dynamicImport: {
    loading: '@/components/loading', // 页面加载组件
  },
  chunks: PROD ? ['vendors', 'antd', 'umi'] : ['umi'],
  chainWebpack: PROD ? chainWebpack : false,
  cssLoader: {
    localsConvention: 'camelCase',
    modules: true,
    sourceMap: !PROD,
  },
  cssnano: {},
  define: {
    NODE_ENV,
    ...commomDefine,
    ...defineParams,
  },
  // exportStatic: {
  //   htmlSuffix: false,
  //   dynamicRoot: false
  // },
  externals: {},
  scripts: [],
  headScripts: [],
  extraBabelPlugins: [PROD ? 'transform-remove-console' : ''],
  extraBabelPresets: [],
  extraPostCSSPlugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-aspect-ratio-mini')({}),
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 750,
      unitPrecision: 5, // 单位转换后保留的精度（精确到小数点位数）
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [], // 需要忽略的CSS选择器
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [], // 忽略某些文件夹下的文件或特定文件
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 750,
    }),
    require('postcss-write-svg')({
      utf8: false,
    }),
    require('postcss-viewport-units')({}),
  ],
  lessLoader: {},
  mock: {
    exclude: [],
  },
  metas: [
    {
      name: 'keywords',
      content: app.keywords,
    },
    {
      name: 'description',
      content: app.description,
    },
  ],
  plugins: [],
  polyfill: {
    imports: [
      'core-js/features/promise/try',
      'core-js/proposals/math-extensions',
    ],
  },
  targets: {
    ie: 11,
  },
  terserOptions: {},
});
