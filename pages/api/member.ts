import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    message: 'Success',
    data: [
      {
        title: 'Abhishek Gupta',
        image: '/assets/avatar.svg',
        experience: '마케팅 · 2y+',
        flag: '/assets/flag.svg',
        skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        title: 'Abhishek Gupta',
        image: '/assets/avatar.svg',
        experience: '마케팅 · 2y+',
        flag: '/assets/flag.svg',
        skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        title: 'Abhishek Gupta',
        image: '/assets/avatar.svg',
        experience: '마케팅 · 2y+',
        flag: '/assets/flag.svg',
        skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        title: 'Abhishek Gupta',
        image: '/assets/avatar.svg',
        experience: '마케팅 · 2y+',
        flag: '/assets/flag.svg',
        skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        title: 'Abhishek Gupta',
        image: '/assets/avatar.svg',
        experience: '마케팅 · 2y+',
        flag: '/assets/flag.svg',
        skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
    ],
  };
  res.status(200).json(data);
};

export default handler;
