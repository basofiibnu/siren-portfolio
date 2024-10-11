import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    message: 'Success',
    data: [
      { title: '해외 마케팅', icon: '/assets/iconmarketing.svg' },
      { title: '퍼블리셔', icon: '/assets/iconimage.svg' },
      { title: '캐드원(제도사)', icon: '/assets/iconbox.svg' },
      { title: '해외 세일즈', icon: '/assets/icontarget.svg' },
      { title: '해외 CS', icon: '/assets/iconcall.svg' },
    ],
  };
  res.status(200).json(data);
};

export default handler;
