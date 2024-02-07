import { getBlogs } from "@/lib/data";
import { deleteBlog } from "@/lib/actions";

import Image from "next/image";

const AdminPosts = async () => {
  const posts = await getBlogs();

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div
          className="mt-5 mb-0 flex items-center justify-between gap-5"
          key={post.id}
        >
          <div className="flex items-center gap-5">
            <Image src={post?.img} alt="" width={50} height={50} />
            <span className="">{post.title}</span>
          </div>
          <form action={deleteBlog}>
            <input type="hidden" name="id" value={post.id} />
            <button className="p-2 rounded border-none cursor-pointer bg-red-500 text-gray-200">
              Delete
            </button>
          </form>
        </div>
      ))}
    </>
  );
};

export default AdminPosts;
