// Van Darkholme's script execution realm.
// 我们在这里维持秩序。

console.log("Van is watching this dungeon. 准备重置进度...");

let currentUrl = location.href;
let hasResetDone = false;

// 这个函数是执行核心任务的“鞭子”
function enforceDiscipline() {
  // 寻找视频标签。在B站的HTML海洋里找到那个<video>。
  // 通常B站的视频标签没有特定的ID，所以我们抓取第一个出现的video标签。
  const videoElement = document.querySelector("video");

  // 由于网络延迟+页面渲染，进度大于500的才认为是看过的视频
  const isOldVideo = videoElement.duration > 500;
  
  if (videoElement && !hasResetDone && isOldVideo) {
    videoElement.muted = true;
  }

  // 检查视频是否存在，以及它是否已经加载了元数据（知道自己的长度）
  // 如果我们还没有在这个URL上执行过重置，那就动手。
  if (videoElement && isOldVideo && !hasResetDone && !videoElement.paused) {
    console.log("Ah, I see you. 重置时间轴到 00:00。DO IT NOW.");

    videoElement.muted = false;

    videoElement.pause();
    // 核心动作：将当前时间设置为0
    videoElement.currentTime = 0;
    setTimeout(() => {
      videoElement.play();
    }, 10);

    // 标记任务完成，防止它像个疯子一样不停地重置
    hasResetDone = true;

    // 可选：如果你希望重置后立刻暂停，取消下面这行的注释
    // videoElement.pause();
  }
}

// 启动一个定时器，每秒钟检查一次地牢的状态。
// 这比复杂的事件监听更简单粗暴，也更有效，因为B站的加载机制很复杂。
setInterval(() => {
  // 检查我们是否进入了一个新的房间（URL是否改变）
  if (location.href !== currentUrl) {
    console.log("检测到新的 URL。准备新的仪式。");
    currentUrl = location.href;
    // 新视频，重置标记位，准备再次出击
    hasResetDone = false;
  }

  // 只有当我们身处视频播放页时，才执行纪律检查
  if (
    window.location.hostname === "www.bilibili.com" &&
    (window.location.pathname.includes("/video/") ||
      window.location.pathname.includes("/bangumi/play/") ||
      window.location.pathname.includes("/list/"))
  ) {
    enforceDiscipline();
  }
}, 1000); // 1000毫秒（1秒）检查一次，这频率刚刚好，既保持压力又不至于让浏览器崩溃。
