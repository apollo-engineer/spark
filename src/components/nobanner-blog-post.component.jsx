import { Link } from "react-router-dom";
import { getDay } from "../common/date";

const MinimalBlogPost = ({ blog, index }) => {
  let { title, blog_id: id, author: { personal_info: { fullname, username, profile_img }} , publishedAt } = blog;

  return (
    <Link to={`/blog/${id}`} className="flex gap-5 mb-8">
      <h1 className="blog-index">{ index < 10 ? "0" + (index + 1) : index}</h1>
      <div>
        <div className="flex gap-2 items-center mb-2">
          <img src={profile_img} className="w-6 h-6 rounded-full" />
          <p>{fullname} @{username}</p>
          <p>{ getDay(publishedAt)}</p>
        </div>

        <h1 className="blog-title">{title}</h1>
      </div>
    </Link>
  )
}

export default MinimalBlogPost;