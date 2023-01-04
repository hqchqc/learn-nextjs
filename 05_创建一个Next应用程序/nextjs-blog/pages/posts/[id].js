import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css';

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <Date dateString={postData.date} />

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

// 在开发中会在每个请求上运行
// 在生产中 只在构建时运行
export async function getStaticPaths() {
  console.log('run')
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    // false: 如果未匹配到路径显示404页面
    // true: 如果未匹配到路径 显示fallback版本提供的页面
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}