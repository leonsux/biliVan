(function () {
  // 标记位：每一段新视频开始时，我们需要拦截第一次“非零”的进度设置
  let needsReset = true;
  let lastUrl = location.href;

  // 监听 URL 变化（针对单页应用换 P）
  setInterval(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      needsReset = true; // 换视频了，开启下一轮拦截
    }
  }, 500);

  // 核心逻辑：劫持 HTMLMediaElement 的 currentTime 属性
  const originalGetter = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime').get;
  const originalSetter = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime').set;

  Object.defineProperty(HTMLMediaElement.prototype, 'currentTime', {
    get: function () {
      return originalGetter.call(this);
    },
    set: function (newValue) {
      // 如果满足以下条件，我们就认为这是 B 站自动跳转历史进度的行为：
      // 1. 这是一个新视频 (needsReset 为 true)
      // 2. 跳转的目标时间大于 0
      if (needsReset && newValue > 0) {
        console.log(`[拦截成功] B站尝试跳转到 ${newValue}s，已强制重置为 0s`);
        newValue = 0;
        needsReset = false; // 只拦截第一次自动跳转，不影响用户手动拉进度条
      }

      // 执行真正的设置进度操作
      originalSetter.call(this, newValue);
    },
    configurable: true
  });

  console.log("Ah, I see you. 重置时间轴到 00:00。DO IT NOW.");
})();