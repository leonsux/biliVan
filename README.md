# BiliVan: The Deep Dark Reset Protocol
# 范·達克霍姆的B站重置协议

> "Ah shit, here we go again." —— 当你试图恢复播放进度时，这个插件会对你说。

## 简介 (Introduction)

Hey buddy. 你是否厌倦了 Bilibili 那个自作聪明的“续播”功能？有时候，我们需要的不是回到过去，而是一个全新的开始 (Fresh Start)。

这个 Chrome 扩展只有一个目的：**纪律 (Discipline)**。

每当你进入一个 Bilibili 的视频播放页面（无论是普通视频还是番剧），这个看守者都会强制把进度条拖回 `00:00`。没有商量的余地，没有断点续传。

一切，从零开始。这就是 Deep Dark Fantasy 的精髓。

## 准备你的军械库 (Prerequisites)

在开始仪式之前，确保你已经准备好了以下物品：

1.  **Google Chrome 浏览器** (或者其他基于 Chromium 的浏览器，比如 Edge，如果你喜欢那种口味的话)。
2.  **一个文件夹**：用来存放你的武器。你可以叫它 `biliVan` 或者其他你喜欢的名字。
3.  **两件武器**：确保以下两个文件老老实实地待在这个文件夹的根目录下：
    -   `manifest.json` (入场券/身份证)
    -   `content.js` (执行者/鞭子)

## 安装仪式 (Installation Protocol)

这不是你在应用商店里点一下就能完成的普通安装。我们需要走后门 (Backstage access)。跟上我的节奏。

1.  **打开后门**：
    在你的 Chrome 地址栏输入以下代码，然后像个真正的男人一样按下回车键：
    `chrome://extensions`

2.  **开启开发者模式 (Developer Mode)**：
    在页面的右上角，你会看到一个名为 "开发者模式" 的开关。把它打开。
    *(Van的提示: 就像打开地牢的灯光一样。)*

3.  **加载军械库 (Load Unpacked)**：
    点击左上角出现的 **"加载已解压的扩展程序" (Load unpacked)** 按钮。

4.  **关键选择 (The Critical Choice)**：
    弹出的窗口会让你选择。听着，这是新手最容易犯错的地方。
    你必须**选中你创建的那个完整的文件夹** (例如 `biliVan`)，而不是进入文件夹去选里面的文件。
    *如果选错了，守门人会把你踢出来，告诉你“清单缺失”。Don't make that mistake again.*

5.  **完成**：
    如果一切顺利，你会在列表中看到带着我的名字的扩展卡片。仪式完成。

## 使用体验 (The Experience)

使用方法非常简单。

1.  打开 Bilibili。
2.  点开任何一个视频。
3.  看着进度条试图跳到你上次观看的位置，然后被我的脚本无情地拽回起点。
4.  享受从头开始的快感。

> 你可以按下 F12 打开控制台 (Console)，如果你看到 *"Van is watching this dungeon..."* 的字样，说明我正在注视着这一切。

## 故障调教 (Troubleshooting / Adjustment)

有时候，事情不会一帆风顺。如果你遇到了问题，这里有一些基本的调教手段：

*   **Q: 浏览器提示“清单文件缺失或不可读取”！**
    *   **A:** Boy, 我刚才强调过了。你是不是又双击进入文件夹了？回去，点击“加载已解压的扩展程序”，然后**单击选中整个文件夹**。

*   **Q: 视频没有重置，还是从中间播放了。**
    *   **A:** 刷新一下页面。有时候B站的前端加载太慢，我的刺客还没来得及出手。如果经常发生，你可能需要检查一下 `content.js` 里的定时器频率（虽然现在的设定已经很完美了）。

*   **Q: 我想暂时关掉它，但我不想卸载。**
    *   **A:** 回到 `chrome://extensions` 页面，找到这个扩展的卡片，把它上面的蓝色开关关掉即可。随时可以再打开。

---
*"Now get out of here, go watch some videos from the very beginning."*
—— Van
