import { defineConfig } from 'vite';
import CopyPlugin from 'vite-copy-plugin';
import { Plugin as CDN } from 'vite-plugin-cdn-import';
export default defineConfig({
  plugins: [
    // copy 文件
    CopyPlugin([
      // copy libraryUrls
      {
        from: './node_modules/live2dcubismcore/live2d.min.js',
        to: './dist/plugin/live2dcubismcore/live2d.min.js'
      },
      {
        from: './node_modules/live2dcubismcore/live2dcubismcore.min.js',
        to: './dist/plugin/live2dcubismcore/live2dcubismcore.min.js'
      },

      //   copy live2d 模型
      {
        from: './node_modules/live2d-widget-model-shizuku',
        to: './dist/plugin/live2d-widget-model-shizuku'
      }
    ]),
    // cdn 提取
    // CDN({
    //   prodUrl: 'https://registry.npmmirror.com/{name}/{version}/files/{path}',
    //   modules: [
    //     {
    //       name: 'oh-my-live2d',
    //       var: 'OML2D',
    //       path: 'dist/index.min.js'
    //     }
    //   ]
    // })
  ],
  build: {
    chunkSizeWarningLimit: 1000
  }
});
