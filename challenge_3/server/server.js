const express = require('express')
const app = express()
const port = 3000

app.use(express.static('/Users/caijiaxin/Documents/Hack_Reactor/hrsf131-mini-apps-1/challenge_3/client'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})