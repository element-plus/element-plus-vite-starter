# 根项目结构(/src)


src
|__ assets：静态资源（图片等）
|__ components: 组件
|__ composables: element plus的暗黑模式的导入（项目模板自带）
|__ router: vue-router的路由配置
|__ styles: css / scss集合
|__ views：页面
   |__ Buyer: 买家页面
   |__ Goods: 商品 / 商店详情页（通用）
   |__ Seller: 卖家页面



# （模板项目原描述）element-plus-vite-starter

> A starter kit for Element Plus with Vite

- Preview: <https://vite-starter.element-plus.org>

This is an example of on-demand element-plus with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

> If you want to import all, it may be so simple that no examples are needed. Just follow [quickstart | Docs](https://element-plus.org/zh-CN/guide/quickstart.html) and import them.

If you just want an on-demand import example `manually`, you can check [unplugin-element-plus/examples/vite](https://github.com/element-plus/unplugin-element-plus/tree/main/examples/vite).

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

## Usage

```bash
git clone https://github.com/element-plus/element-plus-vite-starter
cd element-plus-vite-starter
npm i
npm run dev
```

### Custom theme

See `src/styles/element/index.scss`.
