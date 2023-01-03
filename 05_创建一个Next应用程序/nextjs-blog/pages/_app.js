import "../styles/globals.css";

// 只能在这个文件中导入全局css
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
