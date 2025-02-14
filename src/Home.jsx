import { useState } from "react";
import blogData from "./data/blogs";
const Home = () => {
  const [blogs, setBlogs] = useState(blogData);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog_preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>
            {blog.body}{" "}
            <a href={`/blogs/${blog.id}`} className="read-more">
              Read more
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
