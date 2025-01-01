"use server";

import { z } from "zod";
import { formSchema } from "./bbs-posts/create/page";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
export const postBBS = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });

  // server actions 側から redirect させる。
  revalidatePath("/");
  redirect("/");
};
