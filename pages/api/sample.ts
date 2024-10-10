import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = { message: 'Hello, world!' };
  res.status(200).json(data);
};

export default handler;
