const app = require('./server.js')
const { port } = require('./conifg')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})