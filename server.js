const express = require('express')
const app = express()

app.get('/:input', (req, res) => {
    
  let responseJson = { result: req.params.input }
  const parsedInputInteger = parseInt(req.params.input)
  const divisibleByThree = parsedInputInteger % 3 == 0
  const divisibleByFive = parsedInputInteger % 5 == 0

  if (divisibleByThree || divisibleByFive) responseJson.result = ''
  if (divisibleByThree) responseJson.result += 'G'
  if (divisibleByFive) responseJson.result += 'N'

  return res.json(responseJson)
})

module.exports = app