import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Get the 'data' field from the request body
  const { data = 'example' } = req.body; 

  // Return the data in a JSON response
  return res.json({
    message: `Hello ${data}!`,
  });
}
