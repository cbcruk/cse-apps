import type { Handler } from 'vite-plugin-mix'
import search from './src/api/search'

export const handler: Handler = async (req, res, next) => {
  if (req.path === '/api/search') {
    const data = await search(req.query)

    return res.end(data)
  }

  next()
}
