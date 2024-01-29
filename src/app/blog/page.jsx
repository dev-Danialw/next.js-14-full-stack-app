import BlogCard from "@/components/blogCard/blogCard";

import { getBlogs } from "@/lib/data";

export const metadata = {
  title: "Blog Page",
  description: "Created by dev-Danialw",
};

const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-wrap gap-5">
      {blogs.map((blog) => (
        <div className="w-[30%]" key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
