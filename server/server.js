/**
 * This is a dead-simple mock server for demonstration purpose.
 */
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const comments = {}
let currentId = 0

app.use(cors({ origin: 'http://localhost:8000'}))

const jsonParser = bodyParser.json()

app.post('/blogs/:id/comments', jsonParser, (req, resp) => {
  const blogId = req.params.id
  let blogComments = comments[blogId] || []
  blogComments = [...blogComments, {...req.body, id: currentId++, create_at: new Date().toLocaleString()}]
  comments[blogId] = blogComments
  resp.json(blogComments)
})

app.get('/blogs/:id/comments', (req, resp) => {
  const blogId = req.params.id
  const blogsComments = comments[blogId] || []
  resp.json(blogsComments)
})

app.listen(8080, () => {
  console.log('demo express server is up at 8080')
})
