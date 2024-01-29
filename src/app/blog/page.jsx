import BlogCard from "@/components/blogCard/blogCard";

import { getBlogs } from "@/lib/data";

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
