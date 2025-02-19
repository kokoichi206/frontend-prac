import { createPost } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";

const Posts = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: "john@gmail.com",
    },
    include: {
      posts: true,
    },
  });

  const postsCount = await prisma.post.count();

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts({postsCount})</h1>

      <ul className="border-t border-b border-black/10 py-5 leading-3">
        {user?.posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <form action={createPost} className="flex flex-col gap-y-2 w-[300px]">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-2 py-1 rounded-sm"
        />
        <textarea
          name="content"
          rows={5}
          placeholder="content"
          className="px-2 py-1 rounded-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 py-3 text-white rounded-sm"
        >
          Create post
        </button>
      </form>
    </main>
  );
};

export default Posts;
