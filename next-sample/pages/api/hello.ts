import type { NextApiRequest, NextApiResponse } from "next";

type HelloResponse = {
  message: string;
};

// /api/hello
export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  res.status(200).json({ message: "Hello World" });
};
