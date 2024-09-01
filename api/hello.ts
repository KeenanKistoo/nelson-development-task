import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Get the 'data' field from the request body
  let { data = 'example' } = req.body; 
  let array = data.split('');
  
  // Return the data in a JSON response
  return res.json({
    message: array,
  });
}
