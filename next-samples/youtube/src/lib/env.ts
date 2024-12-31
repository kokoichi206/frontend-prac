import { z } from "zod";

export const APP_ENV = {
  LOCAL: "local",
  DEV: "development",
} as const;

export const appEnvSchema = z.nativeEnum(APP_ENV);
export type AppEnv = z.infer<typeof appEnvSchema>;

const envSchema = z.object({
  NEXT_PUBLIC_APP_ENV: appEnvSchema,
});

const parsedEnv = envSchema.parse(process.env);

export const env = parsedEnv;
