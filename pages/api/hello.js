// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const app = require('next');

export default (req, res) => {
    res.statusCode = 200
    res.json({ name: 'John Doe' })
}