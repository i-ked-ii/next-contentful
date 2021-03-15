import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Post from '../../components/Post';
import Layout from '../../components/Layouts';

import { getAllPosts, getPostsByCategory } from '../../lib/index';

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ fields }) => ({
    params: { slug: fields.category.toString() },
  }))
  return {
    paths,
    // fallback: true,
    fallback: false,
  };
  // return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await getAllPosts();
  const post2 = await getPostsByCategory(slug)
  const category = [...new Map(posts.map(item => [item.fields.category, item])).values()]
  return { revalidate: 1, props: { posts, category, post2, slug } };
}

export default function Categories({ posts, category, post2, slug }) {
  const router = useRouter();
  // console.log('router.pathname', router.pathname.substr(0, 12) + slug)
  return (
    <Layout title="Blog with Next.js and Contentful">
      <motion.section
        exit={{ opacity: 0 }}
        className="contact-wrapper pt-4"
      >
        <motion.div
          variants={content}
          animate="animate"
          initial="initial"
          className="container-lg py-4"
        >
          <div className="container-lg py-4">
            <motion.div
              variants={title}
              className="text-center"
            >
              <h3 className="py-5 mb-0">{slug}</h3>
            </motion.div>
            <motion.ul
              variants={title}
              className="nav justify-content-end mb-3"
            >
              <li className="nav-item">

                <Link href={{
                  pathname: `/contents`,
                }}
                  as={`/contents`}
                >
                  <a className="nav-link">All Content</a>
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
            </motion.ul>
            <motion.div
              variants={title}
              className="card-deck flex-wrap"
            >
              {post2?.map(({ fields }, index) => {
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
            </motion.div>
            <style jsx>{`
                .card-deck .card {
                  display: flex;
                  flex: 1 0 auto;
                }
              `}</style>
          </div>
        </motion.div>
      </motion.section>
    </Layout >
  );
}