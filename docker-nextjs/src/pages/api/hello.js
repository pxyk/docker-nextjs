export default function handler(req, res) {
  const apiEndpoint = process.env.API_ENDPOINT;
  res.status(200).json({ name: 'John Doe' });
}

// const apiEndpoint = process.env.API_ENDPOINT || 'http://localhost:3000/api/hello';