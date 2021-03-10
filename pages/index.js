import { useRouter } from 'next/router'
import Link from "next/link";
import Post from "../components/Post";
import Layout from "../components/Layouts";
import Slide from "../components/Slide";

import { getAllPosts, getAllSlider } from "../lib/index";

export async function getStaticProps({ params }) {
  const posts = await getAllPosts();
  const slide = await getAllSlider();
  return { revalidate: 1, props: { posts, slide } };
}

export default function Index({ posts, slide }) {
  const router = useRouter();
  console.log('slide==>', slide)
  console.log('posts==>', posts)

  return (
    <Layout title="Blog with Next.js and Contentful">
      {/* <Layout
        // type your page title and page description.
        title="Blog with Next.js and Contentful"
        description="This is a Blog Demo with Next.js and Contentful. You can see the code in github. And you can use the code to make your own blog. "
      > */}
      <div className="container-lg py-4">

        <Slide
          className="mt-5"
          data={slide}
        />
        {/* <ul className="nav justify-content-center">
          <li className="nav-item">

            <Link href={{
              pathname: `/categories`,
              // query: { slug: 'categories' }
              // ,
            }}
              as={`/categories`}
            >
              <a className="nav-link">All</a>
            </Link>
          </li>
          {
            category?.map(({ fields }, index) => (
              <li className="nav-item" key={index}>
                <Link

                  href={{
                    pathname: `/categories/${fields.category}`,
                    // query: { slug: 'categories' }
                    // ,
                  }}


                >
                  <a className={router.pathname == `/categories/${fields.category}` ? "nav-link active" : "nav-link"}>{fields.category}</a>
                </Link>
              </li>
              // <li className="nav-item">
              //   <a className="nav-link disabled" href="#">Disabled</a>
              // </li>
            ))
          }
        </ul> */}
        <h3 className="mt-5 mb-5">Lasted Content</h3>
        <div className="card-deck flex-wrap">
          {posts?.slice(0, 5).map(({ fields }, index) => {
            return (
              <Post
                key={index}
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
      {/* </Layout> */}
    </Layout>
  );
}