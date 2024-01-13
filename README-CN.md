# 用 Vite + React 构建的简历模板

这个repo托管了我的简历源代码，技术栈为 Vite，React，Tailwind 和 DaisyUI。

[⚡在线展示](https://cv-react-lifeitech.netlify.app/)

[English](README.md) | [中文](README-CN.md)

## 特点

- 使用 [Vite](https://vitejs.dev/)。Vite的速度十分快，开发时任何文件的改动会立即显示在屏幕上。

- 格式与内容分离。所有简历数据都在 [data.jsx](/src/sections/data.jsx) 中定义。

- 两列，可A4打印。

- 暗黑主题。

- 中英双语自由切换。

## 如何开发 

1. Clone这个repo到本地。

    ```shell
    git clone https://github.com/lifeitech/cv-react.git
    ```

2. `cd` 到此文件夹，执行下面的命令来安装所有的包

    ```shell
    npm install
    ```

3. 执行下面的命令

    ```shell
    npm run dev
    ```

    即可进入开发模式。将 [data.jsx](/src/sections/data.jsx) 中的信息替换成你自己的，另外不要忘了把 [`public`](/public/) 文件夹中的logo也替换成你自己的。

4. 在浏览器中，右键单击页面，然后点击“打印”将页面保存为PDF。由于我们使用了深色背景，请在打印对话框中将边距设置为“无”，以确保没有白色边框。