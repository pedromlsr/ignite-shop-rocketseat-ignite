import { NextApiRequest, NextApiResponse } from "next";

export default function handler(reg: NextApiRequest, res: NextApiResponse) {
  return res.json({message: 'Hello World'})
}