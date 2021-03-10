import { useRouter } from 'next/router'
import Post from "../../components/Post";
import Layout from "../../components/Layouts";
import Link from "next/link";
import { getAllPosts } from "../../lib";

export async function getStaticProps({ params }) {
  const posts = await getAllPosts();
  const category = [...new Map(posts.map(item => [item.fields.category, item])).values()]

  return { revalidate: 1, props: { posts, category } };
}

export default function Index({ posts, category }) {

  const router = useRouter();
  console.log('router', router.pathname)
  return (
    <Layout title="Blog with Next.js and Contentful">
      <div className="container-lg py-4">

        <h3 className="mt-5">All Content</h3>
        <ul className="nav justify-content-end mb-3">
          <li className="nav-item">

            <Link href={{
              pathname: `/contents`,
            }}
            >
              <a className={router.pathname === '/contents' ? "nav-link active" : "nav-link"}>All Content</a>
            </Link>
          </li>
          {
            category?.map(({ fields }, index) => (
              <li className="nav-item" key={index}>
                <Link
                  href={{
                    pathname: `/categories/${fields.category}`,
                  }}
                >
                  <a className={router.pathname == `/categories/${fields.category}` ? "nav-link active" : "nav-link"}>{fields.category}</a>
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="card-deck flex-wrap">
          {posts?.map(({ fields }, index) => {
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