import Image from "next/image";

import { getBlog } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { id } = params;

  const blog = await getBlog(id);

  return {
    title: blog.title,
    description: blog.desc,
  };
};

const SingleBlogPage = async ({ params }) => {
  const { id } = params;

  const blog = await getBlog(id);

  return (
    <div className="flex gap-24">
      {blog.img && (
        <div className="flex-1 relative h-[calc(100vh-200px)]">
          <Image src={blog.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-[2] flex-col gap-12">
        <h1 className="text-6xl">{blog.title}</h1>
        <div className="flex items-center gap-8">
          {blog && (
            <Image
              src="/avatar.png"
              alt="user_avatar"
              height={50}
              width={70}
              className="object-cover rounded-full"
            />
          )}
          <div className="flex flex-col">
            <span className="font-bold text-gray-500">Author</span>
            <span className="font-medium">dev-Danialw</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-500">Published</span>
            <span className="font-medium">
              {blog.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className="text-xl text-justify">{blog.desc}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
