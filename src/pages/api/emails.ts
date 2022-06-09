import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg?: string
  data?: string[]
}
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email } = req.body;

  if (req.method === 'POST') {

    if (!email) {
      return res.status(400).json({ msg: 'Email is required' });
    }
    const findEmail = await prisma.email.findFirst({ where: { email } })
    if (findEmail?.email) {
      return res.status(400).json({ msg: 'Email already exists' });
    }

    await prisma.email.create({ data: { email: email, subbedAt: `${new Date().toJSON().slice(0, 10).replace(/-/g, '/')}` } })
    return res.status(200).json({ msg: 'Thanks for subscribing!' });

  } else if (req.method === 'GET') {

    const emails = await prisma.email.findMany();
    let mails = emails.map(x => `${x.email}`);
    return res.status(200).json({ data: mails });

  } else {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
}
