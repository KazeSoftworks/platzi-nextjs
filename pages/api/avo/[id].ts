import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next'

const allAvos = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  const db = new DB()

  const { id } = request.query

  const entry = await db.getById(id as string)

  // response.statusCode = 200
  // response.setHeader('Content-type', 'application/json')
  // response.end(JSON.stringify({ data: entry }))

  response.status(200).json(entry)
}

export default allAvos
