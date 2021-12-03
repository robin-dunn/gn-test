const express = require('express')
const app = express()
const port = 4000

app.get('/:input', (req, res) => {
  let responseJson = { result: '' }
  const parsedInputInteger = parseInt(req.params.input)
  const divisibleByThree = parsedInputInteger % 3 == 0
  const divisibleByFive = parsedInputInteger % 5 == 0

  if (divisibleByThree) responseJson.result += 'G'
  if (divisibleByFive) responseJson.result += 'N'

  res.send(responseJson)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})