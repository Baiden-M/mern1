const express = require('express')
const app = express()
const port = 3061

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.send('Baiden McElroy s73j573')
  res.send('https://github.com/Baiden-M/mern1.git')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})