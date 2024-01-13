# CV/Resume Built with Vite + React

This repository hosts source code for my resume, built with Vite, React and Tailwind.

[⚡Demo](https://cv-react-lifeitech.netlify.app/)

[English](README.md) | [中文](README-CN.md)

## Features

- Using [Vite](https://vitejs.dev/). Vite is fast. When in development, edits you make to files should be instantly reflected on screen.

- Separation of content with format. All the resume data is placed in [data.jsx](/src/sections/data.jsx).

- Two-column A4 layout.

- Dark theme.

- Bilingual.

## How to build

1. Clone this repository to your local machine.

    ```shell
    git clone https://github.com/lifeitech/cv-react.git
    ```

2. `cd` to the repository. Install all dependencies by running

    ```shell
    npm install
    ```

3. Run

    ```shell
    npm run dev
    ```

    to start developing. Replace the data in [data.jsx](/src/sections/data.jsx) with your own career info. Replace logos in the [`public`](/public/) folder with your own relevant ones.

4. In the browser, right click the page and click "print" to save the page in PDF. Since we have dark background, be sure to remove any margin by setting the margin to "none" in the print dialog.