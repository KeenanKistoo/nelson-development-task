import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Get the 'data' field from the request body
  let { data = 'example' } = req.body; 

  //Split the input word into an array
  let array = data.split('');

  //OrdeR the array in alphabetical order
  let finalResponse = array.sort();

  
  // Return the data in a JSON response
  return res.json({
    word: finalResponse,
  });
}
