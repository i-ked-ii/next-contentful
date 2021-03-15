import Post from "../components/Post";
import Layout from "../components/Layouts";
import Carousel from "../components/Carousel";

import { getAllPosts, getAllSlider } from "../lib/index";

export async function getStaticProps({ params }) {
  const posts = await getAllPosts();
  const slide = await getAllSlider();
  return { revalidate: 1, props: { posts, slide } };
}

export default function Index({ posts, slide }) {
  return (
    <Layout title="Blog with Next.js and Contentful">
      <div className="container-lg py-4">
        <Carousel
          data={slide}
        />
        <h3 className="mt-5 mb-5">Lasted Content</h3>
        <div className="card-deck flex-wrap">
          {posts?.slice(0, 5).map(({ fields }, index) => {
            return (
              <Post
                key={index.toString()}
                title={fields.title}
                author={fields.author}
                date={fields.publishDate}
                description={fields.description}
                slug={fields.slug}
                coverImage={fields.heroImage.fields}
              />
            )
          })}
          {
            posts.length > 6 ? <></> : <></>
          }
        </div>
        <style jsx>{`
            .card-deck .card {
              display: flex;
              flex: 1 0 auto;
            }
          `}</style>
      </div>
    </Layout>
  );
}