import prisma from "@/lib/db";
import Link from "next/link";

const Posts = async () => {
  const posts = await prisma.post.findMany({
    // where: { published: true },
    orderBy: { createdAt: "desc" },
    // take: 10,
    // skip: 10,
  });

  const postsCount = await prisma.post.count();

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts({postsCount})</h1>

      <ul className="border-t border-b border-black/10 py-5 leading-3">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Posts;
