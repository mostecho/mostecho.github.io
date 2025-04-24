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
      // 为标签添加跨域属性，解决可能的跨域问题
      if (type === "js") {
        tag.crossOrigin = "anonymous";
      }

      tag.onload = () => {
        console.log(`Successfully loaded ${url}`);
        resolve(url);
      };
      tag.onerror = (event) => {
        // 输出更详细的错误信息
        console.error(`Failed to load ${url}:`, event);
        reject(new Error(`Failed to load ${url}: ${event.type}`));
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
  ])
  .then(async () => {
    try {
      // 这里的 promise 逻辑可能需要调整，目前直接 reject 可能不符合预期
      const promise = new Promise((resolve, reject) => {
        // 暂时注释掉，避免不必要的错误
        // reject('error'); 
      });
      const result = await promise;
    } catch (error) {
      console.error('Promise error:', error);
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
  })
  .catch((error) => {
    console.error('Failed to load all resources:', error);
    // 可以在这里添加备用资源加载逻辑
    // 例如：尝试从其他 CDN 加载资源
  });
}