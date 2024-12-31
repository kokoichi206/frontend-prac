import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
export async function GET(req: Request) {
  const allBBSPosts = await prisma.post.findMany();
  return NextResponse.json(allBBSPosts);
}
