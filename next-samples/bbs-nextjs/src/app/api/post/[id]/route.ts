import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const bbsId = params.id;

  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsId),
    },
  });
  return NextResponse.json(bbsDetailData);
}
