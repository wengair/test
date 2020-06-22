const express = require('express')
const next = require('next')
// var cors = require('cors')
// const app = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = 3000
const handle = app.getRequestHandler()
// const fetch = require('node-fetch');

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.prepare().then(() => {
  const server = express()

  // server.use(cors())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.get('/posts/page', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

// const content = fetch('http://wp:80/wp-json/wp/v2/posts')
//                   .then(res => res.json())
//                   .then(json => console.log(json))
//                   .catch(err => console.error(err));

