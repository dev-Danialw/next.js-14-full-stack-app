import Image from "next/image";

const blog = {
  id: 1,
  title: "The Art of Creativity",
  body: "Unlocking the door to creativity is a journey of self-discovery and expression. Embrace the power of imagination as you navigate through the vast landscape of artistic inspiration. From visual arts to written masterpieces, explore the techniques and stories that breathe life into creativity. Discover the profound impact of creativity on personal growth and the world around us, as we delve into the essence of artistic expression.",
  createdAt: new Date(),
  img: "https://picsum.photos/180/240?timestamp=1632767542",
  slug: "the-art-of-creativity",
};

const SingleBlogPage = async () => {
  return (
    <div className="flex gap-24">
      {blog.img && (
        <div className="flex-1 relative h-[calc(100vh-200px)]">
          <Image src={blog.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-[2] flex-col gap-12">
        <h1 className="text-6xl">{blog.title}</h1>
        <div className="flex gap-5">
          {blog && (
            <Image
              src="/avatar.png"
              alt="user_avatar"
              height={50}
              width={70}
              className="object-cover rounded-full"
            />
          )}
          <div className="flex flex-col gap-5">
            <span className="font-bold text-gray-500">Published</span>
            <span className="font-medium">
              {blog.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className="text-xl text-justify">{blog.body}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
