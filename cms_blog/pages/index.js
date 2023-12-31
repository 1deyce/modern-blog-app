import Head from "next/head";
import { PostCard, PostWidget, Categories, Header } from "../components";
import { getPosts } from "../services";
import { getInitialProps } from "next/router";
import { FeaturedPosts } from "@/sections";

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <FeaturedPosts />
      <Head>
        <title>Splattr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 text-white">
          {posts.map((post) => <PostCard post={post.node} key={post} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8 text-white">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
} 
