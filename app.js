const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // You might want to replace this with a logger since no-console is enabled
  console.log(`server started on port ${PORT}`)
})