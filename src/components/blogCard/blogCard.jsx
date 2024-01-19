import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        {blog.img && (
          <div className="w-[90%] h-[400px] relative">
            <Image src={blog.img} alt="" fill className="object-cover" />
          </div>
        )}
        <span className="text-xs rotate-[270deg] m-auto text-center w-24">
          {blog.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className="w-[90%] h-[250px] relative">
        <h1 className="w-[90%] text-2xl mb-5 line-clamp-2">{blog.title}</h1>
        <p className="w-[90%] mb-5 font-light text-gray-400 line-clamp-4">
          {blog.body}
        </p>
        <Link
          className="underline underline-offset-4 hover:text-blue-500"
          href={`/blog/${blog.slug}`}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
