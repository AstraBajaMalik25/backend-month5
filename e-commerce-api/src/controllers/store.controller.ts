import type { Request, Response } from 'express'
import prisma from '../prisma'

export const createStore = async (
  req: Request & { user?: { id: number } },
  res: Response
) => {
  try {
    const { name, address } = req.body

    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

const store = await prisma.store.create({
  data: {
    name,
    address,
    user: {
      connect: { id: req.user.id },
    },
  },
})

    res.status(201).json(store)
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat store', error })
  }
}
