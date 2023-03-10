import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

// Link组件是支持客户端导航的 就意味着是通过js的方式进行跳转 比浏览器完成的默认导航要快
// Next虽然是服务端渲染 印象中使用服务端渲染在进行页面跳转时应该是服务端拿到新页面给到网页整体进行渲染
// 但是Next却是客户端导航 也就是说在进行页面跳转的时候只有变化的部分会进行更新

// 生产环境中 只要出现Link标签的组件 就会预取连接页面的代码 当点击连接时 目标页面的代码已经在后台处理好了 页面转换时实时的

// 原理: Link标签实际渲染的是a标签 当点击这个标签后 会通过js代码的方式渲染新页面同时阻止a标签的跳转 如果禁用js之后就会发现
//       页面会整体进行刷新 表示采用了a标签的跳转 这样既有利于SEO也提高了页面跳转的速度 一举两得

export default function FirstPost() {
  return (
    <Layout>
      {/* 如果要修改html中的元数据 可以使用Head组件 */}
      <Head>
        <title>First Post</title>
        {/* 第一种加载外部依赖的方式： 会影响性能 */}
        {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
      </Head>

      {/* 第二种加载外部依赖的方式 通过内置的Script组件 */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        // 设置脚本何时加载
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
