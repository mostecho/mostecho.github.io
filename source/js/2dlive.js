// 注意：live2d_path 参数应使用绝对路径
// const live2d_path = "https://cdn.jsdelivr.net/gh/adingapkgg/live2d-api/";
const live2d_path = "https://registry.npmmirror.com/weblive2d/latest/files/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;

    if (type === "css") {
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = url;
    } else if (type === "js") {
      tag = document.createElement("script");
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => {
        console.log(`Successfully loaded ${url}`);
        resolve(url);
      };
      tag.onerror = () => {
        console.error(`Failed to load ${url}`);
        reject(url);
      };
      document.head.appendChild(tag);
    } else {
      reject(new Error(`Unsupported resource type: ${type}`));
    }
  });
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
  Promise.all([
    loadExternalResource(live2d_path + "js/live2d.min.js", "js"),
    loadExternalResource(live2d_path + "js/waifu-tips.js", "js"),
  ]).then(() => {
    try {
      const promise = new Promise((resolve, reject) => {
        reject('error');
      });
      const result = await promise;
    } catch (error) {
      console.log(error);
    }
    // 配置选项的具体用法见 README.md
    initWidget({
      waifuPath: live2d_path + "waifu-tips.json",

      // apiPath: "https://live2d.fghrsh.net/api/",
      cdnPath: live2d_path,

      tools: [
        "hitokoto",
        "asteroids",
        "switch-model",
        "switch-texture",
        "photo",
        "info",
        "quit",
      ],
    });
  }).catch((error) => {
    console.error('Failed to load resources:', error);
    // 你可以在这里添加额外的错误处理逻辑
  });
}