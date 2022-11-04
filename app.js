const express = require('express')
const app = express()
const port = 5061

app.get('/', (req, res) => {
  res.write('Hello World!')
  res.write('Baiden McElroy s73j573')
  res.write('https://github.com/Baiden-M/mern1.git')
  res.end()
})
app.get('/', (req, res) => {
  
})
app.get('/', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})