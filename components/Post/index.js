import React from "react"
import Markdown from "react-markdown"
import Author from "../Author"
import moment from "moment";
import Link from "next/link";

export default function Post({
  title,
  subtitle,
  body,
  author,
  authorName,
  authorImage,
  description,
  slug,
  date,
  coverImage,
}) {
  // export default function Post({ post }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <Link href={`/blog/${slug}`}>
        <a>
          <div className="card h-100">
            {
              coverImage && (<img src={coverImage.file.url} className="card-img-top" alt="" />)
            }
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div className="card-text">
                <Markdown source={description.substring(0, 150)} escapeHtml={true} />
              </div>
              {/* <Author author={author} /> */}
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Published: {moment(date).format("MMMM Do YYYY")}
              </small>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}