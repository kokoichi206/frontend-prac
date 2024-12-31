import { PrismaClient } from "@prisma/client";
import { env } from "./env";

export const prisma = new PrismaClient({
  log:
    env.NEXT_PUBLIC_APP_ENV === "local"
      ? ["info", "query", "warn", "error"]
      : ["warn", "error"],
});
