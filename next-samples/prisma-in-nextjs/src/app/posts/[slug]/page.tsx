import prisma from "@/lib/db";

// import { unstable_cache as cache } from "next/cache";

// const getCachedPost = cache((slug: string) => {
//   return prisma.post.findUnique({
//     where: { slug },
//   });
// });

const PostDetail = async ({ params }: { params: { slug: string } }) => {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  });

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
};

export default PostDetail;
