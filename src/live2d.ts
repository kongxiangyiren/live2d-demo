import { loadOml2d } from 'oh-my-live2d';
console.log(import.meta.env.BASE_URL);

loadOml2d({
  models: [
    {
      path: import.meta.env.DEV
        ? (await import('live2d-widget-model-shizuku/assets/shizuku.model.json?url')).default
        : import.meta.env.BASE_URL + 'plugin/live2d-widget-model-shizuku/assets/shizuku.model.json',
      //   path: 'https://registry.npmmirror.com/live2d-widget-model-shizuku/1.0.5/files/assets/shizuku.model.json',
      scale: 0.15,
      position: [-10, 35],
      stageStyle: {
        width: 250,
        height: 250
      }
    }
  ],
  importType: 'cubism2',
  libraryUrls: {
    cubism2: import.meta.env.DEV
      ? (await import('live2dcubismcore/live2d.min.js?url')).default
      : import.meta.env.BASE_URL + 'plugin/live2dcubismcore/live2d.min.js',
    cubism5: import.meta.env.DEV
      ? (await import('live2dcubismcore/live2dcubismcore.min.js?url')).default
      : import.meta.env.BASE_URL + 'plugin/live2dcubismcore/live2dcubismcore.min.js'
    // cubism2: 'https://registry.npmmirror.com/live2dcubismcore/latest/files/live2d.min.js',
    // cubism5: 'https://registry.npmmirror.com/live2dcubismcore/latest/files/live2dcubismcore.min.js'
  },
  tips: {
    style: {
      width: 230,
      height: 120,
      offsetX: -10,
      offsetY: -100
    },
    idleTips: {
      //   interval: 15000,
      //   wordTheDay: true
    }
  }
});
